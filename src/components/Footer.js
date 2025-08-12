export default function Footer() {
  return(
    <div className="flex w-full px-5 mt-4">
      <div className="flex flex-col items-start bg-[#101014] text-white min-[1440px]:p-20 max-[1440px]:px-5 max-[1440px]:py-15 gap-10 rounded-t-xl w-full">
        <div className="flex items-start justify-between w-full max-sm:flex-col max-sm:gap-10">
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
          <div className="flex flex-col items-start gap-[17px] w-80 h-[151px]">
            <h4 className="font-medium text-2xl leading-[26px] tracking-[-0.4px] text-white w-80 h-[33px] flex items-center">Quick links</h4>
            <div className="relative w-80 h-[101px]">
              <div className="absolute left-0 top-0 w-[120px] h-[101px] flex flex-col">
                <a href="#about" className="absolute left-0 top-[1px] w-[73.56px] h-6 font-normal text-lg leading-[27px] tracking-[-0.1px] text-[#D0D1DB] hover:text-white cursor-pointer flex items-center">About us</a>
                <a href="#work" className="absolute left-0 top-[38px] w-[72.53px] h-6 font-normal text-lg leading-[27px] tracking-[-0.1px] text-[#D0D1DB] hover:text-white cursor-pointer flex items-center">Our work</a>
                <a href="#services" className="absolute left-0 top-[75px] w-[70.33px] h-6 font-normal text-lg leading-[27px] tracking-[-0.1px] text-[#D0D1DB] hover:text-white cursor-pointer flex items-center">Services</a>
              </div>
              <div className="absolute left-[200px] top-0 w-[120px] h-[101px] flex flex-col">
                <a href="#testimonials" className="absolute left-0 top-[1px] w-[103.89px] h-6 font-normal text-lg leading-[27px] tracking-[-0.1px] text-[#D0D1DB] hover:text-white cursor-pointer flex items-center">Testimonials</a>
                <a href="#faq" className="absolute left-0 top-[38px] w-[42px] h-6 font-normal text-lg leading-[27px] tracking-[-0.1px] text-[#D0D1DB] hover:text-white cursor-pointer flex items-center">FAQs</a>
                <a href="#contact" className="absolute left-0 top-[75px] w-[67.91px] h-6 font-normal text-lg leading-[27px] tracking-[-0.1px] text-[#D0D1DB] hover:text-white cursor-pointer flex items-center">Contact</a>
              </div>
            </div>
          </div>
        </div>
        <span className="self-stretch h-0 border-t border-[rgba(208,209,219,0.1)]"></span>
        <span className="font-semibold text-lg leading-[170%] flex items-center tracking-[-0.1px]">© 2025 LifetimeArt. All rights reserved.</span>
      </div>
    </div>
    
  )
}