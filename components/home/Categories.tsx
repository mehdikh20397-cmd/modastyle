const categories = [
  ["همه دسته‌بندی‌ها", "▦", "پیشنهادها و محصولات جدید"],
  ["زنانه", "👗", "پوشاک شیک و متنوع"],
  ["مردانه", "🧥", "استایل مدرن"],
  ["کفش", "👟", "راحتی و استایل"],
  ["اکسسوری", "👜", "زیبایی در جزئیات"],
  ["تخفیف‌های ویژه", "%", "تا ۷۰٪ تخفیف"],
];

export function Categories() {
  return (
    <section className="container-shop py-7">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map(([title, icon, desc], index) => (
          <button key={title} className="soft-card rounded-[22px] px-4 py-5 text-center transition hover:-translate-y-1">
            <div className={`mx-auto grid h-14 w-14 place-items-center rounded-full text-2xl ${index === 5 ? "bg-[#ffe0eb]" : "bg-white"}`}>{icon}</div>
            <div className="mt-3 font-extrabold">{title}</div>
            <div className="mt-1 text-xs text-slate-500">{desc}</div>
          </button>
        ))}
      </div>
    </section>
  );
}
