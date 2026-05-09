import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import TechnicalSkills from "@/components/TechnicalSkills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";

import Contact from "@/components/Contact";
import WhatsAppFloater from "@/components/WhatsAppFloater";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Skills />
      <TechnicalSkills />
      <Projects />
      <Experience />

      <Contact />
      <WhatsAppFloater />
      <Footer />
    </div>
  );
};

export default Index;
