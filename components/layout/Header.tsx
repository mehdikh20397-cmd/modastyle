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
      {/* Top Header */}
      <div className="container-shop">
        <div className="flex min-h-[76px] items-center gap-4">
          {/* Brand */}
          <div className="flex shrink-0 items-center gap-3">
            <Link
              href="/"
              className="group flex items-center gap-2"
              aria-label="ModaStyle"
            >
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#ffe2eb] text-2xl transition group-hover:scale-105">
                ♡
              </div>

              <div className="hidden sm:block">
                <div className="text-[21px] font-black tracking-tight text-[#17263a]">
                  <span className="text-[#f21f73]">Moda</span>
                  Style
                </div>
                <div className="text-[10px] font-semibold text-slate-400">
                  استایل، سبک زندگی
                </div>
              </div>
            </Link>
          </div>

          {/* Search */}
          <div className="mx-auto flex min-w-0 flex-1 justify-center">
            <div className="flex w-full max-w-[620px] items-center gap-3 rounded-full border border-[#eadfd7] bg-white px-5 py-3 shadow-[0_5px_20px_rgba(120,80,60,0.06)] transition focus-within:border-[#f2a0bd] focus-within:shadow-[0_8px_25px_rgba(242,31,115,0.08)]">
              <span className="text-xl text-slate-400">⌕</span>

              <input
                type="text"
                placeholder="جستجو در محصولات، برندها و ..."
                aria-label="جستجو"
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-1">
            {/* Favorites */}
            <button
              type="button"
              aria-label="علاقه‌مندی‌ها"
              className="hidden h-10 w-10 place-items-center rounded-full text-xl transition hover:bg-[#ffe8ef] sm:grid"
            >
              ♡
            </button>

            {/* Account */}
            <button
              type="button"
              aria-label="حساب کاربری"
              className="hidden h-10 w-10 place-items-center rounded-full text-lg transition hover:bg-[#ffe8ef] md:grid"
            >
              ♙
            </button>

            {/* Login */}
            <button
              type="button"
              className="rounded-full bg-[#17263a] px-5 py-3 text-sm font-bold text-white shadow-[0_8px_20px_rgba(23,38,58,0.14)] transition hover:-translate-y-0.5 hover:bg-[#22344e]"
            >
              ورود / ثبت‌نام
            </button>

            {/* Cart */}
            <button
              type="button"
              aria-label="سبد خرید"
              className="relative grid h-11 w-11 place-items-center rounded-full text-xl transition hover:bg-[#ffe8ef]"
            >
              🛒

              <span className="absolute -right-0.5 -top-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-[#f21f73] px-1 text-[10px] font-black text-white">
                2
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-[#f3e8e1]">
        <nav className="container-shop scrollbar-hide flex items-center justify-center gap-7 overflow-x-auto py-3.5">
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