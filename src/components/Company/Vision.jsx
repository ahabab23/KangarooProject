import React from "react";
import image1 from "../../Assets/bg-icon-box1.jpg";
import image2 from "../../Assets/bg-icon-box2.jpg";
import image3 from "../../Assets/web-structure.png";
import image4 from "../../Assets/mobile-app.png";

const VisionMissionSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <span className="text-purple-600 font-medium">// ABOUT US</span>
        <h2 className="text-3xl font-bold mt-2">Our Vision and Mission</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {[
          {
            title: "Our Vision",
            icon: image3,
            text: `KSL's vision is to become the most trusted and innovative African
              IT solutions company and to partner with businesses to help
              imagine, execute, and accelerate their digital transformation
              journey. Our vision within the next few years is to become a
              leading IT service and software provider in the East African
              markets and also to penetrate the global markets.`,
            bgImage: image1,
          },
          {
            title: "Our Mission",
            icon: image4,
            text: `KSL's mission is to offer complete and innovative IT solutions and
              services to its clients in order for them to achieve their
              business objectives and to keep up with a continuing evolving
              world. We know that Customer growth is our growth, so we commit
              our customers to help in achieving their business goals. We
              believe in working with integrity to offer best quality services.
              We want to be known as the reliable, innovative and user friendly
              software service provider in the global IT industry.`,
            bgImage: image2,
          },
        ].map(({ title, icon, text, bgImage }, idx) => (
          <div
            key={idx}
            className="group relative p-6 text-center border border-transparent hover:border-gray-200 hover:shadow-md overflow-hidden transition-[background,border,border-radius,box-shadow,transform] duration-5000"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Hover background image */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
              style={{ backgroundImage: `url(${bgImage})` }}
            ></div>

            {/* Hover-only corner element */}
            <span className="absolute top-[-15px] right-[-15px] w-[30px] h-[30px] bg-[#43baff] rotate-45 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500"></span>

            {/* Content */}
            <div className="relative z-10 transition-colors duration-500 text-gray-800 group-hover:text-white">
              <div className="flex justify-center items-center mb-4">
                <img 
                  src={icon} 
                  alt={title} 
                  className="h-16 w-16 object-contain text-blue-500 hover:text-purple-500" 
                />
              </div>
              <h5 className="text-xl font-semibold mb-3">{title}</h5>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisionMissionSection;