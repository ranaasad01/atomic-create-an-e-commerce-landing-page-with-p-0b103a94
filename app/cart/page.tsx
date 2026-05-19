"use client";

import Link from "next/link";
import { ShoppingCart, ArrowLeft, Trash2 } from 'lucide-react';
import { useCart } from "@/lib/cart-context";
import CartItem from "@/components/CartItem";
import OrderSummary from "@/components/OrderSummary";
import Footer from "@/components/Footer";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function CartPage() {
  const { items, clearCart } = useCart();

  const suggestedProducts = products
    .filter((p) => !items.some((i) => i.product.id === p.id))
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Page header */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 transition-colors mb-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Continue Shopping
              </Link>
              <h1 className="text-2xl font-extrabold text-slate-900 flex items-center gap-3">
                <ShoppingCart className="w-6 h-6 text-indigo-600" />
                Your Cart
                {items.length > 0 && (
                  <span className="text-base font-normal text-slate-500">
                    ({items.length} {items.length === 1 ? "item" : "items"})
                  </span>
                )}
              </h1>
            </div>
            {items.length > 0 && (
              <button
                onClick={clearCart}
                className="hidden sm:flex items-center gap-2 text-sm text-slate-400 hover:text-rose-500 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                Clear Cart
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {items.length === 0 ? (
          /* Empty cart state */
          <div className="text-center py-24">
            <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-10 h-10 text-indigo-300" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Your cart is empty</h2>
            <p className="text-slate-500 mb-8 max-w-sm mx-auto">
              Looks like you haven&apos;t added anything yet. Browse our collection and find something you love!
            </p>
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 shadow-sm hover:-translate-y-0.5"
            >
              Start Shopping
            </Link>

            {/* Suggested products */}
            {suggestedProducts.length > 0 && (
              <div className="mt-16 text-left">
                <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
                  Popular Right Now
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {suggestedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Cart with items */
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-bold text-slate-900">Cart Items</h2>
                  <button
                    onClick={clearCart}
                    className="sm:hidden flex items-center gap-1.5 text-xs text-slate-400 hover:text-rose-500 transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Clear all
                  </button>
                </div>

                <div className="divide-y divide-slate-100">
                  {items.map((item) => (
                    <CartItem key={item.product.id} item={item} />
                  ))}
                </div>
              </div>

              {/* Trust badges */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { icon: "🚚", title: "Free Shipping", desc: "On orders over $50" },
                  { icon: "🔄", title: "Easy Returns", desc: "30-day return policy" },
                  { icon: "🔒", title: "Secure Payment", desc: "SSL encrypted checkout" },
                ].map((badge) => (
                  <div
                    key={badge.title}
                    className="bg-white rounded-xl border border-slate-100 p-4 text-center"
                  >
                    <div className="text-2xl mb-2">{badge.icon}</div>
                    <p className="text-xs font-semibold text-slate-700">{badge.title}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{badge.desc}</p>
                  </div>
                ))}
              </div>

              {/* You might also like */}
              {suggestedProducts.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">You Might Also Like</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {suggestedProducts.slice(0, 2).map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Order summary sidebar */}
            <div className="lg:col-span-1">
              <OrderSummary />
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
