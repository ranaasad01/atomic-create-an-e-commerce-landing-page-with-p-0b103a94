"use client";

import { products } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function DealsSection() {
  const saleProducts = products.filter((p) => p.badge === "sale");

  return (
    <section id="deals" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-rose-500 text-sm font-semibold uppercase tracking-widest mb-1">Limited Time</p>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Hot Deals &amp; Offers
            </h2>
            <p className="text-slate-500 mt-2 max-w-lg">
              Grab these discounted picks before they sell out. Prices drop every week — shop fast!
            </p>
          </div>
          <div className="flex items-center gap-2 bg-rose-50 border border-rose-100 rounded-xl px-4 py-3">
            <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
            <span className="text-rose-600 text-sm font-semibold">Ends in 48 hours</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {saleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
