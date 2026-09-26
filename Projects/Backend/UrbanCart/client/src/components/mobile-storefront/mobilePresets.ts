// client/src/components/mobile-storefront/mobilePresets.ts
import type { Product } from "../../types";

export interface MobileCatalogProduct extends Product {
  badge?: string;
  subtitle?: string;
}

export const STITCH_MOBILE_PRODUCTS: MobileCatalogProduct[] = [
  {
    _id: "prod-akari-ovoid",
    product_name: "Akari Ovoid Pendant",
    product_description: "Washi Paper & Bamboo",
    subtitle: "Washi Paper & Bamboo",
    product_category: "Architectural Lighting",
    product_image:
      "https://lh3.googleusercontent.com/aida/AEtjO1UOh5_bSXPjUyTZ370vE3i_1R44pIGYjwit7Le39ibhV42xpNlkrXdVRwq8dW9RAu5EQNgc5rAEH3c4jhNePj0LF8TKoPtms0Xum9Ok8uTXrtheAxsfbUGwOF-8GN7FTqB59fE-GAVGAE0cz6FcfuYrQXJvfnWs7nmwwhsjY9CXSvO4LqolaOTduJDnlj5cxYBWf23Tz3aGvyqIOxLmgAlPmRY36ufm-hqST817UqasCqXM_OQuP-ZyEnM",
    product_price: "340.00",
    product_stock: "14",
    badge: "Limited 14",
  },
  {
    _id: "prod-forma-urn",
    product_name: "Forma Raw Stoneware Urn",
    product_description: "Hand-thrown Sand Glaze",
    subtitle: "Hand-thrown Sand Glaze",
    product_category: "Ceramics & Homeware",
    product_image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAOSG2-pfoprQgcqwxMAoNCBxY8F3DMsSwoYzyBx1bv8fPaXgTHgjhcCcBnQvZzlQxNxKHU-Nuk8tGRoJVESVIGZkBKeTSVPX_wLtAWsX0RSMtsBNUT7K1MksH1XZvWWNGRuBZ5tpMwjhqmKAwl0pszw17c3PBw5hnmIPGIoyD3rXU9UfKVdcWl3C-xzR4_tJUAESQfClwsuH0Qx2gqab0zNYeHt-zJkbWshNta7q_sLSaun9j7UIEG",
    product_price: "165.00",
    product_stock: "18",
  },
  {
    _id: "prod-koto-chair",
    product_name: "Koto Lounge Chair",
    product_description: "Solid White Oak & Cane",
    subtitle: "Solid White Oak & Cane",
    product_category: "Furniture & Seating",
    product_image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD6s13ofDwxQMZtFBrlr-UHs2faMHB9-PSFQKV-rF71LM-JjQ8vELLYIxIiIPP6kd2Rt5wc6lU1FnVMxfFuIIGXktbMArHSUuBc5vnDg--LFw3RLe1K5arisbo4688n_hrM9LBQxvkIwnf4lZZDUkRdqTejB3CFnx4SOZtTqjhH47UtvWpFpOk18D326vHdNFW6vodSPicWP1cR84tsKhCC8wOQ498uwTvr4TFT4IVxxLhHpoBosT9T",
    product_price: "890.00",
    product_stock: "5",
    badge: "Made to Order",
  },
  {
    _id: "prod-sona-hifi",
    product_name: "Sona Monolithic Hi-Fi",
    product_description: "Cast Mineral & Bronze",
    subtitle: "Cast Mineral & Bronze",
    product_category: "Audio & Tech",
    product_image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBnpYavNXUqOjUu10w--OFux0CZ4As9qzRY21fZU3VB3Kz88vCQfXo1YaW9DMtTXeICvfxiiR8z7GhS51EE-qsF0gNaBwjsy3BJlCQK6PR7jaFTUfr0kA5C5eH4kzNw5-sAg_UbfL7-0W8faRpNLwoTZ0mGJkMaFTuvFtLvjKWCqGS_E-Vxlfrsw12lkYE4Q-LL9LVQ7vXorGNlVk8D8DrD7HfkwvyYlpmaaR49Vp-3QPxGzwVnltjz",
    product_price: "520.00",
    product_stock: "12",
  },
  {
    _id: "prod-flax-throw",
    product_name: "Flax Belgian Throw",
    product_description: "100% Washed Linen",
    subtitle: "100% Washed Linen",
    product_category: "Fine Textiles",
    product_image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB4VKBmSdypurhzHtSA1c1AqPk4Brp9OB-AmwAuddD8-1WS0tU-AqzfynqFOsx9kRNVV84B3VEws6IvFbErXgykni0zQZMYfGypXzzoJHLWYhx_5F8KL9KeFLW40snUCHD2kDlxMvlHzX6wJErFb556wLi0cNfNcmqy6AC9sbSAz4QJVlBqu54khSr1f_nxNIEGltt6pXRedK2Qw6I7faoctDGS7dqZl5sWKC2CfjU_dorv33Mfga3E",
    product_price: "195.00",
    product_stock: "25",
  },
  {
    _id: "prod-aero-pourover",
    product_name: "Aero Pour-Over Set",
    product_description: "Matte Terracotta & Glass",
    subtitle: "Matte Terracotta & Glass",
    product_category: "Ceramics & Homeware",
    product_image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCSE7TYTNI_7ulSgdcHKZreYG5godz4GI-fSCPhat3jj-blTaw7Dx2sm-_E8ml0exuH7R8tePoNxe78Nj81Jv3H5vJaNu8qlC7RI7Qc4dzTowyZ1dUZR-i4jxd19DvGGnFEB4SOz1OCWJ9RIT1qbPhCZAlHy-qFT0_FSCdeFgOeLcknnaQSVIJUV_ISe7Biuv0doodTxmtDZYy9qdTJP9wAc8yU0nQIPExTvlPBs52WgOVdLDe_lG_F",
    product_price: "110.00",
    product_stock: "30",
  },
];
