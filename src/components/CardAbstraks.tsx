"use client";

import { IoEyeOutline } from "react-icons/io5";

interface CardAbstraksProps {
  summary: string;
  fileUrl: string;
}

export default function CardAbstraks({ summary, fileUrl }: CardAbstraksProps) {
  const handleClick = () => {
    window.open(fileUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="border border-[#097969] rounded-[20px] p-6 mt-10">
      <div className="flex items-center justify-between mb-7">
        <h2 className="text-[#097969] text-[32px] leading-10 tracking-[-0.02em] font-bold">
          Abstrak
        </h2>

        <button
          onClick={handleClick}
          className="
            inline-flex
            items-center
            gap-2
            px-6
            py-3
            bg-[#097969]
            rounded-[22px]
            text-base
            text-white
            hover:opacity-90
            transition
            cursor-pointer
          "
        >
          <IoEyeOutline size={24} />
          Abstrak
        </button>
      </div>

      <p className="text-base leading-6 text-black opacity-[0.8] tracking-[-0.01em]">
        {summary}
      </p>
    </div>
  );
}
