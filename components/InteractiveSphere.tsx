'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { AmbientLight, PointLight } from 'three';

export const InteractiveSphere = () => (
  <Canvas className="h-64 w-64">
    <Sphere args={[1, 32, 32]}>
      <MeshDistortMaterial attach="material" color="#6A1B9A" />
    </Sphere>
    <OrbitControls enableZoom={false} />
  </Canvas>
)