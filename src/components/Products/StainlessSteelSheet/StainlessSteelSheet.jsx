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

const StainlessSteelSheet = () => {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const products = [
    {
      id: 1,
      name: "Brass Granite tee patti",
      price: 525,
      unit: "Kg",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/3/396395526/MO/OF/XE/124968442/brass-flat-strip-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/3/396395527/LQ/NM/SY/124968442/brass-flat-strip-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/3/396395529/QR/OE/RA/124968442/brass-flat-strip-500x500.jpg",
      ],
      specifications: {
        Thickness: "2 mm",
        Color: "Golden",
        Material: "Brass",
        Shape: "T",
      },
      description:
        "Rectangular strip of brass, known for its flat surface and straight edges. It is typically used in projects with an architectural appeal but also has properties of strength, corrosion resistance, and can have a polished or aged appearance applied.",
      features: [
        "High Conductivity",
        "Corrosion Resistant",
        "Flexible",
        "Durable",
      ],
    },
    {
      id: 2,
      name: "Stainless Steel Flat Sheet",
      price: 210,
      unit: "Kg",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2022/6/RN/ID/GO/124968442/stainless-steel-sheet-500x500.jpg",
      ],
      specifications: {
        Size: "15 inch 20 kg",
        Color: "Golden",
        Material: "Brass",
        Brand: "Agarwal",
      },
      description:
        "Premium brass sanitary pipe fittings for plumbing and water supply systems. Lead-free construction with antimicrobial properties. Designed for long-lasting performance in residential and commercial applications.",
      features: [
        "Lead-Free",
        "Antimicrobial",
        "Easy Installation",
        "Leak-Proof",
      ],
    },
    {
      id: 3,
      name: "Brass Sheet",
      price: 400,
      unit: "Kg",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2022/6/OZ/JD/IL/124968442/brass-sheet-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2022/6/JJ/WG/GV/124968442/brass-sheet-500x500.jpg",
      ],
      specifications: {
        Color: "Golden",
        Material: "Brass",
        Shape: "Customised",
        Thickness: "5mm to 20mm",
        Standard: "ANSI B16.5",
      },
      description:
        "Precision-engineered round brass flanges for industrial pipe connections. Manufactured to international standards with excellent dimensional accuracy. Suitable for high-pressure applications.",
      features: [
        "Precision Machined",
        "High Strength",
        "Corrosion Resistant",
        "Standard Sizes",
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
              Stainless Steel Sheet
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
                Stainless Steel Sheet Products
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

export default StainlessSteelSheet;
