"use client";

import Link from "next/link";
import { ShoppingCart, Search, Menu, X, Sparkles } from 'lucide-react';
import { useCart } from "@/lib/cart-context";
import { useState } from "react";

export default function Navbar() {
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:bg-indigo-700 transition-colors">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">
              Shop<span className="text-indigo-600">Arc</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
              Home
            </Link>
            <Link href="/#products" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
              Products
            </Link>
            <Link href="/#deals" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
              Deals
            </Link>
            <Link href="/#newsletter" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
              Newsletter
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link
              href="/cart"
              className="relative flex items-center justify-center w-9 h-9 rounded-full text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-indigo-600 text-white text-xs font-bold rounded-full flex items-center justify-center leading-none">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-3">
          <Link href="/" onClick={() => setMenuOpen(false)} className="block text-sm font-medium text-slate-700 hover:text-indigo-600 py-2">
            Home
          </Link>
          <Link href="/#products" onClick={() => setMenuOpen(false)} className="block text-sm font-medium text-slate-700 hover:text-indigo-600 py-2">
            Products
          </Link>
          <Link href="/#deals" onClick={() => setMenuOpen(false)} className="block text-sm font-medium text-slate-700 hover:text-indigo-600 py-2">
            Deals
          </Link>
          <Link href="/#newsletter" onClick={() => setMenuOpen(false)} className="block text-sm font-medium text-slate-700 hover:text-indigo-600 py-2">
            Newsletter
          </Link>
        </div>
      )}
    </header>
  );
}
