import Image from "next/image";

import { sign } from "icons";
import { spaceMono } from "utils/fonts";

export const Footer = () => (
  <footer
    className={`flex flex-col tablet:flex-row justify-between mt-auto px-12 laptop:px-[120px] py-12 laptop:py-[84px] border-t-[1px] border-solid border-black ${spaceMono.className}`}
  >
    <div className="hidden laptop:flex items-center justify-center laptop:max-w-[300px] laptop:w-[100%]">
      <Image src={sign} alt="VooDoo sign" width={82} height={82} />
    </div>
    <div className="laptop:max-w-[300px] laptop:w-[100%]">
      <a
        href="#"
        className="block h-2.5 mb-[19px] text-[14px] leading-[21px] text-bold"
      >
        FAQ
      </a>
      <a
        href="#"
        className="block h-2.5 mb-[19px] text-[14px] leading-[21px] text-bold"
      >
        RETURNS
      </a>
      <a href="#" className="block h-2.5 text-[14px] leading-[21px] text-bold">
        CONTACT
      </a>
    </div>
    <div className="mt-12 tablet:mt-0 laptop:max-w-[300px] laptop:w-[100%]">
      <a
        href="#"
        className="block h-2.5 mb-[19px] text-[14px] leading-[21px] text-bold"
      >
        TERMS & CONDITIONS
      </a>
      <a
        href="#"
        className="block h-2.5 mb-[19px] text-[14px] leading-[21px] text-bold"
      >
        PRIVACY POLICY
      </a>
      <a
        href="#"
        className="block h-2.5 mb-[19px] text-[14px] leading-[21px] text-bold"
      >
        COOKIE POLICY
      </a>
      <a href="#" className="block h-2.5 text-[14px] leading-[21px] text-bold">
        COOKIE SETTINGS
      </a>
    </div>
    <div className="mt-12 tablet:mt-0 laptop:max-w-[300px] laptop:w-[100%]">
      <a
        href="#"
        className="block h-2.5 mb-[19px] text-[14px] leading-[21px] text-bold"
      >
        ABOUT SECOND CHANCE
      </a>
      <a
        href="#"
        className="block h-2.5 mb-[19px] text-[14px] leading-[21px] text-bold"
      >
        CAREER
      </a>
      <a
        href="#"
        className="block h-2.5 mb-[19px] text-[14px] leading-[21px] text-bold"
      >
        FACEBOOK
      </a>
      <a href="#" className="block h-2.5 text-[14px] leading-[21px] text-bold">
        INSTAGRAM
      </a>
    </div>
    <div className="flex tablet:hidden items-center justify-center mt-12 py-2">
      <Image src={sign} alt="VooDoo sign" width={80} height={80} />
    </div>
  </footer>
);
