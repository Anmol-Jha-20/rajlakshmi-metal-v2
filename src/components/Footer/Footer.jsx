// import React from "react";
// import {
//   MapPin,
//   Phone,
//   Mail,
//   User,
//   Shield,
//   FileText,
//   Eye,
//   Newspaper,
// } from "lucide-react";
// import { FaFacebookF, FaInstagram } from "react-icons/fa";

// function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Company Info Section */}
//           <div className="space-y-4">
//             <div className="flex items-center space-x-2">
//               <div className="bg-white text-black px-3 py-2 font-bold text-sm uppercase tracking-wide">
//                 RAJLAKSHMI
//                 <br />
//                 METAL
//               </div>
//             </div>

//             <div>
//               <h3 className="text-xl font-semibold mb-3">
//                 Rajlakshmi Metal Designs
//               </h3>
//               <div className="space-y-2 text-gray-300">
//                 <div className="flex items-center space-x-2">
//                   <MapPin className="w-4 h-4 flex-shrink-0" />
//                   <span>
//                     {" "}
//                     BLDG. 188, 3rd FLOOR GOVIPURAM, 14-B MAIN ROAD HANUMANTHA
//                     NAGAR BENGALURU-560019 KARNATAKA INDIA
//                   </span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Phone className="w-4 h-4 flex-shrink-0" />
//                   <a
//                     href="tel:8904162990"
//                     className="hover:text-cyan-400 transition-colors"
//                   >
//                     (+91) 890 416 2990
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Social Media Icons */}
//             <div className="flex space-x-3">
//               <a
//                 href="#"
//                 className="bg-cyan-500 hover:bg-cyan-600 p-2 rounded-full transition-colors"
//               >
//                 <FaInstagram className="w-5 h-5" />
//                 <span className="sr-only">Instagram</span>
//               </a>
//               <a
//                 href="#"
//                 className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors"
//               >
//                 <FaFacebookF className="w-5 h-5" />
//                 <span className="sr-only">Facebook</span>
//               </a>
//               <a
//                 href="#"
//                 className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition-colors"
//               >
//                 <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
//                   <span className="text-red-600 text-xs font-bold">P</span>
//                 </div>
//                 <span className="sr-only">Pinterest</span>
//               </a>
//               <a
//                 href="#"
//                 className="bg-blue-500 hover:bg-blue-600 p-2 rounded-full transition-colors"
//               >
//                 <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
//                   <span className="text-blue-500 text-xs font-bold">in</span>
//                 </div>
//                 <span className="sr-only">LinkedIn</span>
//               </a>
//             </div>
//           </div>

//           {/* Products Section */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold text-cyan-400 uppercase tracking-wide">
//               Products
//             </h3>
//             <nav className="space-y-3">
//               <a
//                 href="#"
//                 className="block text-gray-300 hover:text-white transition-colors"
//               >
//                 What We Make
//               </a>
//               <a
//                 href="#"
//                 className="block text-gray-300 hover:text-white transition-colors"
//               >
//                 Rajlakshmi Metal Lookbook
//               </a>
//               <a
//                 href="#"
//                 className="block text-gray-300 hover:text-white transition-colors"
//               >
//                 Our Products
//               </a>
//               <a
//                 href="#"
//                 className="block text-gray-300 hover:text-white transition-colors"
//               >
//                 Ready to Ship
//               </a>
//               <a
//                 href="#"
//                 className="block text-gray-300 hover:text-white transition-colors"
//               >
//                 Request a Quote
//               </a>
//             </nav>
//           </div>

//           {/* Company Section */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold text-cyan-400 uppercase tracking-wide">
//               Company
//             </h3>
//             <nav className="space-y-3">
//               <a
//                 href="#"
//                 className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
//               >
//                 <Mail className="w-4 h-4" />
//                 <span>Contact</span>
//               </a>
//               {/* <a
//                 href="#"
//                 className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
//               >
//                 <User className="w-4 h-4" />
//                 <span>My Account</span>
//               </a> */}
//               <a
//                 href="#"
//                 className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
//               >
//                 <Shield className="w-4 h-4" />
//                 <span>Privacy Policy</span>
//               </a>
//               <a
//                 href="#"
//                 className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
//               >
//                 <FileText className="w-4 h-4" />
//                 <span>Terms of Use</span>
//               </a>
//               <a
//                 href="#"
//                 className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
//               >
//                 <Eye className="w-4 h-4" />
//                 <span>Web Accessibility</span>
//               </a>
//               <a
//                 href="#"
//                 className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
//               >
//                 <Newspaper className="w-4 h-4" />
//                 <span>Press</span>
//               </a>
//             </nav>
//           </div>

//           {/* Certification Badge */}
//           {/* <div className="flex justify-center lg:justify-end">
//             <div className="bg-gray-800 border-2 border-gray-600 rounded-full w-32 h-32 flex flex-col items-center justify-center text-center p-4">
//               <div className="text-xs font-semibold text-gray-300 mb-1">
//                 AUTHENTIC DESIGN
//               </div>
//               <div className="text-lg font-bold text-white">BE</div>
//               <div className="text-lg font-bold text-white">/ORIGINAL/</div>
//               <div className="text-xs text-gray-300 mt-1">MEMBER ADVOCATE</div>
//               <div className="flex items-center mt-1">
//                 <div className="w-2 h-2 bg-cyan-400 rounded-full mx-1"></div>
//                 <div className="text-xs text-gray-300">AMERICA'S</div>
//                 <div className="w-2 h-2 bg-cyan-400 rounded-full mx-1"></div>
//               </div>
//             </div>
//           </div> */}
//         </div>

//         {/* Bottom Copyright */}
//         <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
//           <p>&copy; 2025 Rajlakshmi Metal Designs</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  User,
  Shield,
  FileText,
  Eye,
  Newspaper,
  ExternalLink,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  const [showMap, setShowMap] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const address =
    "BLDG. 188, 3rd FLOOR GOVIPURAM, 14-B MAIN ROAD HANUMANTHA NAGAR BENGALURU-560019 KARNATAKA INDIA";
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dw8s4NowJt7PCs&q=${encodeURIComponent(
    address
  )}`;

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info Section */}
            <div className="space-y-6 lg:col-span-2">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                {/* <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-3 font-bold text-sm uppercase tracking-wider rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    RAJLAKSHMI
                    <br />
                    METAL
                  </div>
                </div> */}
                <div className="flex items-center space-x-2">
                  {" "}
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-sm px-3 py-2 font-bold text-sm uppercase tracking-wide">
                    RAJLAKSHMI <br />
                    METAL{" "}
                  </div>{" "}
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Rajlakshmi Metal Designs
                  </h2>
                  <p className="text-gray-400 text-sm">
                    Crafting Excellence in Metal
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <div className="group">
                  <div className="flex items-start space-x-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        {address}
                      </p>
                      <button
                        onClick={() => setShowMap(!showMap)}
                        className="mt-2 inline-flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                      >
                        <span>{showMap ? "Hide Map" : "View on Map"}</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <a
                    href="tel:8904162990"
                    className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                  >
                    (+91) 890 416 2990
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-cyan-400">
                  Connect With Us
                </h4>
                <div className="flex space-x-4">
                  {[
                    {
                      icon: <FaInstagram />,
                      name: "Instagram",
                      color: "from-pink-500 to-purple-600",
                      href: "#",
                    },
                    {
                      icon: <FaFacebookF />,
                      name: "Facebook",
                      color: "from-blue-600 to-blue-700",
                      href: "#",
                    },
                    {
                      icon: <FaPinterest />,
                      name: "Pinterest",
                      color: "from-red-500 to-red-600",
                      href: "#",
                    },
                    {
                      icon: <FaLinkedinIn />,
                      name: "LinkedIn",
                      color: "from-blue-500 to-blue-600",
                      href: "#",
                    },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-xl`}
                      title={social.name}
                    >
                      <span className="text-lg">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Products Section */}
            <div className="space-y-4">
              <div className="md:hidden">
                <button
                  onClick={() => toggleSection("products")}
                  className="flex items-center justify-between w-full text-left"
                >
                  <h3 className="text-lg font-semibold text-cyan-400 uppercase tracking-wide">
                    Products
                  </h3>
                  {expandedSection === "products" ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
              </div>
              <div className="hidden md:block">
                <h3 className="text-lg font-semibold text-cyan-400 uppercase tracking-wide mb-4">
                  Products
                </h3>
              </div>

              <nav
                className={`space-y-3 ${
                  expandedSection === "products" ? "block" : "hidden md:block"
                }`}
              >
                {[
                  "What We Make",
                  "Rajlakshmi Metal Lookbook",
                  "Our Products",
                  "About Us",
                  "Request a Quote",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-white/5 border-l-2 border-transparent hover:border-cyan-400"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            {/* Company Section */}
            <div className="space-y-4">
              <div className="md:hidden">
                <button
                  onClick={() => toggleSection("company")}
                  className="flex items-center justify-between w-full text-left"
                >
                  <h3 className="text-lg font-semibold text-cyan-400 uppercase tracking-wide">
                    Company
                  </h3>
                  {expandedSection === "company" ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
              </div>
              <div className="hidden md:block">
                <h3 className="text-lg font-semibold text-cyan-400 uppercase tracking-wide mb-4">
                  Company
                </h3>
              </div>

              <nav
                className={`space-y-3 ${
                  expandedSection === "company" ? "block" : "hidden md:block"
                }`}
              >
                {[
                  { icon: Mail, text: "Contact", href: "#" },
                  { icon: Shield, text: "Privacy Policy", href: "#" },
                  { icon: FileText, text: "Terms of Use", href: "#" },
                  { icon: Eye, text: "Web Accessibility", href: "#" },
                  { icon: Newspaper, text: "Press", href: "#" },
                ].map((item) => (
                  <a
                    key={item.text}
                    href={item.href}
                    className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-white/5 group"
                  >
                    <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>{item.text}</span>
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Map Section */}
          {showMap && (
            <div className="mt-12 transition-all duration-500 ease-in-out">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                  Our Location
                </h3>
                <div className="w-full h-80 rounded-xl overflow-hidden shadow-2xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0877553157773!2d77.57749431482262!3d12.966715790856108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15ce6b6e8c4f%3A0x4e6b8c4e6b6e8c4f!2sHanumantha%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560019!5e0!3m2!1sen!2sin!4v1635789123456!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                  ></iframe>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                      address
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 font-medium"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Copyright */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                &copy; 2025 Rajlakshmi Metal Designs. All rights reserved.
              </p>
              {/* <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span>Made with</span>
                <span className="text-red-400 animate-pulse">❤️</span>
                <span>in India</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full -translate-x-16 translate-y-16"></div>
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full translate-x-24 -translate-y-24"></div>
    </footer>
  );
}

export default Footer;
