const banners = [
  ["تخفیف ویژه", "تا ۷۰٪", "برندهای منتخب لباس و اکسسوری", "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85"],
  ["جدیدترین مدل‌های کفش", "راحت، استایل، آماده به تن", "مدل‌های تازه رسیده", "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85"],
  ["استایل مردانه", "کیفیت، اصالت، جذابیت", "برای انتخاب بهتر", "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85"],
];

export function PromoBanners() {
  return (
    <section className="container-shop pb-8">
      <div className="grid gap-4 md:grid-cols-3">
        {banners.map(([title, subtitle, cta, image]) => (
          <div key={title} className="relative h-40 overflow-hidden rounded-[24px]">
            <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-l from-white/95 via-white/55 to-transparent" />
            <div className="relative p-6">
              <div className="text-xl font-black">{title}</div>
              <div className="mt-1 font-extrabold text-[#f21f73]">{subtitle}</div>
              <div className="mt-1 text-xs text-slate-700">{cta}</div>
              <button className="mt-3 rounded-full bg-[#17263a] px-4 py-2 text-xs font-bold text-white">مشاهده</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
