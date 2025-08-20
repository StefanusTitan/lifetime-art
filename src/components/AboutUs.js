'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const containerRef = useRef(null);
  const pillRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { duration: 0.3, ease: 'power2.out' },
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      if (pillRef.current) tl.from(pillRef.current, { opacity: 0, y: 10 });
      if (titleRef.current) tl.from(titleRef.current, { opacity: 0, y: 10 }, '>-0.05');
      if (paragraphRef.current) tl.from(paragraphRef.current, { opacity: 0, x: 16 }, '>-0.02');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex gap-20 2xl:px-20 sm:px-10 py-30 max-w-[1440px] self-center max-sm:flex-col max-sm:px-10">
      <div className="2xl:w-[600px] xl:w-[560px] lg:w-[432px]">
        <div ref={pillRef} className="flex flex-row items-center px-3 py-2 gap-[6px] bg-[#28282C] rounded-[24px] w-fit">
          <span className="font-semibold text-base leading-[14px] flex items-center">About us</span>
        </div>
        <h3 ref={titleRef} className="font-medium text-[48px] leading-[55px] tracking-[-0.8px] text-[#101014]">
          Home <br/> Improvement <br /> Specialists
        </h3>
      </div>
      <div className="2xl:w-[600px] xl:w-[560px] lg:w-[432px]">
        <p ref={paragraphRef} className="text-xl font-normal leading-[170%] flex items-center tracking-[-0.3px] text-[#3D3D47]">
          Welcome to LifetimeArt , your trusted home improvement experts, dedicated to transforming homes with precision and care. With years of experience in building kitchens, bathrooms, garages, and more, we take pride in delivering top-quality craftsmanship and a seamless customer experience. Our mission is to bring your vision to life while ensuring clear communication and expert guidance at every step. Let’s create a home you’ll love!
        </p>
      </div>
    </div>
  );
}


