import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bell } from "lucide-react"

export function NewArrivalsSection() {
  return (
    <section id="new-arrivals" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left - Large Image */}
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/gemini-generated-image-f9i6ghf9i6ghf9i6.jpeg"
              alt="New Arrivals - Premium Black Shirt"
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-primary text-primary-foreground text-xs uppercase tracking-widest">
                  New Season
                </Badge>
                <Badge variant="outline" className="border-foreground/30 text-foreground text-xs uppercase">
                  Launching Soon
                </Badge>
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">Premium Collection</h3>
              <p className="text-muted-foreground mb-4">Elevate your wardrobe with our finest pieces</p>
              <Button className="bg-foreground text-background hover:bg-foreground/90">
                <Bell className="w-4 h-4 mr-2" /> Get Notified
              </Button>
            </div>
          </div>

          {/* Right - Grid of smaller images */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                src: "/images/gemini-generated-image-m9fn8em9fn8em9fn.jpeg",
                alt: "Formal Collection",
                title: "Formal Wear",
                price: "From ₹549",
              },
              {
                src: "/images/gemini-generated-image-1w5yl81w5yl81w5y.jpeg",
                alt: "Casual Collection",
                title: "Casual Shirts",
                price: "From ₹399",
              },
              {
                src: "/images/gemini-generated-image-bj0tu9bj0tu9bj0t.jpeg",
                alt: "Printed Collection",
                title: "Printed Shirts",
                price: "From ₹449",
              },
              {
                src: "/images/gemini-generated-image-ymkkweymkkweymkk.jpeg",
                alt: "Abstract Collection",
                title: "Abstract Prints",
                price: "From ₹349",
              },
            ].map((item, index) => (
              <div key={index} className="relative aspect-square rounded-2xl overflow-hidden group shadow-xl">
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-foreground font-semibold">{item.title}</p>
                  <p className="text-primary text-sm font-medium">{item.price}</p>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Preview
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
