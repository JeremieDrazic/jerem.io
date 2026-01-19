import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Seeded random number generator for deterministic results
function createSeededRandom(seed: number) {
  return () => {
    seed = (seed * 9301 + 49297) % 233280
    return seed / 233280
  }
}

// Pre-generate particle data outside of React
const particleCount = 2000
const random = createSeededRandom(12345)

const particlePositions = new Float32Array(particleCount * 3)
const particleColors = new Float32Array(particleCount * 3)

for (let i = 0; i < particleCount; i++) {
  const i3 = i * 3
  // Spread particles in a sphere
  const radius = random() * 4 + 1
  const theta = random() * Math.PI * 2
  const phi = Math.acos(2 * random() - 1)

  particlePositions[i3] = radius * Math.sin(phi) * Math.cos(theta)
  particlePositions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
  particlePositions[i3 + 2] = radius * Math.cos(phi)

  // Color gradient: blues and purples
  const t = random()
  particleColors[i3] = 0.2 + t * 0.3 // R
  particleColors[i3 + 1] = 0.1 + t * 0.2 // G
  particleColors[i3 + 2] = 0.5 + t * 0.5 // B
}

function ParticleField() {
  const ref = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.02
      ref.current.rotation.y = state.clock.elapsedTime * 0.03
    }
  })

  return (
    <Points ref={ref} positions={particlePositions} colors={particleColors} stride={3}>
      <PointMaterial
        transparent
        vertexColors
        size={0.02}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: 'linear-gradient(to bottom right, #0f172a, #1e1b4b)' }}
      >
        <ambientLight intensity={0.5} />
        <ParticleField />
      </Canvas>
    </div>
  )
}
