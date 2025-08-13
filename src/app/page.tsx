"use client"


import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import About from "../components/About";
import Contact from "../components/Contact";
import Enquiry from "../components/Enquiry";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import { BRAND } from "../data/brand";

export default function App() {
  const whatsappLink = (text: string) =>
    `https://wa.me/${BRAND.phoneDigits}?text=${encodeURIComponent(text)}`;

  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-900">
      <Navbar whatsappLink={whatsappLink} />
      <Hero whatsappLink={whatsappLink} />
      
      <Products whatsappLink={whatsappLink} />
      <About />
      <Contact whatsappLink={whatsappLink} />
      <Enquiry whatsappLink={whatsappLink} />
      <Footer whatsappLink={whatsappLink} />
      <FloatingWhatsApp whatsappLink={whatsappLink} />
    </div>
  );
}
