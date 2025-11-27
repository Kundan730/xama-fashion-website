"use client"

import { useState } from "react"
import { X, Sparkles } from "lucide-react"

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground py-2.5 px-4">
      <div className="container mx-auto flex items-center justify-center gap-2 text-sm">
        <Sparkles className="w-4 h-4 animate-pulse" />
        <span className="font-medium">
          LAUNCHING SOON — Get <span className="font-bold">20% OFF</span> on your first order!
        </span>
        <span className="hidden sm:inline text-primary-foreground/80">|</span>
        <span className="hidden sm:inline text-primary-foreground/80">Join the waitlist today</span>
        <Sparkles className="w-4 h-4 animate-pulse" />
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
        aria-label="Dismiss announcement"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}
