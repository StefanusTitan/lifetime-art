'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

export default function ImageCarousel() {
  const images = [
    '/about-us-1.jpg',
    '/about-us-2.jpg',
    '/about-us-3.jpg',
    '/about-us-4.jpg',
    '/about-us-5.png',
  ];

  // Duplicate images to ensure smooth looping with few images
  const duplicatedImages = [...images, ...images];

  const mobilePaginationRef = useRef(null);
  const mobileSwiperRef = useRef(null);

  useEffect(() => {
    const swiper = mobileSwiperRef.current;
    const paginationEl = mobilePaginationRef.current;
    if (!swiper || !paginationEl) return;

    // Re-bind pagination to external element
    swiper.params.pagination.el = paginationEl;
    if (swiper.pagination && swiper.pagination.destroy) {
      swiper.pagination.destroy();
    }
    swiper.pagination.init();
    swiper.pagination.render();
    swiper.pagination.update();
  }, []);

  return (
    <>
      {/* Mobile carousel (sm and under): 1 slide per view with pagination, 375x400 images */}
      <div className="block sm:hidden w-full">
        <Swiper
          modules={[Pagination]}
          slidesPerView="auto"
          spaceBetween={32}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => {
            mobileSwiperRef.current = swiper;
          }}
          loop={true}
          className="w-full !h-[400px]"
        >
          {images.map((image, index) => (
            <SwiperSlide key={`${image}-mobile-${index}`} className="!w-[320px] !h-[400px]">
              <Image
                src={image}
                alt={`Home improvement ${(index % images.length) + 1}`}
                className="w-[320px] h-[400px] object-cover"
                width={320}
                height={400}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          ref={mobilePaginationRef}
          className="swiper-pagination mt-10 flex justify-center"
          style={{ position: 'static' }}
        />
        <style jsx global>{`
          .swiper-pagination-bullet-active { background: #101014 !important; }
        `}</style>
      </div>

      {/* Desktop/tablet carousel (sm and up): continuous free-mode autoplay */}
      <div className="hidden sm:block w-full">
        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView="auto"
          spaceBetween={32}
          speed={3000}
          freeMode={{
            enabled: true,
            momentum: false,
            sticky: false,
          }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            waitForTransition: true,
            reverseDirection: false,
          }}
          loop={true}
          loopAdditionalSlides={3}
          allowTouchMove={true}
          watchSlidesProgress={true}
          className="w-full !h-[500px] flex self-center justify-center"
        >
          {duplicatedImages.map((image, index) => (
            <SwiperSlide key={`${image}-desktop-${index}`} className="!w-[400px] !h-[500px]">
              <Image
                src={image}
                alt={`Home improvement ${(index % images.length) + 1}`}
                className="w-[400px] h-[500px] object-cover"
                width={400}
                height={500}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}