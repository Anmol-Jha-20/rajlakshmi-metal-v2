import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/RajlakshmiLogo.png";
import { HashLink } from "react-router-hash-link";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const navigate = useNavigate();

  const productCategories = [
    {
      name: "Brass Sheet",
      products: [],
      link: "/brass-sheet",
    },
    {
      name: "Brass Pipe",
      products: [],
      link: "/brass-pipe",
    },
    {
      name: "Brass Scrap",
      products: [],
      link: "/brass-scrap",
    },
    {
      name: "Brass Fitting",
      products: [],
      link: "/brass-fitting",
    },
    {
      name: "Brass Rod",
      products: [],
      link: "/brass-rod",
    },
    {
      name: "Stainless Steel Sheet",
      products: [],
      link: "/stainless-steel-sheet",
    },
    {
      name: "Stainless Steel Pipe",
      products: [],
      link: "/stainless-steel-pipe",
    },
  ];

  return (
    <header className="bg-black shadow-lg sticky top-0 z-50 w-full">
      <div className="w-full md:container md:mx-auto px-4 py-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* <div className="text-2xl md:text-3xl font-bold text-[#D93361]">
              Rajlaxmi Metal
            </div> */}
            <img
              src={Logo}
              className="h-12 sm:h-16 md:h-20 lg:h-24 object-contain"
              alt="Logo"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-16">
            <Link
              to={"/"}
              className="text-white hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </Link>
            <HashLink
              smooth
              to="/#about"
              className="text-white hover:text-blue-600 transition-colors font-medium"
            >
              About
            </HashLink>

            <div
              className="relative"
              onMouseEnter={() => setShowProductDropdown(true)}
              onMouseLeave={() => {
                setShowProductDropdown(false);
                setActiveCategory(null);
              }}
            >
              <a
                href="#products"
                className="text-white hover:text-blue-600 transition-colors font-medium"
              >
                Products
              </a>

              {showProductDropdown && (
                <div className="absolute top-full left-0 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 min-w-[200px] overflow-visible">
                  <div className="py-2 flex flex-col">
                    {productCategories.map((category, index) => (
                      <div
                        key={index}
                        className="relative group"
                        onMouseEnter={() => setActiveCategory(index)}
                        onMouseLeave={() => setActiveCategory(null)}
                      >
                        <button
                          onClick={() => navigate(category.link)}
                          className="block w-full px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all font-medium border-b border-gray-100 last:border-b-0"
                        >
                          <div className="flex items-center justify-between">
                            <span>{category.name}</span>
                            {/* <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg> */}
                          </div>
                        </button>

                        {/* Sub-dropdown */}
                        {activeCategory === index &&
                          category.products?.length > 0 && (
                            <div className="absolute top-0 left-full ml-2 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 min-w-[250px]">
                              <div className="py-2">
                                {/* <div className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-100">
                                  <h4 className="font-semibold text-blue-600 text-sm">
                                    {category.name}
                                  </h4>
                                </div> */}
                                {category.products.map(
                                  (product, productIndex) => (
                                    <a
                                      key={productIndex}
                                      href="#products"
                                      className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-all text-sm border-b border-gray-50 last:border-b-0"
                                    >
                                      {product}
                                    </a>
                                  )
                                )}
                              </div>
                            </div>
                          )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to={"/gallery"}
              className="text-white hover:text-blue-600 transition-colors font-medium"
            >
              Gallery
            </Link>
            <Link
              to={"/contact-us"}
              className="text-white hover:text-blue-600 transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>
          <button className="hidden md:block bg-[#D93361] text-white px-4 py-2 rounded transition-colors text-sm cursor-pointer">
            Download Catalogue
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              <Link
                to={"/"}
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-blue-600 transition-colors font-medium"
              >
                Home
              </Link>
              <HashLink
                smooth
                to="/#about"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-blue-600 transition-colors font-medium"
              >
                About
              </HashLink>
              <div>
                <button
                  onClick={() => setShowProductDropdown(!showProductDropdown)}
                  className="text-white hover:text-blue-600 transition-colors font-medium flex items-center justify-between w-full"
                >
                  <span>Products</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      showProductDropdown ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {showProductDropdown && (
                  <div className="mt-2 ml-4 space-y-2">
                    {productCategories.map((category, index) => (
                      <div key={index}>
                        <button
                          onClick={() => {
                            setActiveCategory(
                              activeCategory === index ? null : index
                            );
                            navigate(category.link);
                            setIsMenuOpen(false);
                          }}
                          className="text-white hover:text-blue-600 transition-colors text-sm flex items-center justify-between w-full py-1"
                        >
                          <span>{category.name}</span>
                          {/* <svg
                            className={`w-3 h-3 transition-transform ${
                              activeCategory === index ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg> */}
                        </button>

                        {activeCategory === index && (
                          <div className="mt-1 ml-4 space-y-1">
                            {category.products.map((product, productIndex) => (
                              <a
                                key={productIndex}
                                href="#products"
                                className="block text-gray-500 hover:text-blue-600 transition-colors text-xs py-1"
                              >
                                {product}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <Link
                to={"/gallery"}
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-blue-600 transition-colors font-medium"
              >
                Gallery
              </Link>
              <Link
                to={"/contact-us"}
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-blue-600 transition-colors font-medium"
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
