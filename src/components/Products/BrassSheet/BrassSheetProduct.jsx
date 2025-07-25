import React, { useState } from "react";
import {
  Star,
  Heart,
  Share2,
  ShoppingCart,
  Phone,
  Mail,
  MapPin,
  Award,
  Truck,
  Shield,
  Clock,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
} from "lucide-react";
import { Link } from "react-router-dom";
import ScrollToTop from "../ScrollToTop.jsx";

const BrassSheetCategoryPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const products = [
    {
      id: 1,
      name: "Brass T Patti",
      price: 530,
      unit: "Kg",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2022/10/WQ/BO/BU/124968442/brass-t-patti-500x500.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2022/10/JY/CI/GN/124968442/brass-t-patti-500x500.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2022/10/JK/FY/XI/124968442/brass-t-patti-500x500.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2024/3/396406369/BT/WL/NQ/124968442/brass-t-patti-500x500.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2024/3/396406399/RK/TF/TI/124968442/brass-t-patti-500x500.jpeg",
      ],
      specifications: {
        Thickness: "2 mm",
        Color: "Golden",
        Material: "Brass",
        Shape: "T",
      },
      description:
        "Brass T Patti is a specialized brass profile used extensively in architectural and interior design applications for decorative joints, corner trims, and edge protection. It is manufactured using premium-grade brass and precisely grooved using V-groove and CNC bending technology to achieve clean edges and a luxurious look. The T-shape provides strength, aesthetic separation between materials (e.g., tiles or wood), and seamless transitions across surfaces. Known for its high conductivity and resistance to tarnish and corrosion, Brass T Patti is ideal for high-end furniture, partitions, skirting, and metallic finishes in modern interiors. Its excellent machinability allows for precise fabrication and installation.",
      features: [
        "High Conductivity",
        "Corrosion Resistant",
        "Flexible",
        "Durable",
      ],
    },
    {
      id: 2,
      name: "Brass Sheet Striped coils",
      price: 640,
      unit: "Kg",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/3/396397041/XR/IY/TF/124968442/cylindrical-gunmetal-bush-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/3/396405073/LJ/VX/TA/124968442/brass-sheet-striped-coils-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/3/396405074/PN/YF/JZ/124968442/brass-sheet-striped-coils-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/3/396405065/OF/LW/WP/124968442/brass-sheet-striped-coils-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2022/6/XW/MP/XR/124968442/19-500x500.PNG",
      ],
      specifications: {
        Size: "15 inch 20 kg",
        Color: "Golden",
        Material: "Brass",
        Brand: "Agarwal",
        Thickness: "0.5 mm – 2 mm",
      },
      description:
        "Brass Sheet Striped Coils are continuous rolled brass sheets available in coil form with precise thickness and width, tailored for mass production and industrial applications. These coils combine high tensile strength with flexibility, making them suitable for stamping, forming, deep drawing, and fabrication in electronics, plumbing, and automotive sectors. The striped surface texture not only adds visual appeal but also enhances grip and adhesion when used in layered assemblies. Known for their anti-corrosive and antimicrobial properties, brass striped coils offer excellent thermal and electrical conductivity. Their consistent quality, lead-free composition, and ease of machining make them a trusted material in precision manufacturing.",
      features: [
        "Lead-Free",
        "Antimicrobial",
        "Easy Installation",
        "Leak-Proof",
      ],
    },
    {
      id: 3,
      name: "Brass Stripe Patti",
      price: 530,
      unit: "Kg",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2022/10/WQ/BO/BU/124968442/brass-t-patti-500x500.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2022/10/JY/CI/GN/124968442/brass-t-patti-500x500.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2022/10/JK/FY/XI/124968442/brass-t-patti-500x500.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2022/10/IY/VM/TI/124968442/brass-stripe-patti-500x500.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2022/10/XL/KX/IE/124968442/brass-stripe-patti-500x500.jpeg",
      ],
      specifications: {
        Color: "Golden",
        Material: "Brass",
        Shape: "Flat stripe",
        Thickness: "5mm to 20mm",
        Standard: "ANSI B16.5",
      },
      description:
        "Brass Stripe Patti is a flat, elongated strip of brass used in both functional and decorative applications. These strips are crafted with precision and are highly durable, offering excellent resistance to wear, corrosion, and weathering. Their consistent golden finish adds a premium look, making them popular in architectural trims, cabinet edges, decorative panels, and metal inlays. Industrially, they are used in grounding, electrical terminals, and mechanical fasteners. The material’s excellent machinability and strength-to-weight ratio make Brass Stripe Patti a go-to option for manufacturers and artisans alike. It is also customizable in terms of thickness, width, and finish to suit specific design needs.",
      features: [
        "Precision Machined",
        "High Strength",
        "Corrosion Resistant",
        "Standard Sizes",
      ],
    },
    {
      id: 4,
      name: "Rectangular Brass Sheet",
      price: 615,
      unit: "Kg",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2022/6/EJ/VM/DR/124968442/rectangular-brass-sheet-500x500.jpg",
      ],
      specifications: {
        Thickness: "2mm",
        Color: "Copper",
        Material: "Brass",
        Shape: "Rectangular",
        "Finishing Type": "Polished",
      },
      description:
        "Rectangular Brass Sheets are flat metal sheets shaped in a rectangular form, designed for use in hardware fittings, industrial fabrication, and decorative metalwork. Known for their superior malleability and corrosion resistance, these sheets are easy to cut, drill, solder, and polish. The polished surface gives an attractive appearance while the robust brass material provides long-lasting performance even under frequent handling or exposure to moisture. These sheets are widely used in nameplates, signage, electrical contacts, DIY crafts, and custom machine parts. With high electrical and thermal conductivity, they are also suitable for electronic and plumbing applications.",
      features: [
        "Adjustable Flow",
        "Leak-Proof",
        "Easy Grip",
        "Multiple Patterns",
      ],
    },
  ];

  const currentProduct = products[selectedProduct];

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % currentProduct.images.length);
  };

  const prevImage = () => {
    setSelectedImage(
      (prev) =>
        (prev - 1 + currentProduct.images.length) % currentProduct.images.length
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <nav className="text-sm">
            <span className="text-gray-500">Home</span>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-500">
              <Link to={"/our-products"}>Categories</Link>
            </span>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-800 font-medium">Brass Sheet</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Product List Sidebar */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Brass Sheet Products
              </h2>
              <div className="space-y-3">
                {products.map((product, index) => (
                  <div
                    key={product.id}
                    className={`p-3 rounded-lg cursor-pointer transition-all ${
                      selectedProduct === index
                        ? "bg-amber-50 border-2 border-amber-200"
                        : "bg-gray-50 hover:bg-gray-100 border-2 border-transparent"
                    }`}
                    onClick={() => {
                      setSelectedProduct(index);
                      setSelectedImage(0);
                    }}
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-800 text-sm">
                          {product.name}
                        </h3>
                        <p className="text-amber-600 font-semibold text-sm">
                          ₹ {product.price}/{product.unit}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Product Display */}
          <div className="lg:col-span-9">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-6">
                {/* Product Images */}
                <div className="space-y-4">
                  <div className="relative">
                    <img
                      src={currentProduct.images[selectedImage]}
                      alt={currentProduct.name}
                      className="w-full h-96 object-cover rounded-lg"
                    />
                    <button
                      onClick={prevImage}
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
                    >
                      <ChevronLeft className="text-black" size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
                    >
                      <ChevronRight className="text-black" size={20} />
                    </button>
                  </div>

                  <div className="flex space-x-2">
                    {currentProduct.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${currentProduct.name} ${index + 1}`}
                        className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 ${
                          selectedImage === index
                            ? "border-amber-500"
                            : "border-gray-200"
                        }`}
                        onClick={() => setSelectedImage(index)}
                      />
                    ))}
                  </div>

                  {/* <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                    📷 Get More Photos
                  </button> */}
                </div>

                {/* Product Details */}
                <div className="space-y-6">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                      {currentProduct.name}
                    </h1>
                    <div className="flex items-center space-x-4">
                      <span className="text-3xl font-bold text-amber-600">
                        ₹ {currentProduct.price}
                      </span>
                      <span className="text-gray-500">
                        /{currentProduct.unit}
                      </span>
                      <button className="text-blue-600 hover:text-blue-800 font-medium">
                        Get Latest Price
                      </button>
                    </div>
                  </div>

                  {/* Specifications */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Specifications
                    </h3>
                    <div className="space-y-2">
                      {Object.entries(currentProduct.specifications).map(
                        ([key, value]) => (
                          <div
                            key={key}
                            className="flex justify-between py-1 border-b border-gray-200 last:border-b-0"
                          >
                            <span className="text-gray-600 font-medium">
                              {key}
                            </span>
                            <span className="text-gray-800">{value}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Quantity and Actions */}
                  {/* <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <span className="text-gray-700 font-medium">
                        Quantity:
                      </span>
                      <div className="flex items-center border rounded-lg">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="p-2 hover:bg-gray-100"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-4 py-2 font-medium">
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="p-2 hover:bg-gray-100"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <button className="flex-1 bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium">
                        Yes, I am interested!
                      </button>
                      <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                        <Heart size={20} />
                      </button>
                      <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                        <Share2 size={20} />
                      </button>
                    </div>
                  </div> */}

                  {/* Features */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Key Features
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {currentProduct.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="border-t p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Product Description
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {currentProduct.description}
                </p>
              </div>
            </div>

            {/* Company Info */}
            <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Rajlakshmi Metal Wholesaler
                  </h3>
                  <p className="text-gray-600">
                    Leading Supplier from Bengaluru, Karnataka
                  </p>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center space-x-1">
                      <Star
                        className="text-yellow-400 fill-current"
                        size={16}
                      />
                      <span className="text-sm text-gray-600">
                        4.8/5 Rating
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="text-gray-400" size={16} />
                      <span className="text-sm text-gray-600">
                        Bengaluru, Karnataka
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-0">
                  <a href="tel:8904162990">
                    <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                      <Phone size={16} />
                      <span>Call Now</span>
                    </button>
                  </a>
                  <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                    <Mail size={16} />
                    <span>Send Email</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrassSheetCategoryPage;

// import React, { useState } from "react";
// import { ChevronDown, ChevronRight } from "lucide-react";
// import { Link } from "react-router-dom";

// const BrassSheetCategoryPage = () => {
//   const [expandedSections, setExpandedSections] = useState({
//     importedProducts: true,
//     brassProducts: true,
//     copperProducts: true,
//     etpCopperProducts: true,
//     navalBrassSheet: false,
//     StainlessSteelSheet: false,
//     StainlessSteelPipe: false,
//   });

//   const toggleSection = (section) => {
//     setExpandedSections((prev) => ({
//       ...prev,
//       [section]: !prev[section],
//     }));
//   };

//   const MenuItem = ({ title, isActive = false, hasArrow = false }) => (
//     <div
//       className={`flex items-center py-2 px-3 cursor-pointer hover:bg-pink-100 transition-colors ${
//         isActive ? "bg-pink-50" : ""
//       }`}
//     >
//       <ChevronRight className="w-4 h-4 text-pink-600 mr-2" />
//       <span
//         className={`text-sm ${
//           isActive ? "font-medium text-pink-700" : "text-gray-700"
//         }`}
//       >
//         {title}
//       </span>
//     </div>
//   );

//   const SectionHeader = ({
//     title,
//     isExpanded,
//     onToggle,
//     bgColor = "bg-pink-500",
//   }) => (
//     <div
//       className={`${bgColor} text-white px-4 py-3 cursor-pointer flex items-center justify-between`}
//       onClick={onToggle}
//     >
//       <h3 className="font-semibold text-sm">{title}</h3>
//       <ChevronDown
//         className={`w-4 h-4 transition-transform ${
//           isExpanded ? "rotate-180" : ""
//         }`}
//       />
//     </div>
//   );

//   const specificationsData = [
//     { thickness: "1.2mm", width: "1250mm", length: "2500mm/3050mm" },
//     { thickness: "1.5mm", width: "1250mm", length: "2500mm/3050mm" },
//     { thickness: "2mm", width: "1250mm", length: "2500mm/3050mm" },
//     { thickness: "3mm", width: "1250mm", length: "2500mm" },
//     { thickness: "4mm", width: "1250mm", length: "2500mm" },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* SEO Meta Tags would be handled by Next.js Head or React Helmet */}

//       {/* Breadcrumb */}
//       <div className="bg-white border-b">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center py-3 text-sm">
//             <a href="#" className="text-pink-600 hover:text-pink-700">
//               Home
//             </a>
//             <span className="mx-2 text-gray-400">/</span>
//             <span className="text-gray-600">Brass Sheet</span>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//           {/* Sidebar Navigation */}
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//               {/* Imported Products Section */}
//               <div className="border-b">
//                 <SectionHeader
//                   title="Brass Sheet Products"
//                   isExpanded={expandedSections.importedProducts}
//                   onToggle={() => toggleSection("importedProducts")}
//                 />
//                 {expandedSections.importedProducts && (
//                   <div className="bg-white">
//                     <Link to={"/brass-sheet"}>
//                       <MenuItem
//                         title="Rectangular Brass Sheet"
//                         isActive={true}
//                       />
//                     </Link>
//                     <Link to={"/brass-stripe-patti"}>
//                       {" "}
//                       <MenuItem title="Brass Stripe Patti" />
//                     </Link>
//                     <Link to={"/brass-sheet-striped-coils"}>
//                       <MenuItem title="Brass Sheet Striped coils" />
//                     </Link>
//                     <Link to={"/brass-t-patti"}>
//                       <MenuItem title="Brass T Patti" />
//                     </Link>
//                   </div>
//                 )}
//               </div>

//               {/* Brass Products Section */}
//               <div className="border-b">
//                 <SectionHeader
//                   title="Brass Pipe Products"
//                   isExpanded={expandedSections.brassProducts}
//                   onToggle={() => toggleSection("brassProducts")}
//                 />
//                 {expandedSections.brassProducts && (
//                   <div className="bg-white">
//                     <Link to={"/round-brass-pipe"}>
//                       <MenuItem title="Round Brass Pipe" />
//                     </Link>
//                     <Link to={"/brass-square-pipe"}>
//                       <MenuItem title="Brass Square Pipe" />
//                     </Link>
//                     <Link to={"/round-brass-pipe-one"}>
//                       <MenuItem title="Round Brass Pipe" />
//                     </Link>
//                     <Link to={"/copper-pipes"}>
//                       <MenuItem title="Copper Pipes" />
//                     </Link>
//                   </div>
//                 )}
//               </div>

//               {/* Copper Products Section */}
//               <div className="border-b">
//                 <SectionHeader
//                   title="Brass Scrap Products"
//                   isExpanded={expandedSections.copperProducts}
//                   onToggle={() => toggleSection("copperProducts")}
//                 />
//                 {expandedSections.copperProducts && (
//                   <div className="bg-white">
//                     <Link to={"/honey-brass-scrap"}>
//                       {" "}
//                       <MenuItem title="Honey Brass Scrap" />
//                     </Link>
//                     <Link to={"/brass-turning-boring-scrap"}>
//                       <MenuItem title="Brass Turning Boring Scrap" />
//                     </Link>
//                     <Link to={"/Brass-metal-scrap"}>
//                       <MenuItem title="Brass Metal Scrap" />
//                     </Link>
//                   </div>
//                 )}
//               </div>

//               {/* ETP Copper Products Section */}
//               <div className="border-b">
//                 <SectionHeader
//                   title="Brass Fitting Products"
//                   isExpanded={expandedSections.etpCopperProducts}
//                   onToggle={() => toggleSection("etpCopperProducts")}
//                 />
//                 {expandedSections.etpCopperProducts && (
//                   <div className="bg-white">
//                     <Link to={"/brass-copper-wire"}>
//                       <MenuItem title="Brass Copper Wire" />
//                     </Link>
//                     <Link to={"/brass-sanitary-pipe-fitting"}>
//                       <MenuItem title="Brass Sanitary Pipe Fitting" />
//                     </Link>
//                     <Link to={"/round-brass-flange"}>
//                       <MenuItem title="Round Brass Flange" />
//                     </Link>
//                     <Link to={"/brass-nozzle"}>
//                       <MenuItem title="Brass Nozzle" />
//                     </Link>
//                   </div>
//                 )}
//               </div>

//               {/* Naval Brass Sheet Section */}
//               <div>
//                 <SectionHeader
//                   title="Brass Rod Products"
//                   isExpanded={expandedSections.navalBrassSheet}
//                   onToggle={() => toggleSection("navalBrassSheet")}
//                 />
//                 {expandedSections.navalBrassSheet && (
//                   <div className="bg-white">
//                     <Link to={"/brass-round-bar"}>
//                       <MenuItem title="Brass Round Bar" />
//                     </Link>
//                     <Link to={"/brass-flat-bar"}>
//                       <MenuItem title="Brass Flat Bar" />
//                     </Link>
//                     <Link to={"/brass-brass-rod"}>
//                       <MenuItem title="Round Brass Rod" />
//                     </Link>
//                   </div>
//                 )}
//               </div>

//               <div>
//                 <SectionHeader
//                   title="Stainless Steel Sheet"
//                   isExpanded={expandedSections.StainlessSteelSheet}
//                   onToggle={() => toggleSection("StainlessSteelSheet")}
//                 />
//                 {expandedSections.StainlessSteelSheet && (
//                   <div className="bg-white">
//                     <Link to={"/brass-branite-tee-patti"}>
//                       <MenuItem title="Brass Granite tee patti" />
//                     </Link>
//                     <Link to={"/stainless-steel-flat-sheet"}>
//                       <MenuItem title="Stainless Steel Flat Sheet" />
//                     </Link>
//                     <Link to={"/brass-sheet-one"}>
//                       <MenuItem title="Brass Sheet" />
//                     </Link>
//                   </div>
//                 )}
//               </div>

//               <div>
//                 <SectionHeader
//                   title="Stainless Steel Pipe"
//                   isExpanded={expandedSections.StainlessSteelPipe}
//                   onToggle={() => toggleSection("StainlessSteelPipe")}
//                 />
//                 {expandedSections.StainlessSteelPipe && (
//                   <div className="bg-white">
//                     <Link to={"/stainless-steel-square-pipe"}>
//                       <MenuItem title="Stainless Steel Square Pipe" />
//                     </Link>
//                     <Link to={"/ss304-stainless-steel"}>
//                       <MenuItem title="SS304 Stainless Steel Round Pipe" />
//                     </Link>
//                     <Link to={"/ss202-stainless-steel"}>
//                       <MenuItem title="SS202 Stainless Steel Round Pipe" />
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="lg:col-span-3">
//             <div className="bg-white rounded-lg shadow-sm p-6 lg:p-8">
//               {/* Page Title */}
//               <div className="text-center mb-8">
//                 <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
//                   Rectangular Brass Sheet
//                 </h1>
//                 <div className="w-16 h-1 bg-pink-500 mx-auto"></div>
//               </div>

//               {/* Product Price */}
//               <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg p-4 mb-6">
//                 <div className="flex items-center justify-center">
//                   <span className="text-2xl font-bold text-pink-600">
//                     ₹ 615
//                   </span>
//                   <span className="text-lg text-gray-600 ml-1">/Kg</span>
//                 </div>
//                 <p className="text-center text-sm text-gray-500 mt-1">
//                   Best Price Available
//                 </p>
//               </div>

//               {/* Content Description */}
//               <div className="space-y-4 text-gray-700 mb-8">
//                 <p className="leading-relaxed">
//                   Rajlaxmi Metals one of the leading{" "}
//                   <strong>
//                     IMPORTER of Brass Sheet(JIS H 3100/ cuzn37) and Copper Sheet
//                     (DHP) for Interior Decoration
//                   </strong>
//                   .
//                 </p>

//                 <p className="leading-relaxed">
//                   Rajlaxmi metals is one the finest companies which provides
//                   brass sheets. These brass sheets are also bought by many for
//                   industrial use and in different applications. The sheets are
//                   much more rigid and strong. The product is measured by
//                   thickness x height x length. These sheets are extensively used
//                   for feature walls, lift doors, office cubicles and artwork.
//                 </p>

//                 <p className="leading-relaxed">
//                   Imported Brass sheets are available today in the market for
//                   the interior and architectural uses. Imported Brass metal
//                   sheet caused varies with thickness, height, length and the
//                   patinas it is known for. Brass sheets have opened up a new
//                   line of business for people around the world. Nowadays, best
//                   of metal cladding and patina has created new avenues in
//                   interior designing. The creativity in this field has extended
//                   this metal to every houses and offices.
//                 </p>
//               </div>

//               {/* Product Image and Specifications */}
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
//                 {/* Product Image */}
//                 <div className="order-2 lg:order-1">
//                   <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video">
//                     <img
//                       src="https://5.imimg.com/data5/SELLER/Default/2022/6/EJ/VM/DR/124968442/rectangular-brass-sheet-500x500.jpg"
//                       alt="Imported Brass Sheet"
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </div>

//                 {/* Specifications Table */}
//                 <div className="order-1 lg:order-2">
//                   <div className="mb-4">
//                     <p className="text-sm text-gray-600 mb-4">
//                       Imported brass sheet available size is thickness 1.2mm to
//                       4 mm.
//                     </p>
//                   </div>

//                   <div className="overflow-x-auto">
//                     <table className="w-full border-collapse">
//                       <thead>
//                         <tr className="bg-gray-400">
//                           <th className="border border-gray-300 px-4 py-2 text-left text-white font-semibold text-sm">
//                             Thickness
//                           </th>
//                           <th className="border border-gray-300 px-4 py-2 text-left text-white font-semibold text-sm">
//                             Width
//                           </th>
//                           <th className="border border-gray-300 px-4 py-2 text-left text-white font-semibold text-sm">
//                             Length
//                           </th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {specificationsData.map((spec, index) => (
//                           <tr key={index} className="hover:bg-gray-50">
//                             <td className="border border-gray-300 text-black px-4 py-2 text-sm">
//                               {spec.thickness}
//                             </td>
//                             <td className="border border-gray-300 text-black px-4 py-2 text-sm">
//                               {spec.width}
//                             </td>
//                             <td className="border border-gray-300 text-black px-4 py-2 text-sm">
//                               {spec.length}
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </div>

//               {/* Additional Product Information */}
//               <div className="space-y-4 text-gray-700">
//                 <p className="leading-relaxed">
//                   Brass is traditionally old warm golden color metal, an alloy
//                   to be precise of copper and zinc. Brass is used by humans from
//                   time immemorial as a utensil, artecrafts, musical instrument,
//                   knobs, handles, etc. Brass is also known for its
//                   anti-bacterial and anti-microbial effect. Brass kills these
//                   microbes within minutes of contact. The metal is known for its
//                   malleable and durable property and so today in this modern age
//                   of aesthetics it is used for it the patina.
//                 </p>

//                 <p className="leading-relaxed">
//                   Brass naturally tarnishes when exposed to the air. We regain
//                   the natural shine and luster back by rubbing with brassol or
//                   other household products. Today brass is widely used for
//                   interior designing. Creativity in this field has extended this
//                   metal to every house, offices, living room decorations,
//                   receptions of offices, kitchen brass cabinets, bathrooms and
//                   where not. Aesthetically, space planning with this metal is
//                   the new hardware trend to create warm tones.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BrassSheetCategoryPage;
