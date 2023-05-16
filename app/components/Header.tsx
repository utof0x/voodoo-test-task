import Image from "next/image";

import { logo, logoMobile } from "icons";

export const Header = () => {
  return (
    <header className="flex py-6 tablet:py-12 pl-6 tablet:pl-62 pr-6 tablet:pr-[62px] bg-lightSand border-b-[1px] border-solid border-black">
      <Image className="hidden tablet:block" src={logo} alt="Logo" />
      <Image
        className="tablet:hidden"
        src={logoMobile}
        alt="Logo"
        width={135}
        height={50}
      />
      <div className="flex items-center h-max ml-auto">
        <a
          href="#"
          className="mr-4 text-sm tablet:text-xl font-semibold tablet:mr-12"
        >
          About us
        </a>
        <a
          href="#"
          className="flex items-center justify-center w-[78px] tablet:w-[101px] h-[34px] tablet:h-[38px] bg-black rounded text-sm tablet:text-xl text-white font-bold"
        >
          Sign-up
        </a>
      </div>
    </header>
  );
};
