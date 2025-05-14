"use client"

import { useEffect } from 'react';
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker"
import { Features } from "@/sections/Features"
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer"

import LenisScroll from './utils/LenisScroll'

export default function Home() {
LenisScroll();


  return <>
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
  </>;
}
