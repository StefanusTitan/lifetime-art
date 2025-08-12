import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Avatar } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

gsap.registerPlugin(ScrollTrigger);

function TestimonialTopSection() {
  const titleSectionRef = useRef(null);
  const pillRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set([pillRef.current, headingRef.current, descriptionRef.current], {
        opacity: 0,
        y: 20,
      });

      // Create timeline for title section animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: titleSectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      tl
        .to(pillRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: 'power2.out',
        })
        .to(
          headingRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: 'power2.out',
          },
          '-=0.1'
        )
        .to(
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: 'power2.out',
          },
          '-=0.1'
        );
    }, titleSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={titleSectionRef} className="flex flex-col gap-4 items-center w-full">
      <div ref={pillRef} className="flex flex-row items-center p-2 px-3 bg-[#28282C] rounded-full w-fit">
        <span className="font-semibold text-base leading-[14px] flex items-center">Testimonials</span>
      </div>
      <h3 ref={headingRef} className="text-center font-medium text-[48px] leading-[120%] tracking-[-0.8px] text-[#101014]">Hear from our clients</h3>
      <span ref={descriptionRef} className="text-center font-normal text-[20px] leading-[170%] tracking-[-0.3px] text-[#3D3D47]">Hear from our happy clients about their experience working with Refit and the quality of our craftsmanship.</span>
    </div>
  );
}

function TestimonialCarousel({ testimonials, testimonials2 }) {
  return (
    <div className="flex flex-col items-center gap-12 py-[1px] w-full">
      <div className="w-full">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={31}
          slidesPerView="auto"
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            waitForTransition: true,
            reverseDirection: false,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} style={{ width: 'auto' }}>
              <Card
                sx={{
                  width: 'auto',
                  height: 315,
                  background: index % 2 === 0 ? '#FAFAFA' : '#E9ECF2',
                  border: '1px solid #E6E6E6',
                  boxShadow: 'none',
                  '& .MuiCardContent-root:last-of-type': { pb: 0 }
                }}
              >
                <CardContent sx={{ height: '100%', padding: 0 }}>
                  <div className="flex flex-col justify-between p-8 h-full">
                    <div className="flex flex-col gap-[9px]">
                      <svg width="116" height="20" viewBox="0 0 117 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1494_528)">
                          <path d="M5.35413 17.6024L6.70829 11.7482L2.16663 7.81071L8.16663 7.28988L10.5 1.76904L12.8333 7.28988L18.8333 7.81071L14.2916 11.7482L15.6458 17.6024L10.5 14.4982L5.35413 17.6024Z" fill="#101014"/>
                          <path d="M29.3541 17.6024L30.7083 11.7482L26.1666 7.81071L32.1666 7.28988L34.5 1.76904L36.8333 7.28988L42.8333 7.81071L38.2916 11.7482L39.6458 17.6024L34.5 14.4982L29.3541 17.6024Z" fill="#101014"/>
                          <path d="M53.3542 17.6024L54.7084 11.7482L50.1667 7.81071L56.1667 7.28988L58.5001 1.76904L60.8334 7.28988L66.8334 7.81071L62.2917 11.7482L63.6459 17.6024L58.5001 14.4982L53.3542 17.6024Z" fill="#101014"/>
                          <path d="M77.3542 17.6024L78.7084 11.7482L74.1667 7.81071L80.1667 7.28988L82.5001 1.76904L84.8334 7.28988L90.8334 7.81071L86.2917 11.7482L87.6459 17.6024L82.5001 14.4982L77.3542 17.6024Z" fill="#101014"/>
                          <path d="M101.354 17.6024L102.708 11.7482L98.1667 7.81071L104.167 7.28988L106.5 1.76904L108.833 7.28988L114.833 7.81071L110.292 11.7482L111.646 17.6024L106.5 14.4982L101.354 17.6024Z" fill="#101014"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_1494_528">
                            <rect width="116" height="20" fill="white" transform="translate(0.5 0.102539)"/>
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="font-normal text-[14px] sm:text-base leading-[170%] flex items-center tracking-[-0.1px] text-[#3D3D47] whitespace-pre-line">
                        {testimonial}
                      </span>
                    </div>
                    <div className="flex gap-4">
                      <Avatar alt="Emily Carter" src="/laura-davies.png" sx={{ width: 50, height: 50 }} />
                      <span className="font-normal text-[14px] sm:text-base leading-[21px] flex items-center tracking-[-0.1px] text-[#101014]">
                        Emily Carter
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={31}
          slidesPerView="auto"
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            waitForTransition: true,
            reverseDirection: true,
          }}
        >
          {testimonials2.map((testimonial, index) => (
            <SwiperSlide key={index} style={{ width: 'auto' }}>
              <Card
                sx={{
                  width: 'auto',
                  height: 315,
                  background: index % 2 === 0 ? '#FAFAFA' : '#E9ECF2',
                  border: '1px solid #E6E6E6',
                  boxShadow: 'none',
                  '& .MuiCardContent-root:last-of-type': { pb: 0 }
                }}
              >
                <CardContent sx={{ height: '100%', padding: 0 }}>
                  <div className="flex flex-col justify-between p-8 h-full gap-6">
                    <div className="flex flex-col gap-[9px] flex-none order-0 grow-0">
                      <svg width="116" height="20" viewBox="0 0 117 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1494_528)">
                          <path d="M5.35413 17.6024L6.70829 11.7482L2.16663 7.81071L8.16663 7.28988L10.5 1.76904L12.8333 7.28988L18.8333 7.81071L14.2916 11.7482L15.6458 17.6024L10.5 14.4982L5.35413 17.6024Z" fill="#101014"/>
                          <path d="M29.3541 17.6024L30.7083 11.7482L26.1666 7.81071L32.1666 7.28988L34.5 1.76904L36.8333 7.28988L42.8333 7.81071L38.2916 11.7482L39.6458 17.6024L34.5 14.4982L29.3541 17.6024Z" fill="#101014"/>
                          <path d="M53.3542 17.6024L54.7084 11.7482L50.1667 7.81071L56.1667 7.28988L58.5001 1.76904L60.8334 7.28988L66.8334 7.81071L62.2917 11.7482L63.6459 17.6024L58.5001 14.4982L53.3542 17.6024Z" fill="#101014"/>
                          <path d="M77.3542 17.6024L78.7084 11.7482L74.1667 7.81071L80.1667 7.28988L82.5001 1.76904L84.8334 7.28988L90.8334 7.81071L86.2917 11.7482L87.6459 17.6024L82.5001 14.4982L77.3542 17.6024Z" fill="#101014"/>
                          <path d="M101.354 17.6024L102.708 11.7482L98.1667 7.81071L104.167 7.28988L106.5 1.76904L108.833 7.28988L114.833 7.81071L110.292 11.7482L111.646 17.6024L106.5 14.4982L101.354 17.6024Z" fill="#101014"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_1494_528">
                            <rect width="116" height="20" fill="white" transform="translate(0.5 0.102539)"/>
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="font-normal text-[14px] sm:text-base leading-[1.7] flex items-center tracking-[-0.1px] text-[#3D3D47] whitespace-pre-line">
                        {testimonial}
                      </span>
                    </div>
                    <div className="flex gap-4">
                      <Avatar alt="Emily Carter" src="/laura-davies.png" sx={{ width: 50, height: 50 }} />
                      <span className="font-normal text-[14px] sm:text-base leading-[21px] flex items-center tracking-[-0.1px] text-[#101014]">
                        Emily Carter
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

function TestimonialMobileCarousel({ testimonials }) {
  return (
    <div className="w-full">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{
          clickable: true,
          dynamicBullets: false,
          el: '.custom-pagination-testimonials',
        }}
        className="w-full"
        autoHeight={true}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="mx-auto w-[295px]">
              <Card
                sx={{
                  width: 295,
                  height: 315,
                  background: index % 2 === 0 ? '#FAFAFA' : '#E9ECF2',
                  border: '1px solid #E6E6E6',
                  boxShadow: 'none',
                  '& .MuiCardContent-root:last-of-type': { pb: 0 }
                }}
              >
                <CardContent sx={{ padding: 0, height: '100%' }}>
                  <div className="flex flex-col justify-between p-6 gap-6 h-full">
                  <div className="flex flex-col gap-[9px]">
          <svg width="116" height="20" viewBox="0 0 117 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_1494_528)">
                        <path d="M5.35413 17.6024L6.70829 11.7482L2.16663 7.81071L8.16663 7.28988L10.5 1.76904L12.8333 7.28988L18.8333 7.81071L14.2916 11.7482L15.6458 17.6024L10.5 14.4982L5.35413 17.6024Z" fill="#101014"/>
                        <path d="M29.3541 17.6024L30.7083 11.7482L26.1666 7.81071L32.1666 7.28988L34.5 1.76904L36.8333 7.28988L42.8333 7.81071L38.2916 11.7482L39.6458 17.6024L34.5 14.4982L29.3541 17.6024Z" fill="#101014"/>
                        <path d="M53.3542 17.6024L54.7084 11.7482L50.1667 7.81071L56.1667 7.28988L58.5001 1.76904L60.8334 7.28988L66.8334 7.81071L62.2917 11.7482L63.6459 17.6024L58.5001 14.4982L53.3542 17.6024Z" fill="#101014"/>
                        <path d="M77.3542 17.6024L78.7084 11.7482L74.1667 7.81071L80.1667 7.28988L82.5001 1.76904L84.8334 7.28988L90.8334 7.81071L86.2917 11.7482L87.6459 17.6024L82.5001 14.4982L77.3542 17.6024Z" fill="#101014"/>
                        <path d="M101.354 17.6024L102.708 11.7482L98.1667 7.81071L104.167 7.28988L106.5 1.76904L108.833 7.28988L114.833 7.81071L110.292 11.7482L111.646 17.6024L106.5 14.4982L101.354 17.6024Z" fill="#101014"/>
                      </g>
                      <defs>
            <clipPath id="clip0_1494_528">
                          <rect width="116" height="20" fill="white" transform="translate(0.5 0.102539)"/>
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="font-normal text-[14px] leading-[170%] flex items-center tracking-[-0.1px] text-[#3D3D47] whitespace-pre-line">
                      {testimonial}
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <Avatar alt="Emily Carter" src="/laura-davies.png" sx={{ width: 50, height: 50 }} />
                    <span className="font-normal text-[14px] leading-[21px] flex items-center tracking-[-0.1px] text-[#101014]">
                      Emily Carter
                    </span>
                  </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination-testimonials mt-10 flex justify-center" style={{ width: '100%', height: '30px', alignItems: 'center' }}></div>
    </div>
  );
}

export default function Testimonials() {
  const testimonials = [
    "I couldn’t be happier with my loft \nconversion. The attention to detail and \nquality of work were outstanding. Refit \nmade the whole process smooth and \nstress-free!",
    "Refit transformed our outdoor space \nwith a beautiful garden path. The work \nwas completed on time, and the finish \nis excellent. A great team to work with!",
    "I couldn’t be happier with my loft \nconversion. The attention to detail and \nquality of work were outstanding. Refit \nmade the whole process smooth and \nstress-free!",
    "I couldn’t be happier with my loft \nconversion. The attention to detail and \nquality of work were outstanding. Refit \nmade the whole process smooth and \nstress-free!",
    "I couldn’t be happier with my loft \nconversion. The attention to detail and \nquality of work were outstanding. Refit \nmade the whole process smooth and \nstress-free!",
    "I couldn’t be happier with my loft \nconversion. The attention to detail and \nquality of work were outstanding. Refit \nmade the whole process smooth and \nstress-free!",
    "Refit transformed our outdoor space \nwith a beautiful garden path. The work \nwas completed on time, and the finish \nis excellent. A great team to work with!",
    "I couldn’t be happier with my loft \nconversion. The attention to detail and \nquality of work were outstanding. Refit \nmade the whole process smooth and \nstress-free!",
  ];

  const testimonials2 = [
    "Refit did an incredible job on our \nkitchen. The craftsmanship was top-\nnotch, and the team was professional \nfrom start to finish. Highly recommend!",
    "Brilliant service from start to finish. The \nteam was professional, \ncommunicative, and the results \nexceeded my expectations. My new \nbathroom looks amazing!",
    "I couldn’t be happier with my loft \nconversion. The attention to detail and \nquality of work were outstanding. Refit \nmade the whole process smooth and \nstress-free!",
    "Refit transformed our outdoor space \nwith a beautiful garden path. The work \nwas completed on time, and the finish \nis excellent. A great team to work with!",
    "I couldn’t be happier with my loft \nconversion. The attention to detail and \nquality of work were outstanding. Refit \nmade the whole process smooth and \nstress-free!",
    "I couldn’t be happier with my loft \nconversion. The attention to detail and \nquality of work were outstanding. Refit \nmade the whole process smooth and \nstress-free!",
    "Refit did an incredible job on our \nkitchen. The craftsmanship was top-\nnotch, and the team was professional \nfrom start to finish. Highly recommend!",
    "Brilliant service from start to finish. The \nteam was professional, \ncommunicative, and the results \nexceeded my expectations. My new \nbathroom looks amazing!",
    "I couldn’t be happier with my loft \nconversion. The attention to detail and \nquality of work were outstanding. Refit \nmade the whole process smooth and \nstress-free!",
  ];

  return (
    <div className="flex flex-col items-center gap-24 w-full">
      <TestimonialTopSection />
      {/* Desktop/Tablet (auto-scrolling rows) */}
      <div className="hidden sm:block w-full">
        <TestimonialCarousel testimonials={testimonials} testimonials2={testimonials2} />
      </div>
      {/* Mobile (swiper with pagination like Our Work) */}
      <div className="block sm:hidden w-full">
        <TestimonialMobileCarousel testimonials={[...testimonials, ...testimonials2]} />
      </div>
    </div>
  );
}