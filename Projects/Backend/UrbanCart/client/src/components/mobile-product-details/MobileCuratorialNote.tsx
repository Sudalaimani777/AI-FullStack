// client/src/components/mobile-product-details/MobileCuratorialNote.tsx
import React from "react";

interface MobileCuratorialNoteProps {
  eyebrow?: string;
  text: string;
}

export const MobileCuratorialNote: React.FC<MobileCuratorialNoteProps> = ({
  eyebrow = "Curatorial Provenance",
  text,
}) => {
  return (
    <section className="px-margin-mobile pt-4 flex flex-col gap-1.5">
      <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-wider text-mineral-gray font-medium">
        {eyebrow}
      </span>
      <p className="font-sans text-xs text-on-surface-variant leading-relaxed text-justify">
        {text}
      </p>
    </section>
  );
};

export default MobileCuratorialNote;
