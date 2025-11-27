import { Sparkles, Target, TrendingUp } from "lucide-react"

export function AboutSection() {
  const values = [
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "Handpicked fabrics and meticulous craftsmanship in every piece",
    },
    {
      icon: Target,
      title: "Affordable Luxury",
      description: "Designer quality at prices that won't break the bank",
    },
    {
      icon: TrendingUp,
      title: "Trendsetting Style",
      description: "Stay ahead with the latest fashion trends and timeless classics",
    },
  ]

  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-medium text-primary uppercase tracking-widest mb-4 block">About XAMA</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance">
            Redefining Men's Fashion
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            XAMA is born from a simple belief: every man deserves to look and feel exceptional without compromise. We're
            creating a destination for stylish, affordable men's clothing that doesn't sacrifice quality for price.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
