import React from "react";
import ServiceBg from "../../Assets/service_bg3.jpg";
import webIcon from "../../Assets/software-engineering.png";
import androidIcon from "../../Assets/android.png";
import iosIcon from "../../Assets/apple.png";
import iotIcon from "../../Assets/internet-of-things.png";
import wearableIcon from "../../Assets/smartwatch.png";
import tvIcon from "../../Assets/tv-antenna.png";

const techItems = [
  {
    icon: webIcon,
    label: "WEB",
    link: "https://kangarosolutions.com/it-services/front-backend-development/",
  },
  {
    icon: androidIcon,
    label: "ANDROID",
    link: "https://kangarosolutions.com/it-services/mobile-app-development/",
  },
  {
    icon: iosIcon,
    label: "IOS",
    link: "https://kangarosolutions.com/it-services/mobile-app-development/",
  },
  {
    icon: iotIcon,
    label: "IOT",
    link: "https://kangarosolutions.com/it-services/mobile-app-development/",
  },
  {
    icon: wearableIcon,
    label: "WEARABLES",
    link: "https://kangarosolutions.com/it-services/front-backend-development/",
  },
  {
    icon: tvIcon,
    label: "TV",
    link: "https://kangarosolutions.com/it-services/mobile-app-development/",
  },
];

export default function TechnologyIndex() {
  return (
    <section
      className="py-20 relative z-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${ServiceBg})` }}
    >
      <div className="max-w-7xl mx-auto px-4 text-center text-white">
        <span className="text-sm text-purple-300">// TECHNOLOGY INDEX</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3 leading-snug">
          We Deliver Solution with <br />
          the Goal of Trusting Relationships
        </h2>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-center">
          {techItems.map(({ icon, label, link }) => (
            <a
              href={link}
              key={label}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 p-6 rounded-md flex flex-col items-center justify-center text-white hover:bg-[#6EC1E4] transition duration-500"
            >
              <img
                src={icon}
                alt={label}
                className="mb-3 h-15 w-15 object-contain filter invert"
              />
              <h5 className="text-sm font-semibold">{label}</h5>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
