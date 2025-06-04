import React from "react";
import bgImage from "../../Assets/bg-cta-home2.jpg";
import { Link } from "react-router-dom";

export default function ICTConsult() {
  return (
    <div
      className="w-full text-white bg-cover bg-center bg-no-repeat relative flex items-center justify-center h-[500px] p-16"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full flex flex-col items-center justify-center min-h-[300px]">
        <p className="sm:text-3xl text-xl w-4/6 text-center mb-6">
          // Drop us a line! We are here to answer your questions 24/7
        </p>
        <h3 className="sm:text-7xl text-3xl font-extrabold text-center w-5/6 mb-8">
          NEED A CONSULTATION?
        </h3>
        <Link
          to="/contact"
          className="border bg-blue-500 text-white hover:bg-purple-700 duration-500 px-8 py-4  text-lg font-medium"
        >
          CONTACT US
        </Link>
      </div>
    </div>
  );
}
