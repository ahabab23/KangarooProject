import React from "react";
import PageTitle from "../../components/PageTitle";
import ChoiceServices from "../../components/Company/ChoiceServices";
import TIndex from "../../components/Company/TIndex";
import GradientStatsBanner from "../../components/Company/Stats";
import ChooseUs from "../../components/Company/ChooseUs";


function WhyChooseUs () {
  return (
    <>
      <PageTitle />
      <ChooseUs />
      <GradientStatsBanner />
      <ChoiceServices />
      <TIndex />
 
    </>
  );
}

export default WhyChooseUs
