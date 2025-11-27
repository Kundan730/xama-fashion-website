import { AnnouncementBar } from "@/components/announcement-bar"
import { HeroSection } from "@/components/hero-section"
import { PromoBanner } from "@/components/promo-banner"
import { NewArrivalsSection } from "@/components/new-arrivals-section"
import { AboutSection } from "@/components/about-section"
import { CollectionSection } from "@/components/collection-section"
import { FeaturesSection } from "@/components/features-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <HeroSection />
      <PromoBanner />
      <NewArrivalsSection />
      <CollectionSection />
      <AboutSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
