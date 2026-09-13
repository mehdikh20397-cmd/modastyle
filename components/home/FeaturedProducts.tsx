import { products } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";

export function FeaturedProducts() {
  return (
    <section className="container-shop pb-8">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-[#f21f73]">
            انتخاب‌های محبوب شما
          </p>

          <h2 className="mt-1 text-2xl font-black">
            محصولات ویژه 🔥
          </h2>
        </div>

        <a
          href="#"
          className="shrink-0 text-sm font-bold text-[#16709b]"
        >
          مشاهده همه ←
        </a>
      </div>

      {/* Mobile */}
      <div
        className="
          flex
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
        {products.map((product) => (
          <div
            key={product.name}
            className="w-[245px] min-w-[245px] shrink-0"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Tablet / Desktop */}
      <div className="hidden sm:grid sm:grid-cols-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-6">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}