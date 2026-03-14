import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import CategoriesSection from "@/components/CategoriesSection";
import QuotesSections from "@/components/QuotesSection";

export default function Home() {
  
  return (
    <main className="min-h-screen bg-background">
        <HeroSection />
        <FeatureSection />
        <QuotesSections />
        <CategoriesSection />
        
    </main>

  );
}
