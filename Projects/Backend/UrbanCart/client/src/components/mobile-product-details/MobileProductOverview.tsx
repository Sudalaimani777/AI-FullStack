// client/src/components/mobile-product-details/MobileProductOverview.tsx
import React from "react";
import MobileProductTitleRating from "./MobileProductTitleRating";
import MobilePricingTermsCard from "./MobilePricingTermsCard";
import MobileCuratorialNote from "./MobileCuratorialNote";

interface MobileProductOverviewProps {
  name: string;
  subtitle: string;
  sku?: string;
  category?: string;
  price: number;
  stockStatus?: string;
  curatorialText: string;
}

export const MobileProductOverview: React.FC<MobileProductOverviewProps> = ({
  name,
  subtitle,
  sku,
  category,
  price,
  stockStatus,
  curatorialText,
}) => {
  return (
    <>
      {/* Title, Category & Patron Rating */}
      <MobileProductTitleRating
        name={name}
        subtitle={subtitle}
        sku={sku}
        category={category}
      />

      {/* Pricing & Terms Card */}
      <MobilePricingTermsCard price={price} stockStatus={stockStatus} />

      {/* Curatorial Provenance */}
      <MobileCuratorialNote text={curatorialText} />
    </>
  );
};

export default MobileProductOverview;
