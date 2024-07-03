"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";

export interface AddToBagProps {
  name: string;
  price: number;
  image: any;
  description: string;
  currency: string;
  price_id: string;
}

const AddToBag = ({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: AddToBagProps) => {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name: name,
    price: price,
    image: urlFor(image).url(),
    description: description,
    currency: currency,
    price_id: price_id,
  };

  return (
    <Button
      onClick={() => {
        addItem(product), handleCartClick();
      }}>
      Add to cart
    </Button>
  );
};

export default AddToBag;
