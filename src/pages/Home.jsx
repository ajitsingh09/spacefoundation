import React from "react";
import HeroSection from "../components/Home/HeroSection";
import Event from "../components/Home/Event";
import Spondser from "../components/Home/Spondser";
import Testimonial from "../components/Home/Testimonials";
import IntroSection from "../components/Home/IntroSection";
import AboutSection from "../components/Home/AboutSection";
import ContactSection from "../components/Home/ContactSection";
import CausesSection from "../components/Home/CausesSection";
import NewSection from "../components/Home/NewSection";
import ExploreSection from "../components/Home/ExploreSection";
import Themesofimpact from "../components/Home/Themesofimpact";
import { Box } from "@mui/material";
import Sponser from "../components/Home/Parts/Sponser";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url("https://demoapus2.com/crowdngo/wp-content/uploads/2019/08/testimonial-parallax-bkg.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          overflowX: "hidden",
        }}
      >
        <HeroSection />
        <IntroSection />
        <Spondser />
        <AboutSection />
        <Themesofimpact />
        <ContactSection />
        <CausesSection />
        <Event />
        <Testimonial />
        <NewSection />
        <Sponser />
        <ExploreSection />
      </Box>
    </>
  );
};

export default Home;
