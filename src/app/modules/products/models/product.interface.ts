import { ProductCategoryInterface } from './product-category.interface';

export interface ProductInterface {
  sku: number;
  name: string;
  type: string;
  price: number;
  upc: string;
  category: ProductCategoryInterface[];
  shipping: number;
  description: string;
  manufacturer: string;
  model: string;
  url: string;
  image: string;
}
