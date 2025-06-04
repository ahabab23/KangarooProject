import React from "react";
import PageTitle from "../../components/PageTitle";
import ICTServicesSection from "../../components/Services/ictservice";
import ICTConsult from "../../components/Services/ictconsult";


function ICT() {
  return (
    <>
      <PageTitle />
     <ICTServicesSection />
     <ICTConsult />
    </>
  );
}

export default ICT;
