export function Footer() {
  return (
    <footer className="bg-[#101826] text-slate-300">
      <div className="container-shop grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="text-2xl font-black text-white"><span className="text-[#f21f73]">Moda</span>Style</div>
          <p className="mt-3 text-sm leading-7 text-slate-400">استایل خودت را بساز؛ انتخابی متفاوت برای هر روز.</p>
          <div className="mt-5 flex gap-2">
            {["◎", "✈", "◉", "▶"].map((item) => <span key={item} className="grid h-9 w-9 place-items-center rounded-full bg-white/10">{item}</span>)}
          </div>
        </div>

        <div>
          <h3 className="font-black text-white">دسته‌بندی‌ها</h3>
          <div className="mt-4 grid gap-2 text-sm"><a href="#">زنانه</a><a href="#">مردانه</a><a href="#">کفش</a><a href="#">اکسسوری</a><a href="#">تخفیف‌ها</a></div>
        </div>

        <div>
          <h3 className="font-black text-white">دسترسی سریع</h3>
          <div className="mt-4 grid gap-2 text-sm"><a href="#">صفحه اصلی</a><a href="#">فروشگاه</a><a href="#">پیگیری سفارش</a><a href="#">سوالات متداول</a><a href="#">تماس با ما</a></div>
        </div>

        <div>
          <h3 className="font-black text-white">مدیر پروژه و توسعه‌دهنده</h3>
          <div className="mt-4 space-y-2 text-sm">
            <div className="font-bold text-white">مهدی خسروی</div>
            <div>mehdi.kh20397@gmail.com</div>
            <div>+98 937 369 8658</div>
            <div>Mashhad Center</div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">© 2026 تمامی حقوق محفوظ است.</div>
    </footer>
  );
}
