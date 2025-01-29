'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'

export default function ImageCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const images = [
    '/images/campus1.jpg',
    '/images/students1.jpg',
    '/images/event1.jpg'
  ]

  useEffect(() => {
    if (!emblaApi) return undefined

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }
    
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <div className="embla h-full" ref={emblaRef}>
      <div className="embla__container h-full">
        {images.map((src, index) => (
          <div className="embla__slide relative h-full" key={index}>
            <Image
              src={src}
              alt="School Campus"
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
        ))}
      </div>
    </div>
  )
}