'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function StatsRow() {
  const statsRef = useRef(null);

  useLayoutEffect(() => {
    const container = statsRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const items = Array.from(container.querySelectorAll(':scope > div'));
      if (!items.length) return;

      gsap.from(items, {
        opacity: 0,
        y: 14,
        duration: 0.3,
        ease: 'power2.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true,
        },
      });
    }, statsRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={statsRef} className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-30 2xl:px-20 max-2xl:px-10 py-30 max-w-[1440px] 2xl:w-[1440px] lg:w-full mx-auto">
      <div className="flex flex-col gap-2">
        <span className="text-7xl font-light leading-[120%] flex items-center tracking-[-0.8px] text-[#101014]">8</span>
        <h4 className="text-xl font-semibold leading-[30px] flex items-center tracking-[-0.2px] text-[#101014]">Years experience</h4>
        <span className="text-base font-normal leading-[150%] flex items-center tracking-[-0.1px] text-[#3D3D47]"> Improving homes with expert craftsmanship for years </span>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-7xl font-light leading-[120%] flex items-center tracking-[-0.8px] text-[#101014]">26</span>
        <h4 className="text-xl font-semibold leading-[30px] flex items-center tracking-[-0.2px] text-[#101014]">Projects completed</h4>
        <span className="text-base font-normal leading-[150%] flex items-center tracking-[-0.1px] text-[#3D3D47]"> Over 250 successful projects delivered with quality and care </span>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-7xl font-light leading-[120%] flex items-center tracking-[-0.8px] text-[#101014]">30</span>
        <h4 className="text-xl font-semibold leading-[30px] flex items-center tracking-[-0.2px] text-[#101014]">Skilled Tradespeople</h4>
        <span className="text-base font-normal leading-[150%] flex items-center tracking-[-0.1px] text-[#3D3D47]"> Our team of 30 expert ensures top-quality results </span>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-7xl font-light leading-[120%] flex items-center tracking-[-0.8px] text-[#101014]">100%</span>
        <h4 className="text-xl font-semibold leading-[30px] flex items-center tracking-[-0.2px] text-[#101014]">Client satisfaction</h4>
        <span className="text-base font-normal leading-[150%] flex items-center tracking-[-0.1px] text-[#3D3D47]"> All of our clients are satisfied with our work and service </span>
      </div>
    </div>
  );
}


