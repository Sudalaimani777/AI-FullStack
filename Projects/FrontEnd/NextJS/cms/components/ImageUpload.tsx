"use client";

import { storage } from "@/static/firebase.config";
import { ImageUploadProps } from "@/types/types";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { ChangeEvent, useState } from "react";



const ImageUpload = ({ returnImage }: ImageUploadProps) => {

    const [imageFile, setImageFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [imageURL, setImageURL] = useState<string | null>(null);

    const uploadImageToFirebase = async (image: File) => {
        setLoading(true);
        const storageRef = ref(storage, `images/${image.name}`)

        try {
            await uploadBytes(storageRef, image);
            const url = await getDownloadURL(storageRef);
            setImageURL(url);
            returnImage(url);
            console.log(`Image uploaded successfully in the firebase`);
        } catch (error) {
            console.error(`Something went wrong while uploading the image in the firebase ${error}`)
        } finally {
            setLoading(false);
        }
    }

    const handleImageFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
            uploadImageToFirebase(file);
            return;
        }
    }

    return (
        <>
            <div className="mt-5 mb-5">

                <label htmlFor="upload">
                    <span className="bg-gray-500/10 border border-gray-500 border-dashed p-3 rounded">Upload Cover Image</span>
                    <input type="file"
                        onChange={handleImageFileChange}
                    />
                </label>
            </div>
        </>
    )
}

export default ImageUpload;