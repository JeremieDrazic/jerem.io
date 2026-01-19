import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const ref = useRef<THREE.Points>(null)

  const particleCount = 2000

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      // Spread particles in a sphere
      const radius = Math.random() * 4 + 1
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = radius * Math.cos(phi)

      // Color gradient: blues and purples
      const t = Math.random()
      colors[i3] = 0.2 + t * 0.3 // R
      colors[i3 + 1] = 0.1 + t * 0.2 // G
      colors[i3 + 2] = 0.5 + t * 0.5 // B
    }

    return [positions, colors]
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.02
      ref.current.rotation.y = state.clock.elapsedTime * 0.03
    }
  })

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3}>
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

function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null)
  const shapesRef = useRef<THREE.Mesh[]>([])

  const shapes = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4 - 2,
      ] as [number, number, number],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [
        number,
        number,
        number,
      ],
      scale: 0.2 + Math.random() * 0.3,
      speed: 0.2 + Math.random() * 0.3,
      type: i % 3,
    }))
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.02
    }

    shapesRef.current.forEach((mesh, i) => {
      if (mesh) {
        mesh.rotation.x += shapes[i].speed * 0.01
        mesh.rotation.y += shapes[i].speed * 0.015
        mesh.position.y += Math.sin(state.clock.elapsedTime + i) * 0.001
      }
    })
  })

  return (
    <group ref={groupRef}>
      {shapes.map((shape, i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (el) shapesRef.current[i] = el
          }}
          position={shape.position}
          rotation={shape.rotation}
          scale={shape.scale}
        >
          {shape.type === 0 && <icosahedronGeometry args={[1, 0]} />}
          {shape.type === 1 && <octahedronGeometry args={[1, 0]} />}
          {shape.type === 2 && <tetrahedronGeometry args={[1, 0]} />}
          <meshBasicMaterial
            color="#4f46e5"
            wireframe
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}
    </group>
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
        <FloatingShapes />
      </Canvas>
    </div>
  )
}
