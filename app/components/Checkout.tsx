"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";
import { AddToBagProps } from "./AddToBag";

const Checkout = ({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: AddToBagProps) => {
  const { checkoutSingleItem } = useShoppingCart();

  function buyNow(priceId: string) {
    checkoutSingleItem(priceId);
  }

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
      variant={"ghost"}
      onClick={() => {
        buyNow(product.price_id);
      }}>
      Buy Now
    </Button>
  );
};

export default Checkout;
