"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import About from "../components/About";
import Contact from "../components/Contact";
import Enquiry from "../components/Enquiry";
import Footer from "../components/Footer";
import { BRAND } from "../data/brand";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Contact />
      <Enquiry />
      <Footer brand={BRAND} />
    </>
  );
}
