import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroImageSlider({
  images = [],
  height = "h-[70vh]",
  autoplay = true,
  interval = 6000,
  showArrows = true,
  showDots = true,
}) {
  const [[index, direction], setIndex] = useState([0, 0]);
  const length = images.length;
  const timerRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    if (!autoplay || length <= 1) return;
    timerRef.current = setInterval(() => {
      changeSlide(1);
    }, interval);
    return () => clearInterval(timerRef.current);
  }, [index, autoplay, interval, length]);

  function changeSlide(dir) {
    setIndex((prev) => {
      const next = (prev[0] + dir + length) % length;
      return [next, dir];
    });
  }

  function onTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchMove(e) {
    touchEndX.current = e.touches[0].clientX;
  }
  function onTouchEnd() {
    if (touchStartX.current == null || touchEndX.current == null) return;
    const dx = touchEndX.current - touchStartX.current;
    if (Math.abs(dx) > 50) {
      if (dx > 0) changeSlide(-1);
      else changeSlide(1);
    }
    touchStartX.current = null;
    touchEndX.current = null;
  }

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (dir) => ({ zIndex: 0, x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

  const zoomAnimation = {
    animate: { scale: 1.05 },
    transition: { duration: Math.max(interval / 1000, 6), ease: "easeInOut" },
  };

  return (
    <section className={`relative w-full overflow-hidden select-none bg-gray-900 text-white ${height}`}>
      <div
        className="absolute inset-0"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence initial={false} custom={direction}>
          {images.map((img, i) =>
            i === index ? (
              <motion.div
                key={img.src + i}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.4 } }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${img.src}')` }}
                  {...zoomAnimation}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="relative z-10 max-w-4xl px-6 text-center">
                  {img.title && (
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-3 text-primary drop-shadow-lg">
                      {img.title}
                    </h1>
                  )}
                  {img.subtitle && (
                    <p className="text-lg md:text-2xl opacity-90">
                      {img.subtitle}
                    </p>
                  )}
                </div>

                <img src={img.src} alt={img.alt || img.title || "hero image"} className="sr-only" />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      {showArrows && length > 1 && (
        <>
          <button
            aria-label="Previous slide"
            onClick={() => changeSlide(-1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 rounded-full bg-black/30 backdrop-blur p-2 hover:bg-black/50 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            aria-label="Next slide"
            onClick={() => changeSlide(1)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 rounded-full bg-black/30 backdrop-blur p-2 hover:bg-black/50 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {showDots && length > 1 && (
        <div className="absolute left-1/2 bottom-6 transform -translate-x-1/2 z-30 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex([i, i > index ? 1 : -1])}
              className={`w-3 h-3 rounded-full transition-transform ${i === index ? "scale-110" : "opacity-60 hover:scale-105"} bg-white/90`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
