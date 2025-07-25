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
import ScrollToTop from "../ScrollToTop";

const StainlessSteelPipe = () => {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const products = [
    {
      id: 1,
      name: "Stainless Steel Square Pipe",
      price: 225,
      unit: "Kg",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2022/6/YB/RL/KX/124968442/ss-square-pipe-500x500.jpg",
      ],
      specifications: {
        Thickness: "1mm – 5mm (common range)",
        Color: "Silver",
        Material: "Stainless Steel",
        Shape: "Square",
      },
      description:
        "Stainless Steel Square Pipes are highly versatile and widely used in a range of applications due to their strength, aesthetic appeal, and corrosion resistance. These pipes feature a uniform square cross-section and are typically manufactured using high-grade stainless steel such as SS202, SS304, or SS316. Their modern appearance and clean lines make them suitable for architectural, structural, and industrial use. Whether it's for railings, frameworks, construction supports, or machinery, stainless steel square pipes provide reliable performance with minimal maintenance. Their resistance to rust, oxidation, and chemical exposure ensures longevity, even in harsh environmental conditions. Additionally, these pipes can be easily fabricated, welded, or polished to meet customized requirements, making them a preferred choice for engineers and designers alike.",
      features: [
        "High Conductivity",
        "Corrosion Resistant",
        "Flexible",
        "Durable",
      ],
    },
    {
      id: 2,
      name: "SS304 Stainless Steel Round Pipe",
      price: 220,
      unit: "Kg",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2022/6/RF/OW/VL/124968442/304-ss-round-pipe-500x500.JPG",
      ],
      specifications: {
        Thickness: "1mm – 4mm",
        Color: "Silver",
        Material: "SS304 Stainless Steel",
        Shape: "Round",
      },
      description:
        "SS304 Stainless Steel Round Pipes are made from one of the most commonly used stainless steel grades worldwide. SS304 is an austenitic stainless steel alloy that contains high levels of chromium and nickel, which provide excellent corrosion resistance, strength, and durability. These pipes are widely used in applications where cleanliness, non-reactivity, and resistance to oxidation are crucial—such as in food processing, dairy, chemical industries, water treatment, and architectural applications. SS304 round pipes are also valued for their excellent formability and weldability, allowing them to be easily shaped, joined, or polished as required. Their ability to maintain integrity under high temperatures and pressures makes them suitable for both industrial and residential plumbing systems. They are also resistant to most acids, chemicals, and oxidizing agents.",
      features: ["Lead-Free", "Antimicrobial", "Hygienic", "Leak-Proof"],
    },
    {
      id: 3,
      name: "SS202 Stainless Steel Round Pipe",
      price: 150,
      unit: "Kg",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2022/6/EL/PC/QZ/124968442/copper-screp-500x500.JPG",
      ],
      specifications: {
        Color: "Silver",
        Material: "SS202 Stainless Steel",
        Shape: "Round",
        Thickness: "1mm – 3mm",
      },
      description:
        "SS202 Stainless Steel Round Pipes are an economical alternative to SS304, offering good strength and moderate corrosion resistance. Composed primarily of chromium, manganese, and nickel, SS202 is suitable for general-purpose use, especially in indoor and non-aggressive environments. These pipes are often used in furniture, railings, decorative fixtures, and light structural applications. Although SS202 does not offer the same level of corrosion resistance as SS304 or SS316, it is still an excellent choice for budget-conscious projects that require the benefits of stainless steel. With a smooth, polished finish and good fabrication properties, SS202 round pipes provide a balance of aesthetic appeal and practical functionality. They are easy to cut, weld, and machine, making them a favorite in fabrication shops and construction projects.",
      features: [
        "Affordable",
        "High Strength",
        "Corrosion Resistant",
        "Standard Sizes",
      ],
    },
    {
      id: 4,
      name: "316 Stainless Steel Round Pipe",
      price: 530,
      unit: "Kg",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2022/6/DX/MF/LX/124968442/stainless-steel-pipe-500x500.jpg",
      ],
      specifications: {
        Thickness: "1mm – 5mm",
        Color: "Silver",
        Material: "SS316 Stainless Steel",
        Shape: "Round",
        "Finishing Type": "Polished",
      },
      description:
        "316 Stainless Steel Round Pipes represent the premium choice for demanding environments that involve exposure to chlorides, saltwater, acids, and other corrosive elements. SS316 is an austenitic stainless steel alloy that includes molybdenum, which significantly enhances its resistance to pitting and crevice corrosion. These pipes are widely used in marine environments, pharmaceutical manufacturing, chemical processing, and food-grade industries where hygiene, reliability, and corrosion resistance are paramount. SS316 pipes maintain their mechanical properties even at elevated temperatures, making them ideal for use in heat exchangers, pressure vessels, and boilers. They also offer excellent formability and weldability, ensuring ease of installation and long-term performance. With a smooth internal surface and a non-reactive composition, 316 round pipes are particularly suited for transporting sensitive fluids and gases.",
      features: [
        "Adjustable Flow",
        "Leak-Proof",
        "Easy Grip",
        "Corrosion-resistant",
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
            <span className="text-gray-800 font-medium">
              Stainless Steel Pipe
            </span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Product List Sidebar */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Stainless Steel Pipe Products
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
                    {/* <button
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
                    </button> */}
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

export default StainlessSteelPipe;
