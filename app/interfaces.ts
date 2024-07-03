export interface simplifiedProduct {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  slug: string;
  categoryName: string;
}

export interface fullProduct {
  _id: string;
  name: string;
  price: number;
  description: string;
  images: any;
  slug: string;
  categoryName: string;
  imageUrl: string;
  price_id: string;
}

export interface fullCategory {
  _id: string;
  name: string;
  imageUrl: string;
  slug: string;
  categoryName: string;
  price: number;
}
