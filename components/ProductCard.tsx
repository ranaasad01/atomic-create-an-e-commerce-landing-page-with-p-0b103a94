"use client";

import { Star, ShoppingCart, Check } from 'lucide-react';
import { Product } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import { useState } from "react";
import Image from "next/image";

type Props = { product: Product };

const badgeConfig = {
  sale: { label: "Sale", className: "bg-rose-500 text-white" },
  new: { label: "New", className: "bg-emerald-500 text-white" },
  featured: { label: "Featured", className: "bg-indigo-600 text-white" },
  bestseller: { label: "Bestseller", className: "bg-amber-500 text-white" },
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={
            "w-3.5 h-3.5 " +
            (s <= Math.floor(rating)
              ? "fill-amber-400 text-amber-400"
              : s - 0.5 <= rating
              ? "fill-amber-200 text-amber-400"
              : "fill-slate-200 text-slate-200")
          }
        />
      ))}
    </div>
  );
}

export default function ProductCard({ product }: Props) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <div className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative aspect-square bg-slate-50 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Badge */}
        {product.badge && (
          <span
            className={
              "absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full " +
              badgeConfig[product.badge].className
            }
          >
            {badgeConfig[product.badge].label}
          </span>
        )}
        {/* Discount */}
        {discount && (
          <span className="absolute top-3 right-3 text-xs font-bold bg-rose-100 text-rose-600 px-2 py-1 rounded-full">
            -{discount}%
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs font-medium text-indigo-600 uppercase tracking-wide mb-1">{product.category}</p>
        <h3 className="text-sm font-semibold text-slate-900 leading-snug mb-1 line-clamp-2 flex-1">
          {product.name}
        </h3>
        <p className="text-xs text-slate-500 mb-3 line-clamp-2">{product.description}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <StarRating rating={product.rating} />
          <span className="text-xs text-slate-500">
            {product.rating} ({product.reviewCount.toLocaleString()})
          </span>
        </div>

        {/* Price row */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-extrabold text-slate-900">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-slate-400 line-through">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
        </div>

        {/* Add to cart */}
        <button
          onClick={handleAdd}
          className={
            "mt-3 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 " +
            (added
              ? "bg-emerald-500 text-white"
              : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm hover:shadow-indigo-200 hover:shadow-md")
          }
        >
          {added ? (
            <>
              <Check className="w-4 h-4" />
              Added!
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}
