const services = [
  ["🚚", "ارسال سریع", "در سراسر کشور"],
  ["🛡️", "ضمانت اصالت کالا", "با امکان بازگشت"],
  ["🎧", "پشتیبانی ۲۴ ساعته", "همیشه در کنار شما"],
  ["🔒", "پرداخت امن", "درگاه بانکی معتبر"],
  ["↩️", "۷ روز ضمانت بازگشت", "بدون دردسر"],
];

export function ServiceHighlights() {
  return (
    <section className="container-shop pb-10">
      <div
        className="
          grid
          grid-cols-2
          gap-2
          rounded-[24px]
          border border-[#ecdcd2]
          bg-white/80
          p-2
          shadow-sm

          sm:grid-cols-2
          sm:gap-3
          sm:p-3

          lg:grid-cols-5
        "
      >
        {services.map(([icon, title, desc], index) => (
          <div
            key={title}
            className={`
              flex
              min-h-[92px]
              items-center
              gap-2
              rounded-[18px]
              px-3
              py-3

              sm:gap-3
              sm:px-4

              lg:rounded-none
              lg:border-r
              lg:border-[#eaded7]
              lg:first:border-r-0

              ${index === 4 ? "col-span-2 sm:col-span-2 lg:col-span-1" : ""}
            `}
          >
            <div
              className="
                grid
                h-11
                w-11
                shrink-0
                place-items-center
                rounded-2xl
                bg-[#ffe4ee]
                text-lg

                sm:h-12
                sm:w-12
                sm:text-xl
              "
            >
              {icon}
            </div>

            <div className="min-w-0">
              <div className="text-xs font-black text-[#17263a] sm:text-sm">
                {title}
              </div>

              <div className="mt-1 text-[9px] leading-4 text-slate-500 sm:text-xs">
                {desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}