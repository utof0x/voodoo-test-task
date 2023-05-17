"use client";

import { useState } from "react";
import Image from "next/image";

import { alert, arrow } from "icons";

export const BlackDisclosure = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="flex flex-col max-w-[1272px] w-full bg-black rounded text-lightSand">
      <div
        className="flex items-center p-6 cursor-pointer select-none"
        onClick={() => setIsOpened((isOpened) => !isOpened)}
      >
        <Image src={alert} alt="Alert sign" width={20} height={20} />
        <span className="ml-1.5 font-bold">ALPHA</span>
        <span className="hidden tablet:block ml-12 font-medium text-sm">
          Important info regarding our service
        </span>
        <span className="block tablet:hidden ml-6 font-medium text-sm">
          Important info
        </span>
        <div className={`ml-auto ${isOpened && "rotate-180"}`}>
          <Image src={arrow} alt="Arrow" width={24} height={24} />
        </div>
      </div>
      {isOpened && (
        <div className="self-center h-[1px] w-[calc(100%-4rem)] bg-lightSand" />
      )}
      {isOpened && <div className="p-6 font-bold">Hidden information</div>}
    </div>
  );
};
