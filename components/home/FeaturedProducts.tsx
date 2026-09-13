import { products } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";

export function FeaturedProducts() {
  return (
    <section className="container-shop pb-8">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-bold text-[#f21f73]">انتخاب‌های محبوب شما</p>
          <h2 className="mt-1 text-2xl font-black">محصولات ویژه 🔥</h2>
        </div>
        <a href="#" className="text-sm font-bold text-[#16709b]">مشاهده همه ←</a>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide md:grid md:grid-cols-3 lg:grid-cols-6">
        {products.map((product) => <ProductCard key={product.name} product={product} />)}
      </div>
    </section>
  );
}
