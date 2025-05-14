"use client";

import { useEffect, useRef } from "react";
import { Header } from "../../sections/Header"
import Hero from "./components/Hero";
import { Footer } from "../../sections/Footer"

import Image from "next/image";
import LenisScroll from "../utils/LenisScroll";

import ContactForm from "./components/ContactForm"

export default function Home() {
  const contactRef = useRef(null);
  LenisScroll();


  return (
    <main className="h-full w-full relative z-[2]"> 
     <Header />
    <div className="flex flex-col relative z-[2]"> 
     <Hero contactRef={contactRef} />
     <div ref={contactRef}> 
       <ContactForm />
     </div>
    </div>
     <Footer />
  </main>
  );
}
