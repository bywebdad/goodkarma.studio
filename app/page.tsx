import { Header } from "@/components/sections/header"
import { HeroSection } from "@/components/sections/hero-section"
import { CTASection } from "@/components/sections/cta-section"
import { ServicesSection } from "@/components/sections/services-section"
import { AboutSection } from "@/components/sections/about-section"
import { MastersSection } from "@/components/sections/masters-section"
import { LocationsSection } from "@/components/sections/locations-section"
import { ReviewsSection } from "@/components/sections/reviews-section"
import { FAQSection } from "@/components/sections/faq-section"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Простой анимированный фон */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full relative overflow-hidden">{/* Анимированные круги */}</div>
      </div>

      {/* Основной оранжевый фон */}
      <div className="absolute inset-0 bg-[#F8F1EC] z-10"></div>

      {/* Контент */}
      <div className="relative z-20 min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <HeroSection />
          
          <ServicesSection />
          <AboutSection />
          <MastersSection />
          <LocationsSection />
          
          <ReviewsSection />
          <CTASection />
          <FAQSection />
        </main>

        <Footer />
      </div>
    </div>
  )
}
