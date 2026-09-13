export function Footer() {
  return (
    <footer className="bg-[#101826] text-slate-300">
      <div className="container-shop py-10 sm:py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="text-2xl font-black text-white">
              <span className="text-[#f21f73]">Moda</span>
              Style
            </div>

            <p className="mt-3 max-w-[320px] text-sm leading-7 text-slate-400">
              استایل خودت را بساز؛ انتخابی متفاوت برای هر روز.
            </p>

            <div className="mt-5 flex gap-2">
              {["◎", "✈", "◉", "▶"].map((item) => (
                <a
                  key={item}
                  href="#"
                  aria-label="شبکه اجتماعی"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-sm transition hover:bg-[#f21f73] hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-black text-white">
              دسته‌بندی‌ها
            </h3>

            <div className="mt-4 grid gap-2 text-sm">
              <a href="#" className="hover:text-white">زنانه</a>
              <a href="#" className="hover:text-white">مردانه</a>
              <a href="#" className="hover:text-white">کفش</a>
              <a href="#" className="hover:text-white">اکسسوری</a>
              <a href="#" className="hover:text-white">تخفیف‌ها</a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-black text-white">
              دسترسی سریع
            </h3>

            <div className="mt-4 grid gap-2 text-sm">
              <a href="#" className="hover:text-white">صفحه اصلی</a>
              <a href="#" className="hover:text-white">فروشگاه</a>
              <a href="#" className="hover:text-white">پیگیری سفارش</a>
              <a href="#" className="hover:text-white">سوالات متداول</a>
              <a href="#" className="hover:text-white">تماس با ما</a>
            </div>
          </div>

          {/* Project manager */}
          <div>
            <h3 className="font-black text-white">
              مدیر پروژه و توسعه‌دهنده
            </h3>

            <div className="mt-4 space-y-2 text-sm leading-6">
              <div className="font-bold text-white">
                مهدی خسروی
              </div>

              <a
                href="mailto:mehdi.kh20397@gmail.com"
                className="block hover:text-white"
              >
                mehdi.kh20397@gmail.com
              </a>

              <a
                href="tel:+989373698658"
                className="block hover:text-white"
              >
                +98 937 369 8658
              </a>

              <div>
                Mashhad Center
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-[10px] text-slate-500 sm:text-xs">
        © 2026 تمامی حقوق محفوظ است.
      </div>
    </footer>
  );
}