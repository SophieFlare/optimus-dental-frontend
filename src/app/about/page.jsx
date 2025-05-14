"use client"

import { Header } from '../../sections/Header'
import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "./journal/Experience";
import { UI } from "./journal/UI";
import './journal/journal.css'

function App() {
  return (
    <>
    <Header />
    <main className="journal-root journal-body">
      <UI />
      <Loader />
      <Canvas shadows camera={{ position: [-0.5, 1, 4], fov: 45 }}>
        <group position-y={0}>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </group>
      </Canvas>
      </main>
    </>
  );
}

export default App;
