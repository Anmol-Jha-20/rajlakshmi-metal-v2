import React, { useState, useEffect, useRef } from "react";
import BrassSheetLaser from "../../assets/BrassSheetLaserCuttingOne.png";
import BrassTPatti from "../../assets/BrassTPatti.jpeg";
import PolishedBrassBlock from "../../assets/PolishedBrassBlock.jpeg";
import BrassRoundedBarOne from "../../assets/BrassRoundedBar.png";
import CylindricalBar from "../../assets/CylindricalBarOne.png";
import GraniteTPatti from "../../assets/BrassTPatti.png";
import { useNavigate } from "react-router-dom";

const FeaturedProducts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  // Sample images for demonstration
  const sampleImages = {
    brassSheet: `${BrassSheetLaser}`,
    brassBar: BrassRoundedBarOne,
    cylindrical: CylindricalBar,
    brassTee: `${BrassTPatti}`,
    granite: `${GraniteTPatti}`,
    polished: `${PolishedBrassBlock}`,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const products = [
    {
      id: 1,
      name: "Brass Sheet Laser",
      image: sampleImages.brassSheet,
      description:
        "Precision-cut brass sheets crafted using high-powered laser technology for clean edges and intricate designs.",
      features: ["Laser Cut", "Multiple Thickness", "Custom Designs"],
      delay: "delay-100",
      link: "/brass-sheet",
    },
    {
      id: 2,
      name: "Brass Round Bar",
      image: sampleImages.brassBar,
      description:
        "High-quality brass round bars with superior finish and dimensional accuracy for industrial applications.",
      features: ["Premium Quality", "Various Sizes", "Corrosion Resistant"],
      delay: "delay-200",
      link: "/brass-rod",
    },
    {
      id: 3,
      name: "Cylindrical Gunmetal Bush",
      image: sampleImages.cylindrical,
      description:
        "Durable gunmetal bushes engineered for heavy-duty applications with excellent wear resistance.",
      features: ["Heavy Duty", "Wear Resistant", "Precision Machined"],
      delay: "delay-300",
      link: "/brass-rod",
    },
    {
      id: 4,
      name: "Brass T Patti",
      image: sampleImages.brassTee,
      description:
        "Versatile brass T-section profiles ideal for construction and architectural applications.",
      features: ["Structural Grade", "Easy Installation", "Corrosion Free"],
      delay: "delay-400",
      link: "/brass-sheet",
    },
    {
      id: 5,
      name: "Brass Granite Tee Patti",
      image: sampleImages.granite,
      description:
        "Premium granite finish brass tee sections combining aesthetics with structural integrity.",
      features: ["Granite Finish", "Decorative", "High Strength"],
      delay: "delay-500",
      link: "/stainless-steel-sheet",
    },
    {
      id: 6,
      name: "Polished Brass Block",
      image: sampleImages.polished,
      description:
        "Mirror-finished brass blocks perfect for decorative and functional applications.",
      features: ["Mirror Finish", "Custom Sizes", "Premium Grade"],
      delay: "delay-600",
      link: "/brass-rod",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 min-h-screen overflow-hidden"
      aria-label="Featured Products"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-amber-200/20 to-yellow-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-200/10 to-pink-200/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Enhanced Header */}
        <header className="text-center mb-20">
          <div className="inline-block">
            <div
              className={`transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <span className="inline-block px-4 py-2 text-sm font-medium text-blue-600 bg-blue-100/50 rounded-full mb-4 tracking-wide">
                PREMIUM COLLECTION
              </span>
            </div>
            <h2
              className={`text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6 leading-tight transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Featured Products
            </h2>
            <div
              className={`w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full transition-all duration-1000 ease-out delay-300 ${
                isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
            />
          </div>
        </header>

        {/* Enhanced Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {products.map((product, index) => (
            <article
              key={product.id}
              className={`group cursor-pointer transition-all duration-700 ease-out ${
                product.delay
              } ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Card */}
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-blue-200">
                {/* Product Image Container */}
                <div className="relative overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 p-6">
                    <div className="w-full h-full bg-white rounded-xl border-2 border-gray-200 overflow-hidden transition-all duration-500 group-hover:border-blue-300 group-hover:shadow-inner">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=400&fit=crop";
                        }}
                      />
                    </div>
                  </div>

                  {/* Hover Overlay with Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  {/* Features Badge */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <div className="flex flex-wrap gap-1">
                      {product.features.slice(0, 2).map((feature, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs font-medium text-white bg-black/50 backdrop-blur-sm rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <header className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {product.description}
                    </p>
                  </header>

                  {/* Features List */}
                  {/* <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full border border-blue-200"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div> */}

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-gray-100">
                    <button
                      onClick={() => navigate(product.link)}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg transform hover:scale-105"
                      aria-label={`View details for ${product.name}`}
                    >
                      View Details
                    </button>
                    <a href="tel:8904162990">
                      <button
                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 text-sm font-medium"
                        aria-label={`Add ${product.name} to inquiry`}
                      >
                        Inquire
                      </button>
                    </a>
                  </div>
                </div>

                {/* Floating Animation Element */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
              </div>
            </article>
          ))}
        </div>

        {/* Enhanced Bottom Section */}
        <div className="mt-20 text-center">
          <div
            className={`transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-gray-700 font-medium">
                Precision Engineering
              </span>
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse delay-300" />
              <span className="text-gray-700 font-medium">Quality Assured</span>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-3 h-3 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 rounded-full animate-float transition-all duration-2000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default FeaturedProducts;
