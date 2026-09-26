// client/src/components/order-confirmation/confirmationPresets.ts
import type { Product } from "../../types";

export interface PostCheckoutItem {
  id: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
}

export const POST_CHECKOUT_RECOMMENDATIONS: PostCheckoutItem[] = [
  {
    id: "rec-sumi-burner",
    name: "Sumi Cast Iron Incense Burner",
    category: "Aroma & Ritual",
    price: 85.0,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAp6l_9OYRFwSDAm3RWgun-Y4G4sMzT6BHDrt2ECiL_OX9Ye2GovMb4qcRlLlD4Qd0XGyANeX4jRGH6UHHAgvXiFA7ne3RgegDAdE89AEa8jALkO4NgZyncXhBqRqaOs8F26UA41Z7kjHzMF1t_k2N4b396NlHISKwEKYauUhBPso-mJxGHL0B3OiNRW-mium_QD-UGBPAW0iutAwlZtAF0yNG68YsI8gFDWV0hh2DlJJBdpFpYziCF",
  },
  {
    id: "rec-komorebi-cups",
    name: "Komorebi Ceramic Tasting Cups (Pair)",
    category: "Tableware",
    price: 64.0,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD8PzgvxdGXvHTXEchsYjOnt60bkSKuBvrBWIIYauUmzBgbe6_oPIFAzYPRk3l3kbG_U8qqS83qcF-JnqmAJ6is4JhHlbtDK7no_AVO97vuXSMGxYYdLAeAxZB6mSci9bskUVDoh29UviDPnEqix8xXIT1UgWgE8uMm0mDnSqklSzfysWZjyIQpECs3fuTgjgf1BQc9NsNkEBgP6_r9sAOQH4E16yOPdGmsjgnkgfgk7OCns_sNgM62",
  },
  {
    id: "rec-kyoto-monograph",
    name: "Light & Structure: The Kyoto Monograph",
    category: "Print & Monograph",
    price: 95.0,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDGy2_BRphaFbfjPVspfhNpx4yYDYCW2Xes9sSVrPYCgFDlbFKHZyZXyWX-fs0HLJ7kHHjrEB10MU7oTGMKUlIaMAcqHj3rFvCOV2FkN08llq5YlS5KhnOmoAMAlKqXoe9IauhUApseMd1kbMljVd_gs1hBT0NzTAd3aZpaio1dAt2CJlalKb6rMtQ3yyjuiN-pLuxfggyVh-bhwl_eXyZkvvhRBxpetXFgtJ9nKT1_63Tn7BjueJvc",
  },
  {
    id: "rec-oak-obelisk",
    name: "Sculpted Oak Candle Obelisk",
    category: "Illumination",
    price: 110.0,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBTi72ZOD75RJAHHpiSB7H02Ldf6owqbMC5gtdFUr1MX-2ptS9aPHbAw7eyYHUg6X84kbE1DJhJZ0SiEwEW6sNkqIP3kvsVf_HmWyzFTvD23zbBNJFi3r8oHojvdxe4EqT5SynJwIhhsXU-Kb5Dft2dPl5vohTwLZhqBpXtaaEgJftRtOQQ95lmOUY6VReEXfP86XcPKN07qfiAkKzbnnTjkMK89emaZNcxSt2B8InUVq3chFeKJeiY",
  },
];

export const FALLBACK_ORDER_ITEMS: { product: Product; quantity: number }[] = [
  {
    product: {
      _id: "akari-pendant-0041",
      product_name: "Akari Ovoid Washi Pendant",
      product_description: "Med 65cm · Mulberry Bark",
      product_category: "Lighting Atelier",
      product_image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA3_3cyqxBp1KVZE7AJgZD0rkC6Ek3tf_cYLoLJp5wp8Z7yspudjM2_Rni1n2PmC1a4u8I30_GL7ttHV9ZEWDTSUks6zVnwEU7o5Y-G8_Uni94gJ5EBkDw3zjG33UulB5zh-7R7sx8GFdIGQxuGePC74LnnVB78-ZNaIeZDdhj_JpBGjE7LfJmLDoX0sU0_I9kpPYuEhNHGWvTSu7VEGYinzQKlrKdYhmAtr2nTQGt9_9frg16Q_vtX",
      product_price: "340.00",
      product_stock: "5",
    },
    quantity: 1,
  },
  {
    product: {
      _id: "forma-urn-0108",
      product_name: "Forma Raw Stoneware Urn",
      product_description: "Salt Wood-Fired · 32cm",
      product_category: "Ceramics",
      product_image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAog-tTGDe5Ci2Ja_bSs-9bE7E94dPXs9Z3h29mj19GEpGutXZxvFWo2_1ff7jBgofvFsC14TMZmE-zPU1mPnMurd4eed4Xc0rU8rv0Z5B8pG27tjUL5Xt8_eLadEOsZsRMMtIrNZL9hDpMY749_azDkuHfJugjZxpy_xML9IyQa6YUCKs-vYhWT8FPzR6NqwfRLEGAFhHBs--3NQmOzJgYSwUpLdSyBcWKM_KvMskatnAuUqbDjiw8",
      product_price: "165.00",
      product_stock: "8",
    },
    quantity: 1,
  },
  {
    product: {
      _id: "flax-throw-0082",
      product_name: "Flax Woven Belgian Throw",
      product_description: "Natural Oat · 140x200cm",
      product_category: "Fine Textiles",
      product_image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCJamACJWJT1WVHKP-lIh1i0yHejGfhSL2TBn1hv95-dvAxR6sj-zwVGA_ov3-iegdeTtu9X88EFLrK0UpYN7EgXNF9-rEoUjZ84LwiVFzoPXiyYtT2CWh8D28wreeM6XNojaGdtrUQWnSyyNvrvaLOlgR-hzEmExBjxmKeXnekWFJCuwAD0OZ3UdvVTeu5t_yhEFytWPrwLB5aOwksK75jWB59h1rVrMhxGSxzFncS6mQoTzKmscaa",
      product_price: "195.00",
      product_stock: "12",
    },
    quantity: 1,
  },
];
