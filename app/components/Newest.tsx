"use server";

import Link from "next/link";
import { simplifiedProduct } from "../interfaces";
import { client } from "../lib/sanity";
import { ArrowRight } from "lucide-react";
import ProductCarousel from "./ProductCarousel";

async function getNewest() {
  const query = `*[_type == "product"][0...7]{
        _id,
        name,
        price,
        "slug": slug.current,
        "categoryName": category->name,
        "imageUrl": images[0].asset->url
    } | order(_createdAt desc)`;
  const products = await client.fetch(query);
  return products;
}

export const dynamic = "force-dynamic";

const Newest = async () => {
  const products: simplifiedProduct[] = await getNewest();
  return (
    <div>
      <div className='mx-auto max-w-2xl px-4 py-8 sm:py-16 lg:max-w-7xl lg:px-8'>
        <div className='flex justify-between items-center'>
          <h2 className='text-2xl font-bold tracking-tight text-foreground'>
            Our newest products
          </h2>
          <Link href='/all' className='text-primary flex items-center gap-x-1'>
            See more
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>

        <div className='mt-6 gap-x-6 gap-y-10 xl:gap-x-8'>
          <ProductCarousel products={products} />
        </div>
      </div>
    </div>
  );
};

export default Newest;
