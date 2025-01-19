'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import classes from './image-slideshow.module.css';

import aCompleteUnknown from '@/assets/a_complete_unknown.jpg';
import nosferatu from '@/assets/nosferatu.webp';
import theBrutalist from '@/assets/the-brutalist.jpg';


const images = [
  { image: aCompleteUnknown, alt: 'A Complete Unknown banner' },
  { image: nosferatu, alt: 'Nosferatu banner' },
  { image: theBrutalist, alt: 'The Brutalist banner' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const imgClass = "w-full h-full object-cover absolute top-0 left-0 transition-all"

  return (
    <div className='relative w-full h-[600px] overflow-hidden'> 
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? `${imgClass} z-1 opacity-1` : `${imgClass} opacity-0`}
          alt={image.alt}
        />
      ))}
    </div>
  );
}