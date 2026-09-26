// client/src/components/cart/cartPresets.ts
import type { Product } from "../../types";

export interface RecommendedObject {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  imageUrl: string;
  badge?: string;
  badgeStyle?: "peach" | "white";
}

export const RECOMMENDED_OBJECTS: RecommendedObject[] = [
  {
    id: "rec-hinoki-burner",
    name: "Hinoki Cast Vessel Burner",
    category: "Aromatherapy • Kyoto",
    description: "Smoked Cast Iron with Brass Pin",
    price: 95.0,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCrGYQr8Wra37wgjMMQjjX6NKNT1QQAbLJ_yHr8tpm19GWr1AzMbwEWogfQumb1LwmAX7a9uJBjUnTN5tMkOm2kfSrBYs9S-3HEdz9e8dNiMX7N8uucfWxGkKygvDRTtxE5oPvQ1ZyNaM1cUP4Vzn-9r0akCrKJEdN6EOigMFQgEoEhRhjAK1e3dC5eUQJKXIkXjJO2ar6NgeWXQOzhPmTNx2KyKVTUxKRX9U-sMHzWGJTIO6slAkUm",
    badge: "Atelier Restock",
    badgeStyle: "white",
  },
  {
    id: "rec-torii-stool",
    name: "Torii Low Sculptural Stool",
    category: "Furniture • Copenhagen",
    description: "Solid European White Oak",
    price: 480.0,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBIKtnurJJoJMkLCzQT9WmiIRCZymSlYp5w8AgUJX1FocMStahMZVKvVQDARLM3wBj0mAMYgzKzm4qLKKpoQfh0a554Bc4oClBuA3WM-FndSDFOdyh7vk1r8YuPWVVTzh8759LSYrGcys4EQZioI-U5bbjuSc5LKP3q6GZHq8pq38BZdjB8Z4U4P7DOYP_nX7wZhsCIjvTuOPYcIZBPkOWd_p0EZG36uIi8JqLMCRyj5bekvpzFg-Ui",
  },
  {
    id: "rec-amber-coupe",
    name: "Fluted Amber Glass Coupe (Set of 2)",
    category: "Tableware • Murano",
    description: "Hand-Blown Soda Lime Glass",
    price: 110.0,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA92nOVvdVnY79nACQ3Ly8jCSudAhkgTHiuc3giYevImJCX3WojMqEq7oOICfw8fvsNf_ry6GZrh_8_PQ_A8Nn1-j65pg0sL7oafzQHD7T11x2TqpEkOhs4Bak4hP2ibTw6QX5NtYhm8dJuDpfHXFGzMuf1F8onV1-AjEPo8IbInSCfLgE_ylTHWsl3FdKFDnNJUdwdlwvoQCB91896thbZFzQ8gMIFmLboFeNb4h3SIU7cOKEtodkZ",
    badge: "Limited Run",
    badgeStyle: "peach",
  },
];

export const DEMO_CART_ITEMS: Product[] = [
  {
    _id: "demo-item-1",
    product_name: "Akari Ovoid Washi Pendant",
    product_description: "Finish: Natural Twisted Linen • Size: Medium (65cm)",
    product_category: "Architectural Lighting • Atelier Reserve",
    product_image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBHrpWu9le07nWQmTUHO5nOGHEPfuFPNXkKkRdn3oCMVFUL8ot-jcvN0hgpHirjcDabksiy_zH_-IW_crcvmLJ_AQycLxFcDAsPMqdyFGbhCUr_1yTJthewk1iGWP7MxjMAlcyoC6x5z4fKRl2EPda9vG3vRF4vTyerEiv_COVR_Qm5UrAHd48CIn3wbBUdJWR1HXpEXeZ2CzfaaRhri06OJXXVKeyVIMn60HoUAm8MuUczv85fdaI9",
    product_price: "340.00",
    product_stock: "2",
  },
  {
    _id: "demo-item-2",
    product_name: "Forma Raw Stoneware Urn",
    product_description: "Glaze: Raw Salt Wood-Fired",
    product_category: "Ceramics & Homeware • Kyoto Atelier",
    product_image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJTdpRewWzNbA8z750nuYAjrzVHUUavR96n9k8CKRrdeVNcobdFxx8B9lktoteEYLLZ1rbHiOCbGOTZ3w2eX8PTeb5IQsjN7ss9CG2QY22pTpMxhoXg7Y1kwjPrNJXpxnk7fynhvfdKk4jgaUsiP20QOyr-omoUt_wR6e1TjhkhB0_QemhEDKNekKWMiTS2HnUmuXvOyzDLRqyJzUw8eVhhexI9bQmGqq_LM53tASQBR6caPuyBnbA",
    product_price: "165.00",
    product_stock: "15",
  },
  {
    _id: "demo-item-3",
    product_name: "Flax Woven Belgian Throw",
    product_description: "Color: Unbleached Natural Oat",
    product_category: "Fine Textiles • Flanders Mill",
    product_image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCDSQkLOFr78-Q565DxNKmx-Ol4dy2l8EWrXXjfCEaou_DeeaVn54wose-LyLQaLSpBQpBa_1en3uE0CJZT683miOH_mfPChzL4ByR2ouVmPZB7NLJxt7A4NuyzZ2WLORlJrY6gaEKTvWLqRachJeVWpE9--ZD02AkJ9RM_rQKhZHDi9So4fWv25vvV_eJUgYymP-Uu-gRyQqM95irHJqlPyIk0GCq4az29xZj9_ha7zs3Ua8zxDYHj",
    product_price: "195.00",
    product_stock: "8",
  },
];
