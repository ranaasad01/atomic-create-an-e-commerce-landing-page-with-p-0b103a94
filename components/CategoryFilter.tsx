"use client";

import { categories } from "@/lib/products";

type Props = {
  selected: string;
  onChange: (cat: string) => void;
};

export default function CategoryFilter({ selected, onChange }: Props) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={
            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 " +
            (selected === cat
              ? "bg-indigo-600 text-white shadow-sm shadow-indigo-200"
              : "bg-slate-100 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600")
          }
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
