"use server";

import Link from "next/link";
import { simplifiedProduct } from "../interfaces";
import { client } from "../lib/sanity";
import { ArrowRight } from "lucide-react";
import ProductCarousel from "./ProductCarousel";

const fetchCategory = async (categoryParam: string) => {
  const query = `*[_type == "product" && category->name == "${categoryParam}"]{
        _id,
        name,
        price,
        price_id,
        "imageUrl": images[0].asset->url,
        "slug": slug.current,
        "categoryName": category->name,
    }`;
  const category = await client.fetch(query, { categoryParam });
  return category;
};

const MoreCategory = async ({ category }: { category: string }) => {
  const products: simplifiedProduct[] = await fetchCategory(category);

  return (
    <div>
      <div className='mx-auto max-w-2xl px-4 py-8 sm:py-16 lg:max-w-7xl lg:px-8'>
        <div className='flex justify-between items-center'>
          <h2 className='text-2xl font-bold tracking-tight text-foreground'>
            More products for {category}
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

export default MoreCategory;
