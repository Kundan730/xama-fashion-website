import { Instagram, Facebook, Youtube, MapPin, Phone } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function Footer() {
  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/xamainstitute25/" },
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Youtube, label: "YouTube", href: "#" },
  ]

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Collection", href: "#collection" },
    { label: "Contact", href: "#contact" },
  ]

  const legalLinks = [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Return Policy", href: "#" },
    { label: "Shipping Info", href: "#" },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="py-12 lg:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <a href="#home" className="inline-block mb-4">
                <span className="text-3xl font-serif font-bold tracking-wider text-primary">XAMA</span>
              </a>
              <Badge variant="secondary" className="mb-4 text-xs bg-primary/10 text-primary border-primary/20">
                Launching Soon Online
              </Badge>
              <p className="text-muted-foreground mb-6">
                Affordable Men's Fashion. Premium Confidence. Quality shirts starting from ₹349.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    Banta, P.S. Silli, Ranchi, Jharkhand – 835102
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <a href="tel:+919110087487" className="text-muted-foreground hover:text-primary text-sm">
                    +91 91100 87487
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Instagram className="w-4 h-4 text-primary shrink-0" />
                  <a
                    href="https://www.instagram.com/xamainstitute25/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary text-sm"
                  >
                    @xamainstitute25
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} XAMA. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Made with love in India</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
