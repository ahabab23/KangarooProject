import React, { useState, useEffect } from "react";

const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const GradientStatsBanner = () => {
  return (
    <div className="flex justify-center w-full px-4 py-16">
      <div className="w-full max-w-6xl  bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 p-8 text-center text-white">
          {/* Active Clients */}
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">
              <CountUp end={330} suffix="+" />
            </div>
            <div className="text-sm md:text-base font-medium tracking-wide uppercase relative pl-5 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-current before:rounded-full">
              Active Clients
            </div>
          </div>

          {/* Projects Done */}
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">
              <CountUp end={850} suffix="+" />
            </div>
            <div className="text-sm md:text-base font-medium tracking-wide uppercase relative pl-5 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-current before:rounded-full">
              Projects Done
            </div>
          </div>

          {/* Team Advisors */}
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">
              <CountUp end={25} suffix="+" />
            </div>
            <div className="text-sm md:text-base font-medium tracking-wide uppercase relative pl-5 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-current before:rounded-full">
              Team Advisors
            </div>
          </div>

          {/* Glorious Years */}
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">
              <CountUp end={10} suffix="+" />
            </div>
            <div className="text-sm md:text-base font-medium tracking-wide uppercase relative pl-5 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-current before:rounded-full">
              Glorious Years
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradientStatsBanner;
