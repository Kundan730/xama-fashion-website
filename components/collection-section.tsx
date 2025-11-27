"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, Star, Eye } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Classic Plaid Shirt",
    category: "Casual",
    price: 499,
    originalPrice: 899,
    rating: 4.8,
    reviews: 124,
    image: "/images/gemini-generated-image-1w5yl81w5yl81w5y.jpeg",
    badge: "Bestseller",
    colors: ["#1e3a5f", "#fff", "#666"],
  },
  {
    id: 2,
    name: "Navy Dotted Formal",
    category: "Formal",
    price: 649,
    originalPrice: 1099,
    rating: 4.9,
    reviews: 89,
    image: "/images/gemini-generated-image-m9fn8em9fn8em9fn.jpeg",
    badge: "New",
    colors: ["#1a1a4e", "#2a2a6e"],
  },
  {
    id: 3,
    name: "Watercolor Art Print",
    category: "Trendy",
    price: 549,
    originalPrice: 999,
    rating: 4.7,
    reviews: 67,
    image: "/images/gemini-generated-image-bj0tu9bj0tu9bj0t.jpeg",
    badge: "Trending",
    colors: ["#4a6fa5", "#8b7355", "#666"],
  },
  {
    id: 4,
    name: "Classic Black Premium",
    category: "Premium",
    price: 749,
    originalPrice: 1299,
    rating: 5.0,
    reviews: 156,
    image: "/images/gemini-generated-image-f9i6ghf9i6ghf9i6.jpeg",
    badge: "Premium",
    colors: ["#000"],
  },
  {
    id: 5,
    name: "Abstract Brush Print",
    category: "Casual",
    price: 449,
    originalPrice: 849,
    rating: 4.6,
    reviews: 45,
    image: "/images/gemini-generated-image-ymkkweymkkweymkk.jpeg",
    badge: "Sale",
    colors: ["#4a6fa5", "#333", "#888"],
  },
]

const categories = [
  {
    name: "Casual Shirts",
    count: "25+",
    image: "/Gemini_Generated_Image_mrpe6umrpe6umrpe.png",
  },
  {
    name: "Formal Shirts",
    count: "20+",
    image: "/Gemini_Generated_Image_lrc3dlrc3dlrc3dl.png",
  },
  {
    name: "T-Shirts",
    count: "30+",
    image: "/Gemini_Generated_Image_l58vfvl58vfvl58v.png",
  },
  {
    name: "Hoodies",
    count: "15+",
    image: "/Gemini_Generated_Image_opr99ropr99ropr9.png",
  },
]

export function CollectionSection() {
  const [wishlist, setWishlist] = useState<number[]>([])
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  const toggleWishlist = (productId: number) => {
    setWishlist((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  return (
    <section id="collection" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-medium text-primary uppercase tracking-widest">Our Collection</span>
              <Badge variant="outline" className="text-[10px] border-primary/30 text-primary">
                Online Store Coming Soon
              </Badge>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-balance">Trending Styles</h2>
            <p className="text-muted-foreground mt-2">Preview our collection - Visit our store to shop now</p>
          </div>
          <Button
            variant="outline"
            className="w-fit border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            View All Products
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-20">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-2xl transition-all duration-300"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <Badge className="bg-primary text-primary-foreground text-[10px] uppercase tracking-wider">
                    {product.badge}
                  </Badge>
                </div>
                {/* Wishlist */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                    wishlist.includes(product.id)
                      ? "bg-red-500 text-white"
                      : "bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 hover:bg-primary hover:text-primary-foreground"
                  }`}
                  aria-label={wishlist.includes(product.id) ? "Remove from wishlist" : "Add to wishlist"}
                >
                  <Heart className={`w-4 h-4 ${wishlist.includes(product.id) ? "fill-current" : ""}`} />
                </button>
                {/* Quick View */}
                <button className="absolute top-14 right-3 w-9 h-9 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground">
                  <Eye className="w-4 h-4" />
                </button>
                {/* Quick Add - Coming Soon overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/95 to-transparent translate-y-full group-hover:translate-y-0 transition-transform">
                  <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" disabled>
                    <ShoppingCart className="w-4 h-4 mr-2" /> Coming Soon
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs text-primary uppercase tracking-wide mb-1">{product.category}</p>
                <h3 className="font-semibold text-foreground mb-2 truncate">{product.name}</h3>
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted"}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                {/* Color options */}
                <div className="flex items-center gap-1.5 mb-3">
                  {product.colors.map((color, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 rounded-full border border-border"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-primary">₹{product.price}</span>
                  <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
                  <Badge variant="secondary" className="text-[10px] bg-green-500/10 text-green-500 ml-auto">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-serif font-bold">Shop by Category Coming Soon</h3>
          <p className="text-muted-foreground mt-2">Explore our exclusive collections</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all cursor-pointer aspect-square"
            >
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                <h4 className="font-semibold text-lg text-foreground mb-1">{category.name}</h4>
                <p className="text-primary text-sm font-medium">{category.count} Styles</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
