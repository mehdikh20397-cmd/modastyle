import Link from "next/link";
import { products } from "@/data/products";
import { ProductGallery } from "@/components/products/ProductGallery";
import { ProductOptions } from "@/components/products/ProductOptions";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  const productIndex = Number(id);
  const product = products[productIndex];

  if (!product) {
    return (
      <main className="container-shop py-20 text-center">
        <h1 className="text-2xl font-black">
          محصول پیدا نشد
        </h1>

        <p className="mt-3 text-sm text-slate-500">
          محصول موردنظر وجود ندارد یا حذف شده است.
        </p>

        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-[#17263a] px-6 py-3 text-sm font-bold text-white"
        >
          بازگشت به فروشگاه
        </Link>
      </main>
    );
  }

  return (
    <main className="container-shop py-6 sm:py-10">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-2 text-xs text-slate-400">
        <Link href="/" className="hover:text-[#f21f73]">
          خانه
        </Link>

        <span>←</span>

        <span>محصولات</span>

        <span>←</span>

        <span className="text-slate-600">
          {product.name}
        </span>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Gallery */}
        <ProductGallery
          image={product.image}
          name={product.name}
        />

        {/* Info */}
        <div className="flex flex-col justify-center">
          <span className="w-fit rounded-full bg-[#ffe3ec] px-3 py-1.5 text-xs font-bold text-[#f21f73]">
            {product.badge}
          </span>

          <h1 className="mt-4 text-3xl font-black leading-tight text-[#17263a] md:text-4xl">
            {product.name}
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            {product.category}
          </p>

          {/* Rating */}
          <div className="mt-5 flex items-center gap-3">
            <span className="rounded-full bg-[#fff3cf] px-3 py-1.5 text-xs font-bold text-[#b77a00]">
              ★ ۴.۸
            </span>

            <span className="text-sm text-slate-500">
              ۲۴ نظر
            </span>
          </div>

          {/* Price */}
          <div className="mt-7 rounded-[22px] bg-[#fff7f1] p-5">
            <div className="text-2xl font-black text-[#17263a]">
              {product.price}

              <span className="mr-2 text-sm font-medium text-slate-500">
                تومان
              </span>
            </div>

            {product.oldPrice && (
              <div className="mt-2 text-sm text-slate-400 line-through">
                {product.oldPrice} تومان
              </div>
            )}
          </div>

          {/* Interactive options */}
          <ProductOptions />

          {/* Actions */}
          <div className="mt-7 flex gap-3">
            <button
              type="button"
              className="flex-1 rounded-full bg-[#f21f73] px-6 py-4 text-sm font-black text-white shadow-lg shadow-pink-300/20 transition hover:-translate-y-0.5 hover:bg-[#e51b69]"
            >
              افزودن به سبد خرید
            </button>

            <button
              type="button"
              aria-label="افزودن به علاقه‌مندی‌ها"
              className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-[#eadbd1] bg-white text-2xl transition hover:border-[#f21f73] hover:text-[#f21f73]"
            >
              ♡
            </button>
          </div>
        </div>
      </div>

      {/* Description */}
      <section className="mt-12 border-t border-[#eadbd1] pt-8">
        <h2 className="text-xl font-black">
          درباره این محصول
        </h2>

        <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600">
          {product.description}
        </p>
      </section>

      {/* Features + Shipping */}
      <section className="mt-10 grid gap-6 border-t border-[#eadbd1] pt-8 md:grid-cols-2">
        <div className="rounded-[24px] bg-white p-6 shadow-sm">
          <h2 className="text-lg font-black">
            ویژگی‌های محصول
          </h2>

          <ul className="mt-5 grid gap-3">
            {product.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 text-sm text-slate-600"
              >
                <span className="grid h-7 w-7 place-items-center rounded-full bg-[#ffe5ee] text-xs text-[#f21f73]">
                  ✓
                </span>

                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[24px] bg-white p-6 shadow-sm">
          <h2 className="text-lg font-black">
            ارسال و بازگشت
          </h2>

          <div className="mt-5 grid gap-4">
            <div>
              <div className="font-bold">🚚 ارسال سریع</div>

              <p className="mt-1 text-sm leading-7 text-slate-500">
                سفارش شما پس از تأیید آماده ارسال خواهد شد.
              </p>
            </div>

            <div>
              <div className="font-bold">↩️ ضمانت بازگشت</div>

              <p className="mt-1 text-sm leading-7 text-slate-500">
                شرایط بازگشت محصول در بخش قوانین فروشگاه قرار می‌گیرد.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Related Products */}
      <section className="mt-12 border-t border-[#eadbd1] pt-8">
        <div className="mb-5 flex items-end justify-between">
          <div>
            <p className="text-sm font-bold text-[#f21f73]">
              شاید این‌ها را هم بپسندید
            </p>

            <h2 className="mt-1 text-2xl font-black">
              محصولات پیشنهادی
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {products
            .filter((_, index) => index !== productIndex)
            .slice(0, 4)
            .map((item) => (
              <Link
                key={item.name}
                href={`/products/${products.indexOf(item)}`}
                className="group"
              >
              
                <div className="overflow-hidden rounded-[24px] border border-[#efdfd5] bg-white p-2 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="aspect-square overflow-hidden rounded-[19px] bg-[#fff5ed]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-3">
                    <h3 className="text-sm font-black">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-[10px] text-slate-500">
                      {item.category}
                    </p>

                    <div className="mt-3 text-sm font-black">
                      {item.price} تومان
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </main>
  );
}