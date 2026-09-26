// client/src/components/product-details/ProductPairings.tsx
import React from "react";
import type { Product } from "../../types";

export interface PairingItem {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  imageUrl: string;
}

const PAIRINGS: PairingItem[] = [
  {
    id: "pair-1",
    name: "Forma Raw Stoneware Urn",
    category: "Kyoto Ceramic Atelier",
    description: "Hand-thrown coarse clay vessel with wood-fired salt glaze texture.",
    price: 165.0,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCEzkZF0_2fUlHUBbx0WBIH9xuoKJ6XaUMqdvHwARNxcXWTFIdUjFlUq4vJIdh4iOp4puvofghqAUDyc-ortueGay8jaIYaI2B_y80eB3KIi8eJsmBDDpHzDpaQ0VQsfM6kK7OXfZXwVft7Y4EFHWA4wfZ8TrfmuGgdUxZWaB337lvTEe3MmUcms-ZZwCqEyfxrIIgd2Yp94MqoAGzDnThyQ9sk93Tw30Mo8Tzh2laowlBlAKpRh4V-",
  },
  {
    id: "pair-2",
    name: "Koto Low Oak Lounge Chair",
    category: "Nordic Woodcraft",
    description: "Solid certified white oak frame upholstered in Belgian unbleached bouclé.",
    price: 890.0,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBhkTj8RrYSqOqP6-UGhSHGu-GlvCdUM01QhCiveMWmXwWkOGVt6dxM_j6CWyunHibbizvEksr1qo1AyLPl5zPdaqNqvlGtoLOonNcw1zBKAnktQaUG6yyxLee-J_IcoRVDYrj4xuBq7nFXiJkj7g_pi_y8wDOJviOwtH3VTYk8vchoLqSfCHYaFg04_xvTdOdHmcphG9mew87twwx1YkFxT5wsDJOzKau4yYjOl0tk_x-d3QPFN36l",
  },
  {
    id: "pair-3",
    name: "Cast Bronze Hinoki Burner",
    category: "Ritual & Scent",
    description: "Heavy cast patinated bronze vessel with 50 aged cypress incense batons.",
    price: 95.0,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCW31zoJu5PT3iki7nX0jSJz_eSSKJC2WFTt3sgdS5VGPtDRr0zEpbVLgw0uD8Wl-hwZf8h3kYn7_gvm20sE7QokSUT3h3nOpE329z-KuRXdTgBTQHpgoQLRwwypOvfOFhmgT045GCSZ6g_SHFuCLbbQQD-xW8PsKAYFhQLWLAeq6kSn1T56oyptEaKYWbUDDBv-PhNPU3KVMtcE6j9Kk6aSNKk2GArH1MQYRQ0Owpm5w5PDWqk7qg-",
  },
];

interface ProductPairingsProps {
  onQuickPair: (item: Product) => void;
}

export const ProductPairings: React.FC<ProductPairingsProps> = ({ onQuickPair }) => {
  const handleAdd = (item: PairingItem) => {
    const productLike: Product = {
      _id: item.id,
      product_name: item.name,
      product_description: item.description,
      product_category: item.category,
      product_image: item.imageUrl,
      product_price: item.price.toString(),
      product_stock: "20",
    };
    onQuickPair(productLike);
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto px-gutter py-space-xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <span className="font-label-eyebrow text-label-eyebrow uppercase text-mineral-gray">
            Curated Spatial Pairings
          </span>
          <h3 className="font-headline-md text-headline-md text-ink-charcoal mt-1">
            Harmonious Architectural Objects
          </h3>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
          Objects hand-selected by our senior design directors to complement the tonal frequencies of
          washi illumination.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PAIRINGS.map((item) => (
          <div
            key={item.id}
            className="rounded-xl bg-surface-card shadow-xs p-4 flex flex-col justify-between group border border-border-card/40"
          >
            <div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-surface-container-low mb-4">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="font-label-eyebrow text-label-eyebrow uppercase text-mineral-gray">
                {item.category}
              </span>
              <h4 className="font-title-card text-title-card text-ink-charcoal mt-1">
                {item.name}
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                {item.description}
              </p>
            </div>

            <div className="pt-4 flex items-center justify-between mt-3 border-t border-border-card/30">
              <span className="font-label-input text-[16px] font-semibold text-ink-charcoal">
                ${item.price.toFixed(2)}
              </span>
              <button
                type="button"
                onClick={() => handleAdd(item)}
                className="px-4 py-2 rounded-lg bg-surface-container hover:bg-ink-charcoal hover:text-on-primary font-label-input text-label-input text-ink-charcoal transition-all flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
              >
                <span className="material-symbols-outlined text-[16px]">add</span>
                <span>Quick Pair</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductPairings;
