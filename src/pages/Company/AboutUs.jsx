import React from "react";
import PageTitle from "../../components/PageTitle";
import Carousel from "../../components/Company/carousel";
import TechnologyIndex from "../../components/Company/AboutIndex";
import Overview from "../../components/Company/Overview";
import PartnersCarousel from "../../components/Home/PartnersCarousel";

function AboutUs() {
  return (
    <>
      <PageTitle />
      <Overview />
      <PartnersCarousel />
      <TechnologyIndex />
    </>
  );
}

export default AboutUs;
