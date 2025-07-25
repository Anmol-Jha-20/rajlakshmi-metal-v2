import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import MadeToOrder from "../../assets/MadeToOrder.jpeg";
import ReadyToShipTwo from "../../assets/ReadyToShipTwo.jpeg";
import BrassTPatti from "../../assets/BrassTPatti.jpeg";
import BrassRoundedBarOne from "../../assets/BrassRoundedBar.png";
import GraniteTPatti from "../../assets/BrassTPatti.png";
import BrassSheetLaser from "../../assets/BrassSheetLaserCuttingOne.png";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");

  // Sample gallery data - replace with your actual images
  const galleryItems = [
    {
      id: 1,
      src: "https://5.imimg.com/data5/SELLER/Default/2022/6/PD/JZ/AO/124968442/304-ss-square-rod-250x250.JPG",
      alt: "Modern Metal Art Installation",
      category: "installations",
      title: "Contemporary Metal Sculpture",
    },
    {
      id: 2,
      src: ReadyToShipTwo,
      alt: "Decorative Metal Screen",
      category: "screens",
      title: "Geometric Metal Screen",
    },
    {
      id: 3,
      src: MadeToOrder,
      alt: "Custom Metal Furniture",
      category: "furniture",
      title: "Designer Metal Table",
    },
    {
      id: 4,
      src: "https://5.imimg.com/data5/SELLER/Default/2024/3/396360220/LR/XI/JJ/124968442/round-brass-pipe-250x250.jpg",
      alt: "Artistic Metal Wall Panel",
      category: "panels",
      title: "Textured Wall Panel",
    },
    {
      id: 5,
      src: BrassTPatti,
      alt: "Metal Lighting Fixture",
      category: "lighting",
      title: "Custom Metal Chandelier",
    },
    {
      id: 6,
      src: "https://5.imimg.com/data5/SELLER/Default/2022/6/YB/RL/KX/124968442/ss-square-pipe-250x250.jpg",
      alt: "Architectural Metal Work",
      category: "architectural",
      title: "Building Facade Element",
    },
    {
      id: 7,
      src: BrassSheetLaser,
      alt: "Decorative Metal Gate",
      category: "gates",
      title: "Ornate Entry Gate",
    },
    {
      id: 8,
      src: BrassRoundedBarOne,
      alt: "Metal Art Sculpture",
      category: "sculptures",
      title: "Abstract Metal Art",
    },
    {
      id: 9,
      src: GraniteTPatti,
      alt: "Industrial Metal Design",
      category: "industrial",
      title: "Industrial Metal Component",
    },
  ];

  const categories = [
    { id: "all", name: "All Works" },
    { id: "installations", name: "Installations" },
    { id: "screens", name: "Screens" },
    { id: "furniture", name: "Furniture" },
    { id: "panels", name: "Panels" },
    { id: "lighting", name: "Lighting" },
    { id: "architectural", name: "Architectural" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openModal = (item, index) => {
    setSelectedImage(item);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredItems[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex =
      (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredItems[prevIndex]);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our <span className="text-gray-700">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the artistry and craftsmanship behind our metal creations.
            Each piece tells a story of innovation, precision, and timeless
            design.
          </p>
        </div>

        {/* Category Filter */}
        {/* <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "bg-white text-gray-700 hover:bg-blue-50 shadow-md hover:shadow-lg"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div> */}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
            >
              <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-lg mb-2">
                    {item.title}
                  </h3>
                  <button
                    onClick={() => openModal(item, index)}
                    className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-300"
                  >
                    <ZoomIn className="w-4 h-4" />
                    View Details
                  </button>
                </div>
              </div>

              {/* Quick view button */}
              <button
                onClick={() => openModal(item, index)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white"
              >
                <ZoomIn className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {/* <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Load More Projects
          </button>
        </div> */}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-all duration-300 z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600">{selectedImage.alt}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
