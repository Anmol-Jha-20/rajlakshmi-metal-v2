import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  Zap,
  Shield,
  Headphones,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Mock products/services data
const products = [
  {
    id: 1,
    name: "Brass Sheet",
    description:
      "Offering you a complete choice of products which include Brass T Patti, Brass Sheet Striped coils, Brass Stripe Patti and Rectangular Brass Sheet.",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/3/396405073/LJ/VX/TA/124968442/brass-sheet-striped-coils-500x500.jpg",
    features: [
      "Golden color",
      "High corrosion resistance",
      "Excellent machinability",
      "Good electrical conductivity",
    ],
    category: "Brass Sheet",
    badge: "Popular",
    link: "/brass-sheet",
  },
  {
    id: 2,
    name: "Brass Rod",
    description:
      "Premier Wholesaler and Trusted Supplier of High-Quality Brass Round Bars, Brass Flat Bars, and Precision Round Brass Rods from Bengaluru.",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/3/396391691/NA/WK/PK/124968442/brass-bar-500x500.jpg",
    features: [
      "Golden color",
      "Excellent machinability",
      "Higher mechanical strength",
      "Good corrosion resistance",
    ],
    category: "Brass Rod",
    badge: "Trending",
    link: "/brass-rod",
  },
  {
    id: 3,
    name: "Brass Pipe",
    description:
      "Offering you a complete choice of products which include Round Brass Pipe, Brass Square Pipe and Copper Pipes.",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/6/TY/IB/BJ/124968442/brass-pipe1-500x500.jpg",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Business Cards",
      "Marketing Materials",
    ],
    category: "Brass Pipe",
    badge: "Premium",
    link: "/brass-pipe",
  },
  {
    id: 4,
    name: "Stainless Steel Sheet",
    description:
      "Wholesaler of a wide range of products which include Brass Granite tee patti, Stainless Steel Flat Sheet and Brass Sheet.",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/3/396395529/QR/OE/RA/124968442/brass-flat-strip-500x500.jpg",
    features: [
      "iOS & Android",
      "Cross-Platform",
      "User-Friendly",
      "App Store Ready",
    ],
    category: "Steel Sheet",
    badge: "New",
    link: "/stainless-steel-sheet",
  },
  {
    id: 5,
    name: "Brass Scrap",
    description:
      "We are a leading Wholesaler of Honey Brass Scrap, Brass Turning Boring Scrap and Brass Metal Scrap from Bengaluru, India.",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/6/JT/MO/XG/124968442/brass-metal-scrap-500x500.jpg",
    features: [
      "Strategic Planning",
      "Process Optimization",
      "Market Analysis",
      "Growth Strategies",
    ],
    category: "Brass Scrap",
    badge: "Expert",
    link: "/brass-scrap",
  },
  {
    id: 6,
    name: "Brass Fitting",
    description:
      "Prominent & Leading Wholesaler from Bengaluru, we offer Brass Copper Wire, Brass Sanitary Pipe Fitting, Round Brass Flange and Brass Nozzle.",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/6/BB/AQ/KE/124968442/2-500x500.PNG",
    features: [
      "Cloud Migration",
      "Data Security",
      "24/7 Support",
      "Scalable Infrastructure",
    ],
    category: "Brass Fitting",
    badge: "Reliable",
    link: "/brass-fitting",
  },
  {
    id: 7,
    name: "Stainless Steel Pipe",
    description:
      "We are a leading Wholesaler of Stainless Steel Square Pipe, SS304 Stainless Steel Round Pipe, SS202 Stainless Steel Round Pipe and 316 Stainless Steel Round Pipe from Bengaluru, India.",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/6/RF/OW/VL/124968442/304-ss-round-pipe-500x500.JPG",
    features: [
      "Cloud Migration",
      "Data Security",
      "24/7 Support",
      "Scalable Infrastructure",
    ],
    category: "Steel Pipe",
    badge: "Reliable",
    link: "/stainless-steel-pipe",
  },
];

const categories = [
  "All",
  "Development",
  "Marketing",
  "Design",
  "Consulting",
  "Technology",
];

// Custom hook for intersection observer
const useIntersectionObserver = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return [setRef, isVisible];
};

// Product Card Component
const ProductCard = ({ product, index }) => {
  const [ref, isVisible] = useIntersectionObserver(0.1);
  const animationDelay = index * 0.15;
  const navigate = useNavigate();

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden group transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{
        transitionDelay: isVisible ? `${animationDelay}s` : "0s",
      }}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {/* <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 text-xs font-semibold rounded-full ${
              product.badge === "Popular"
                ? "bg-red-500 text-white"
                : product.badge === "Trending"
                ? "bg-green-500 text-white"
                : product.badge === "Premium"
                ? "bg-purple-500 text-white"
                : product.badge === "New"
                ? "bg-blue-500 text-white"
                : product.badge === "Expert"
                ? "bg-orange-500 text-white"
                : "bg-indigo-500 text-white"
            }`}
          >
            {product.badge}
          </span>
        </div> */}
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-800 mb-2">
            Key Features:
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {product.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <CheckCircle
                  size={14}
                  className="text-green-500 flex-shrink-0"
                />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => navigate(product.link)}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
        >
          Learn More
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

// Stats Section Component
// const StatsSection = () => {
//   const [ref, isVisible] = useIntersectionObserver(0.3);

//   const stats = [
//     { icon: Users, value: "500+", label: "Happy Clients" },
//     { icon: Award, value: "50+", label: "Awards Won" },
//     { icon: Zap, value: "1000+", label: "Projects Completed" },
//     { icon: Star, value: "4.9", label: "Client Rating" },
//   ];

//   return (
//     <div
//       ref={ref}
//       className={`bg-gradient-to-r from-blue-600 to-purple-600 py-16 transition-all duration-1000 ${
//         isVisible ? "opacity-100" : "opacity-0"
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className={`text-center text-white transform transition-all duration-700 ${
//                 isVisible
//                   ? "translate-y-0 opacity-100"
//                   : "translate-y-8 opacity-0"
//               }`}
//               style={{ transitionDelay: isVisible ? `${index * 0.2}s` : "0s" }}
//             >
//               <stat.icon size={48} className="mx-auto mb-4" />
//               <div className="text-3xl font-bold mb-2">{stat.value}</div>
//               <div className="text-blue-100">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// Main Products Page Component
const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [heroRef, heroVisible] = useIntersectionObserver(0.3);

  const filteredProducts = products.filter((product) => {
    return selectedCategory === "All" || product.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className={`relative py-20 text-black overflow-hidden transition-all duration-1000 ${
          heroVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`text-center max-w-4xl mx-auto transform transition-all duration-1000 ${
              heroVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-700">
                Products
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Innovative solutions designed to transform your business and drive
              success
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-gradient-to-r from-blue-900 to-purple-900 text-white backdrop-blur-sm rounded-full px-4 py-2">
                <Shield size={16} />
                <span>Trusted & Secure</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-blue-900 to-purple-900 text-white backdrop-blur-sm rounded-full px-4 py-2">
                <Headphones size={16} />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-blue-900 to-purple-900 text-white backdrop-blur-sm rounded-full px-4 py-2">
                <Award size={16} />
                <span>Award Winning</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      {/* <StatsSection /> */}

      <div className="container mx-auto px-4 py-16">
        {/* Category Filters */}
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Explore Our Solutions
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div> */}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="text-center mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our solutions can help transform your business and
            achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProductsPage;
