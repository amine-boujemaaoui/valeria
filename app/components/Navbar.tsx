"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Moon, ShoppingBag, Sun } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import { useTheme } from "next-themes";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/Men", label: "Men" },
  { href: "/Women", label: "Women" },
  { href: "/Teen", label: "Teen" },
];

const Navbar = () => {
  const pathName = usePathname();
  const { handleCartClick } = useShoppingCart();
  const { setTheme } = useTheme();

  return (
    <header className='mb-8 border-b sticky z-50 top-0 inset-x-0 bg-background opacity-[0.98]'>
      <MaxWidthWrapper>
        <div className='flex items-center justify-between'>
          <Link href='/'>
            <h1 className='text-2xl md:text-4xl font-bold text-primary border-l border-primary pl-2'>
              V<span className='text-foreground'>aleria</span>
            </h1>
          </Link>

          <nav className='hidden gap-12 lg:flex'>
            {LINKS.map((link, i) => (
              <div key={i}>
                {pathName === link.href ? (
                  <Link
                    className='text-lg font-semibold text-primary-500 hover:text-primary-600'
                    href={link.href}>
                    {link.label}
                  </Link>
                ) : (
                  <Link
                    className='text-lg font-semibold text-gray-500 transition duration-100 hover:text-primary'
                    href={link.href}>
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <div className='flex divide-x'>
            <div className='flex flex-col gap-y1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none border-none justify-center items-center'>
              <Sun
                className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 cursor-pointer'
                onClick={() => setTheme("dark")}
              />
              <Moon
                className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 cursor-pointer'
                onClick={() => setTheme("light")}
              />
            </div>
            <Button
              variant={"outline"}
              onClick={() => handleCartClick()}
              className='flex flex-col gap-y1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none border-none'>
              <ShoppingBag />
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
