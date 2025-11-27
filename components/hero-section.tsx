"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Users, Star, TrendingUp } from "lucide-react"

export function HeroSection() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/919110087487?text=Hi! I'm interested in XAMA fashion. Can you tell me more?", "_blank")
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 lg:pt-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-primary/30 bg-primary/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                Launching Soon Online
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight text-balance">
              <span className="text-foreground">Premium Style</span>
              <span className="block text-primary">Affordable Prices</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 text-pretty">
              XAMA brings you designer-quality men's fashion starting from just{" "}
              <span className="text-primary font-semibold">₹349</span>. Visit our store or shop online soon.
            </p>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 mb-8 max-w-lg mx-auto lg:mx-0">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-2xl font-bold text-foreground">1000+</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Happy Customers</p>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Star className="w-5 h-5 text-primary fill-primary" />
                    <span className="text-2xl font-bold text-foreground">4.9</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Customer Rating</p>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="text-2xl font-bold text-foreground">50+</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Styles Available</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0">
              <Button
                onClick={handleWhatsApp}
                className="flex-1 h-12 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Shop on WhatsApp
              </Button>
              <Button
                variant="outline"
                className="flex-1 h-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                asChild
              >
                <a href="#collection">View Collection</a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6 flex items-center justify-center lg:justify-start gap-2">
              <span className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <span
                    key={i}
                    className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xs text-primary font-medium"
                  >
                    {i}K
                  </span>
                ))}
              </span>
              <span>Thousands of offline customers already trust us</span>
            </p>
          </div>

          {/* Right Image Grid */}
          <div className="order-1 lg:order-2 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/gemini-generated-image-f9i6ghf9i6ghf9i6.jpeg"
                    alt="Classic Black Premium Shirt"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/gemini-generated-image-bj0tu9bj0tu9bj0t.jpeg"
                    alt="Watercolor Art Print Shirt"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/gemini-generated-image-m9fn8em9fn8em9fn.jpeg"
                    alt="Navy Dotted Formal Shirt"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/gemini-generated-image-1w5yl81w5yl81w5y.jpeg"
                    alt="Classic Plaid Shirt"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
            {/* Floating price tag */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card border border-border rounded-2xl px-6 py-4 shadow-2xl">
              <p className="text-sm text-muted-foreground">Prices starting from</p>
              <p className="text-2xl font-bold text-primary">₹349</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
