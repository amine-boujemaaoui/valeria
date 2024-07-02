"use server";

import Link from "next/link";
import { simplifiedProduct } from "../interfaces";
import { client } from "../lib/sanity";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

async function getNewest() {
  const query = `*[_type == "product"][0...4]{
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

const Newest = async () => {
  const products: simplifiedProduct[] = await getNewest();
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:py-24 lg:max-w-7xl lg:px-8'>
        <div className='flex justify-between items-center'>
          <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
            Our newest products
          </h2>
          <Link href='/all' className='text-primary flex items-center gap-x-1'>
            See more
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>

        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {products.map(product => (
            <div key={product._id} className='group'>
              <div className='aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80'>
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  className='object-cover object-center w-full h-full lg:h-full lg:w-full'
                  width={300}
                  height={300}
                />
              </div>
              <div className='mt-4 flex justify-between'>
                <div>
                  <h3 className='text-sm text-gray-700'>
                    <Link href={`/product/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className='mt-1 text-sm text-gray-500'>
                    {product.categoryName}
                  </p>
                </div>
                <p className='text-gray-900 font-medium text-sm'>${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newest;
