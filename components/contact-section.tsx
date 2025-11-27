"use client"

import type React from "react"
import { useState } from "react"
import { MapPin, Phone, MessageCircle, User, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleWhatsApp = () => {
    window.open("https://wa.me/919110087487?text=Hi! I'm interested in XAMA fashion. Can you tell me more?", "_blank")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setIsLoading(false)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-medium text-primary uppercase tracking-widest mb-4 block">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance">Visit Our Store</h2>
          <p className="text-muted-foreground text-lg">Have questions? Visit us or reach out anytime.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-4">
            <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Store Location</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Banta, P.S. Silli,
                    <br />
                    Ranchi, Jharkhand – 835102
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm">Contact Person</h3>
                  <p className="text-muted-foreground text-sm">Manoj Rajak</p>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm">Store Hours</h3>
                  <p className="text-muted-foreground text-sm">10 AM - 9 PM</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Phone / WhatsApp</h3>
                  <a href="tel:+919110087487" className="text-primary hover:underline text-sm font-medium">
                    +91 91100 87487
                  </a>
                </div>
              </div>
            </div>

            <Button
              onClick={handleWhatsApp}
              className="w-full h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white text-base font-medium rounded-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </Button>
          </div>

          {/* Map */}
          <div className="bg-card rounded-2xl border border-border overflow-hidden h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117263.98217684643!2d85.66398334688816!3d23.297631148942703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5b31e97e7c243%3A0x7e2429ebf51d92fb!2sBantahajam%2C%20Jharkhand%20835102!5e0!3m2!1sen!2sin!4v1764263043174!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="XAMA Store Location - Banta, Jharkhand"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
