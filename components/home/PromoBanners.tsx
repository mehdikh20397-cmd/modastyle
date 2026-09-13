const banners = [
  {
    title: "تخفیف ویژه",
    subtitle: "تا ۷۰٪",
    description: "برندهای منتخب لباس و اکسسوری",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "جدیدترین مدل‌های کفش",
    subtitle: "راحت، استایل، آماده به تن",
    description: "مدل‌های تازه رسیده",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "استایل مردانه",
    subtitle: "کیفیت، اصالت، جذابیت",
    description: "برای انتخاب بهتر",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85",
  },
];

export function PromoBanners() {
  return (
    <section className="container-shop pb-8 sm:pb-10">
      {/* Mobile / Small */}
      <div
        className="
          flex
          flex-nowrap
          gap-3
          overflow-x-auto
          overscroll-x-contain
          pb-3
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
          md:hidden
        "
      >
        {banners.map((banner) => (
          <div
            key={banner.title}
            className="
              relative
              h-[175px]
              w-[290px]
              min-w-[290px]
              shrink-0
              overflow-hidden
              rounded-[24px]
              border border-[#efdcd1]
              bg-[#f9dfd2]
            "
          >
            <img
              src={banner.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-l from-white/95 via-white/65 to-transparent" />

            <div className="relative z-10 max-w-[210px] p-5">
              <div className="text-lg font-black text-[#17263a]">
                {banner.title}
              </div>

              <div className="mt-1 text-base font-black text-[#f21f73]">
                {banner.subtitle}
              </div>

              <div className="mt-1 text-[10px] leading-5 text-slate-700">
                {banner.description}
              </div>

              <button
                type="button"
                className="mt-3 rounded-full bg-[#17263a] px-4 py-2 text-[10px] font-bold text-white"
              >
                مشاهده
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden gap-4 md:grid md:grid-cols-3">
        {banners.map((banner) => (
          <div
            key={banner.title}
            className="relative h-40 overflow-hidden rounded-[24px] border border-[#efdcd1] bg-[#f9dfd2]"
          >
            <img
              src={banner.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-l from-white/95 via-white/55 to-transparent" />

            <div className="relative z-10 p-6">
              <div className="text-xl font-black text-[#17263a]">
                {banner.title}
              </div>

              <div className="mt-1 font-black text-[#f21f73]">
                {banner.subtitle}
              </div>

              <div className="mt-1 text-xs text-slate-700">
                {banner.description}
              </div>

              <button
                type="button"
                className="mt-3 rounded-full bg-[#17263a] px-4 py-2 text-xs font-bold text-white"
              >
                مشاهده
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}