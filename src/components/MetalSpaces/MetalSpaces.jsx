import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MetalSpaces = () => {
  const [activeTab, setActiveTab] = useState("RESIDENTIAL HOME");
  const [hoveredHotspot, setHoveredHotspot] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const hotspots = [
    {
      id: 1,
      x: "15%",
      y: "35%",
      title: "Kitchen Island",
      description: "Premium stainless steel with laser-cut patterns",
    },
    {
      id: 2,
      x: "25%",
      y: "60%",
      title: "Cabinet Panels",
      description: "Modern perforated metal designs",
    },
    {
      id: 3,
      x: "45%",
      y: "25%",
      title: "Ceiling Feature",
      description: "Custom metal grid ceiling installation",
    },
    {
      id: 4,
      x: "75%",
      y: "45%",
      title: "Wall Accent",
      description: "Decorative metal screen partition",
    },
    {
      id: 5,
      x: "85%",
      y: "70%",
      title: "Storage Solution",
      description: "Bespoke metal shelving system",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* SEO Meta Tags would be handled by Next.js Head or Helmet in a real app */}

      {/* Header Section */}
      <div
        className={`text-center py-16 px-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-8 tracking-wide">
          MODERN METAL SPACES
        </h1>

        <div className="max-w-4xl mx-auto space-y-4">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Modern Metal offers bespoke{" "}
            <span className="text-blue-600 font-medium hover:text-blue-700 transition-colors cursor-pointer">
              laser cut metal grilles
            </span>
            , panels, and more for residential, hospitality, commercial and
            corporate spaces.
          </p>
          {/* <p className="text-base md:text-lg text-gray-500 animate-pulse">
            Just hover over any of the flashing nodes to learn more!
          </p> */}
        </div>
      </div>

      {/* Tab Navigation */}
      {/* <div className="flex justify-center mb-12">
        <div className="flex bg-white rounded-full shadow-lg p-2 transition-all duration-300 hover:shadow-xl">
          {["RESIDENTIAL HOME", "HOTEL LOBBY"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full cursor-pointer font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow-md transform scale-105"
                  : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div> */}

      {/* Main Image Container */}
      <div className="w-full mx-auto px-4 mb-16">
        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-700 hover:shadow-3xl">
          {/* Image */}
          <div className="relative aspect-video bg-gradient-to-br from-gray-200 to-gray-300">
            {/* <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Modern minimalist living space with metal accents"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            /> */}
            <video
              className="w-full"
              width="640"
              height="360"
              controls
              autoPlay
              muted
              loop
            >
              <source
                src="https://ambrometals.com/wp-content/uploads/2024/08/AmbroMetals.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {/* Interactive Hotspots */}
            {hotspots.map((hotspot) => (
              <div
                key={hotspot.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{ left: hotspot.x, top: hotspot.y }}
                onMouseEnter={() => setHoveredHotspot(hotspot.id)}
                onMouseLeave={() => setHoveredHotspot(null)}
              >
                {/* Pulsing Ring */}
                <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-30"></div>
                <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-20 animation-delay-300"></div>

                {/* Center Dot */}
                {/* <div className="relative w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-lg transition-all duration-300 hover:scale-125 hover:bg-blue-700">
                  <div className="absolute inset-0 rounded-full bg-blue-400 animate-pulse"></div>
                </div> */}

                {/* Tooltip */}
                {/* {hoveredHotspot === hotspot.id && (
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-90 text-white px-4 py-3 rounded-lg shadow-xl z-10 min-w-64 animate-fadeIn">
                    <h3 className="font-semibold text-sm mb-1">
                      {hotspot.title}
                    </h3>
                    <p className="text-xs text-gray-300">
                      {hotspot.description}
                    </p>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black border-opacity-90"></div>
                  </div>
                )} */}
              </div>
            ))}
          </div>

          {/* Bottom Info Bar */}
          {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black to-transparent p-6">
            <div className="text-white">
              <h2 className="text-xl md:text-2xl font-light mb-2">
                {activeTab === "RESIDENTIAL HOME"
                  ? "Contemporary Living Space"
                  : "Luxury Hotel Lobby"}
              </h2>
              <p className="text-gray-300 text-sm md:text-base">
                {activeTab === "RESIDENTIAL HOME"
                  ? "Featuring custom laser-cut metal panels and modern design elements"
                  : "Sophisticated hospitality design with premium metal accents"}
              </p>
            </div>
          </div> */}
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Laser Cut Precision",
              icon: "⚡",
              description:
                "Advanced laser cutting technology for perfect metal designs",
            },
            {
              title: "Custom Solutions",
              icon: "🎯",
              description:
                "Bespoke designs tailored to your specific space requirements",
            },
            {
              title: "Premium Materials",
              icon: "✨",
              description:
                "High-quality metals with exceptional durability and finish",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Discover how our custom metal solutions can elevate your residential
            or commercial project.
          </p>
          <button
            onClick={() => navigate("/contact-us")}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }

        @media (max-width: 768px) {
          .min-w-64 {
            min-width: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default MetalSpaces;
