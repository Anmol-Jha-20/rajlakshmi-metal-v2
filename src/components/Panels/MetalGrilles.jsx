import React from "react";
import MadeToOrder from "../../assets/MadeToOrder.jpeg";
import ReadyToShip from "../../assets/ReadyToShip.jpeg";
import ReadyToShipOne from "../../assets/ReadyToShipOne.jpeg";
import ReadyToShipTwo from "../../assets/ReadyToShipTwo.jpeg";
import { Link } from "react-router-dom";

function MetalGrilles() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Meta Tags would go in head in a real app */}

      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-6 tracking-wide animate-fade-in">
            DISTINCTIVE METAL GRILLES AND
            <br />
            PANELS
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light animate-slide-up">
            Design in Unexpected Places
          </p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 text-sm font-medium tracking-wider transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-bounce-in">
            <Link to={"/gallery"}>VIEW THE LOOKBOOK</Link>
          </button>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Made to Order Card */}
            <div
              style={{
                backgroundImage: `url(${MadeToOrder})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              className="group relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 min-h-96 flex items-center justify-center transform transition-transform duration-500 hover:scale-105 animate-slide-left"
            >
              {/* Decorative Pattern Overlay */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <div className="absolute top-10 left-10 w-16 h-16 border-4 border-gray-400 rotate-45 transform origin-center animate-spin-slow"></div>
                <div
                  className="absolute top-20 right-20 w-12 h-12 border-4 border-gray-400 rotate-45 transform origin-center animate-spin-slow"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute bottom-20 left-20 w-14 h-14 border-4 border-gray-400 rotate-45 transform origin-center animate-spin-slow"
                  style={{ animationDelay: "2s" }}
                ></div>
                <div
                  className="absolute bottom-10 right-10 w-10 h-10 border-4 border-gray-400 rotate-45 transform origin-center animate-spin-slow"
                  style={{ animationDelay: "3s" }}
                ></div>

                {/* Floral patterns */}
                <div className="absolute top-32 left-32 w-8 h-8">
                  <div className="w-full h-full border-2 border-gray-400 rounded-full animate-pulse"></div>
                  <div
                    className="absolute top-1/2 left-1/2 w-6 h-6 border-2 border-gray-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                </div>
                <div className="absolute bottom-32 right-32 w-8 h-8">
                  <div
                    className="w-full h-full border-2 border-gray-400 rounded-full animate-pulse"
                    style={{ animationDelay: "1.5s" }}
                  ></div>
                  <div
                    className="absolute top-1/2 left-1/2 w-6 h-6 border-2 border-gray-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
                    style={{ animationDelay: "2s" }}
                  ></div>
                </div>
              </div>

              <div className="relative z-10 text-center text-white">
                <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-wider group-hover:scale-110 transition-transform duration-300">
                  MADE TO ORDER
                </h2>
                <button className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-3 text-sm font-medium tracking-wider transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  <Link to={"/our-products"}>LEARN MORE</Link>
                </button>
              </div>
            </div>

            {/* Ready to Ship Card */}
            <div
              style={{
                backgroundImage: `url(${ReadyToShipTwo})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              className="group relative overflow-hidden bg-gradient-to-br from-gray-300 to-gray-400 min-h-96 flex items-center justify-center transform transition-transform duration-500 hover:scale-105 animate-slide-right"
            >
              {/* Metal Pattern Overlay */}
              <div className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-500">
                {/* Circular metal pattern */}
                <div className="grid grid-cols-8 gap-2 p-8 h-full">
                  {[...Array(64)].map((_, i) => (
                    <div
                      key={i}
                      className="w-full aspect-square bg-black rounded-full opacity-60 transform transition-transform duration-300 hover:scale-110"
                      style={{
                        animationDelay: `${i * 0.1}s`,
                        animation: "pulse 3s infinite",
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 text-center text-white">
                <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-wider group-hover:scale-110 transition-transform duration-300">
                  READY TO SHIP
                </h2>
                <button className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-3 text-sm font-medium tracking-wider transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  <Link to={"/our-products"}>OUR PRODUCTS</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS Animations */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slide-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(45deg);
          }
          to {
            transform: rotate(405deg);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out 0.2s both;
        }

        .animate-bounce-in {
          animation: bounce-in 1s ease-out 0.4s both;
        }

        .animate-slide-left {
          animation: slide-left 1s ease-out 0.6s both;
        }

        .animate-slide-right {
          animation: slide-right 1s ease-out 0.8s both;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default MetalGrilles;
