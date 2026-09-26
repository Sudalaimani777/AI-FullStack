// client/src/components/mobile-product-details/productPresets.ts

export interface MobileProductGalleryItem {
  id: string;
  url: string;
  fallbackUrl: string;
  alt: string;
  label: string;
}

export interface DimensionOption {
  id: string;
  name: string;
  dimensions: string;
  priceOffset: number;
}

export interface CordOption {
  id: string;
  name: string;
  colorHex: string;
}

export interface SpatialPairingItem {
  id: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  fallbackUrl: string;
}

export const AKARI_MOBILE_PRESET = {
  id: "akari-ovoid-washi",
  sku: "UC-LGT-0041",
  name: "Akari Ovoid Washi Pendant",
  subtitle: "Japanese Mulberry Washi & Hand-Bent Bamboo Ribbing",
  category: "Architectural Lighting • Atelier Reserve",
  basePrice: 340.0,
  currency: "USD",
  stockStatus: "In Atelier Stock",
  rating: 4.9,
  reviewsCount: 48,
  curatorialText:
    "Meticulously crafted by master artisans in Gifu, Japan using traditional washi paper derived from the fibrous inner bark of the mulberry tree. The ovoid form creates an ethereal, shadowless diffusion that softens raw architectural volumes, exposed concrete, and brushed limewashed interiors with serene warmth.",
  
  gallery: [
    {
      id: "img-main",
      url: "https://lh3.googleusercontent.com/aida/AEtjO1UOh5_bSXPjUyTZ370vE3i_1R44pIGYjwit7Le39ibhV42xpNlkrXdVRwq8dW9RAu5EQNgc5rAEH3c4jhNePj0LF8TKoPtms0Xum9Ok8uTXrtheAxsfbUGwOF-8GN7FTqB59fE-GAVGAE0cz6FcfuYrQXJvfnWs7nmwwhsjY9CXSvO4LqolaOTduJDnlj5cxYBWf23Tz3aGvyqIOxLmgAlPmRY36ufm-hqST817UqasCqXM_OQuP-ZyEnM",
      fallbackUrl: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
      alt: "Akari Ovoid Washi Pendant illuminated",
      label: "Ovoid Silhouette",
    },
    {
      id: "img-loft",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCARiyunFuS2YPJWqRZh921XuXbF-aLA3uORB-EPH8q7j0v_gDEvwchT3FF_6E5qZrjqBket4ocaF7TL7BELdq-gew00zNju3k_FNWSzTFte9TUje62OqdlMYbUxtmlhNp4l2NV14Y-yqf-9aunx6k-WmhFb5SWcgCxVKuZFkhoaNv3R8XmPuaGUpqZpBN7-NsOtu17ba6Y7qbyhG7Nayt_GZzqUe9FuBUp_wSAFzDpTG3VueaFt5ye",
      fallbackUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      alt: "Architectural Japandi loft installation",
      label: "Spatial Context",
    },
    {
      id: "img-fiber",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuC26T0NKlyjmtRE3a_lrg8pvZawHz9YZbwhzso4HCnb-tKu39Op_k5_fKcbaSs2zC1lW__oV8kMcA1H5_ZiZ8La7S6SBZG4daDfv05uhnDT90lHhNamP3r2dKEcCa2fZWhWZy9lc0UDLBNeFLV6YI85Zy2M5NFi_gWsTiBaCXHP9vcD-NNCYKLWaYlhWUUkQxowPsRHkI5hAeGIhxlj9OLvxWcRz42c5TZ97NhbANwF2Oz6FTsalyv4",
      fallbackUrl: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&w=800&q=80",
      alt: "Mulberry bark washi fibrous texture",
      label: "Washi Texture",
    },
    {
      id: "img-canopy",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDd2qRIOGRGQcB9PzxmJpjPiWxDyEGvqTJUHcJilHCRqoyM74MZtHB1-uTW9H4n9ovKMho3OjB68Q6uC_0ZkzODi7J815gAI-X4LSzM_M767vdjxNWlhmWpXNtQg4-M3GR1TfrYyAcfdIGMZDG0V5EEN40O2fZb2fgcv41ZncZ3Yb-rah97GwXx-kCZjtzTgkd02d-XYNFrLPMpJLqbQQGea2EwmGvo1or7ukIjK7i1pr32uW0_qCNN",
      fallbackUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
      alt: "Solid turned brass ceiling rose canopy",
      label: "Brass Canopy",
    },
  ],

  dimensions: [
    { id: "sm", name: "Small", dimensions: "Ø 45 cm | 18\"", priceOffset: -45 },
    { id: "md", name: "Medium", dimensions: "Ø 65 cm | 26\"", priceOffset: 0 },
    { id: "lg", name: "Grand", dimensions: "Ø 85 cm | 34\"", priceOffset: 80 },
  ],

  cords: [
    { id: "linen", name: "Natural Twisted Linen", colorHex: "#D4C3A3" },
    { id: "brass", name: "Turned Aged Brass", colorHex: "#C2A367" },
    { id: "charcoal", name: "Matte Raven Charcoal", colorHex: "#242320" },
  ],

  specs: [
    { label: "Shade Dimensions", value: "Ø 65 cm × H 58 cm" },
    { label: "Suspension Reach", value: "Max 250 cm field adjustable" },
    { label: "Lamp Fitting", value: "E26 Base 12W LED included" },
    { label: "Color Temperature", value: "2700K Soft Amber (95+ CRI)" },
    { label: "Mains Compatibility", value: "110V - 240V Universal" },
  ],

  atmosphereStudy: {
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjOPZ-6KAVeLql9nzYSD42Wl3xrkKLWZpFCh_-K-v441DwV8D2BvM45UlRc594dbWk_6DXR1tNCWZODFK4WiRHUVH_TMU2MHxpvS-F1Aar2UkVVpRUojZKikPCEy7zFUhug2cO8vWwSxV4-1eFyh6bF8elVeqNW6hfjgiXtE7Vx60u9yEZLFNzJjFC7JV57QTHt_aC8Ski4n9cDTrnoRNaIRfRlWJdGgS01b9GqSJXsCRnCvFk1UVB",
    fallbackUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    eyebrow: "ATMOSPHERE STUDY",
    title: "Illumination as Architectural Volume",
    stats: [
      { value: "95+", label: "CRI FIDELITY" },
      { value: "100%", label: "MULBERRY BARK" },
      { value: "18 hrs", label: "HAND-WOUND" },
    ],
  },

  pairings: [
    {
      id: "pair-1",
      name: "Forma Raw Stoneware Urn",
      category: "Vase",
      price: 165.0,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCzrBMr6iu5we7l7uKyjg0qAI83YuzppnGABAZgIbgx6EZht9CdCaTVeo0_HRMes2WZ9hnB5zLBNgWWQur0iXt71OZuY06dOnJTzXC4iq8tVaikNnbt8XHOqgPGOR4iLpHAUe8i7BpwzNdFk-NX3DzWrWlg0K3o517aBIH3b8DvsObmRqrBRgRlOBYpQfkWn5s96USwqbyr5zWIafWhWtADvXNs-TgeE2RCIxawb6jk63RnK8yWjdO",
      fallbackUrl: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "pair-2",
      name: "Koto Low Oak Lounge",
      category: "Seating",
      price: 890.0,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUkcDKk43Wqr3ZHNWq6SUPdDfpj17NBI9GLpi2GJMDIFxogjpAhnqc3ehShsY1uhUc8LspC4AEucXoohcfgunlujEGc6_ChvHI1_CP8W6BDoF2OwLaMXpgrNESLEyTX55lTcG8LcrRNP_kP3l3RHDvxxdsKHXIpNSIwQxfP61IA19E5abf6eqFPT6v2JOnZJ4lx2TiewVlZs75G0UQeZMBtEHhKzDw9yyCBz9Ts1U6aRU4gpT2kYFb",
      fallbackUrl: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "pair-3",
      name: "Cast Bronze Hinoki Burner",
      category: "Ritual",
      price: 95.0,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuARgV5K45mHUHQ_GcBJ47ZvkjsXMrfVRzM81LyvfxvAt0lt73FmWsf0oPNNbmpcHD9JZW9MZvr526zFQJgEKkSOwTtf7xIHe54DAD51TCbqXfNyOBfPcwDhPwdO_mQUSinltpd79SVkLPTyOUoI6_XHWJeehNJYCyajDLZe5JwZzpP7fYCnlgU4JuFpoM4torgCxMj2OP8-B6xNp9tHkWgUm5O2-_Up8kaY6kld5-0228ZpLUwyjDp6",
      fallbackUrl: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=600&q=80",
    },
  ],
};
