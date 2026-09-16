"use client";

import { useState } from "react";

type Props = {
  image: string;
  name: string;
};

export function ProductGallery({ image, name }: Props) {
  const [activeImage, setActiveImage] = useState(image);

  const images = [image, image, image];

  return (
    <div className="grid gap-3">
      <div className="overflow-hidden rounded-[28px] border border-[#efdfd5] bg-white p-3 shadow-sm">
        <div className="aspect-square overflow-hidden rounded-[22px] bg-[#fff5ed]">
          <img
            src={activeImage}
            alt={name}
            className="h-full w-full object-cover transition duration-300"
          />
        </div>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-1">
        {images.map((item, index) => (
          <button
            key={`${item}-${index}`}
            type="button"
            onClick={() => setActiveImage(item)}
            className={`h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-2 bg-white p-1 ${
              activeImage === item
                ? "border-[#f21f73]"
                : "border-[#eadbd1]"
            }`}
          >
            <img
              src={item}
              alt=""
              className="h-full w-full rounded-xl object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}