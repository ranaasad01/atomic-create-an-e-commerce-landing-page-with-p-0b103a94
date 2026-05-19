"use client";

import { useCart } from "@/lib/cart-context";
import { ArrowRight, Lock } from 'lucide-react';

export default function OrderSummary() {
  const { subtotal, totalItems } = useCart();

  const shipping = subtotal >= 50 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sticky top-24">
      <h2 className="text-lg font-bold text-slate-900 mb-6">Order Summary</h2>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-slate-500">
            Subtotal ({totalItems} {totalItems === 1 ? "item" : "items"})
          </span>
          <span className="font-medium text-slate-900">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-500">Shipping</span>
          {shipping === 0 ? (
            <span className="font-medium text-emerald-600">Free</span>
          ) : (
            <span className="font-medium text-slate-900">${shipping.toFixed(2)}</span>
          )}
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-500">Estimated Tax (8%)</span>
          <span className="font-medium text-slate-900">${tax.toFixed(2)}</span>
        </div>
      </div>

      {shipping === 0 ? (
        <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3 mb-6">
          <p className="text-emerald-700 text-xs font-medium">
            🎉 You qualify for free shipping!
          </p>
        </div>
      ) : (
        <div className="bg-indigo-50 border border-indigo-100 rounded-xl px-4 py-3 mb-6">
          <p className="text-indigo-700 text-xs font-medium">
            Add ${(50 - subtotal).toFixed(2)} more for free shipping
          </p>
          <div className="mt-2 h-1.5 bg-indigo-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-500 rounded-full transition-all duration-500"
              style={{ width: Math.min((subtotal / 50) * 100, 100) + "%" }}
            />
          </div>
        </div>
      )}

      <div className="flex justify-between text-base font-bold text-slate-900 pt-4 border-t border-slate-100 mb-6">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <button className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-indigo-200 hover:shadow-md hover:-translate-y-0.5 mb-3">
        Proceed to Checkout
        <ArrowRight className="w-4 h-4" />
      </button>

      <div className="flex items-center justify-center gap-2 text-slate-400 text-xs">
        <Lock className="w-3.5 h-3.5" />
        <span>Secure checkout — 256-bit SSL encryption</span>
      </div>

      {/* Promo code */}
      <div className="mt-5 pt-5 border-t border-slate-100">
        <p className="text-xs font-semibold text-slate-700 mb-2">Promo Code</p>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter code"
            className="flex-1 text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400"
          />
          <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 px-3 py-2 border border-indigo-200 rounded-lg hover:bg-indigo-50 transition-colors">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
