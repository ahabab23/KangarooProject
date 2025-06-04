import React from "react";
import PageTitle from "../../components/PageTitle";
import TechIndex from "../../components/Services/TechIndex";
import TechServicesHeader from "../../components/Services/TechServiceHeader";
import ProgrammingServicesSection from "../../components/Services/ProgrammingServices";

function Development() {
  return (
    <>
      <PageTitle />
      <ProgrammingServicesSection />
      <TechServicesHeader />
      <TechIndex />
    </>
  );
}

export default Development;
