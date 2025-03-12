"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { X } from "lucide-react"

// Sample gallery images - replace with your actual images
const galleryImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Team photo 1",
    width: 800,
    height: 600,
  },
  {
    id: 2,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Team photo 2",
    width: 800,
    height: 600,
  },
  {
    id: 3,
    src: "/placeholder.svg?height=800&width=600",
    alt: "Team photo 3",
    width: 600,
    height: 800,
  },
  {
    id: 4,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Team photo 4",
    width: 800,
    height: 600,
  },
  {
    id: 5,
    src: "/placeholder.svg?height=800&width=600",
    alt: "Team photo 5",
    width: 600,
    height: 800,
  },
  {
    id: 6,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Team photo 6",
    width: 800,
    height: 600,
  },
  {
    id: 7,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Team photo 7",
    width: 800,
    height: 600,
  },
  {
    id: 8,
    src: "/placeholder.svg?height=800&width=600",
    alt: "Team photo 8",
    width: 600,
    height: 800,
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Gallery</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(image)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
              <span className="sr-only">Close</span>
            </button>
            <div className="relative max-w-4xl max-h-[80vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

