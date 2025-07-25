import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      title:
        "If you want to have something extraordinary for your clients, residence or commercial space, do not hesitate to call the team at Rajlakshmi Metal.",
      content:
        "Annie and her team at Rajlakshmi Metal provide a superior product (we purchased two custom made panels) and customer service that is first class. They were extremely patient with our many revisions and even took the time to speak to the GC. What puts them light years ahead of others is their customer service. They go the extra mile to accommodate their clients above and beyond any expectations. If you want to have something extraordinary for your clients, residence or commercial space, do not hesitate to call the team at Rajlakshmi Metal.",
      author: "Amy Fregosi",
      position: "Interior Designer",
      company: "Mondolfo Interior Design",
    },
    {
      title:
        "The best thing about working with Annie Kantor is the passion for her craft and that it shows in the work",
      content:
        "The best thing about working with Annie Kantor is the passion for her craft and that it shows in the work. The pattern is a big thing that knits our home together and everyone notices!",
      author: "Rob Zirkle",
      position: "Architect",
      company: "",
    },
    {
      title: "A combination of function and works of art",
      content:
        "Annie Kantor's registers are both a combination of function and works of art. Her unique designs compliment both traditional and modern homes and add a utilitarian yet decorative element to a wall or floor. I am thrilled to be using her beautiful registers in my client's new construction home in Woodside. She is also wonderful to work with; gracious, dedicated and enjoys the collaborative process of working with designers. I would recommend her and her products with complete enthusiasm.",
      author: "Lindy Donnelly",
      position: "Interior Designer",
      company: "",
    },
    {
      title:
        "From design to delivery the design team has been readily available to answer any questions and the product they provided looks amazing!",
      content:
        "Working with Rajlakshmi Metals has been a great experience! From design to delivery the design team has been readily available to answer any questions and the product they provided looks amazing!",
      author: "Joshua Callahan",
      position: "Project Manager",
      company: "Spectrum Building Company, Inc",
    },
  ];

  const totalSlides = testimonials.length;

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === totalSlides - 1;

  return (
    <div className="w-full max-w-6xl mx-auto bg-gray-200 rounded-lg p-8 md:p-12 relative">
      <div className="relative overflow-hidden rounded-lg">
        {/* Carousel Track */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-2">
              <div className="bg-white border-2 border-blue-500 rounded-lg p-8 md:p-10 min-h-[300px] md:min-h-[350px] relative flex flex-col justify-between">
                {/* Left blue border */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>

                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 leading-tight">
                    {testimonial.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                    {testimonial.content}
                  </p>
                </div>

                <div>
                  <p className="font-bold text-gray-800">
                    {testimonial.author}
                    {testimonial.position && `, ${testimonial.position}`}
                  </p>
                  {testimonial.company && (
                    <p className="text-gray-600 text-sm mt-1">
                      {testimonial.company}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className={`absolute left-0 md:left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full border-none cursor-pointer flex items-center justify-center text-lg md:text-xl z-10 transition-all duration-300 ${
            isFirstSlide ? "cursor-not-allowed" : ""
          }`}
          disabled={isFirstSlide}
        >
          <ChevronLeft
            className={`w-6 h-6 md:w-7 md:h-7 transition-colors duration-300 ${
              isFirstSlide ? "text-gray-600" : "text-blue-800"
            }`}
          />
        </button>

        <button
          onClick={goToNext}
          className={`absolute right-0 md:right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full border-none cursor-pointer flex items-center justify-center text-lg md:text-xl z-10 transition-all duration-300 ${
            isLastSlide ? "cursor-not-allowed" : ""
          }`}
          disabled={isLastSlide}
        >
          <ChevronRight
            className={`w-6 h-6 md:w-7 md:h-7 transition-colors duration-300 ${
              isLastSlide ? "text-gray-600" : "text-blue-800"
            }`}
          />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-8 gap-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
              index === currentSlide ? "bg-blue-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
