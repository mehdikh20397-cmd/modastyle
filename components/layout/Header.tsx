import Link from "next/link";

const navItems = [
  "صفحه اصلی",
  "زنانه",
  "مردانه",
  "کفش",
  "اکسسوری",
  "برندها",
  "تخفیف‌ها",
  "درباره ما",
  "تماس با ما",
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#eedfd6] bg-[#fffaf5]/95 backdrop-blur-xl">
      <div className="container-shop">
        {/* Main header */}
        <div className="flex min-h-[68px] items-center gap-2 sm:min-h-[76px] sm:gap-4">

          {/* Mobile menu */}
          <button
            type="button"
            aria-label="باز کردن منو"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#ffe6ee] text-lg transition hover:bg-[#ffd4e2] sm:hidden"
          >
            ☰
          </button>

          {/* Brand */}
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-2"
            aria-label="ModaStyle"
          >
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#ffe2eb] text-xl transition group-hover:scale-105 sm:h-11 sm:w-11 sm:text-2xl">
              ♡
            </div>

            <div>
              <div className="text-[18px] font-black tracking-tight text-[#17263a] sm:text-[21px]">
                <span className="text-[#f21f73]">Moda</span>Style
              </div>

              <div className="text-[9px] font-semibold text-slate-400 sm:text-[10px]">
                استایل، سبک زندگی
              </div>
            </div>
          </Link>

          {/* Desktop search */}
          <div className="mx-auto hidden min-w-0 flex-1 justify-center lg:flex">
            <div className="flex w-full max-w-[620px] items-center gap-3 rounded-full border border-[#eadfd7] bg-white px-5 py-3 shadow-[0_5px_20px_rgba(120,80,60,0.06)] transition focus-within:border-[#f2a0bd]">
              <span className="text-xl text-slate-400">⌕</span>

              <input
                type="text"
                placeholder="جستجو در محصولات، برندها و ..."
                aria-label="جستجو"
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Desktop actions */}
          <div className="mr-auto flex shrink-0 items-center gap-1 sm:gap-2">
            <button
              type="button"
              aria-label="علاقه‌مندی‌ها"
              className="hidden h-10 w-10 place-items-center rounded-full text-xl transition hover:bg-[#ffe8ef] sm:grid"
            >
              ♡
            </button>

            <button
              type="button"
              aria-label="حساب کاربری"
              className="hidden h-10 w-10 place-items-center rounded-full text-lg transition hover:bg-[#ffe8ef] md:grid"
            >
              ♙
            </button>

            <button
              type="button"
              className="hidden rounded-full bg-[#17263a] px-5 py-3 text-sm font-bold text-white shadow-[0_8px_20px_rgba(23,38,58,0.14)] transition hover:-translate-y-0.5 hover:bg-[#22344e] sm:block"
            >
              ورود / ثبت‌نام
            </button>

            <button
              type="button"
              aria-label="سبد خرید"
              className="relative grid h-10 w-10 place-items-center rounded-full text-lg transition hover:bg-[#ffe8ef] sm:h-11 sm:w-11 sm:text-xl"
            >
              🛒

              <span className="absolute -right-0.5 -top-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-[#f21f73] px-1 text-[10px] font-black text-white">
                2
              </span>
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="pb-3 lg:hidden">
          <div className="flex items-center gap-3 rounded-full border border-[#eadfd7] bg-white px-4 py-2.5 shadow-[0_5px_20px_rgba(120,80,60,0.06)]">
            <span className="text-lg text-slate-400">⌕</span>

            <input
              type="text"
              placeholder="جستجو در محصولات..."
              aria-label="جستجو"
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="hidden border-t border-[#f3e8e1] sm:block">
        <nav className="container-shop scrollbar-hide flex items-center justify-center gap-5 overflow-x-auto py-3.5 md:gap-7">
          {navItems.map((item, index) => (
            <Link
              key={item}
              href="#"
              className={`relative whitespace-nowrap text-sm font-bold transition ${
                index === 0
                  ? "text-[#f21f73]"
                  : "text-[#26354a] hover:text-[#f21f73]"
              }`}
            >
              {item}

              {index === 0 && (
                <span className="absolute -bottom-[15px] left-0 right-0 h-[3px] rounded-full bg-[#f21f73]" />
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}