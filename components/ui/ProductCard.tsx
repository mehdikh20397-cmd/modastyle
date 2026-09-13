type Product = {
  name: string;
  category: string;
  price: string;
  oldPrice: string;
  badge: string;
  image: string;
};

const productVisuals: Record<string, string> = {
  "عینک آفتابی مردانه": "🕶️",
  "ساعت مچی مردانه": "⌚",
  "کفش پاشنه‌بلند زنانه": "👠",
  "هودی مردانه": "🧥",
  "کتانی مردانه": "👟",
  "کیف دستی زنانه": "👜",
};

export function ProductCard({ product }: { product: Product }) {
  const visual = productVisuals[product.name] ?? "🛍️";

  return (
    <article className="soft-card group min-w-[220px] flex-1 overflow-hidden rounded-[24px] p-2.5 transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[19px] bg-gradient-to-br from-[#fff6ef] to-[#f4dccc]">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8),transparent_55%)]" />

        <span className="relative z-10 text-[90px] drop-shadow-xl transition duration-500 group-hover:scale-110">
          {visual}
        </span>

        <span className="absolute right-2 top-2 rounded-full bg-[#f21f73] px-2.5 py-1 text-[11px] font-bold text-white">
          {product.badge}
        </span>

        <button
          aria-label="افزودن به علاقه‌مندی‌ها"
          className="absolute bottom-2 left-2 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-lg shadow transition hover:scale-110"
        >
          ♡
        </button>
      </div>

      <div className="px-1.5 pb-3 pt-3">

        <h3 className="font-bold">
          {product.name}
        </h3>

        <p className="mt-1 text-xs text-slate-500">
          {product.category}
        </p>

        <div className="mt-4 flex items-end justify-between gap-2">

          <div>
            <div className="text-base font-black">
              {product.price}
              <span className="mr-1 text-xs font-medium">
                تومان
              </span>
            </div>

            {product.oldPrice && (
              <div className="mt-1 text-xs text-slate-400 line-through">
                {product.oldPrice} تومان
              </div>
            )}
          </div>

          <div className="text-xs text-amber-500">
            ★ ۴.۸
          </div>

        </div>
      </div>
    </article>
  );
}