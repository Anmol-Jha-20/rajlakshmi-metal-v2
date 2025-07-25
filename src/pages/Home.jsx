import React, { useState } from "react";
import Header from "../components/Header/Header.jsx";
import Hero from "../components/Hero/Hero.jsx";
import MetalGrilles from "../components/Panels/MetalGrilles.jsx";
import MetalSpaces from "../components/MetalSpaces/MetalSpaces.jsx";
import Footer from "../components/Footer/Footer.jsx";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts.jsx";
import TestimonialCarousel from "../components/Testimonial/TestimonialCarousel.jsx";
import AboutSection from "../components/About/about.jsx";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />
      {/* <AboutSection />
      <MetalGrilles />
      <MetalSpaces />
      <FeaturedProducts />
      <TestimonialCarousel /> */}
    </div>
  );
}
