"use client";

import { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

const CartProvider = ({ children }: { children: ReactNode }) => {
    
  return (
    <USCProvider
      mode='payment'
      cartMode='client-only'
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string}
      successUrl='https://valeria-one.vercel.app/stripe/success'
      cancelUrl='https://valeria-one.vercel.app/stripe/error'
      currency='EUR'
      billingAddressCollection={false}
      shouldPersist={true}
      allowedCountries={["FR", "US", "CA"]}
      language='fr-FR'>
      {children}
    </USCProvider>
  );
};

export default CartProvider;
