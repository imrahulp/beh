"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md py-2" : "bg-transparent py-4"}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Behroopiye
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#team" className="hover:text-primary transition-colors">
            Team
          </Link>
          <Link href="#gallery" className="hover:text-primary transition-colors">
            Gallery
          </Link>
          <Link href="#feedback" className="hover:text-primary transition-colors">
            Feedback
          </Link>
          <Link href="#contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
          <ModeToggle />
        </div>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(true)}>
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-background z-50 flex flex-col p-8">
          <div className="flex justify-end">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center gap-8 flex-1">
            <Link href="#team" className="text-xl" onClick={() => setIsOpen(false)}>
              Team
            </Link>
            <Link href="#gallery" className="text-xl" onClick={() => setIsOpen(false)}>
              Gallery
            </Link>
            <Link href="#feedback" className="text-xl" onClick={() => setIsOpen(false)}>
              Feedback
            </Link>
            <Link href="#contact" className="text-xl" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <ModeToggle />
          </div>
        </div>
      )}
    </nav>
  )
}

