"use server";

import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

const LINKS = [
  { href: "/Men", label: "Men" },
  { href: "/Women", label: "Women" },
  { href: "/Teen", label: "Teen" },
];

async function fetchHeroImages() {
  const query = `*[_type == "heroimages"][0]`;
  const data = await client.fetch(query);
  return data;
}

const Hero = async () => {
  const data = await fetchHeroImages();

  return (
    <MaxWidthWrapper>
      <section className='mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8'>
        <div className='mb-8 flex flex-wrap justify-between md:mb-16'>
          <div className='mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48'>
            <h1 className='mb-4 text-4xl font-bold text-foreground sm:text-5xl md:mb-8 md:text-6xl'>
              Top fashion for a top price
            </h1>
            <p className='max-w-md leading-relaxed text-muted-foreground'>
              We sell the best clothes for the best price. Check out our
              collection now! We are sure you will find something you like.
            </p>
          </div>
          <div className='mb-12 flex w-full md:mb-16 lg:w-2/3'>
            <div className='relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0'>
              <Image
                src={urlFor(data.heroImage1).url()}
                alt='hero image'
                className='h-full object-center object-cover'
                width={500}
                height={500}
                priority
              />
            </div>
            <div className='overflow-hidden rounded-lg bg-gray-100 shadow-lg'>
              <Image
                src={urlFor(data.heroImage2).url()}
                alt='hero image'
                className='h-full object-center object-cover'
                width={500}
                height={500}
                priority
              />
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center justify-between gap-8 md:flex-row'>
          <div className='flex h-12 w-64 divide-x overflow-hidden rounded-lg border'>
            {LINKS.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className='flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default Hero;
