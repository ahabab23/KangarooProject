import React, { useState, useEffect, useRef } from "react";
import Slide1 from "../../Assets/Slide4.jpg";
import Slide2 from "../../Assets/slide11.jpg";

const slides = [
  {
    image: Slide1,
    subtitle: "// We Create Leading Digital Products",
    title: "END TO END\nDEVELOPMENT", // Added \n for line break
    description: "We are 100+ professional software engineers with more than 10 years of experience in delivering superior products.",
    animation: "fromTop",
  },
  {
    image: Slide2,
    subtitle: "// Only High-Quality Services",
    title: "SOFTWARE IT &\nOUTSOURCING", // Added \n for line break
    description: "We are 100+ professional software engineers with more than 10 years of experience in delivering superior products.",
    animation: "fromLeft",
  },
  {
    image: Slide1,
    subtitle: "// Full Cycle Software Development",
    title: "FROM IDEA TO\nPRODUCT", // Added \n for line break
    description: "We are 100+ professional software engineers with more than 10 years of experience in delivering superior products.",
    animation: "fromBottom",
  },
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [titleLetters, setTitleLetters] = useState([]);
  const [lettersVisible, setLettersVisible] = useState(0);
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    resetAnimation();
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    resetAnimation();
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    resetAnimation();
  };

  const resetAnimation = () => {
    setLettersVisible(0);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Animate title letter by letter
  useEffect(() => {
    const title = slides[currentIndex].title;
    setTitleLetters(title.split(""));

    let increment = 0;
    const animateLetters = () => {
      timeoutRef.current = setTimeout(() => {
        if (increment <= title.length) {
          setLettersVisible(increment);
          increment++;
          animateLetters();
        }
      }, 100);
    };

    animateLetters();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex]);

  // Auto slide change
  useEffect(() => {
    const autoSlideInterval = setInterval(nextSlide, 6000);
    return () => clearInterval(autoSlideInterval);
  }, [currentIndex]);

  const getAnimationClasses = (animationType) => {
    const baseClasses = "transition-all duration-700 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0";

    switch (animationType) {
      case "fromTop":
        return `${baseClasses} opacity-0 -translate-y-10`;
      case "fromLeft":
        return `${baseClasses} opacity-0 -translate-x-10`;
      case "fromBottom":
        return `${baseClasses} opacity-0 translate-y-10`;
      default:
        return baseClasses;
    }
  };

  return (
    <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] 2xl:h-[98vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out group ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="h-full w-full bg-black/30 flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
            <div className="text-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl ml-0 sm:ml-4 md:ml-8 lg:ml-12 xl:ml-20">
              {/* Subtitle - now properly rendered */}
              <h3
                className={`text-sm sm:text-base md:text-lg lg:text-xl font-light mb-2 sm:mb-3 ${getAnimationClasses(
                  slide.animation
                )} delay-100`}
              >
                {slide.subtitle}
              </h3>

              {/* Title with proper line breaks */}
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight whitespace-pre-line">
                {titleLetters.map((letter, i) => (
                  <span
                    key={i}
                    className={`inline-block transition-all duration-300 ${
                      i < lettersVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    {letter === "\n" ? <br /> : letter}
                  </span>
                ))}
              </h1>

              {/* Description - now properly rendered */}
              <p
                className={`mt-3 sm:mt-4 md:mt-5 lg:mt-6 mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-xs sm:text-sm md:text-base leading-relaxed ${getAnimationClasses(
                  slide.animation
                )} delay-300`}
              >
                {slide.description}
              </p>

              <button
                className={`bg-sky-400 hover:bg-blue-700 text-white px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base font-semibold ${getAnimationClasses(
                  slide.animation
                )} delay-500`}
              >
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 lg:left-8 lg:translate-x-0 flex items-center space-x-3 sm:space-x-4 z-20">
        <button
          className="cursor-pointer hover:text-blue-400 transition-colors duration-300 text-lg sm:text-xl md:text-2xl select-none focus:outline-none"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          &#8592;
        </button>

        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 focus:outline-none ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          className="cursor-pointer hover:text-blue-400 transition-colors duration-300 text-lg sm:text-xl md:text-2xl select-none focus:outline-none"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;

// import React, { useState, useEffect, useRef } from "react";

// const Slide1 =
//   "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";
// const Slide2 =
//   "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";

// const slides = [
//   {
//     image: Slide1,
//     subtitle: "// We Create Leading Digital Products",
//     title: ["END TO END", "DEVELOPMENT"],
//     description:
//       "We are 100+ professional software engineers with more than 10 years of experience in delivering superior products.",
//     animation: "fromTop",
//   },
//   {
//     image: Slide2,
//     subtitle: "// Only High-Quality Services",
//     title: ["SOFTWARE IT &", "OUTSOURCING"],
//     description:
//       "We are 100+ professional software engineers with more than 10 years of experience in delivering superior products.",
//     animation: "fromLeft",
//   },
//   {
//     image: Slide1,
//     subtitle: "// Full Cycle Software Development",
//     title: ["FROM IDEA TO", "PRODUCT"],
//     description:
//       "We are 100+ professional software engineers with more than 10 years of experience in delivering superior products.",
//     animation: "fromBottom",
//   },
// ];

// const HeroSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [titleLines, setTitleLines] = useState([]);
//   const [lettersVisible, setLettersVisible] = useState([]);
//   const [animationsActive, setAnimationsActive] = useState(false);
//   const timeoutRef = useRef(null);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % slides.length);
//     resetAnimation();
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
//     resetAnimation();
//   };

//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//     resetAnimation();
//   };

//   const resetAnimation = () => {
//     setLettersVisible([]);
//     setAnimationsActive(false);
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//   };

//   useEffect(() => {
//     const currentTitle = slides[currentIndex].title;
//     setTitleLines(currentTitle);

//     const initialVisibility = currentTitle.map((line) =>
//       Array(line.length).fill(false)
//     );
//     setLettersVisible(initialVisibility);

//     setTimeout(() => setAnimationsActive(true), 100);

//     let lineIndex = 0;
//     let charIndex = 0;

//     const animateNextCharacter = () => {
//       timeoutRef.current = setTimeout(() => {
//         setLettersVisible((prev) => {
//           const newVisibility = [...prev];
//           if (!Array.isArray(newVisibility[lineIndex])) {
//             newVisibility[lineIndex] = [];
//           }
//           newVisibility[lineIndex] = [...newVisibility[lineIndex]];
//           newVisibility[lineIndex][charIndex] = true;

//           charIndex++;
//           if (charIndex >= currentTitle[lineIndex].length) {
//             lineIndex++;
//             charIndex = 0;
//             if (lineIndex >= currentTitle.length) {
//               return newVisibility;
//             }
//           }

//           animateNextCharacter();
//           return newVisibility;
//         });
//       }, 80);
//     };

//     animateNextCharacter();

//     return () => clearTimeout(timeoutRef.current);
//   }, [currentIndex]);

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 6000);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const getAnimationClasses = (animationType) => {
//     const base = "transition-all duration-700 ease-out";
//     if (!animationsActive) {
//       switch (animationType) {
//         case "fromTop":
//           return `${base} opacity-0 -translate-y-10`;
//         case "fromLeft":
//           return `${base} opacity-0 -translate-x-10`;
//         case "fromBottom":
//           return `${base} opacity-0 translate-y-10`;
//         default:
//           return `${base} opacity-0`;
//       }
//     }
//     return `${base} opacity-100 translate-x-0 translate-y-0`;
//   };

//   return (
//     <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] 2xl:h-[98vh] overflow-hidden">
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//             index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
//           }`}
//           style={{
//             backgroundImage: `url(${slide.image})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <div className="h-full w-full bg-black/40 flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
//             <div className="text-white max-w-xl ml-0 sm:ml-4 md:ml-8 lg:ml-12 xl:ml-20">
//               <h3
//                 className={`text-sm sm:text-base md:text-lg lg:text-xl font-light mb-2 sm:mb-3 ${getAnimationClasses(
//                   slide.animation
//                 )}`}
//                 style={{ transitionDelay: "100ms" }}
//               >
//                 {slide.subtitle}
//               </h3>

//               <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight mb-3 sm:mb-4">
//                 {titleLines.map((line, lineIndex) => (
//                   <div key={lineIndex} className="overflow-hidden">
//                     {line.split("").map((char, charIndex) => (
//                       <span
//                         key={charIndex}
//                         className={`inline-block transition-all duration-300 ${
//                           lettersVisible[lineIndex]?.[charIndex]
//                             ? "opacity-100 translate-y-0"
//                             : "opacity-0 translate-y-4"
//                         }`}
//                         style={{
//                           transitionDelay: `${
//                             lineIndex * 100 + charIndex * 50
//                           }ms`,
//                         }}
//                       >
//                         {char === " " ? "\u00A0" : char}
//                       </span>
//                     ))}
//                   </div>
//                 ))}
//               </h1>

//               <p
//                 className={`mt-3 sm:mt-4 md:mt-5 lg:mt-6 mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-xs sm:text-sm md:text-base leading-relaxed ${getAnimationClasses(
//                   slide.animation
//                 )}`}
//                 style={{ transitionDelay: "300ms" }}
//               >
//                 {slide.description}
//               </p>

//               <button
//                 className={`bg-sky-400 hover:bg-blue-700 text-white px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base font-semibold transition-all duration-200 ${getAnimationClasses(
//                   slide.animation
//                 )}`}
//                 style={{ transitionDelay: "500ms" }}
//               >
//                 LEARN MORE
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}

//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 lg:left-8 lg:translate-x-0 flex items-center space-x-3 sm:space-x-4 z-20">
//         <button
//           className="cursor-pointer hover:text-blue-400 transition-colors duration-300 text-lg sm:text-xl md:text-2xl select-none focus:outline-none text-white"
//           onClick={prevSlide}
//           aria-label="Previous slide"
//         >
//           &#8592;
//         </button>
//         <div className="flex space-x-2">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 focus:outline-none ${
//                 index === currentIndex ? "bg-white" : "bg-gray-400"
//               }`}
//               onClick={() => goToSlide(index)}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//         <button
//           className="cursor-pointer hover:text-blue-400 transition-colors duration-300 text-lg sm:text-xl md:text-2xl select-none focus:outline-none text-white"
//           onClick={nextSlide}
//           aria-label="Next slide"
//         >
//           &#8594;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HeroSlider;
