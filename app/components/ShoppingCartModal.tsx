"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";

const ShoppingCartModal = () => {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    redirectToCheckout,
    incrementItem,
    decrementItem,
  } = useShoppingCart();

  async function handleCheckoutClick(event: any) {
    event.preventDefault();

    try {
      const response = await redirectToCheckout();
      if (response?.error) throw new Error(response.error.message);
    } catch (error) {
      console.log("Error redirecting to checkout:", error);
    }
  }

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className='sm:max-w-lg w-[90vw]'>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>

        <div className='h-full flex flex-col justify-between'>
          <div className='mt-8 flex-1 overflow-y-auto'>
            <ul className='-my-6 divide-y divide-muted-foreground/20'>
              {cartCount === 0 ? (
                <div>
                  <h1>Your cart is empty</h1>
                </div>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map(product => (
                    <li key={product.id} className='flex py-6'>
                      <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border-muted-foreground/20'>
                        <Image
                          src={product.image as string}
                          alt={product.name}
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className='ml-4 flex flex-1 flex-col'>
                        <div>
                          <div className='flex justify-between text-base font-medium text-foreground'>
                            <h3>{product.name}</h3>
                            <p className='ml-4'>${product.price}</p>
                          </div>
                          <p className='mt-1 text-sm text-muted-foreground line-clamp-2 '>
                            {product.description}
                          </p>
                        </div>
                        <div className='flex flex-1 items-end justify-between text-sm'>
                          <button
                            className='hover:text-primary'
                            onClick={() => decrementItem(product.id)}>
                            -
                          </button>
                          <p className='text-gray-500'>
                            Qty: {product.quantity}
                          </p>
                          <button
                            className='hover:text-primary'
                            onClick={() => incrementItem(product.id)}>
                            +
                          </button>
                          <div className='flex'>
                            <button
                              type='button'
                              className='font-medium text-muted-foreground/40 hover:text-destructive/90 p-1 rounded-lg'
                              onClick={() => removeItem(product.id)}>
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
          <div className='border-t border-muted-foreground/20 px-4 py-6 sm:px-6'>
            <div className='flex justify-between text-base font-medium text-foreground'>
              <p>Subtotal</p>
              <p>${totalPrice}</p>
            </div>
            <p className='mt-0.5 text-sm text-muted-foreground'>
              Shipping and taxes are calculated at checkout.
            </p>
            <div className='mt-6'>
              <Button className='w-full' onClick={handleCheckoutClick}>
                Checkout
              </Button>
            </div>
            <div className='mt-6 flex justify-center text-center text-sm text-muted-foreground'>
              <p>
                Or
                <button
                  onClick={() => handleCartClick()}
                  className='font-medium text-primary hover:text-primary/80'>
                  Continue Shopping
                </button>
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartModal;
