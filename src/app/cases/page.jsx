"use client"

import React, { useEffect, useRef } from "react";
import { Header } from "../../sections/Header"
import CasesHero from "./components/CasesHero"
import CasesGrid from "./components/CasesGrid"
import StarsCanvas  from "../../components/StarBackground"

const CasesPage = () => {
 return (
    <>
      <main className="gradient-background">
        <Header />
        <CasesHero />
        <CasesGrid />
        <StarsCanvas />
      </main>
    </>
 )
}

export default CasesPage