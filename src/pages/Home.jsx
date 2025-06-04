import React from "react";
import AboutCompany from "../components/Home/AboutCompany";
import HeroSlider from "../components/Home/HeroSlider";
import PartnersCarousel from "../components/Home/PartnersCarousel";
import TechnologyIndex from "../components/Home/Technology";
import Testimonials from "../components/Home/Testemonials";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import ICTServicesSection from "../components/Services/ictservice";
import StatsSection from "../components/Home/StatsSection";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <PartnersCarousel />
      <AboutCompany />
      <WhyChooseUs />
      <StatsSection />
      <ICTServicesSection />
      <TechnologyIndex />
      <Testimonials />
    </>
  );
}
