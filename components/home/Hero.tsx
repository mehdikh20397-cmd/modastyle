export function Hero() {
  return (
    <section className="container-shop pt-5">
      <div
        className="
          relative min-h-[410px] overflow-hidden
          rounded-[30px]
          border border-[#efd9ca]
          bg-[#f9d9c7]
          shadow-[0_18px_60px_rgba(180,110,75,0.12)]
          md:min-h-[455px]
        "
      >
        {/* Background */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_72%_20%,rgba(255,255,255,0.65),transparent_28%),linear-gradient(120deg,#efb28f_0%,#f8d8c6_42%,#fff1e7_100%)]
          "
        />

        {/* Decorative circles */}
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/20" />

        <div className="absolute -bottom-32 left-[35%] h-80 w-80 rounded-full bg-[#f21f73]/10 blur-3xl" />

        {/* =========================
            Fashion Visual
        ========================== */}
        <div className="absolute inset-y-0 left-0 hidden w-[55%] md:block">
          {/* Man body */}
          <div
            className="
              absolute bottom-0 left-[4%]
              h-[69%] w-[27%]
              rounded-t-[90px]
              bg-gradient-to-b
              from-[#263650]
              via-[#17263a]
              to-[#0f1724]
              shadow-2xl
            "
          />

          {/* Man head */}
          <div
            className="
              absolute left-[9%] top-[18%]
              h-24 w-24
              rounded-full
              bg-[#d9a17b]
              shadow-lg
            "
          />

          {/* Man hair */}
          <div
            className="
              absolute left-[10%] top-[15%]
              h-9 w-28
              -rotate-6
              rounded-full
              bg-[#17263a]
            "
          />

          {/* Man clothes detail */}
          <div
            className="
              absolute left-[13%] top-[39%]
              h-3 w-16
              -rotate-6
              rounded-full
              bg-white/20
            "
          />

          {/* Woman body */}
          <div
            className="
              absolute bottom-0 left-[31%]
              h-[82%] w-[31%]
              rounded-t-[100px]
              bg-gradient-to-b
              from-[#f58bab]
              via-[#e87398]
              to-[#ce507d]
              shadow-2xl
            "
          />

          {/* Woman head */}
          <div
            className="
              absolute left-[36%] top-[11%]
              h-28 w-28
              rounded-full
              bg-[#d99a79]
              shadow-xl
            "
          />

          {/* Woman hair */}
          <div
            className="
              absolute left-[33%] top-[7%]
              h-16 w-36
              rounded-full
              bg-[#273143]
            "
          />

          {/* Cap */}
          <div
            className="
              absolute left-[41%] top-[4%]
              flex h-9 w-20
              items-center justify-center
              rounded-full
              bg-white
              text-xs font-black
              text-[#17263a]
              shadow
            "
          >
            NY
          </div>

          {/* Sunglasses */}
          <div className="absolute left-[39%] top-[30%] text-3xl">
            🕶️
          </div>

          {/* Slogan */}
          <div
            className="
              absolute bottom-8 left-8
              rounded-[20px]
              bg-white/75
              px-6 py-4
              text-center
              shadow-lg
              backdrop-blur
            "
          >
            <div className="text-lg font-black text-[#17263a]">
              Better Style
            </div>

            <div className="text-sm font-bold text-[#a43d62]">
              Better Mood ♡
            </div>
          </div>
        </div>

        {/* =========================
            Content
        ========================== */}
        <div
          className="
            relative z-20
            min-h-[410px]
            md:min-h-[455px]
          "
        >
          <div
            className="
              absolute right-7 top-1/2
              w-[calc(100%-56px)]
              max-w-[570px]
              -translate-y-1/2
              text-right
              md:right-14
              md:w-[48%]
              lg:right-20
            "
          >
            {/* Label */}
            <div
              className="
                mb-4 inline-flex
                items-center gap-2
                rounded-full
                bg-white/70
                px-4 py-2
                text-xs font-bold
                text-[#a43d62]
                backdrop-blur
              "
            >
              ♡ فروشگاه آنلاین لباس، کفش و اکسسوری
            </div>

            {/* Heading */}
            <h1
              className="
                text-4xl font-black
                leading-[1.2]
                tracking-tight
                text-[#17263a]
                sm:text-5xl
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
                mt-5
                max-w-[520px]
                text-sm
                leading-8
                text-slate-700
                md:text-[15px]
              "
            >
              جدیدترین مدل‌های لباس، کفش و اکسسوری زنانه و مردانه
              را با بهترین کیفیت و قیمت، همین حالا پیدا کنید.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap justify-end gap-3">
              <button
                className="
                  rounded-full
                  bg-[#f21f73]
                  px-8 py-3.5
                  text-sm font-black
                  text-white
                  shadow-[0_12px_30px_rgba(242,31,115,0.25)]
                  transition duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_16px_35px_rgba(242,31,115,0.32)]
                "
              >
                مشاهده محصولات ←
              </button>

              <button
                className="
                  rounded-full
                  border border-white/80
                  bg-white/75
                  px-7 py-3.5
                  text-sm font-bold
                  text-[#17263a]
                  backdrop-blur
                  transition duration-300
                  hover:bg-white
                "
              >
                تخفیف‌ها
              </button>
            </div>
          </div>
        </div>

        {/* =========================
            Slider
        ========================== */}
        <div
          className="
            absolute bottom-5 left-1/2
            z-30
            flex
            -translate-x-1/2
            items-center gap-2
          "
        >
          <span className="h-2.5 w-8 rounded-full bg-[#17263a]" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
        </div>

        {/* Arrows */}
        <button
          aria-label="اسلاید قبلی"
          className="
            absolute bottom-5 left-4
            z-30
            grid h-10 w-10
            place-items-center
            rounded-full
            bg-white/90
            text-lg
            shadow-md
            transition
            hover:scale-105
          "
        >
          →
        </button>

        <button
          aria-label="اسلاید بعدی"
          className="
            absolute bottom-5 left-16
            z-30
            grid h-10 w-10
            place-items-center
            rounded-full
            bg-white/90
            text-lg
            shadow-md
            transition
            hover:scale-105
          "
        >
          ←
        </button>
      </div>
    </section>
  );
}