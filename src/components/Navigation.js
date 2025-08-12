"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

export default function Navigation() {
  const navRef = useRef(null);
  const linksRef = useRef([]);

  const overlayRef = useRef(null);
  const menuRef = useRef(null);
  const mobileLinksRef = useRef([]);
  const menuTimelineRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { href: '/#about', label: 'About' },
    { href: '/#services', label: 'Services' },
    { href: '/#work', label: 'Our work' },
    { href: '/#faq', label: 'FAQs' },
    { href: '/#contact', label: 'Contact' },
  ];

  // Add to links ref array (desktop)
  const addToRefs = (el) => {
    if (el && !linksRef.current.includes(el)) {
      linksRef.current.push(el);
    }
  };

  // Add to mobile links ref array
  const addToMobileRefs = (el) => {
    if (el && !mobileLinksRef.current.includes(el)) {
      mobileLinksRef.current.push(el);
    }
  };

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  // Smooth scroll to an element id, accounting for fixed nav offset
  const scrollToHash = (hash) => {
    if (!hash || typeof window === 'undefined') return;
    const id = hash.replace('#', '');
    const el = document.getElementById(id);
    if (!el) return;
    // Determine offset from top (e.g., fixed header height)
    const header = navRef.current;
    const offset = header ? header.getBoundingClientRect().height : 0;
    const top = window.scrollY + el.getBoundingClientRect().top; // small spacing
    window.scrollTo({ top, behavior: 'smooth' });
  };

  useEffect(() => {
    // Fade in animation for the nav
    if (navRef.current) {
      gsap.from(navRef.current, {
        opacity: 0,
        y: -16,
        duration: 0.7,
        ease: 'power2.out',
      });
    }

    // Desktop hover underline effects
    const cleanupFns = [];
    linksRef.current.forEach((link) => {
      const line = document.createElement('span');
      line.style.position = 'absolute';
      line.style.left = '0';
      line.style.bottom = '0';
      line.style.height = '2px';
      line.style.width = '0%';
      line.style.backgroundColor = 'currentColor';
      line.style.transition = 'width 0.2s ease-out';

      link.style.position = 'relative';
      link.style.paddingBottom = '2px';
      link.appendChild(line);

      const onEnter = () => gsap.to(line, { width: '100%', duration: 0.2, ease: 'power1.out' });
      const onLeave = () => gsap.to(line, { width: '0%', duration: 0.2, ease: 'power1.out' });

      link.addEventListener('mouseenter', onEnter);
      link.addEventListener('mouseleave', onLeave);

      cleanupFns.push(() => {
        link.removeEventListener('mouseenter', onEnter);
        link.removeEventListener('mouseleave', onLeave);
        if (line && line.parentNode === link) link.removeChild(line);
      });
    });

    return () => {
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  // Build GSAP timeline for mobile menu
  useEffect(() => {
    if (!overlayRef.current || !menuRef.current) return;

    menuTimelineRef.current = gsap
      .timeline({ paused: true, defaults: { ease: 'power2.out' } })
      .fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.25 },
        0
      )
      .fromTo(
        menuRef.current,
        { y: -16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.35 },
        0.05
      )
      .fromTo(
        mobileLinksRef.current,
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.25, stagger: 0.06 },
        0.15
      );

    return () => {
      if (menuTimelineRef.current) {
        menuTimelineRef.current.kill();
        menuTimelineRef.current = null;
      }
    };
  }, []);

  // Control menu open/close with timeline, lock scroll, and Escape handling
  useEffect(() => {
    const timeline = menuTimelineRef.current;
    if (timeline) {
      if (isMenuOpen) {
        timeline.play();
        document.body.style.overflow = 'hidden';
        // Focus first link for accessibility after opening
        window.setTimeout(() => {
          const firstLink = mobileLinksRef.current?.[0];
          if (firstLink && typeof firstLink.focus === 'function') {
            firstLink.focus();
          }
        }, 120);
      } else {
        timeline.reverse();
        document.body.style.overflow = '';
      }
    }

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isMenuOpen]);

  // Ensure body scroll is restored if component unmounts while menu is open
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className="relative 2xl:absolute max-2xl:flex inset-x-0 mx-auto max-w-[1440px] flex justify-between items-center 2xl:px-20 lg:px-[30px] px-5 max-sm:mx-[20.5px] max-sm:my-[19.5px] py-[15px] lg:py-10 z-[100]"
      >
        <a className="flex gap-[4.8px] align-middle items-center">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.6197 25.6893C17.6485 22.7521 16.9038 20.3636 15.9566 20.3544C15.0094 20.3452 14.2182 22.7187 14.1895 25.6557C14.1608 28.5929 14.9054 30.9814 15.8526 30.9907C16.7999 30.9999 17.5911 28.6264 17.6197 25.6893Z" fill="white" />
            <path d="M12.1262 25.0222C13.7384 22.5669 14.4034 20.155 13.6116 19.6351C12.8197 19.1151 10.8709 20.684 9.2587 23.1393C7.64647 25.5946 6.98145 28.0065 7.77326 28.5265C8.56513 29.0464 10.5139 27.4775 12.1262 25.0222Z" fill="white" />
            <path d="M7.85877 21.4995C10.5425 20.3058 12.406 18.6364 12.021 17.7709C11.636 16.9053 9.14837 17.1714 6.46459 18.3652C3.78084 19.559 1.91734 21.2283 2.30233 22.0939C2.68731 22.9594 5.17502 22.6933 7.85877 21.4995Z" fill="white" />
            <path d="M11.6989 15.3437C11.843 14.4074 9.6064 13.2862 6.70336 12.8394C3.80025 12.3925 1.33001 12.7893 1.18591 13.7256C1.04181 14.6618 3.2784 15.783 6.18149 16.2298C9.08455 16.6767 11.5548 16.2799 11.6989 15.3437Z" fill="white" />
            <path d="M12.7411 13.1133C13.3685 12.4035 12.0928 10.2512 9.89192 8.3061C7.69102 6.36096 5.3983 5.35951 4.77098 6.06931C4.14367 6.77912 5.41932 8.93138 7.62024 10.8765C9.82114 12.8217 12.1139 13.8231 12.7411 13.1133Z" fill="white" />
            <path d="M14.8168 11.8098C15.7283 11.5519 15.8189 9.05158 15.0191 6.2253C14.2194 3.39901 12.8321 1.31693 11.9207 1.57486C11.0092 1.83278 10.9186 4.33303 11.7183 7.15936C12.5181 9.9856 13.9054 12.0677 14.8168 11.8098Z" fill="white" />
            <path d="M20.4534 7.24729C21.3088 4.4373 21.2676 1.93575 20.3613 1.6599C19.4551 1.38405 18.0271 3.43836 17.1717 6.24833C16.3164 9.05829 16.3576 11.5599 17.2639 11.8357C18.1701 12.1115 19.5981 10.0573 20.4534 7.24729Z" fill="white" />
            <path d="M24.481 11.0442C26.7195 9.1424 28.037 7.01548 27.4236 6.29358C26.8103 5.57166 24.4984 6.52812 22.26 8.42982C20.0214 10.3316 18.704 12.4585 19.3173 13.1804C19.9306 13.9023 22.2425 12.9459 24.481 11.0442Z" fill="white" />
            <path d="M25.8126 16.4172C28.724 16.0277 30.9822 14.9509 30.8566 14.0119C30.731 13.073 28.269 12.6277 25.3577 13.0171C22.4464 13.4066 20.1881 14.4835 20.3137 15.4224C20.4393 16.3613 22.9012 16.8067 25.8126 16.4172Z" fill="white" />
            <path d="M29.5683 22.3622C29.9702 21.5045 28.14 19.7987 25.4803 18.5522C22.8207 17.3058 20.3387 16.9907 19.9367 17.8484C19.5347 18.7062 21.3649 20.412 24.0246 21.6585C26.6843 22.9049 29.1663 23.22 29.5683 22.3622Z" fill="white" />
            <path d="M23.9737 28.6911C24.7756 28.1869 24.1583 25.7624 22.5948 23.2758C21.0314 20.7892 19.1138 19.1822 18.3119 19.6864C17.51 20.1906 18.1273 22.6152 19.6908 25.1017C21.2542 27.5883 23.1718 29.1954 23.9737 28.6911Z" fill="white" />
          </svg>
          <p className="font-medium text-[23.2px] leading-[27.84px] tracking-[-0.4px]">LifetimeArt</p>
        </a>

        {/* Desktop navigation */}
        <ul className="hidden lg:flex gap-[30px] font-medium text-[18px] leading-[1.2] items-center justify-center tracking-[-0.1px]">
          {navigationLinks.map(({ href, label }) => (
            <li key={href} className="p-[10px]">
              <Link
                ref={addToRefs}
                href={href}
                onClick={(e) => {
                  // Intercept same-page hash links
                  if (href.startsWith('/#') && typeof window !== 'undefined' && window.location.pathname === '/') {
                    e.preventDefault();
                    scrollToHash(href.slice(1));
                  }
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
          className="lg:hidden relative inline-flex h-5 w-10 items-center justify-center rounded-md"
        >
          <div className="relative w-10 h-8">
            {/* Hamburger icon */}
            <svg 
              width="40" 
              height="20" 
              viewBox="0 0 40 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className={`absolute top-1 transition-all duration-300 ease-out ${
                isMenuOpen 
                  ? 'opacity-0 rotate-45 scale-75' 
                  : 'opacity-100 rotate-0 scale-100'
              }`}
            >
              <rect x="0" y="2" width="40" height="2" fill="currentColor" />
              <rect x="0" y="9" width="40" height="2" fill="currentColor" />
              <rect x="0" y="16" width="40" height="2" fill="currentColor" />
            </svg>

            {/* X icon */}
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 40 40" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className={`absolute -top-1 transition-all duration-300 ease-out ${
                isMenuOpen 
                  ? 'opacity-100 rotate-0 scale-100' 
                  : 'opacity-0 rotate-45 scale-75'
              }`}
            > 
              <rect 
                x="19" 
                y="2" 
                width="2" 
                height="36" 
                transform="rotate(45 20 20)" 
                fill="currentColor" 
              /> 
              <rect 
                x="19" 
                y="2" 
                width="2" 
                height="36" 
                transform="rotate(-45 20 20)" 
                fill="currentColor" 
              /> 
            </svg>
          </div>
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <div
        ref={overlayRef}
        onClick={(e) => {
          if (e.target === overlayRef.current) closeMenu();
        }}
        className={`lg:hidden fixed inset-0 z-[90] bg-[rgba(0,0,0,0.6)] backdrop-blur-[5px] opacity-0 ${
          isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          id="mobile-menu"
          className="absolute left-1/2 top-35 w-[90%] max-w-sm -translate-x-1/2 opacity-0"
        >
          <ul className="flex flex-col gap-6 px-5">
            {navigationLinks.map(({ href, label }) => (
              <li key={href} className="">
                <Link
                  ref={addToMobileRefs}
                  href={href}
                  onClick={(e) => {
                    // Intercept same-page hash links on mobile, then close menu
                    if (href.startsWith('/#') && typeof window !== 'undefined' && window.location.pathname === '/') {
                      e.preventDefault();
                      scrollToHash(href.slice(1));
                      closeMenu();
                    } else {
                      closeMenu();
                    }
                  }}
                  className="font-normal text-2xl leading-[29px] tracking-[-1px] text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
