"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float, Text3D, Center } from "@react-three/drei"

function Logo(props) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} {...props}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <meshStandardMaterial
          color="#8b5cf6"
          roughness={0.3}
          metalness={0.7}
          emissive="#4c1d95"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  )
}

function Text(props) {
  return (
    <Center position={[0, -2, 0]}>
      <Text3D
        font="/fonts/Geist_Bold.json"
        size={0.8}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        BEHROOPIYE
        <meshStandardMaterial color="#8b5cf6" roughness={0.3} metalness={0.7} />
      </Text3D>
    </Center>
  )
}

export default function Scene3D() {
  return (
    <div className="h-[50vh] w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <Logo position={[0, 0, 0]} />
        <Text />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  )
}

