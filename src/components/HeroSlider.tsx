
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

const slides = [
  {
    id: 1,
    image: "/lovable-uploads/0ed49bf1-7a0d-4bf4-b5cd-d4951cca5cf0.jpg",
    title: "Experience Culinary Excellence",
    description: "Indulge in our expertly crafted dishes that blend tradition with innovation"
  },
  {
    id: 2,
    image: "/lovable-uploads/17194e01-d132-4c2f-b4e8-7a765667ef26.jpg",
    title: "Luxury Accommodations",
    description: "Discover comfort and elegance in our carefully designed rooms"
  },
  {
    id: 3,
    image: "/lovable-uploads/25b76d4b-de54-4074-b39f-7cd0455a2f17.png",
    title: "Unforgettable Moments",
    description: "Create lasting memories in our beautiful surroundings"
  }
];

const HeroSlider = () => {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden bg-black">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-[90vh]"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-white px-4"
                >
                  <h1 className="text-4xl md:text-6xl font-serif mb-6 text-center">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">
                    {slide.description}
                  </p>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <Button
                      variant="outline"
                      className="text-white border-2 border-white hover:bg-white hover:text-black transition-all duration-300 text-lg px-8 py-6"
                    >
                      Explore More
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 z-20">
          <CarouselPrevious className="relative translate-y-0 left-0 bg-white/20 hover:bg-white/40 border-none text-white" />
          <CarouselNext className="relative translate-y-0 right-0 bg-white/20 hover:bg-white/40 border-none text-white" />
        </div>
      </Carousel>
    </section>
  );
};

export default HeroSlider;
