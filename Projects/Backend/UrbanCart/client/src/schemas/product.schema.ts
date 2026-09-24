import { z } from 'zod';

export const productFormSchema = z.object({
  product_name: z.string().trim().min(1, 'Product name is required'),
  product_price: z.string().min(1, 'Product price is required'),
  product_category: z.string().min(1, 'Category is required'),
  product_description: z.string().min(1, 'Description is required'),
  product_image: z.string().url('Product image must be a valid URL'),
  product_stock: z.string().min(1, 'Product stock is required'),
});

export type ProductFormValues = z.infer<typeof productFormSchema>;
