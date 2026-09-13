export function Hero() {
  return (
    <section className="container-shop pt-6">
      <div className="relative min-h-[360px] overflow-hidden rounded-[32px] border border-[#efd8c9] bg-gradient-to-l from-[#fff0e5] via-[#f9d8c6] to-[#efb99e] shadow-[0_20px_70px_rgba(190,120,90,0.14)] md:min-h-[450px]">

        {/* Decorative circles */}
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/20 blur-2xl" />
        <div className="absolute -bottom-20 left-1/3 h-64 w-64 rounded-full bg-[#f21f73]/10 blur-3xl" />

        {/* Fashion visual placeholder */}
        <div className="absolute bottom-0 left-0 hidden h-full w-[52%] md:block">
          <div className="absolute bottom-0 left-[8%] h-[78%] w-[38%] rounded-t-[45%] bg-gradient-to-b from-[#243044] to-[#121b29]" />
          <div className="absolute bottom-0 left-[30%] h-[88%] w-[35%] rounded-t-[45%] bg-gradient-to-b from-[#f6a2b9] to-[#e86f98]" />
          <div className="absolute left-[12%] top-[17%] text-6xl">🕶️</div>
          <div className="absolute left-[42%] top-[10%] text-6xl">🧢</div>

          <div className="absolute bottom-8 left-8 rounded-2xl bg-white/65 px-5 py-3 text-sm font-bold backdrop-blur">
            Better Style
            <br />
            Better Mood ♡
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-h-[360px] items-center justify-start px-7 py-10 md:min-h-[450px] md:px-16">
          <div className="max-w-[560px] text-right">

            <p className="mb-4 text-sm font-bold text-[#b73d69]">
              ♡ فروشگاه آنلاین لباس، کفش و اکسسوری
            </p>

            <h1 className="text-4xl font-black leading-[1.2] tracking-tight text-[#17263a] md:text-6xl">
              استایل خاص،
              <br />
              برای هر سلیقه‌ای
            </h1>

            <p className="mt-5 max-w-[500px] text-sm leading-8 text-slate-700 md:text-base">
              جدیدترین مدل‌های لباس، کفش و اکسسوری زنانه و مردانه
              را با بهترین کیفیت و قیمت، همین حالا پیدا کنید.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <button className="rounded-full bg-[#f21f73] px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-pink-300/30 transition hover:-translate-y-1 hover:shadow-pink-300/50">
                مشاهده محصولات ←
              </button>

              <button className="rounded-full border border-white/80 bg-white/70 px-5 py-3.5 text-sm font-bold text-[#17263a] backdrop-blur transition hover:bg-white">
                تخفیف‌ها
              </button>
            </div>

          </div>
        </div>

        {/* Slider dots */}
        <div className="absolute bottom-5 right-1/2 z-10 flex translate-x-1/2 gap-2">
          <span className="h-2.5 w-7 rounded-full bg-[#17263a]" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
        </div>

      </div>
    </section>
  );
}