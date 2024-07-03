"use server";

import AddToBag from "@/app/components/AddToBag";
import Checkout from "@/app/components/Checkout";
import ImageGallery from "@/app/components/ImageGallery";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import MoreCategory from "@/app/components/MoreCategory";
import { fullProduct } from "@/app/interfaces";
import { client } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { Star, Truck } from "lucide-react";


const fetchProduct = async (slug: string) => {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]{
        _id,
        name,
        price,
        price_id,
        description,
        images,
        "slug": slug.current,
        "categoryName": category->name,
    }`;
  const product = await client.fetch(query, { slug });
  return product;
};

export const dynamic = "force-dynamic";

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const product: fullProduct = await fetchProduct(params.slug);

  return (
    <MaxWidthWrapper>
      <div className='bg-background'>
        <div className='max-auto px-4 md:px-8'>
          <div className='grid gap-8 md:grid-cols-2'>
            <ImageGallery images={product.images} />
            <div className='md:py-8'>
              <div className='mb-2 md:mb-3'>
                <span className='mb-0.5 inline-block text-muted-foreground/50'>
                  {product.categoryName}
                </span>
                <h2 className='text-2xl font-bold text-foreground lg:text-3xl'>
                  {product.name}
                </h2>
              </div>
              <div className='mb-6 flex items-center gap-3 md:mb-10'>
                <Button className='gap-x-2 rounded-full'>
                  <span className='text-sm'>4.2</span>
                  <Star className='h-5 w-5' />
                </Button>
                <span className='text-muted-foreground/50 transition duration-100'>
                  56 ratings
                </span>
              </div>
              <div className='mb-4'>
                <div className='flex itens-end gap-2'>
                  <span className='font-bold text-foreground text-2xl md:text-4xl'>
                    ${product.price}
                  </span>
                  {/* OPTION: Price before discount */}
                  <span className='mb-0.5 text-muted-foreground text-red-500 line-through'>
                    ${product.price + 20}
                  </span>
                </div>
                <span className='text-sm text-muted-foreground'>
                  Incl. Vat plus shipping
                </span>
              </div>
              <div className='mb-6 flex items-center gap-2 text-muted-foreground/50'>
                <Truck className='w-6 h-6' />
                <span className=''>1000000 Shipping Days</span>
              </div>
              <div className='flex gap-2'>
                <AddToBag
                  currency='EUR'
                  description={product.description}
                  image={product.images[0]}
                  name={product.name}
                  price={product.price}
                  key={product._id}
                  price_id={product.price_id}
                />
                <Checkout
                  currency='EUR'
                  description={product.description}
                  image={product.images[0]}
                  name={product.name}
                  price={product.price}
                  price_id={product.price_id}
                />
              </div>

              <p className='mt-12 text-base text-gray-500 tracking-wider'>
                {product.description}
              </p>
            </div>
          </div>
          <MoreCategory category={product.categoryName} />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ProductPage;
