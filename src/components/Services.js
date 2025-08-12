"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Services() {
    const rootRef = useRef(null);
    const pillRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            // Set initial state
            gsap.set([pillRef.current, titleRef.current, subtitleRef.current], { autoAlpha: 0, y: 16 });

            // Animate in on scroll
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: rootRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            });
            tl.to(pillRef.current, { autoAlpha: 1, y: 0, duration: 0.25, ease: 'power2.out' })
              .to(titleRef.current, { autoAlpha: 1, y: 0, duration: 0.3, ease: 'power2.out' }, '-=0.15')
              .to(subtitleRef.current, { autoAlpha: 1, y: 0, duration: 0.3, ease: 'power2.out' }, '-=0.2');
        }, rootRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={rootRef} className="flex flex-col gap-4 max-w-[1440px] 2xl:w-[1440px] self-center items-center">
            <div ref={pillRef} className="services-pill flex flex-row items-center px-3 py-2 gap-[6px] bg-[#28282C] rounded-[24px] w-fit">
                <span className="font-semibold text-base leading-[14px] flex items-center">Services</span>
            </div>
            <h3 ref={titleRef} className="services-title font-medium text-4xl leading-[58px] text-center tracking-[-0.8px] text-[#101014]">
                What we do
            </h3>
            <span ref={subtitleRef} className="services-subtitle font-normal text-xl leading-[34px] text-center tracking-[-0.3px] text-[#3D3D47]">
                Find out which one of our services fit the needs of your project
            </span>
        </div>
    );
}