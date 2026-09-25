// client/src/components/admin/products/ImageDropzone.tsx
import React, { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../../config/firebase";
import { FileDropArea, UrlFetchArea } from "../index";

interface ImageDropzoneProps {
  value: string;
  onChange: (url: string) => void;
  error?: string;
}

const ImageDropzone: React.FC<ImageDropzoneProps> = ({
  value,
  onChange,
  error,
}) => {
  const [activeTab, setActiveTab] = useState<"upload" | "url">("upload");
  const [inputUrl, setInputUrl] = useState<string>("");
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [fileName, setFileName] = useState<string>("uploaded_asset.webp");
  const [fileSize, setFileSize] = useState<string>("2.4 MB");
  const [uploadError, setUploadError] = useState<string | null>(null);

  // 1. Handle File Upload to Firebase Storage
  const handleFileUpload = (file: File) => {
    setUploadError(null);

    // Validate type & size (max 5MB)
    if (!file.type.startsWith("image/")) {
      setUploadError("Please upload a valid image file (PNG, JPG, WEBP).");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setUploadError("Image size must be less than 5MB.");
      return;
    }

    setFileName(file.name);
    setFileSize(`${(file.size / (1024 * 1024)).toFixed(1)} MB`);

    const uniqueFileName = `products/${Date.now()}-${file.name.replace(/\s+/g, "_")}`;
    const storageRef = ref(storage, uniqueFileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setUploadProgress(progress);
      },
      (err) => {
        console.error("Firebase upload error:", err);
        setUploadError("Failed to upload image. Please verify Firebase Storage rules or use direct URL.");
        setUploadProgress(null);
      },
      async () => {
        const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
        onChange(downloadUrl);
        setUploadProgress(null);
      }
    );
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleApplyUrl = () => {
    if (!inputUrl.trim()) return;
    try {
      new URL(inputUrl.trim());
      onChange(inputUrl.trim());
      setFileName(inputUrl.trim().split("/").pop() || "cdn_asset.jpg");
      setInputUrl("");
      setUploadError(null);
    } catch {
      setUploadError("Please enter a valid URL (e.g. https://images.unsplash.com/...)");
    }
  };

  return (
    <div className="space-y-4">
      {/* Sub-tab Switcher: Upload vs Web URL */}
      <div className="flex items-center justify-between p-1 rounded-lg bg-surface-container-low">
        <div className="flex items-center gap-1 w-full">
          <button
            type="button"
            onClick={() => {
              setActiveTab("upload");
              setUploadError(null);
            }}
            className={`flex-1 py-1.5 rounded font-label-input text-label-input flex items-center justify-center gap-1.5 transition-all ${activeTab === "upload"
                ? "bg-surface-card text-ink-charcoal shadow-sm font-semibold"
                : "text-mineral-gray hover:text-ink-charcoal"
              }`}
          >
            <span className="material-symbols-outlined text-sm">cloud_upload</span>
            <span>Upload File</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab("url");
              setUploadError(null);
            }}
            className={`flex-1 py-1.5 rounded font-label-input text-label-input flex items-center justify-center gap-1.5 transition-all ${activeTab === "url"
                ? "bg-surface-card text-ink-charcoal shadow-sm font-semibold"
                : "text-mineral-gray hover:text-ink-charcoal"
              }`}
          >
            <span className="material-symbols-outlined text-sm">link</span>
            <span>Paste Web URL</span>
          </button>
        </div>
      </div>

      {/* Mode 1: File Drop Area */}
      {activeTab === "upload" && (
        <FileDropArea
          value={value}
          isDragging={isDragging}
          uploadProgress={uploadProgress}
          fileName={fileName}
          fileSize={fileSize}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onFileSelect={handleFileUpload}
          onRemove={() => onChange("")}
          onCancelUpload={() => setUploadProgress(null)}
        />
      )}

      {/* Mode 2: Web URL Area */}
      {activeTab === "url" && (
        <UrlFetchArea
          inputUrl={inputUrl}
          onInputChange={setInputUrl}
          onApply={handleApplyUrl}
          value={value}
          fileName={fileName}
          onRemove={() => onChange("")}
        />
      )}

      {/* Error Feedback */}
      {(uploadError || error) && (
        <p className="font-label-micro text-label-micro text-status-peach-text flex items-center gap-1 mt-1">
          <span className="material-symbols-outlined text-sm">error</span>
          <span>{uploadError || error}</span>
        </p>
      )}
    </div>
  );
};

export default ImageDropzone;