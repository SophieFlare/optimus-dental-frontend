"use client";

import React, { useRef, useEffect } from 'react';
import { Header } from "../../sections/Header";
import Iphone from "./components/Iphone";
import Highlights from "./components/Highlights"
import HowItWorks from "./components/HowItWorks"

import "./styles/index.css"
import Lenis from 'lenis'

const Page = () => {
  return (
    <>
      <Header />
      <Iphone />
      <Highlights />
      <HowItWorks />
    </>
  );
};

export default Page;
