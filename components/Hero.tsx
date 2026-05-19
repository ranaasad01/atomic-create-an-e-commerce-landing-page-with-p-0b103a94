"use client";

import Link from "next/link";
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  const avatarColors = ["bg-indigo-400", "bg-pink-400", "bg-amber-400", "bg-emerald-400"];
  const featureCards = [
    { label: "Free Shipping", sub: "On orders over $50", icon: "🚚", color: "from-indigo-600/20 to-indigo-600/5" },
    { label: "Easy Returns", sub: "30-day return policy", icon: "🔄", color: "from-pink-600/20 to-pink-600/5" },
    { label: "Secure Payment", sub: "256-bit SSL encryption", icon: "🔒", color: "from-emerald-600/20 to-emerald-600/5" },
    { label: "24/7 Support", sub: "Always here to help", icon: "💬", color: "from-amber-600/20 to-amber-600/5" },
  ];
  const stats = [
    { value: "12K+", label: "Products" },
    { value: "50K+", label: "Customers" },
    { value: "4.9★", label: "Avg Rating" },
    { value: "99%", label: "Satisfaction" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-indigo-600/20 border border-indigo-500/30 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
              <span className="text-indigo-300 text-sm font-medium">Summer Sale — Up to 40% Off</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                Discover Products
                <span className="block text-indigo-400">You&apos;ll Love</span>
              </h1>
              <p className="text-lg text-slate-300 max-w-lg leading-relaxed">
                Curated collections of premium electronics, fashion, and lifestyle essentials — all at prices that make sense. Free shipping on orders over $50.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/#products"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/30 hover:-translate-y-0.5"
              >
                Shop Now
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#deals"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                View Deals
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-2">
              <div className="flex -space-x-2">
                {avatarColors.map((color, i) => (
                  <div key={i} className={"w-8 h-8 rounded-full border-2 border-slate-900 " + color} />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-400 text-xs mt-0.5">Trusted by 50,000+ happy customers</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4">
            {featureCards.map((card) => (
              <div
                key={card.label}
                className={"rounded-2xl border border-white/10 bg-gradient-to-br p-5 backdrop-blur-sm " + card.color}
              >
                <div className="text-3xl mb-3">{card.icon}</div>
                <h3 className="font-semibold text-white text-sm">{card.label}</h3>
                <p className="text-slate-400 text-xs mt-1">{card.sub}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-extrabold text-white">{stat.value}</div>
              <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
