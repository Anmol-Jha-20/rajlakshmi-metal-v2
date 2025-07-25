// import React from "react";
// import { ArrowRight } from "lucide-react";

// function HomeProducts() {
//   const products = [
//     {
//       category: "Brass Sheet",
//       description:
//         "Manufacturer of a wide range of products which include Hydraulic Belling Press, Hydraulic Power Press, Hydraulic Scrap Baling Press, H Frame Hydraulic Press, Scrap Baling Press and Automatic Carton Scrap Baling Press.",
//       items: [
//         {
//           title: "Brass T Patti",
//           description:
//             "Krishna Engineering Works is engaged in manufacturing of Press Machines, Draw Bench Machines, etc. Under the efficient guidance of Mr. Santosh Kumar (Owner), we have achieved a name for ourselves in this competitive domain.",
//           image:
//             "https://5.imimg.com/data5/SELLER/Default/2023/4/301830101/XS/FB/ZE/60827842/hydraulic-power-press-500x500.jpeg",
//         },
//         {
//           title: "Brass Sheet Striped coils",
//           description:
//             "Efficient paper baling press machines for waste management and recycling operations with automated compression systems.",
//           image:
//             "https://5.imimg.com/data5/SELLER/Default/2023/4/301830101/XS/FB/ZE/60827842/hydraulic-power-press-500x500.jpeg",
//         },
//         {
//           title: "Brass Stripe Patti",
//           description:
//             "Robust scrap baling press machines for metal and waste processing with high compression ratios and durability.",
//           image:
//             "https://5.imimg.com/data5/ANDROID/Default/2023/6/314882679/QQ/WX/AS/60827842/product-jpeg-500x500.jpg",
//         },
//         {
//           title: "Rectangular Brass Sheet",
//           description:
//             "Robust scrap baling press machines for metal and waste processing with high compression ratios and durability.",
//           image:
//             "https://5.imimg.com/data5/FY/AO/MY-60827842/hydraulic-press-500x500.jpg",
//         },
//       ],
//     },
//     {
//       category: "Brass Pipe",
//       description:
//         "Leading Manufacturer of Automatic Draw Bench Machine, Semi Automatic Draw Bench Machine and Pipe Draw Bench Machine from New Delhi.",
//       items: [
//         {
//           title: "Round Brass Pipe",
//           description:
//             "Precision draw bench machines for wire and tube drawing applications with advanced control systems and safety mechanisms.",
//           image:
//             "https://5.imimg.com/data5/SELLER/Default/2023/5/312308510/QI/PD/XY/60827842/automatic-draw-bench-machine-500x500.jpg",
//         },
//         {
//           title: "Brass Square Pipe",
//           description:
//             "Heavy-duty draw benches for metal forming and shaping operations with customizable specifications and configurations.",
//           image:
//             "https://5.imimg.com/data5/UN/EG/MY-60827842/semi-automatic-draw-bench-machine-500x500.jpg",
//         },
//         {
//           title: "Round Brass Pipe",
//           description:
//             "Heavy-duty draw benches for metal forming and shaping operations with customizable specifications and configurations.",
//           image:
//             "https://5.imimg.com/data5/NV/DH/MY-60827842/pipe-draw-bench-machine-500x500.jpg",
//         },
//         {
//           title: "Copper Pipes",
//           description:
//             "Heavy-duty draw benches for metal forming and shaping operations with customizable specifications and configurations.",
//           image:
//             "https://5.imimg.com/data5/NV/DH/MY-60827842/pipe-draw-bench-machine-500x500.jpg",
//         },
//       ],
//     },
//     {
//       category: "Specialized Equipment",
//       items: [
//         {
//           title: "Bottle Filling Machine",
//           description:
//             "Automated bottle filling machines for liquid packaging with precise volume control and high-speed operation capabilities.",
//           image:
//             "https://5.imimg.com/data5/ANDROID/Default/2023/6/314889541/AS/FB/SZ/60827842/product-jpeg-500x500.jpg",
//         },
//         {
//           title: "Mindray Cell Counter",
//           description:
//             "Advanced cell counting equipment for laboratory and medical applications with digital precision and user-friendly interface.",
//           image:
//             "https://5.imimg.com/data5/SELLER/Default/2023/5/312309919/KD/HG/FP/60827842/paper-belling-machine-500x500.jpg",
//         },
//         {
//           title: "Draw Benches",
//           description:
//             "Advanced cell counting equipment for laboratory and medical applications with digital precision and user-friendly interface.",
//           image:
//             "https://5.imimg.com/data5/SELLER/Default/2023/4/301827599/EH/RE/KM/60827842/automatic-draw-bench-machine-500x500.jpeg",
//         },
//         {
//           title: "Paper Baling Press",
//           description:
//             "Advanced cell counting equipment for laboratory and medical applications with digital precision and user-friendly interface.",
//           image:
//             "https://5.imimg.com/data5/SELLER/Default/2023/4/301828599/RV/ZE/QO/60827842/paper-baling-press-machine-500x500.jpeg",
//         },
//       ],
//     },
//   ];
//   return (
//     <section id="products" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Our Products
//           </h2>

//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Discover our comprehensive range of high-quality engineering
//             solutions designed to meet your industrial needs
//           </p>
//         </div>

//         {products.map((category, categoryIndex) => (
//           <div key={categoryIndex} className="mb-16">
//             <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//               {category.category}
//             </h3>
//             <p className="text-xl text-gray-600 mb-10 mx-auto">
//               {category.description}
//             </p>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {category.items.map((product, index) => (
//                 <div
//                   key={index}
//                   className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
//                 >
//                   <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
//                     <img
//                       src={product.image}
//                       alt={product.title}
//                       className="w-full h-full object-cover opacity-80"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//                   </div>
//                   <div className="p-6">
//                     <h4 className="text-xl font-bold text-gray-800 mb-3">
//                       {product.title}
//                     </h4>
//                     <p className="text-gray-600 mb-4 line-clamp-3">
//                       {product.description}
//                     </p>
//                     <button className="inline-flex items-center space-x-2 bg-white text-[#D93361] border hover:bg-[#D93361] hover:text-white cursor-pointer px-6 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
//                       <span>Read More</span>
//                       <ArrowRight className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default HomeProducts;

// import React from "react";
// import { motion } from "framer-motion";
// import { ChevronUp } from "lucide-react";

// const HomeProducts = () => {
//   const products = [
//     {
//       id: 1,
//       name: "BRASS SHEET",
//       image:
//         "https://5.imimg.com/data5/SELLER/Default/2024/3/396405073/LJ/VX/TA/124968442/brass-sheet-striped-coils-500x500.jpg",
//       alt: "Golden brass sheets stacked together",
//     },
//     {
//       id: 2,
//       name: "COPPER SHEET",
//       image: "/api/placeholder/400/300",
//       alt: "Copper sheets with reddish-brown color",
//     },
//     {
//       id: 3,
//       name: "IMPORTED BRASS SHEET",
//       image: "/api/placeholder/400/300",
//       alt: "Premium imported brass sheet with protective film",
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut",
//       },
//     },
//   };

//   const buttonVariants = {
//     hover: {
//       scale: 1.05,
//       transition: {
//         duration: 0.2,
//         ease: "easeInOut",
//       },
//     },
//     tap: {
//       scale: 0.95,
//     },
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-16 px-4 relative">
//       {/* SEO-friendly heading structure */}
//       <motion.header
//         className="text-center mb-16"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//           OUR FEATURED PRODUCTS
//         </h1>
//         <div className="w-16 h-1 bg-pink-500 mx-auto"></div>
//       </motion.header>

//       {/* Products grid */}
//       <motion.main
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="max-w-7xl mx-auto"
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
//           {products.map((product) => (
//             <motion.article
//               key={product.id}
//               variants={itemVariants}
//               whileHover={{ y: -10 }}
//               className="group"
//             >
//               <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
//                 {/* Product image */}
//                 <div className="aspect-square bg-gray-100 overflow-hidden">
//                   <motion.div
//                     className="w-full h-full flex items-center justify-center relative"
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     {/* Simulated product images based on the original */}
//                     {/* {product.id === 1 && (
//                       <div className="relative">

//                         {[...Array(4)].map((_, i) => (
//                           <div
//                             key={i}
//                             className="absolute w-32 h-32 rounded-sm shadow-md"
//                             style={{
//                               transform: `translate(${i * 3}px, ${
//                                 i * 3
//                               }px) rotate(${i * 2}deg)`,
//                               zIndex: 4 - i,
//                             }}
//                           />
//                         ))}
//                       </div>
//                     )} */}
//                     {product.id === 2 && (
//                       <div className="relative">
//                         {/* Copper sheets */}
//                         {[...Array(4)].map((_, i) => (
//                           <div
//                             key={i}
//                             className="absolute w-32 h-32 bg-gradient-to-br from-orange-500 to-red-600 rounded-sm shadow-md"
//                             style={{
//                               transform: `translate(${i * 3}px, ${
//                                 i * 3
//                               }px) rotate(${i * 2}deg)`,
//                               zIndex: 4 - i,
//                             }}
//                           />
//                         ))}
//                       </div>
//                     )}
//                     {product.id === 3 && (
//                       <div className="relative">
//                         {/* Imported brass sheet with protective film */}
//                         <div className="w-40 h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-sm shadow-md">
//                           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-pulse" />
//                           <div className="absolute top-2 right-2 w-16 h-4 bg-blue-200/50 rounded-sm" />
//                         </div>
//                       </div>
//                     )}
//                   </motion.div>
//                 </div>

//                 {/* Product details */}
//                 <div className="p-8 text-center">
//                   <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 tracking-wide">
//                     {product.name}
//                   </h2>
//                   <motion.button
//                     variants={buttonVariants}
//                     whileHover="hover"
//                     whileTap="tap"
//                     className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
//                     aria-label={`Read more about ${product.name}`}
//                   >
//                     Read More
//                   </motion.button>
//                 </div>
//               </div>
//             </motion.article>
//           ))}
//         </div>
//       </motion.main>

//       {/* Scroll to top button */}
//       <motion.button
//         onClick={scrollToTop}
//         className="fixed bottom-8 right-8 bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 z-50"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 1 }}
//         aria-label="Scroll to top"
//       >
//         <ChevronUp size={24} />
//       </motion.button>

//       {/* Background decorative elements */}
//       <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-20 animate-pulse" />
//       <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-200 rounded-full opacity-20 animate-pulse" />
//     </div>
//   );
// };

// export default HomeProducts;

import React from "react";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import BrassFittingImage from "../../assets/BrassFittingImage.png";
import { useNavigate } from "react-router-dom";

const HomeProducts = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: "Brass Sheet",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/3/396405073/LJ/VX/TA/124968442/brass-sheet-striped-coils-500x500.jpg",
      alt: "Pipe Draw Bench Machine for industrial pipe processing",
      description:
        "High-quality pipe draw bench machine designed for efficient pipe drawing operations with precision engineering and robust construction.",
      link: "/brass-sheet",
    },
    {
      id: 2,
      name: "Brass Pipe",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/3/396360217/AA/CV/KM/124968442/round-brass-pipe-500x500.jpg",
      alt: "Semi-Automatic Draw Bench Machine for industrial applications",
      description:
        "Advanced semi-automatic draw bench machine offering perfect balance of automation and manual control for optimal productivity.",
      link: "/brass-pipe",
    },
    {
      id: 3,
      name: "Brass Scrap",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/6/YX/QA/XE/124968442/new-product-500x500.jpeg",
      alt: "Fully Automatic Draw Bench Machine for high-volume production",
      description:
        "State-of-the-art fully automatic draw bench machine with advanced controls and high-speed operation for maximum efficiency.",
      link: "/brass-scrap",
    },
    {
      id: 4,
      name: "Brass Fitting",
      image: BrassFittingImage,
      alt: "Fully Automatic Draw Bench Machine for high-volume production",
      description:
        "State-of-the-art fully automatic draw bench machine with advanced controls and high-speed operation for maximum efficiency.",
      link: "/brass-fitting",
    },
    {
      id: 5,
      name: "Brass Rod",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/3/396391691/NA/WK/PK/124968442/brass-bar-500x500.jpg",
      alt: "Fully Automatic Draw Bench Machine for high-volume production",
      description:
        "State-of-the-art fully automatic draw bench machine with advanced controls and high-speed operation for maximum efficiency.",
      link: "/brass-rod",
    },
    {
      id: 6,
      name: "Stainless Steel Sheet",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/3/396395529/QR/OE/RA/124968442/brass-flat-strip-500x500.jpg",
      alt: "Fully Automatic Draw Bench Machine for high-volume production",
      description:
        "State-of-the-art fully automatic draw bench machine with advanced controls and high-speed operation for maximum efficiency.",
      link: "/stainless-steel-sheet",
    },
    {
      id: 7,
      name: "Stainless Steel Pipe",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/6/EL/PC/QZ/124968442/copper-screp-500x500.JPG",
      alt: "Fully Automatic Draw Bench Machine for high-volume production",
      description:
        "State-of-the-art fully automatic draw bench machine with advanced controls and high-speed operation for maximum efficiency.",
      link: "/stainless-steel-pipe",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 relative">
      {/* SEO-friendly heading structure */}
      <motion.header
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          OUR FEATURED PRODUCTS
        </h1>
        <div className="w-16 h-1 bg-pink-500 mx-auto"></div>
      </motion.header>

      {/* Products grid */}
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product) => (
            <motion.article
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                {/* Product image */}
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    loading="lazy"
                  />
                </div>

                {/* Product details */}
                <div className="p-8 text-center">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 tracking-wide">
                    {product.name}
                  </h2>
                  {/* <p className="text-black mb-2">{product.description}</p> */}
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="bg-white border cursor-pointer border-pink-500 hover:bg-pink-500 hover:text-white text-pink-500 font-semibold py-3 px-8 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
                    aria-label={`Read more about ${product.name}`}
                    onClick={() => navigate(product.link)}
                  >
                    Read More
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.main>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </motion.button>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-200 rounded-full opacity-20 animate-pulse" />
    </div>
  );
};

export default HomeProducts;
