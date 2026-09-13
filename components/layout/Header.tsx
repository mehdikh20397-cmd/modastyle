import Link from "next/link";

const navItems = ["صفحه اصلی", "زنانه", "مردانه", "کفش", "اکسسوری", "برندها", "تخفیف‌ها", "درباره ما", "تماس با ما"];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#f3e2d7] bg-[#fffaf5]/95 backdrop-blur-xl">
      <div className="container-shop flex h-16 items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <Link href="/" className="shrink-0 text-xl font-black tracking-tight text-[#17263a]">
            <span className="text-[#f21f73]">Moda</span>Style
          </Link>
          <span className="hidden border-r border-[#ead9cf] pr-3 text-xs text-slate-500 lg:inline">استایل، سبک زندگی</span>
        </div>

        <div className="hidden min-w-0 flex-1 justify-center lg:flex">
          <div className="flex w-full max-w-xl items-center gap-3 rounded-full border border-[#eadfd7] bg-white px-4 py-2.5 shadow-sm">
            <span className="text-slate-400">⌕</span>
            <input className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400" placeholder="جستجو در محصولات، برندها و ..." aria-label="جستجو" />
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <button aria-label="علاقه‌مندی‌ها" className="grid h-10 w-10 place-items-center rounded-full hover:bg-[#ffe9ef]">♡</button>
          <button aria-label="پروفایل" className="grid h-10 w-10 place-items-center rounded-full hover:bg-[#ffe9ef]">♙</button>
          <button className="hidden rounded-full bg-[#17263a] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 sm:block">ورود / ثبت‌نام</button>
          <button aria-label="سبد خرید" className="relative grid h-10 w-10 place-items-center rounded-full hover:bg-[#ffe9ef]">
            🛒<span className="absolute -right-0.5 -top-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-[#f21f73] px-1 text-[10px] font-bold text-white">2</span>
          </button>
        </div>
      </div>

      <div className="border-t border-[#f4e7df]">
        <nav className="container-shop scrollbar-hide flex gap-6 overflow-x-auto py-3 text-sm font-semibold">
          {navItems.map((item, index) => (
            <Link key={item} href="#" className={`whitespace-nowrap ${index === 0 ? "text-[#f21f73]" : "text-slate-700 hover:text-[#f21f73]"}`}>{item}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
