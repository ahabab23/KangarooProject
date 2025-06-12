import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const HeroSlider = () => {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length, isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length, isAnimating]);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const res = await axios.get(
          "https://kangaroobackend.onrender.com/api/headers"
        );
        const data = res.data;

        const formatted = data.map((slide) => ({
          ...slide,
          title: slide.title.replace(/\\n/g, "\n"),
        }));

        setSlides(formatted);
      } catch (err) {
        console.error("Failed to fetch slides:", err);
      }
    };

    fetchSlides();
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length, nextSlide]);

  // Fade animation variants
  const fadeVariants = {
    initial: { opacity: 0.5 },
    animate: {
      opacity: 2,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
    exit: {
      opacity: 0.5,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.05,
      },
    },
  };

  if (slides.length === 0) {
    return (
      <div className="h-[90vh] flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="relative h-[83vh] overflow-hidden mt-35">
      <AnimatePresence mode="wait" onExitComplete={() => setIsAnimating(false)}>
        <motion.div
          key={currentIndex}
          variants={fadeVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${slides[currentIndex].image_url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="h-full w-full bg-black/30 px-8 flex items-center  md:px-50">
            <motion.div
              className="text-white max-w-xl"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Subtitle */}
              <motion.h3
                className="text-lg md:text-xl font-light mb-3"
                variants={textVariants}
              >
                // {slides[currentIndex].subtitle}
              </motion.h3>

              {/* Title with preserved spacing and line breaks */}
              <motion.h1
                className="text-3xl md:text-7xl font-bold leading-tight whitespace-pre-line"
                variants={textVariants}
              >
                {slides[currentIndex].title}
              </motion.h1>

              {/* Description */}
              <motion.p
                className="mt-6 mb-8 text-sm md:text-base whitespace-pre-line"
                variants={textVariants}
              >
                {slides[currentIndex].description}
              </motion.p>

              {/* Button */}
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition"
                variants={textVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                LEARN MORE
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center space-x-6 text-white text-lg z-20">
        <motion.span
          className="cursor-pointer hover:text-blue-400 transition text-2xl"
          onClick={prevSlide}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          &#8592;
        </motion.span>
        <span className="font-mono tracking-wider text-sm md:text-base">
          {String(currentIndex + 1).padStart(2, "0")}/
          {String(slides.length).padStart(2, "0")}
        </span>
        <motion.span
          className="cursor-pointer hover:text-blue-400 transition text-2xl"
          onClick={nextSlide}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          &#8594;
        </motion.span>
      </div>
    </div>
  );
};

export default HeroSlider;
