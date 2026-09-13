export function Hero() {
  return (
    <section className="container-shop pt-5">
      <div className="relative min-h-[410px] overflow-hidden rounded-[30px] border border-[#efd9ca] bg-[#f9d9c7] shadow-[0_18px_60px_rgba(180,110,75,0.12)] md:min-h-[455px]">
        <img
          src="/images/hero/fashion-hero.svg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-l from-[#fff1e7]/92 via-[#fff0e4]/35 to-transparent" />

        <div className="relative z-10 min-h-[410px] md:min-h-[455px]">
          <div className="absolute right-7 top-1/2 w-[calc(100%-56px)] max-w-[570px] -translate-y-1/2 text-right md:right-14 md:w-[48%] lg:right-20">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-2 text-xs font-bold text-[#a43d62] backdrop-blur">
              ♡ فروشگاه آنلاین لباس، کفش و اکسسوری
            </div>

            <h1 className="text-4xl font-black leading-[1.2] tracking-tight text-[#17263a] sm:text-5xl md:text-5xl lg:text-6xl">
              استایل خاص،
              <br />
              برای هر سلیقه‌ای
            </h1>

            <p className="mt-5 max-w-[520px] text-sm leading-8 text-slate-700 md:text-[15px]">
              جدیدترین مدل‌های لباس، کفش و اکسسوری زنانه و مردانه را با بهترین کیفیت و قیمت، همین حالا پیدا کنید.
            </p>

            <div className="mt-7 flex flex-wrap justify-end gap-3">
              <button className="rounded-full bg-[#f21f73] px-8 py-3.5 text-sm font-black text-white shadow-[0_12px_30px_rgba(242,31,115,0.25)] transition duration-300 hover:-translate-y-1">
                مشاهده محصولات ←
              </button>

              <button className="rounded-full border border-white/80 bg-white/80 px-7 py-3.5 text-sm font-bold text-[#17263a] backdrop-blur transition hover:bg-white">
                تخفیف‌ها
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2">
          <span className="h-2.5 w-8 rounded-full bg-[#17263a]" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/90" />
        </div>
      </div>
    </section>
  );
}
