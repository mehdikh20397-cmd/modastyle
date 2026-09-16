"use client";

import { useState } from "react";

export function ProductOptions() {
  const [size, setSize] = useState("M");
  const [color, setColor] = useState("مشکی");
  const [quantity, setQuantity] = useState(1);

  const sizes = ["S", "M", "L", "XL"];
  const colors = [
    { name: "مشکی", className: "bg-black" },
    { name: "سفید", className: "bg-white" },
    { name: "صورتی", className: "bg-pink-400" },
    { name: "سرمه‌ای", className: "bg-slate-700" },
  ];

  return (
    <div className="mt-7 space-y-7">
      {/* Size */}
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-black">انتخاب سایز</h2>

          <span className="text-xs text-slate-400">
            سایز انتخابی: {size}
          </span>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {sizes.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setSize(item)}
              className={`grid h-11 w-12 place-items-center rounded-xl border text-sm font-bold transition ${
                size === item
                  ? "border-[#f21f73] bg-[#fff0f5] text-[#f21f73]"
                  : "border-[#eadbd1] bg-white hover:border-[#f2a0bd]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Color */}
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-black">انتخاب رنگ</h2>

          <span className="text-xs text-slate-400">
            {color}
          </span>
        </div>

        <div className="mt-3 flex gap-3">
          {colors.map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setColor(item.name)}
              aria-label={`انتخاب رنگ ${item.name}`}
              className={`grid h-11 w-11 place-items-center rounded-full border-2 transition ${
                color === item.name
                  ? "border-[#f21f73] p-1"
                  : "border-transparent"
              }`}
            >
              <span
                className={`h-full w-full rounded-full border border-black/10 ${item.className}`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <h2 className="text-sm font-black">تعداد</h2>

        <div className="mt-3 flex w-fit items-center overflow-hidden rounded-full border border-[#eadbd1] bg-white">
          <button
            type="button"
            onClick={() =>
              setQuantity((current) => Math.max(1, current - 1))
            }
            className="grid h-11 w-11 place-items-center text-lg font-black hover:bg-[#fff0f5]"
          >
            −
          </button>

          <span className="grid h-11 min-w-12 place-items-center border-x border-[#eadbd1] text-sm font-black">
            {quantity}
          </span>

          <button
            type="button"
            onClick={() =>
              setQuantity((current) => current + 1)
            }
            className="grid h-11 w-11 place-items-center text-lg font-black hover:bg-[#fff0f5]"
          >
            +
          </button>
        </div>
      </div>

      {/* Stock */}
      <div className="flex items-center gap-2 rounded-2xl bg-[#f2fbf5] px-4 py-3 text-xs font-bold text-[#24804c]">
        <span>●</span>
        موجود در انبار
      </div>
    </div>
  );
}