import Image from "next/image";

interface Props {
  id: number;
  conditionMark: "USED" | "NEW";
  condition: string;
  name: string;
  imageSrc: string;
}

export const Product = ({
  id,
  conditionMark,
  condition,
  name,
  imageSrc,
}: Props) => (
  <div className="mb-12">
    <div className="relative w-[338px] tablet:w-[298px] h-[298px] border-[1px] border-solid border-black rounded">
      <Image src={imageSrc} alt={name} fill />
      <div className="absolute flex items-center justify-center w-[47px] h-[24px] top-3 left-3 bg-black text-lightSand text-xs rounded">
        {conditionMark}
      </div>
    </div>
    <div className="flex justify-between w-full mt-3">
      <div>
        <div className="text-sm font-bold">Product name</div>
        <div className="text-sm font-bold">000 KR.</div>
      </div>
      <div>
        <div className="text-sm font-medium text-right">Condition</div>
        <div className="text-sm text-right">{condition}</div>
      </div>
    </div>
    <a
      href=""
      className="flex items-center justify-center w-full h-[42px] mt-3 bg-black rounded text-sm text-white font-bold"
    >
      PICK-UP IN &nbsp;
      <span className="underline">{id}</span>
    </a>
  </div>
);
