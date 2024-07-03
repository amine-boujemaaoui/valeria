"use client";

import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { use, useState } from "react";

interface ImageGalleryProps {
    images: any;
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
    
    const [mainImage, setMainImage] = useState<any>(images[0]);

    const handleImageClick = (image: any) => {
        setMainImage(image);
    }
    
    return ( 
        <div className="grid gap-4 lg:grid-cols-5">
            <div className="order-last flex gap-4 lg:order-none lg:flex-col">
                {images.map((image: any, i: number) => (
                    <div key={i} className="overflow-hidden rounded-lg bg-gray-100">
                        <Image
                            src={urlFor(image).url()}
                            alt="product image"
                            className="h-full w-full object-center object-cover cursor-pointer"
                            width={200}
                            height={200}
                            onClick={() => handleImageClick(image)}
                        />
                    </div>
                ))}
            </div>
            <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
                <Image
                    src={urlFor(mainImage).url()}
                    alt="product image"
                    className="h-full w-full object-center object-cover"
                    width={500}
                    height={500}
                />

                <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">Sale</span>
            </div>
        </div>
     );
}
 
export default ImageGallery;