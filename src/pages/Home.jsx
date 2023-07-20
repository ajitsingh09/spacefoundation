import React from "react";
import HeroSection from "../components/Home/HeroSection";
import Event from "../components/Home/Event";
import Number from "../components/Home/Number";
import Spondser from "../components/Home/Spondser";
import Testimonial from "../components/Home/Testimonials";
import IntroSection from "../components/Home/IntroSection";
import AboutSection from "../components/Home/AboutSection";
import ContactSection from "../components/Home/ContactSection";
import CausesSection from "../components/Home/CausesSection";
import NewSection from "../components/Home/NewSection";
import ExploreSection from "../components/Home/ExploreSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <AboutSection />
      <ContactSection />
      <CausesSection />
      <Event />
      <Testimonial />
      <NewSection />
      <ExploreSection />
      <Spondser />
      <Number />
    </>
  );
};

export default Home;
