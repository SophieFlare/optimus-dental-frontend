"use client";

import React, { useEffect } from "react";
import { Header } from "../../sections/Header";
import ServicesModel from "./components/ServicesModel"
import ServicesIntro from "./components/ServicesIntro"
import ServicesArchive from "./components/ServicesArchive"
import ServicesOutro from "./components/ServicesOutro";

import './styles/services.css';


export default function ServicesPage() {


  return (
    <div>
      <Header />
      <ServicesModel />
      <div className="services-star services-body">
        <ServicesIntro />
        <ServicesArchive />
        <ServicesOutro />
      </div>
    </div>
  );
}
