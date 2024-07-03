import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

interface ProductCarouselProps {
  products: {
    _id: string;
    name: string;
    price: number;
    slug: string;
    categoryName: string;
    imageUrl: string;
  }[];
}

const ProductCarousel = ({ products }: ProductCarouselProps) => {
  return (
    <Carousel
      className='w-full'
      opts={{
        loop: true,
      }}>
      <CarouselContent className='w-full'>
        {products.map(product => (
          <CarouselItem key={product._id} className='md:basis-1/2 lg:basis-1/3'>
            <div className='aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80'>
              <Link href={`/product/${product.slug}`}>
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  className='object-cover object-center w-full h-full lg:h-full lg:w-full'
                  width={300}
                  height={300}
                />
              </Link>
            </div>
            <div className='mt-4 flex justify-between'>
              <div>
                <h3 className='text-sm text-muted-foreground'>
                  <Link href={`/product/${product.slug}`}>{product.name}</Link>
                </h3>
                <p className='mt-1 text-sm text-muted-foreground/50'>
                  {product.categoryName}
                </p>
              </div>
              <p className='text-foreground font-medium text-sm'>
                ${product.price}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='hidden md:block' variant={"ghost"} />
      <CarouselNext className='hidden md:block' variant={"ghost"} />
    </Carousel>
  );
};

export default ProductCarousel;
