export const dynamic = "force-dynamic";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import DealsSection from "@/components/DealsSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <Hero />

      {/* Hot Deals Section */}
      <DealsSection />

      {/* Full Product Grid with Category Filter */}
      <ProductGrid />

      {/* Newsletter Signup */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </main>
  );
}
