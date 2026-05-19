"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from "@/lib/cart-context";
import { useCart } from "@/lib/cart-context";

type Props = { item: CartItemType };

export default function CartItem({ item }: Props) {
  const { increment, decrement, removeItem } = useCart();
  const { product, quantity } = item;

  return (
    <div className="flex gap-4 py-5 border-b border-slate-100 last:border-0">
      {/* Image */}
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-xl overflow-hidden bg-slate-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="96px"
        />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-xs font-medium text-indigo-600 uppercase tracking-wide mb-0.5">
              {product.category}
            </p>
            <h3 className="text-sm font-semibold text-slate-900 leading-snug line-clamp-2">
              {product.name}
            </h3>
          </div>
          <button
            onClick={() => removeItem(product.id)}
            className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 transition-colors"
            aria-label="Remove item"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          {/* Quantity controls */}
          <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-1">
            <button
              onClick={() => decrement(product.id)}
              className="w-7 h-7 flex items-center justify-center rounded-md text-slate-600 hover:bg-white hover:text-indigo-600 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-8 text-center text-sm font-semibold text-slate-900">
              {quantity}
            </span>
            <button
              onClick={() => increment(product.id)}
              className="w-7 h-7 flex items-center justify-center rounded-md text-slate-600 hover:bg-white hover:text-indigo-600 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Line price */}
          <div className="text-right">
            <p className="text-base font-bold text-slate-900">
              ${(product.price * quantity).toFixed(2)}
            </p>
            {quantity > 1 && (
              <p className="text-xs text-slate-400">${product.price.toFixed(2)} each</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
