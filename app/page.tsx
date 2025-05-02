import Hero07 from "@/components/hero-07/hero-07";
import Navbar01Page from "@/components/navbar-01/navbar-01";
import Contact02Page from "@/components/contact-02/contact-02";
import Features06 from "@/components/features-06/features-06";
import React from "react";
import Footer04Page from "@/components/footer-04/footer-04";
import AboutUsSection from "@/components/AboutUsSection/AboutUsSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";

const page = () => {
  return (
    <div>
      <Navbar01Page />
      <Hero07  />
      <AboutUsSection />
      <ServicesSection></ServicesSection>
      <Contact02Page></Contact02Page>
      <Features06></Features06>
      <Footer04Page />
    </div>
  );
};

export default page;
