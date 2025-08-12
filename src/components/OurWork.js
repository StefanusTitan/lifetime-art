import { useEffect, useRef } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Image from 'next/image';
import Avatar from '@mui/material/Avatar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'swiper/css';
import 'swiper/css/pagination';

gsap.registerPlugin(ScrollTrigger);

function OurWorkTopSection() {
  const titleSectionRef = useRef(null);
  const pillRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set([pillRef.current, headingRef.current, descriptionRef.current], {
        opacity: 0,
        y: 20
      });

      // Create timeline for title section animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: titleSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      tl.to(pillRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      })
      .to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      }, "-=0.1")
      .to(descriptionRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      }, "-=0.1");

    }, titleSectionRef);

    return () => ctx.revert();
  }, []);

  return(
    <div ref={titleSectionRef} className="flex flex-col gap-4 items-center w-full">
      <div ref={pillRef} className="flex flex-row items-center p-2 px-3 bg-[#28282C] rounded-full w-fit">
        <span className="font-semibold text-base leading-[14px] flex items-center">Our work</span>
      </div>
      <h3 ref={headingRef} className="text-center font-medium text-[48px] leading-[120%] tracking-[-0.8px] text-[#101014]">Get inspired by our work</h3>
      <span ref={descriptionRef} className="text-center font-normal text-[20px] leading-[170%] tracking-[-0.3px] text-[#3D3D47]">See how we&apos;ve transformed homes with our expert craftsmanship and attention to detail.</span>
    </div>
  );
}

function WorkCard({ card, index }) {
  const cardRef = useRef(null);
  const isDark = card.dark;
  const headingColor = isDark ? 'text-white' : 'text-[#101014]';
  const descColor = isDark ? 'text-white' : 'text-[#3D3D47]';
  const quoteFill = isDark ? 'white' : '#101014';
  const authorColor = isDark ? 'text-white' : 'text-[#101014]';

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(cardRef.current, {
        opacity: 0,
        y: 30
      });

      // Animate card on scroll
      gsap.to(cardRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
        delay: index * 0.15, // Stagger delay
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      });

    }, cardRef);

    return () => ctx.revert();
  }, [index]);

  return (
    <div ref={cardRef} className="flex items-center min-[1440px]:h-[1024px]">
      <Card className="max-sm:p-5 min-[1440px]:p-8 max-[1440px]:p-5 max-sm=h-full" sx={{ minWidth: 275, width: '100%', background: isDark ? '#101014' : '#E9ECF2', borderRadius: '12px', boxShadow: 0, '& .MuiCardContent-root:last-of-type': { pb: 0 } }}>
        <CardContent sx={{ padding: 0 }}>
          <div className="flex flex-col">
            {/* Image and Text Section */}
            <div className="flex items-center justify-between xl:gap-10 max-xl:gap-6 max-lg:flex-col max-lg:gap-10 max-sm:gap-10">
              <div className="relative 2xl:w-[648px] min-[1440px]:w-[568px] min-[1440px]:h-[500px] max-[1440px]:w-[560px] max-[1280px]:w-[432px] max-[1440px]:h-[492.96px] max-[1280px]:h-[380px] max-lg:w-[320px] max-lg:h-[280px] max-sm:w-[255px] max-sm:h-[255px] overflow-hidden rounded-[10px] pb-0">
                <Image
                  src={card.image}
                  alt="Work example"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex 2xl:w-[648px] min-[1440px]:w-[568px] max-[1440px]:w-[560px] max-[1280px]:w-[432px] max-lg:w-[320px] max-sm:w-[255px] flex-col gap-6">
                <div className="flex flex-col gap-[15px]">
                  <h4 className={`font-medium text-[40px] leading-[120%] tracking-[-1px] max-lg:text-[32px] ${headingColor}`}>{card.title}</h4>
                  <span className={`${isDark ? '' : 'font-normal text-base leading-[170%] flex items-center tracking-[-0.1px] self-stretch'} ${descColor}`}>
                    {card.description}
                  </span>
                </div>
                <div className="flex gap-[15px] flex-wrap">
                  {card.tags?.map((tag) => (
                    <div key={tag} className="flex items-center gap-[6px] px-3 py-2 h-[30px] bg-[#28282C] rounded-[24px]">
                      <span className="flex items-center font-manrope font-semibold text-[16px] leading-[14px] text-white">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
                {/* Quote and Avatar Section - Inline with text on xl and above */}
                <div className="xl:flex xl:flex-col xl:gap-6 hidden">
                  <div>
                    <blockquote className="flex gap-2">
                      <svg className="flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.9001 6.30254C9.00516 6.22375 9.12471 6.16642 9.25192 6.13383C9.37913 6.10123 9.51152 6.09402 9.64152 6.11259C9.77152 6.13116 9.8966 6.17516 10.0096 6.24206C10.1226 6.30897 10.2213 6.39748 10.3001 6.50254C10.3789 6.6076 10.4362 6.72715 10.4688 6.85436C10.5014 6.98157 10.5086 7.11396 10.49 7.24396C10.4715 7.37396 10.4275 7.49903 10.3606 7.61203C10.2937 7.72503 10.2052 7.82375 10.1001 7.90254C8.5361 9.07554 7.6401 10.2165 7.1271 11.2125C7.83147 11.0312 8.57483 11.0738 9.25386 11.3345C9.93289 11.5951 10.5138 12.0609 10.916 12.6669C11.3181 13.273 11.5215 13.9892 11.4978 14.7162C11.474 15.4431 11.2244 16.1446 10.7836 16.7232C10.3429 17.3017 9.73277 17.7286 9.0382 17.9444C8.34362 18.1602 7.59907 18.1543 6.90801 17.9275C6.21696 17.7006 5.61374 17.2641 5.18221 16.6786C4.75067 16.0931 4.51226 15.3878 4.5001 14.6605C4.37339 13.4325 4.54775 12.1921 5.0081 11.0465C5.6051 9.54054 6.7721 7.89854 8.9001 6.30254ZM17.9001 6.30254C18.0052 6.22375 18.1247 6.16642 18.2519 6.13383C18.3791 6.10123 18.5115 6.09402 18.6415 6.11259C18.7715 6.13116 18.8966 6.17516 19.0096 6.24206C19.1226 6.30897 19.2213 6.39748 19.3001 6.50254C19.3789 6.6076 19.4362 6.72715 19.4688 6.85436C19.5014 6.98157 19.5086 7.11396 19.4901 7.24396C19.4715 7.37396 19.4275 7.49903 19.3606 7.61203C19.2937 7.72503 19.2052 7.82375 19.1001 7.90254C17.5361 9.07554 16.6401 10.2165 16.1271 11.2125C16.8315 11.0312 17.5748 11.0738 18.2539 11.3345C18.9329 11.5951 19.5138 12.0609 19.916 12.6669C20.3181 13.273 20.5215 13.9892 20.4978 14.7162C20.474 15.4431 20.2244 16.1446 19.7836 16.7232C19.3429 17.3017 18.7328 17.7286 18.0382 17.9444C17.3436 18.1602 16.5991 18.1543 15.908 17.9275C15.217 17.7006 14.6137 17.2641 14.1822 16.6786C13.7507 16.0931 13.5123 15.3878 13.5001 14.6605C13.3734 13.4325 13.5477 12.1921 14.0081 11.0465C14.6061 9.54054 15.7721 7.89854 17.9001 6.30254Z" fill={quoteFill}/>
                      </svg>
                      <span className={`font-normal text-[18px] leading-[170%] tracking-[-0.2px] ${descColor}`}>{card.quote}</span>
                    </blockquote>
                  </div>
                  <div className="flex items-center gap-4 px-8 w-fit">
                    <Avatar
                      alt={card.author.name}
                      src={card.author.avatar}
                      sx={{
                        width: 50,
                        height: 50,
                        border: '1px solid #DBDAD9',
                        '& img': {
                          objectFit: 'cover',
                          objectPosition: 'top center',
                        },
                      }}
                    />
                    <span className={`font-normal text-[16px] leading-[21px] tracking-[-0.1px] ${authorColor}`}>{card.author.name}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quote and Avatar Section - Full Width on 1024px and below */}
            <div className="flex flex-col gap-6 mt-5 max-lg:mt-6 xl:hidden">
              <div>
                <blockquote className="flex gap-2">
                  <svg className="flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.9001 6.30254C9.00516 6.22375 9.12471 6.16642 9.25192 6.13383C9.37913 6.10123 9.51152 6.09402 9.64152 6.11259C9.77152 6.13116 9.8966 6.17516 10.0096 6.24206C10.1226 6.30897 10.2213 6.39748 10.3001 6.50254C10.3789 6.6076 10.4362 6.72715 10.4688 6.85436C10.5014 6.98157 10.5086 7.11396 10.49 7.24396C10.4715 7.37396 10.4275 7.49903 10.3606 7.61203C10.2937 7.72503 10.2052 7.82375 10.1001 7.90254C8.5361 9.07554 7.6401 10.2165 7.1271 11.2125C7.83147 11.0312 8.57483 11.0738 9.25386 11.3345C9.93289 11.5951 10.5138 12.0609 10.916 12.6669C11.3181 13.273 11.5215 13.9892 11.4978 14.7162C11.474 15.4431 11.2244 16.1446 10.7836 16.7232C10.3429 17.3017 9.73277 17.7286 9.0382 17.9444C8.34362 18.1602 7.59907 18.1543 6.90801 17.9275C6.21696 17.7006 5.61374 17.2641 5.18221 16.6786C4.75067 16.0931 4.51226 15.3878 4.5001 14.6605C4.37339 13.4325 4.54775 12.1921 5.0081 11.0465C5.6051 9.54054 6.7721 7.89854 8.9001 6.30254ZM17.9001 6.30254C18.0052 6.22375 18.1247 6.16642 18.2519 6.13383C18.3791 6.10123 18.5115 6.09402 18.6415 6.11259C18.7715 6.13116 18.8966 6.17516 19.0096 6.24206C19.1226 6.30897 19.2213 6.39748 19.3001 6.50254C19.3789 6.6076 19.4362 6.72715 19.4688 6.85436C19.5014 6.98157 19.5086 7.11396 19.4901 7.24396C19.4715 7.37396 19.4275 7.49903 19.3606 7.61203C19.2937 7.72503 19.2052 7.82375 19.1001 7.90254C17.5361 9.07554 16.6401 10.2165 16.1271 11.2125C16.8315 11.0312 17.5748 11.0738 18.2539 11.3345C18.9329 11.5951 19.5138 12.0609 19.916 12.6669C20.3181 13.273 20.5215 13.9892 20.4978 14.7162C20.474 15.4431 20.2244 16.1446 19.7836 16.7232C19.3429 17.3017 18.7328 17.7286 18.0382 17.9444C17.3436 18.1602 16.5991 18.1543 15.908 17.9275C15.217 17.7006 14.6137 17.2641 14.1822 16.6786C13.7507 16.0931 13.5123 15.3878 13.5001 14.6605C13.3734 13.4325 13.5477 12.1921 14.0081 11.0465C14.6061 9.54054 15.7721 7.89854 17.9001 6.30254Z" fill={quoteFill}/>
                  </svg>
                  <span className={`font-normal text-[18px] leading-[170%] tracking-[-0.2px] ${descColor}`}>{card.quote}</span>
                </blockquote>
              </div>
              <div className="flex items-center gap-4 px-8 w-fit">
                <Avatar
                  alt={card.author.name}
                  src={card.author.avatar}
                  sx={{
                    width: 50,
                    height: 50,
                    border: '1px solid #DBDAD9',
                    '& img': {
                      objectFit: 'cover',
                      objectPosition: 'top center',
                    },
                  }}
                />
                <span className={`font-normal text-[16px] leading-[21px] tracking-[-0.1px] ${authorColor}`}>{card.author.name}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function WorkCards() {
  const mobileCardsRef = useRef([]);
  const cards = [
    {
      image: '/our-work-1.png',
      title: 'Modern kitchen refit',
      description:
        'This kitchen transformation brought sleek, modern design and enhanced  functionality to our client’s home. We installed custom cabinetry, high-quality worktops, and state-of-the-art appliances, creating a stylish yet practical space perfect for cooking and entertaining. With attention to every detail, we delivered a kitchen that balances aesthetics and usability.',
      tags: ['Kitchen', '4 weeks'],
      quote:
        "LifetimeArt completely transformed our kitchen, making it both beautiful and highly functional. The craftsmanship was outstanding, and the team was professional and communicative throughout. We couldn't be happier with the result!",
      author: { name: 'Rachel Morgan', avatar: '/rachel-morgan.png' },
      dark: false,
    },
    {
      image: '/our-work-2.png',
      title: 'External garden path build',
      description:
        'Our team designed and built a durable, visually appealing garden path to enhance the outdoor space. Using premium materials, we created a seamless walkway that blends naturally with the landscape, providing both functionality and aesthetic charm. The result is a stylish, well-crafted path that elevates the overall garden design.',
      tags: ['External Works', '6 weeks'],
      quote:
        "The team at LifetimeArt did an amazing job on our garden path. It's sturdy, looks fantastic, and has completely transformed our outdoor space. They listened to our vision and delivered exactly what we wanted—highly recommended!",
      author: { name: 'Michael Turner', avatar: '/michael-turner.png' },
      dark: true,
    },
    {
      image: '/our-work-3.png',
      title: 'Bathroom renovation',
      description:
        'We revitalized this bathroom with a fresh, modern design, incorporating high-end tiling, sleek fixtures, and efficient lighting. The layout was optimized to maximize space, creating a luxurious and relaxing atmosphere. The final result is a beautifully crafted bathroom that enhances both comfort and functionality.',
      tags: ['Kitchen', '4 weeks'],
      quote:
        'LifetimeArt completely transformed our kitchen, making it both beautiful and highly functional. The craftsmanship was outstanding, and the team was professional and communicative throughout. We couldn’t be happier with the result!',
      author: { name: 'Laura Davies', avatar: '/laura-davies.png' },
      dark: false,
    },
  ];

  // Animation for mobile swiper cards
  useEffect(() => {
    const ctx = gsap.context(() => {
      mobileCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.set(card, {
            opacity: 0,
            y: 30
          });

          gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
            delay: index * 0.15,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Desktop/Tablet Layout */}
      <div className="hidden sm:flex flex-col lg:gap-5">
        {cards.map((card) => (
          <WorkCard key={card.title} card={card} />
        ))}
      </div>

      {/* Mobile Swiper Layout */}
      <div className="block sm:hidden">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{
            clickable: true,
            dynamicBullets: false,
            el: '.custom-pagination',
          }}
          className="w-full"
          autoHeight={true}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={card.title} ref={(el) => mobileCardsRef.current[index] = el}>
              <WorkCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination mt-10 flex justify-center" style={{ width: '100%', height: '30px', alignItems: 'center' }}></div>
      </div>
    </>
  );
}

export default function OurWork() {
    return (
      <div className="flex flex-col max-w-[1440px] self-center 2xl:w-[1440px] min-[1440px]:w-[1280px] max-[1440px]:w-[1200px] max-[1280px]:w-[944px] max-sm:w-[295px] lg:gap-30">
        <OurWorkTopSection />
        <WorkCards />
      </div>
    );
}