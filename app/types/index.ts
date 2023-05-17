export interface Product {
  id: number;
  title: string;
  handle: string;
  body_html: null | string;
  published_at: string;
  created_at: string;
  updated_at: string;
  vendor: string;
  product_type: string;
  tags: string[];
  variants: Variant[];
  images: Image[];
  options: Option[];
}

export interface Variant {
  id: number;
  title: string;
  option1: string;
  option2: string;
  option3: string;
  sku: string;
  requires_shipping: boolean;
  taxable: boolean;
  featured_image: Image | null;
  available: boolean;
  price: string;
  grams: number;
  compare_at_price: string;
  position: number;
  product_id: number;
  created_at: string;
  updated_at: string;
}

export interface Image {
  id: number;
  created_at: string;
  position: number;
  updated_at: string;
  product_id: number;
  variant_ids: string[];
  src: string;
  width: number;
  height: number;
}

export interface Option {
  name: string;
  position: number;
  values: string[];
}
