export function Hero() {
  return (
    <section className="container-shop pt-4 sm:pt-5">
      <div className="relative min-h-[470px] overflow-hidden rounded-[26px] border border-[#efd9ca] bg-[#f9d9c7] shadow-[0_18px_60px_rgba(180,110,75,0.12)] sm:min-h-[430px] md:min-h-[455px]">

        {/* Background */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.7),transparent_25%),linear-gradient(145deg,#efb28f_0%,#f8d8c6_42%,#fff1e7_100%)]
          "
        />

        {/* Decorative circles */}
        <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/20 sm:h-72 sm:w-72" />

        <div className="absolute -bottom-32 left-[35%] h-72 w-72 rounded-full bg-[#f21f73]/10 blur-3xl" />

        {/* Fashion visual - desktop/tablet */}
        <div className="absolute inset-y-0 left-0 hidden w-[48%] md:block">

          {/* Man */}
          <div className="absolute bottom-0 left-[4%] h-[69%] w-[27%] rounded-t-[90px] bg-gradient-to-b from-[#263650] via-[#17263a] to-[#0f1724] shadow-2xl" />

          <div className="absolute left-[9%] top-[18%] h-24 w-24 rounded-full bg-[#d9a17b] shadow-lg" />

          <div className="absolute left-[10%] top-[15%] h-9 w-28 -rotate-6 rounded-full bg-[#17263a]" />

          {/* Woman */}
          <div className="absolute bottom-0 left-[31%] h-[82%] w-[31%] rounded-t-[100px] bg-gradient-to-b from-[#f58bab] via-[#e87398] to-[#ce507d] shadow-2xl" />

          <div className="absolute left-[36%] top-[11%] h-28 w-28 rounded-full bg-[#d99a79] shadow-xl" />

          <div className="absolute left-[33%] top-[7%] h-16 w-36 rounded-full bg-[#273143]" />

          <div className="absolute left-[41%] top-[4%] flex h-9 w-20 items-center justify-center rounded-full bg-white text-xs font-black text-[#17263a] shadow">
            NY
          </div>

          <div className="absolute left-[39%] top-[30%] text-3xl">
            🕶️
          </div>

          <div className="absolute bottom-7 left-6 rounded-[20px] bg-white/75 px-5 py-3 text-center shadow-lg backdrop-blur">
            <div className="text-base font-black text-[#17263a]">
              Better Style
            </div>

            <div className="text-xs font-bold text-[#a43d62]">
              Better Mood ♡
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-20 flex min-h-[470px] items-center sm:min-h-[430px] md:min-h-[455px]">
          <div
            className="
              mx-auto w-[calc(100%-36px)]
              text-center
              sm:text-right
              md:mr-14
              md:ml-0
              md:w-[48%]
              lg:mr-20
            "
          >

            {/* Label */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/75 px-3.5 py-2 text-[11px] font-bold text-[#a43d62] backdrop-blur sm:px-4 sm:text-xs">
              ♡ فروشگاه آنلاین لباس، کفش و اکسسوری
            </div>

            {/* Heading */}
            <h1
              className="
                text-[34px]
                font-black
                leading-[1.25]
                tracking-tight
                text-[#17263a]

                sm:text-4xl
                md:text-5xl
                lg:text-6xl
              "
            >
              استایل خاص،
              <br />
              برای هر سلیقه‌ای
            </h1>

            {/* Description */}
            <p
              className="
                mx-auto mt-5
                max-w-[470px]
                text-[13px]
                leading-7
                text-slate-700

                sm:text-sm
                md:text-[15px]
              "
            >
              جدیدترین مدل‌های لباس، کفش و اکسسوری زنانه و مردانه را
              با بهترین کیفیت و قیمت، همین حالا پیدا کنید.
            </p>

            {/* Buttons */}
            <div
              className="
                mt-7
                flex
                flex-col
                items-center
                justify-center
                gap-3

                sm:flex-row
                sm:justify-end
              "
            >
              <button className="w-full max-w-[230px] rounded-full bg-[#f21f73] px-7 py-3.5 text-sm font-black text-white shadow-[0_12px_30px_rgba(242,31,115,0.25)] transition hover:-translate-y-1 sm:w-auto">
                مشاهده محصولات ←
              </button>

              <button className="w-full max-w-[180px] rounded-full border border-white/80 bg-white/80 px-7 py-3.5 text-sm font-bold text-[#17263a] backdrop-blur transition hover:bg-white sm:w-auto">
                تخفیف‌ها
              </button>
            </div>
          </div>
        </div>

        {/* Slider dots */}
        <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2">
          <span className="h-2.5 w-7 rounded-full bg-[#17263a]" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/90" />
        </div>

        {/* Arrows */}
        <div className="absolute bottom-4 left-4 z-30 flex gap-2">
          <button
            aria-label="اسلاید قبلی"
            className="grid h-9 w-9 place-items-center rounded-full bg-white/90 text-sm shadow-md"
          >
            →
          </button>

          <button
            aria-label="اسلاید بعدی"
            className="grid h-9 w-9 place-items-center rounded-full bg-white/90 text-sm shadow-md"
          >
            ←
          </button>
        </div>
      </div>
    </section>
  );
}