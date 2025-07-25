// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export default function ModernMetalCarousel() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const navigate = useNavigate();

//   const slides = [
//     {
//       id: 1,
//       title: "WHAT WE MAKE",
//       description:
//         "Rajlakshmi Metal makes precision-laser cut metal grilles, panels and more for residential, hospitality and corporate environments.",
//       buttonText: "WHAT WE MAKE",
//       backgroundImage:
//         "https://modmetaldesigns.com/wp-content/uploads/2022/05/IMG_0243-1-1536x1152.jpg",
//       pattern: "orange-vertical",
//     },
//     {
//       id: 2,
//       title: "MADE TO ORDER",
//       description:
//         "Each piece is a custom order and every detail matters. This results in a one-of-a-kind order that's uniquely yours!",
//       buttonText: "MADE TO ORDER",
//       backgroundImage:
//         "https://modmetaldesigns.com/wp-content/uploads/2022/04/5-Brown-Sugar-Kitchen-scaled-2048x1366-1-1536x1025.jpeg",
//       pattern: "perforated-panels",
//     },
//     {
//       id: 3,
//       title: "READY TO SHIP",
//       description:
//         "There's nothing ordinary about Rajlakshmi Metal's Standard Line. It's pretty extraordinary – including the lead time!",
//       buttonText: "READY TO SHIP",
//       backgroundImage:
//         "https://modmetaldesigns.com/wp-content/uploads/2024/09/IMG_0204-1-1536x1053.jpg",
//       pattern: "hexagonal",
//     },
//     {
//       id: 4,
//       title: "ABOUT US",
//       description:
//         "Annie Kantor, a.k.a. The Woman of Steel, and founder of Rajlakshmi Metal shares her passion and skills with you.",
//       buttonText: "ABOUT",
//       backgroundImage:
//         "https://modmetaldesigns.com/wp-content/uploads/2024/09/5.23.24-1177-1-1-1536x1024.jpg",
//       pattern: "geometric-mix",
//     },
//   ];

//   // Auto scroll functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000); // Change slide every 5 seconds

//     return () => clearInterval(interval);
//   }, [slides.length]);

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   const renderPattern = (patternType) => {
//     switch (patternType) {
//       //   case "orange-vertical":
//       //     return (
//       //       <div className="absolute inset-0 opacity-30">
//       //         <div className="grid grid-cols-12 md:grid-cols-16 lg:grid-cols-20 h-full gap-1">
//       //           {Array.from({ length: 100 }).map((_, i) => (
//       //             <div
//       //               key={i}
//       //               className={`${
//       //                 i % 3 === 0
//       //                   ? "bg-orange-500"
//       //                   : i % 3 === 1
//       //                   ? "bg-orange-600"
//       //                   : "bg-orange-400"
//       //               } rounded-sm transition-all duration-1000 transform hover:scale-105`}
//       //               style={{
//       //                 height: `${Math.random() * 60 + 20}%`,
//       //                 marginTop: `${Math.random() * 40}%`,
//       //               }}
//       //             ></div>
//       //           ))}
//       //         </div>
//       //       </div>
//       //     );
//       //   case "perforated-panels":
//       //     return (
//       //       <div className="absolute inset-0 opacity-25">
//       //         <div className="grid grid-cols-8 md:grid-cols-12 lg:grid-cols-16 h-full gap-2">
//       //           {Array.from({ length: 80 }).map((_, i) => (
//       //             <div
//       //               key={i}
//       //               className="bg-gray-300 rounded-full aspect-square animate-pulse"
//       //               style={{
//       //                 animationDelay: `${Math.random() * 2}s`,
//       //               }}
//       //             ></div>
//       //           ))}
//       //         </div>
//       //       </div>
//       //     );
//       case "hexagonal":
//         return (
//           <div className="absolute inset-0 opacity-20">
//             <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 h-full gap-1">
//               {Array.from({ length: 60 }).map((_, i) => (
//                 <div
//                   key={i}
//                   className="bg-gray-600 transform rotate-45 aspect-square animate-spin"
//                   style={{
//                     animationDuration: `${Math.random() * 10 + 5}s`,
//                     animationDelay: `${Math.random() * 3}s`,
//                   }}
//                 ></div>
//               ))}
//             </div>
//           </div>
//         );
//       //   case "geometric-mix":
//       //     return (
//       //       <div className="absolute inset-0 opacity-30">
//       //         <div className="grid grid-cols-10 md:grid-cols-14 lg:grid-cols-18 h-full gap-1">
//       //           {Array.from({ length: 90 }).map((_, i) => (
//       //             <div
//       //               key={i}
//       //               className={`
//       //                 ${
//       //                   i % 4 === 0
//       //                     ? "bg-blue-500 rounded-full"
//       //                     : i % 4 === 1
//       //                     ? "bg-green-500 transform rotate-45"
//       //                     : i % 4 === 2
//       //                     ? "bg-purple-500 rounded-sm"
//       //                     : "bg-yellow-500 rounded-full"
//       //                 }
//       //                 aspect-square transition-all duration-500 hover:scale-110
//       //               `}
//       //               style={{
//       //                 transform: `scale(${Math.random() * 0.8 + 0.4}) rotate(${
//       //                   Math.random() * 360
//       //                 }deg)`,
//       //               }}
//       //             ></div>
//       //           ))}
//       //         </div>
//       //       </div>
//       //     );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Main Carousel Container */}
//       <div
//         className="flex h-full transition-transform duration-1000 ease-in-out"
//         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//       >
//         {slides.map((slide, index) => (
//           <div
//             key={slide.id}
//             className="relative min-w-full h-full bg-cover bg-center"
//             style={{
//               backgroundImage: `url(${slide.backgroundImage})`,
//             }}
//           >
//             {/* Dark Overlay */}
//             <div className="absolute inset-0 bg-black opacity-60"></div>

//             {/* Pattern Overlay */}
//             {renderPattern(slide.pattern)}

//             {/* Content */}
//             <div className="relative z-10 flex items-end h-full">
//               <div className="px-6 md:px-12 lg:px-16 pb-16 md:pb-20 lg:pb-24 text-left max-w-2xl">
//                 <h1 className="text-white font-sans text-4xl md:text-5xl lg:text-6xl font-light mb-4 md:mb-6 tracking-wide animate-fade-in-up">
//                   {slide.title}
//                 </h1>
//                 <p className="text-white font-sans text-base md:text-lg font-light mb-6 md:mb-8 max-w-md leading-relaxed animate-fade-in-up animation-delay-300">
//                   {slide.description}
//                 </p>
//                 <button
//                   onClick={() => navigate("/our-products")}
//                   className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 md:px-8 md:py-4 text-white text-sm md:text-base font-semibold rounded transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-fade-in-up animation-delay-600"
//                 >
//                   {slide.buttonText}
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Vertical Navigation Dots */}
//       <div className="absolute right-6 md:right-8 lg:right-12 top-1/2 transform -translate-y-1/2 z-20">
//         <div className="flex flex-col space-y-3">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
//                 currentSlide === index
//                   ? "bg-cyan-500 shadow-lg"
//                   : "bg-white bg-opacity-50 hover:bg-opacity-75"
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Progress Bar */}
//       {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-black bg-opacity-30">
//         <div
//           className="h-full bg-cyan-500 transition-all duration-300"
//           style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
//         />
//       </div> */}

//       {/* Slide Counter */}
//       {/* <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-20">
//         <div className="text-white font-sans text-sm font-light bg-black bg-opacity-50 px-3 py-1 rounded-full">
//           {currentSlide + 1} / {slides.length}
//         </div>
//       </div> */}

//       <style>{`
//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-in-up {
//           animation: fade-in-up 1s ease-out forwards;
//         }

//         .animation-delay-300 {
//           animation-delay: 0.3s;
//           opacity: 0;
//         }

//         .animation-delay-600 {
//           animation-delay: 0.6s;
//           opacity: 0;
//         }
//       `}</style>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Star,
  Award,
  Shield,
  Truck,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import BrassRoundedBarImage from "../../assets/BrassRoundedBar.png";
import StainlessSteelPipeImage from "../../assets/StainlessSteel.png";
import HomeProducts from "../HomeProducts/HomeProducts";
import AboutImage from "../../assets/AboutImage.png";

const RajlakshmiMetal = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  const heroSlides = [
    {
      title: "Premium Stainless Steel Solutions",
      subtitle: "Since 2022, delivering excellence in metal wholesaling",
      image: StainlessSteelPipeImage,
      gradient: "from-blue-900/80 to-purple-900/80",
    },
    {
      title: "Superior Phosphor Bronze Rods",
      subtitle: "Engineered for durability and precision",
      image: BrassRoundedBarImage,
      gradient: "from-amber-900/80 to-orange-900/80",
    },
    {
      title: "High-Quality Copper Pipes",
      subtitle: "Trusted by industries nationwide",
      image:
        "https://images.unsplash.com/photo-1584774354932-62ceb99e6053?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gradient: "from-emerald-900/80 to-teal-900/80",
    },
  ];

  const products = [
    {
      id: 1,
      title: "Stainless Steel Rods",
      description:
        "Premium grade stainless steel rods available in various dimensions and specifications. Perfect for industrial applications requiring corrosion resistance and strength.",
      image:
        "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop",
      category: "Stainless Steel",
      features: ["Corrosion Resistant", "High Strength", "Various Grades"],
    },
    {
      id: 2,
      title: "Phosphor Bronze Rods",
      description:
        "High-quality phosphor bronze rods with excellent electrical conductivity and wear resistance. Ideal for precision engineering applications.",
      image:
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop",
      category: "Bronze",
      features: [
        "Excellent Conductivity",
        "Wear Resistant",
        "Precision Engineering",
      ],
    },
    {
      id: 3,
      title: "Copper Pipes",
      description:
        "Superior quality copper pipes for plumbing, HVAC, and industrial applications. Available in different sizes and thicknesses.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
      category: "Copper",
      features: ["Antimicrobial", "Thermal Conductivity", "Malleable"],
    },
    {
      id: 4,
      title: "Brass Fittings",
      description:
        "Precision-engineered brass fittings and components for various industrial and commercial applications with superior finish.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      category: "Brass",
      features: ["Precision Engineered", "Superior Finish", "Durable"],
    },
    {
      id: 5,
      title: "Aluminum Sheets",
      description:
        "Lightweight and corrosion-resistant aluminum sheets in various grades and thicknesses for aerospace and automotive industries.",
      image:
        "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop",
      category: "Aluminum",
      features: ["Lightweight", "Corrosion Resistant", "Aerospace Grade"],
    },
    {
      id: 6,
      title: "Nickel Alloys",
      description:
        "High-performance nickel alloys for extreme temperature and corrosive environments. Perfect for chemical processing industries.",
      image:
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop",
      category: "Nickel",
      features: ["High Temperature", "Chemical Resistant", "High Performance"],
    },
  ];

  const stats = [
    { number: "500+", label: "Happy Clients", icon: Star },
    { number: "3+", label: "Years Experience", icon: Award },
    { number: "1000+", label: "Products Delivered", icon: Truck },
    { number: "24/7", label: "Support Available", icon: Shield },
  ];

  // Auto-scroll hero slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}

      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            {/* <div className="absolute inset-0 bg-black/40" /> */}
            {/* <div
              className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`}
            /> */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-pulse">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-[#1F2937] cursor-pointer text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all">
                    Explore Products
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Products Section */}
      {/* <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            id="products-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible["products-header"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Premium Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our extensive range of high-quality metal products,
              carefully selected and tested for superior performance across
              various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                id={`product-${product.id}`}
                data-animate
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group ${
                  isVisible[`product-${product.id}`]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {product.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all flex items-center justify-center space-x-2">
                    <span>Read More</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <HomeProducts />

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              id="about-content"
              data-animate
              className={`transition-all duration-1000 ${
                isVisible["about-content"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About Rajlakshmi Metal
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Incepted in 2022, Rajlakshmi Metal has quickly established
                itself as a distinguished wholesaler in the metal industry. We
                specialize in providing an enormous consignment of
                premium-quality metal products including Stainless Steel Rods,
                Phosphor Bronze Rods, Copper Pipes, and much more.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our commitment to quality, competitive pricing, and exceptional
                customer service has made us a trusted partner for businesses
                across various industries. We understand the critical importance
                of reliable metal supplies in your operations.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Shield size={16} className="text-blue-600" />
                  </div>
                  <span className="text-gray-700">
                    Quality Assured Products
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Truck size={16} className="text-blue-600" />
                  </div>
                  <span className="text-gray-700">
                    Fast & Reliable Delivery
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award size={16} className="text-blue-600" />
                  </div>
                  <span className="text-gray-700">Industry Expertise</span>
                </div>
              </div>
            </div>

            <div
              id="about-image"
              data-animate
              className={`transition-all duration-1000 ${
                isVisible["about-image"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <img
                src={AboutImage}
                alt="About Rajlakshmi Metal"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300">
              Ready to discuss your metal requirements? We're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">+91 98765 43210</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Email Us
              </h3>
              <p className="text-gray-300">info@rajlakshmimetal.com</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Visit Us
              </h3>
              <p className="text-gray-300">Mumbai, Maharashtra, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
};

export default RajlakshmiMetal;
