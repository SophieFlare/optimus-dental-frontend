"use client";

import React, { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Lenis from 'lenis';

export default function ServicesModel() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, window.innerWidth / window.innerHeight, 0.1, 1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.querySelector('.model')?.appendChild(renderer.domElement);

    camera.position.set(0, 1, 5);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
    const pointLight = new THREE.PointLight(0xffffff, 10);
    directionalLight.position.set(3, 5, 2);
    pointLight.position.set(0, 2, 5);
    directionalLight.castShadow = true;
    scene.add(ambientLight, directionalLight, pointLight);

    let model = null;
    const loader = new GLTFLoader();

    loader.load(
      '/models/scene.gltf',
      (gltf) => {
        model = gltf.scene;
        model.traverse((node) => {
          if ((node).isMesh && node.material) {
            const mesh = node;
            const material = mesh.material;
            material.metalness = 0.8;
            material.roughness = 0.5;
            material.envMapIntensity = 2;
          }
          node.castShadow = true;
          node.receiveShadow = true;
        });

        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);
        scene.add(model);

        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        camera.position.z = maxDim * 1.75;

        model.rotation.set(2, 3.5, 0);

        playFloatingAnimation();
        animate();
      },
      undefined,
      (error) => console.error('Error loading GLTF model:', error)
    );

    const floatAmplitude = 0.2;
    const floatSpeed = 1.5;
    let currentScroll = 0;
    const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;

    function playFloatingAnimation() {
      if (model) {
        gsap.to(model.position, {
          y: `+=${floatAmplitude}`,
          duration: floatSpeed,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }
    }

    lenis.on('scroll', (e) => {
      currentScroll = e.scroll;
    });

    function animate() {
      if (model) {
        const scrollProgress = Math.min(currentScroll / totalScrollHeight, 1);
        model.rotation.x = scrollProgress * Math.PI * 4 + 0.5;
      }
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      document.querySelector('.model')?.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="model"></div>;
}
