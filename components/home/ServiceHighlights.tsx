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
      <div className="grid rounded-[28px] border border-[#ecdcd2] bg-white/75 p-3 shadow-sm sm:grid-cols-2 lg:grid-cols-5">
        {services.map(([icon, title, desc]) => (
          <div key={title} className="flex items-center gap-3 border-[#eaded7] px-4 py-4 lg:border-r lg:first:border-r-0">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#ffe4ee] text-xl">{icon}</div>
            <div><div className="font-black text-sm">{title}</div><div className="mt-1 text-xs text-slate-500">{desc}</div></div>
          </div>
        ))}
      </div>
    </section>
  );
}
