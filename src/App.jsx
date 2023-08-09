import {} from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OurStory from "./pages/OurStory";
import ContactUs from "./pages/ContactUs";
import AwardsRecognition from "./pages/AwardsRecognition";
import OurWork from "./pages/OurWork";
import OurImpact from "./pages/OurImpact";
import WorldSpaceWeek from "./pages/WorldSpaceWeek";
import AIASC from "./pages/AIASC";
import SGVPK from "./pages/SGVPK";
import FALP from "./pages/FALP";
import Donate from "./pages/Donate";
import Volunteer from "./pages/Volunteer";
import SpaceInNews from "./pages/SpaceInNews";
import Event from "./pages/Event";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/our-story/mission-vision" element={<Event />} />
        <Route
          path="/our-story/awards-recognitions/"
          element={<AwardsRecognition />}
        />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/our-work/world-space-week" element={<WorldSpaceWeek />} />
        <Route
          path="/our-work/all-india-asteroid-search-campaign"
          element={<AIASC />}
        />
        <Route path="/our-work/sgvpk" element={<SGVPK />} />
        <Route path="/our-impact" element={<OurImpact />} />
        <Route
          path="/our-impact/fighting-against-light-pollution/"
          element={<FALP />}
        />
        <Route path="/donate" element={<Donate />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/space-in-news" element={<SpaceInNews />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
