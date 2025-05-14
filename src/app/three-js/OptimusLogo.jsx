"use client";

import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { GradientMaterial } from "./shaders/gradientMaterial";

const OptimusModel = () => {
  const gltf = useGLTF("/models/optimus_model-21.glb");
  const groupRef = useRef();

  useEffect(() => {
    console.log("GLTF nodes:", gltf.nodes);
    console.log("GLTF scene:", gltf.scene);
  }, [gltf]);

  // Rotate model on Y-axis
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005; // adjust speed as needed
    }
  });

  return (
    <group ref={groupRef} scale={1}>
      {gltf.scene.children.map((child, index) => {
        if (!child.isMesh || !child.geometry) return null;

        return (
          <mesh
            key={index}
            geometry={child.geometry}
            position={child.position}
            rotation={child.rotation}
            scale={child.scale}
            material={GradientMaterial}
          />
        );
      })}
    </group>
  );
};

const OptimusLogo = () => {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <OptimusModel />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default OptimusLogo;
