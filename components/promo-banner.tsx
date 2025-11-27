import { Truck, RotateCcw, Shield, Headphones } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Free Delivery",
    description: "On orders above ₹999",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "7-day return policy",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "100% secure checkout",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "WhatsApp support",
  },
]

export function PromoBanner() {
  return (
    <section className="py-8 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-center gap-3 text-primary-foreground">
              <feature.icon className="w-8 h-8 shrink-0" />
              <div>
                <p className="font-semibold text-sm">{feature.title}</p>
                <p className="text-xs opacity-80">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
