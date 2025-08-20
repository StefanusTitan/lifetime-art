"use client";

import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function SectionTitle() {
  const pillRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const pill = pillRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const button = buttonRef.current;

    if (pill && title && subtitle && button) {
      // Set initial states
      gsap.set([pill, title, subtitle], { 
        y: 20, 
        autoAlpha: 0 
      });
      
      gsap.set(button, { 
        y: 30, 
        autoAlpha: 0 
      });

      // Create timeline for section title animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pill,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse"
        }
      });

      tl.to(pill, {
        y: 0,
        autoAlpha: 1,
        duration: 0.3,
        ease: "power2.out"
      })
      .to(title, {
        y: 0,
        autoAlpha: 1,
        duration: 0.3,
        ease: "power2.out"
      }, "-=0.2")
      .to(subtitle, {
        y: 0,
        autoAlpha: 1,
        duration: 0.3,
        ease: "power2.out"
      }, "-=0.2");

      // Separate animation for button (fade in from bottom)
      gsap.to(button, {
        y: 0,
        autoAlpha: 1,
        duration: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: button,
          start: "top 85%",
          end: "bottom 60%",
          toggleActions: "play none none reverse"
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="flex flex-col min-[1440px]:w-[400px] max-sm:w-[295px] max-[1440px]:items-center">
      <div className="flex flex-col gap-2 max-[1440px]:items-center">
        <div 
          ref={pillRef}
          className="flex flex-row items-center px-3 py-2 gap-[6px] bg-[#28282C] rounded-[24px] w-fit"
        >
          <span className="font-semibold text-[16px] leading-[14px] flex items-center text-white">FAQs</span>
        </div>
        <h3 
          ref={titleRef}
          className="font-medium text-[48px] leading-[1.2] flex items-center tracking-[-0.8px] text-[#101014] max-sm:text-center"
        >
          Answering Your Questions
        </h3>
      </div>
      <div className="mt-4">
        <span 
          ref={subtitleRef}
          className="font-normal text-[20px] leading-[1.7] flex items-center tracking-[-0.3px] text-[#3D3D47] max-sm:text-center"
        >
          Got more questions? Send us your inquiry below
        </span>
      </div>
      <div className="mt-14 max-sm:mt-8">
        <button
          ref={buttonRef}
          onClick={() => {
            const contactForm = document.getElementById('contact-form');
            if (contactForm) {
              gsap.to(window, {
                duration: 1.2,
                scrollTo: {
                  y: contactForm,
                  offsetY: 50
                },
                ease: "power2.inOut"
              });
            }
          }}
          className="flex items-center gap-6 px-4 py-[10px] group cursor-pointer border-none bg-transparent"
          style={{
            background: "linear-gradient(0deg, rgba(16, 16, 20, 0.1), rgba(16, 16, 20, 0.1)), rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(5px)",
            borderRadius: "32px"
          }}
        >
          <span className="text-[16px] font-medium leading-[21px] text-[#101014]">Get in touch</span>
          <svg width="40" height="40" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.72998" y="0.102539" width="40" height="40" rx="20" fill="#101014"/>
            <path d="M16.6073 24.2273L24.8569 15.9777M24.8569 15.9777H16.6073M24.8569 15.9777V24.2273" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

function FAQAccordions() {
  const [expanded, setExpanded] = useState(false);
  const contentRefs = useRef({});
  const iconRefs = useRef({});

  const handleChange = (panel) => (_event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Animate icon rotation and content when expanded changes
  useEffect(() => {
    // Rotate expand icons
    Object.entries(iconRefs.current).forEach(([panelKey, el]) => {
      if (!el) return;
      const isActive = expanded === panelKey;
      gsap.to(el, {
        rotate: isActive ? 45 : 0,
        duration: 0.2,
        ease: 'power2.out'
      });
    });

    // Animate content expansion/collapse
    Object.entries(contentRefs.current).forEach(([panelKey, el]) => {
      if (!el) return;
      const isActive = expanded === panelKey;
      
      if (isActive) {
        // Expand animation
        gsap.fromTo(el, 
          { 
            height: 0,
            autoAlpha: 0,
          },
          { 
            height: 'auto',
            autoAlpha: 1,
            duration: 0.3,
            ease: 'power2.out',
            force3D: false
          }
        );
      } else {
        // Collapse animation
        gsap.to(el, {
          height: 0,
          autoAlpha: 0,
          duration: 0.2,
          ease: 'power2.inOut',
        });
      }
    });
  }, [expanded]);

  const faqData = [
    {
      panel: 'faq1',
      question: 'What area are you based in?',
      answer: 'We primarily serve London and the surrounding areas, but depending on the project, we can travel further. Contact us to discuss your location and requirements.'
    },
    {
      panel: 'faq2',
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on size and complexity. We\'ll provide an estimated schedule during your consultation and keep you updated throughout the process.'
    },
    {
      panel: 'faq3',
      question: 'Do you offer free quotes?',
      answer: 'Yes, we offer free, no-obligation quotes. Our team will visit your property, assess your needs, and provide a detailed breakdown.'
    },
    {
      panel: 'faq4',
      question: 'Will I need planning permission for my project?',
      answer: 'This depends on the type and scope of your project. We can guide you through local regulations and help with applications if needed.'
    },
    {
      panel: 'faq5',
      question: 'Do you provide a guarantee for your work?',
      answer: 'Absolutely. All of our work is backed by a guarantee for quality and durability, giving you peace of mind.'
    },
    {
      panel: 'faq6',
      question: 'Can I stay in my home while the work is being done?',
      answer: 'In most cases, yes—though it may depend on the scope of work and areas affected. We\'ll discuss options to minimise disruption.'
    },
    {
      panel: 'faq7',
      question: 'How do I get started with a project?',
      answer: 'Simply get in touch with our team. We\'ll arrange a consultation, discuss your ideas, and prepare a tailored plan and quote.'
    }
  ];

  return (
    <div className="flex flex-col min-[1440px]:w-[800px] max-[1440px]:w-[1200px] max-[1280px]:w-[944px] max-sm:w-[295px] gap-5">
      {faqData.map(({ panel, question, answer }) => (
        <div key={panel} className="flex flex-col items-start px-5 py-6 bg-[#FAFAFA] border border-[#E6E6E6] rounded-[12px]">
          <button
            onClick={() => handleChange(panel)(null, expanded !== panel)}
            className="w-full flex items-center justify-between text-left hover:text-[#3f3f44ff] transition-colors duration-150 cursor-pointer"
            aria-expanded={expanded === panel}
            aria-controls={`${panel}-content`}
            id={`${panel}-header`}
          >
            <h4 className="font-medium text-[20px] leading-[31px] flex items-center tracking-[-0.2px] text-[#101014]">
              {question}
            </h4>
            <span 
              ref={(el) => { iconRefs.current[panel] = el; }}
              className="flex-shrink-0 will-change-transform"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 4H13V11H20V13H13V20H11V13H4V11H11V4Z" fill="#101014"/>
              </svg>
            </span>
          </button>
          <div 
            ref={(el) => { contentRefs.current[panel] = el; }}
            id={`${panel}-content`}
            className="overflow-hidden will-change-transform w-full"
            style={{ height: 0, opacity: 0 }}
          >
            <div className="pt-5">
              <p className="font-normal text-[16px] leading-[170%] tracking-[-0.1px] text-[#3D3D47]">
                {answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function FAQ() {
  return (
  <div className="flex min-[1440px]:w-[1440px] px-20 py-30 gap-20 max-[1440px]:flex-col max-[1440px]:px-10 max-[1440px]:py-15">
      <SectionTitle />
      <FAQAccordions />
    </div>
  );
}