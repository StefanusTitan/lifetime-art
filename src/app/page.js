"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, forwardRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutUs from "@/components/AboutUs";
import ImageCarousel from "@/components/ImageCarousel";
import StatsRow from "@/components/StatsRow";
import ServicesContent from "@/components/ServicesContent";
import Services from "@/components/Services";
import OurWork from "@/components/OurWork";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

gsap.registerPlugin(ScrollTrigger);

function MainContent({ statusRef, headlineRef, paragraphRef, ctaRef }) {
  return (
    <div
      className="flex flex-col 2xl:justify-center max-2xl:justify-end 2xl:w-[547.28px] lg:h-[695px] min-[1440px]:w-[547.28px] max-[1281px]:w-full max-sm:h-[695px] self-stretch max-[1281px]:bg-[linear-gradient(180deg,_rgba(16,16,20,0.8)_0%,_rgba(16,16,20,0.8)_100%),url('/heroImage.jpg')] max-[1281px]:bg-cover max-[1281px]:bg-center max-[1281px]:bg-no-repeat max-[1281px]:rounded-[12px] max-2xl:px-5 max-2xl:pb-12"
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col max-sm:gap-1">
          <StatusPill ref={statusRef} status="Available for work" />
          <h1
            ref={headlineRef}
            className="font-medium sm:text-[56px] max-sm:text-[40px] leading-[120%] tracking-[-1px]"
          >
            Your trusted partner for quality home improvement
          </h1>
        </div>
        <p
          ref={paragraphRef}
          className="font-normal sm:text-[20px] max-sm:text-[16px] leading-[170%] flex items-center tracking-[-0.3px] text-[#D0D1DB] sm:w-[482px] max-sm:w-[295px] h-[96px]"
        >
          LifetimeArt delivers expert home improvements, creating beautiful and functional spaces with quality craftsmanship.
        </p>
      </div>
      <button
        ref={ctaRef}
        className="group 2xl:bg-[#28282C] max-2xl:backdrop-blur-[10px] max-2xl:bg-[rgba(255,255,255,0.1)] w-fit rounded-[32px] flex items-center justify-center gap-[24px] px-[16px] py-[10px] 2xl:mt-14 mt-12 transition-transform duration-200 ease-out will-change-transform hover:-translate-y-0.5"
      >
        <p className="font-medium 2xl:text-[18px] max-2xl:text-[16px] leading-[21.6px] tracking-[-0.3px] align-middle">Work with us</p>
        <svg
          className="transition-transform duration-200 ease-out will-change-transform group-hover:translate-x-1"
          width="41"
          height="41"
          viewBox="0 0 41 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.72998" y="0.719971" width="40" height="40" rx="20" fill="white" />
          <path
            d="M16.6073 24.8448L24.8569 16.5952M24.8569 16.5952H16.6073M24.8569 16.5952V24.8448"
            stroke="#101014"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

const StatusPill = forwardRef(function StatusPill({ status }, ref) {
  return (
    <div
      ref={ref}
      className="flex gap-[6px] items-center w-fit bg-[#28282C] rounded-[24px] px-[12px] py-[8px]"
    >
      <svg width="17.94" height="17.94" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect opacity="0.5" x="0.5" y="0.779999" width="17.94" height="17.94" rx="8.97" fill="white" />
        <rect opacity="0.01" x="0.75" y="1.03" width="17.44" height="17.44" rx="8.72" fill="white" />
        <rect opacity="0.0928491" x="4.31006" y="4.59" width="10.31" height="10.31" rx="5.155" fill="white" />
        <rect x="5.46997" y="5.75" width="8" height="8" rx="4" fill="white" />
      </svg>
      <p className="text-sm font-normal leading-[14px] tracking-normal align-middle">{status}</p>
    </div>
  );
});

function HeroImage({ heroRef, testimonialRef }) {
  return (
    <div
      ref={heroRef}
      className="w-[652.72px] h-[835.5px] relative max-[1281px]:hidden self-center"
    >
      <Image src="/heroImage.jpg" alt="Hero Image" fill className="object-cover rounded-[12px]" priority />
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[20%] rounded-t-[12px] bg-gradient-to-b from-[#101014] to-transparent opacity-80 z-[1]" />
      <TestimonialCard ref={testimonialRef} />
    </div>
  );
}

const TestimonialCard = forwardRef(function TestimonialCard(_, ref) {
  return (
    <div
      ref={ref}
      className="absolute top-[614.5px] left-[372.72px] z-[2] p-6 flex flex-col gap-[9px] bg-[#101014]/30 backdrop-blur-[7.5px] rounded-lg"
    >
      <svg width="117" height="20" viewBox="0 0 117 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1_1370)">
          <path d="M5.35449 17.5L6.70866 11.6459L2.16699 7.70835L8.16699 7.18752L10.5003 1.66669L12.8337 7.18752L18.8337 7.70835L14.292 11.6459L15.6462 17.5L10.5003 14.3959L5.35449 17.5Z" fill="white" />
          <path d="M29.3545 17.5L30.7087 11.6459L26.167 7.70835L32.167 7.18752L34.5003 1.66669L36.8337 7.18752L42.8337 7.70835L38.292 11.6459L39.6462 17.5L34.5003 14.3959L29.3545 17.5Z" fill="white" />
          <path d="M53.3545 17.5L54.7087 11.6459L50.167 7.70835L56.167 7.18752L58.5003 1.66669L60.8337 7.18752L66.8337 7.70835L62.292 11.6459L63.6462 17.5L58.5003 14.3959L53.3545 17.5Z" fill="white" />
          <path d="M77.3545 17.5L78.7087 11.6459L74.167 7.70835L80.167 7.18752L82.5003 1.66669L84.8337 7.18752L90.8337 7.70835L86.292 11.6459L87.6462 17.5L82.5003 14.3959L77.3545 17.5Z" fill="white" />
          <path d="M101.354 17.5L102.709 11.6459L98.167 7.70835L104.167 7.18752L106.5 1.66669L108.834 7.18752L114.834 7.70835L110.292 11.6459L111.646 17.5L106.5 14.3959L101.354 17.5Z" fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_1_1370">
            <rect width="116" height="20" fill="white" transform="translate(0.500488)" />
          </clipPath>
        </defs>
      </svg>
      <p className="w-[192px] h-[104px] font-normal text-sm leading-[20.8px] tracking-[-0.1px] align-middle">
        "LifetimeArt has been a game-changer for my home. Their ability to blend functionality with exquisite design is unparalleled."
      </p>
    </div>
  );
});

export default function Hero() {
  const rootRef = useRef(null);
  const statusRef = useRef(null);
  const headlineRef = useRef(null);
  const paragraphRef = useRef(null);
  const ctaRef = useRef(null);
  const heroRef = useRef(null);
  const testimonialRef = useRef(null);

  useLayoutEffect(() => {
    const headlineElement = headlineRef.current;
    if (!headlineElement) return;

    const ctx = gsap.context(() => {
      // Sequence animations
      const tl = gsap.timeline({ defaults: { duration: 0.3, ease: "power2.out" } });

      // Status Pill: fade + pop
      if (statusRef.current) {
        tl.from(statusRef.current, {
          opacity: 0,
          y: -8,
          scale: 0.95,
          duration: 0.35,
          ease: "back.out(1.7)",
        });
      }

      // Headline: single element fade + slight slide up
      if (headlineElement) {
        tl.from(headlineElement, { y: 12, opacity: 0 }, "-=0.05");
      }

      // Paragraph fade-in
      if (paragraphRef.current) {
        tl.from(paragraphRef.current, { opacity: 0 }, ">+0.05");
      }

      // CTA fade-in
      if (ctaRef.current) {
        tl.from(ctaRef.current, { opacity: 0, y: 6 }, ">+0.05");
      }

      // Hero image fade + slight scale-up
      if (heroRef.current) {
        tl.from(heroRef.current, { opacity: 0, scale: 0.985 }, ">+0.05");
      }

      // Testimonial card slides from bottom-right after image appears
      if (testimonialRef.current) {
        tl.from(testimonialRef.current, { opacity: 0, x: 40, y: 40 }, ">+0.05");
      }

      // Optional: subtle parallax on scroll for hero image
      if (heroRef.current) {
        gsap.to(heroRef.current, {
          y: -20,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section id="hero" className="bg-[var(--background)]">
        <div ref={rootRef} className="flex-1 flex h-full max-w-[1440px] 2xl:w-[1440px] 2xl:px-20 max-2xl:px-5 2xl:py-6 max-2xl:pb-5 justify-between items-stretch 2xl:mx-auto 2xl:self">
          <MainContent
            statusRef={statusRef}
            headlineRef={headlineRef}
            paragraphRef={paragraphRef}
            ctaRef={ctaRef}
          />
          <HeroImage heroRef={heroRef} testimonialRef={testimonialRef} />
        </div>
      </section>

      <section id="about" className="bg-white">
        <div className="flex flex-col">
          <AboutUs />
          <ImageCarousel />
          <StatsRow />
        </div>
      </section>

      <section id="services" className="bg-white">
        <div className="flex flex-col 2xl:px-20 py-30 gap-24">
          <Services />
          <ServicesContent />
        </div>
      </section>

      <section id="work" className="bg-white">
        <div className="flex flex-col 2xl:px-20 min-[1440px]:px-20 lg:px-10 pt-30">
          <OurWork />
        </div>
      </section>

      <section id="testimonials" className="bg-white">
        <div className="pb-30">
          <Testimonials />
        </div>
      </section>

      <section id="faq" className="bg-white">
        <div className="flex self-center justify-center">
          <FAQ />
        </div>
      </section>

      <section id="contact" className="bg-white">
        <div className="flex self-center justify-center">
          <Contact />
        </div>
      </section>
    </>
  );
}
