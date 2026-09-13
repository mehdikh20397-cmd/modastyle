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
    <section className="container-shop py-6 sm:py-7">
      {/* Mobile */}
      <div
        className="
          flex w-full
          flex-nowrap
          gap-3
          overflow-x-auto
          overscroll-x-contain
          pb-3
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
          sm:hidden
        "
      >
        {categories.map(([title, icon, desc], index) => (
          <button
            key={title}
            type="button"
            className="
              soft-card
              w-[145px]
              min-w-[145px]
              shrink-0
              rounded-[20px]
              px-3
              py-4
              text-center
              transition
              active:scale-[0.98]
            "
          >
            <div
              className={`mx-auto grid h-12 w-12 place-items-center rounded-full text-xl ${
                index === 5 ? "bg-[#ffe0eb]" : "bg-white"
              }`}
            >
              {icon}
            </div>

            <div className="mt-3 text-sm font-extrabold">
              {title}
            </div>

            <div className="mt-1 text-[10px] leading-5 text-slate-500">
              {desc}
            </div>
          </button>
        ))}
      </div>

      {/* Tablet / Desktop */}
      <div className="hidden sm:grid sm:grid-cols-3 sm:gap-3 lg:grid-cols-6">
        {categories.map(([title, icon, desc], index) => (
          <button
            key={title}
            type="button"
            className="soft-card rounded-[22px] px-4 py-5 text-center transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div
              className={`mx-auto grid h-14 w-14 place-items-center rounded-full text-2xl ${
                index === 5 ? "bg-[#ffe0eb]" : "bg-white"
              }`}
            >
              {icon}
            </div>

            <div className="mt-3 font-extrabold">
              {title}
            </div>

            <div className="mt-1 text-xs text-slate-500">
              {desc}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}