import { Truck, CreditCard, RefreshCw, Shield, Star, Zap } from "lucide-react"

const features = [
  {
    icon: Star,
    title: "Premium Quality",
    description: "Only the finest fabrics that look great and last longer",
  },
  {
    icon: CreditCard,
    title: "Affordable Pricing",
    description: "Designer looks without the designer price tags",
  },
  {
    icon: Zap,
    title: "Trendy & Comfortable",
    description: "Fashion-forward designs that feel as good as they look",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick shipping across India with real-time tracking",
    coming: true,
  },
  {
    icon: Shield,
    title: "COD Available",
    description: "Pay on delivery for your convenience and peace of mind",
    coming: true,
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "Hassle-free returns if you're not completely satisfied",
    coming: true,
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-medium text-primary uppercase tracking-widest mb-4 block">Why XAMA</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance">
            The XAMA Advantage
          </h2>
          <p className="text-muted-foreground text-lg">We're building something special. Here's what sets us apart.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    {feature.coming && (
                      <span className="text-[10px] uppercase tracking-wide text-muted-foreground bg-muted px-2 py-0.5 rounded">
                        Soon
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
