"use client";

import { useState } from "react";
import { Mail, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="newsletter" className="bg-indigo-600 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-2xl mb-6">
          <Mail className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-extrabold text-white mb-3">
          Get Exclusive Deals in Your Inbox
        </h2>
        <p className="text-indigo-200 text-lg mb-8 max-w-xl mx-auto">
          Subscribe to our newsletter and be the first to know about flash sales, new arrivals, and members-only discounts up to 50% off.
        </p>

        {submitted ? (
          <div className="inline-flex items-center gap-3 bg-white/20 border border-white/30 rounded-2xl px-8 py-4">
            <Check className="w-5 h-5 text-white" />
            <span className="text-white font-semibold">
              You&apos;re subscribed! Check your inbox for a welcome gift.
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-5 py-3.5 rounded-xl text-slate-900 placeholder-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200 whitespace-nowrap text-sm"
            >
              Subscribe Free
            </button>
          </form>
        )}

        <p className="text-indigo-300 text-xs mt-4">
          No spam, ever. Unsubscribe at any time. We respect your privacy.
        </p>
      </div>
    </section>
  );
}
