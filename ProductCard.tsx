type Product = {
  name: string;
  category: string;
  price: string;
  oldPrice: string;
  badge: string;
  image: string;
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group relative overflow-hidden rounded-[26px] border border-[#efdfd5] bg-white p-2.5 shadow-[0_10px_35px_rgba(90,60,45,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(90,60,45,0.11)]">
      <div className="relative aspect-[0.92] overflow-hidden rounded-[20px] bg-gradient-to-br from-[#fff8f1] to-[#f3dfd2]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />

        <span className="absolute right-3 top-3 rounded-full bg-[#f21f73] px-3 py-1.5 text-[10px] font-black text-white shadow-sm">
          {product.badge}
        </span>

        <button
          type="button"
          aria-label={`افزودن ${product.name} به علاقه‌مندی‌ها`}
          className="absolute left-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-xl shadow-sm backdrop-blur transition hover:scale-110 hover:text-[#f21f73]"
        >
          ♡
        </button>
      </div>

      <div className="px-1.5 pb-1.5 pt-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-sm font-black text-[#17263a]">{product.name}</h3>
            <p className="mt-1 text-[11px] text-slate-500">{product.category}</p>
          </div>

          <div className="shrink-0 rounded-full bg-[#fff3cf] px-2 py-1 text-[10px] font-bold text-[#b77a00]">
            ★ ۴.۸
          </div>
        </div>

        <div className="mt-4 flex items-end justify-between gap-2">
          <div>
            <div className="text-base font-black text-[#17263a]">
              {product.price}
              <span className="mr-1 text-[10px] font-medium text-slate-500">تومان</span>
            </div>

            {product.oldPrice && (
              <div className="mt-1 text-[10px] text-slate-400 line-through">
                {product.oldPrice} تومان
              </div>
            )}
          </div>

          <button
            type="button"
            aria-label={`افزودن ${product.name} به سبد خرید`}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#17263a] text-base text-white transition hover:scale-105 hover:bg-[#f21f73]"
          >
            +
          </button>
        </div>
      </div>
    </article>
  );
}
