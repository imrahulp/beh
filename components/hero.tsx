"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text, Float, Environment } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

function AnimatedText() {
  const textRef = useRef()

  useFrame(({ clock }) => {
    if (textRef.current) {
      textRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <Text
        ref={textRef}
        fontSize={2}
        color="#ffffff"
        font="/fonts/Geist-Bold.ttf"
        position={[0, 0, 0]}
        textAlign="center"
      >
        BEHROOPIYE
      </Text>
    </Float>
  )
}

export default function Hero() {
  const scrollToTeam = () => {
    const teamSection = document.getElementById("team")
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="h-screen relative flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Environment preset="sunset" />
          <AnimatedText />
        </Canvas>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <h1
          className="text-4xl md:text-6xl font-bold mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
        >
          Welcome to Behroopiye
        </h1>
        <p
          className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: "1s", animationFillMode: "forwards" }}
        >
          A creative team of six passionate individuals bringing imagination to life
        </p>
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: "1.5s", animationFillMode: "forwards" }}>
          <Button size="lg" onClick={scrollToTeam}>
            Meet The Team
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  )
}

