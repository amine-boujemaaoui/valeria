"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/men", label: "Men" },
  { href: "/women", label: "Women" },
  { href: "/teen", label: "Teen" },
];

const Navbar = () => {
  const pathName = usePathname();

  return (
    <header className='mb-8 border-b'>
      <MaxWidthWrapper>
        <div className='flex items-center justify-between'>
          <Link href='/'>
            <h1 className='text-2xl md:text-4xl font-bold'>Valeria</h1>
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

          <div className='flex divide-x sm:border-l'>
            <Button
              variant={"outline"}
              className='flex flex-col gap-y1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none'>
              <ShoppingBag />
              <span className='hidden text-xs font-semibold sm:block text-gray-500'>
                Cart
              </span>
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
