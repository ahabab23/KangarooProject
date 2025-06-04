import React from "react";
import PageTitle from "../components/PageTitle"
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import Map from "../components/Contact/Map";

function Contact() {
  return (
    <>
      <PageTitle />
      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto px-4 py-8 mb-8">
        <div className="w-full md:w-1/2">
          <ContactInfo />
        </div>
        <div className="w-full md:w-1/2">
          <ContactForm />
        </div>
      </div>
      <Map />
    </>
  );
}

export default Contact;