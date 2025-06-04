import React from "react";
import dod from "../../Assets/dod.png";
import kiambu from "../../Assets/kiambu3.png";
import somalia from "../../Assets/somalia.png";

const partners = [
  {
    image: kiambu,
    link: "#",
  },
  {
    image: somalia,
    link: "#",
  },
  {
    image: dod,
    link: "#",
  },
  {
    image: kiambu,

    link: "#",
  },
  {
    image: somalia,

    link: "#",
  },
  {
    image: dod,
    link: "#",
  },
];

export default function PartnersCarousel() {
  return (
    <section className="py-10 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-x-20 gap-y-10">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center transition duration-500 hover:text-black"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="w-36 h-auto object-contain grayscale hover:grayscale-0 transition duration-500"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
