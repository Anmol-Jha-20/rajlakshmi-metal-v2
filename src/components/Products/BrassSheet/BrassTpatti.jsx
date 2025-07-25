import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const BrassTPatti = () => {
  const [expandedSections, setExpandedSections] = useState({
    importedProducts: true,
    brassProducts: true,
    copperProducts: true,
    etpCopperProducts: true,
    navalBrassSheet: false,
    StainlessSteelSheet: false,
    StainlessSteelPipe: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const MenuItem = ({ title, isActive = false, hasArrow = false }) => (
    <div
      className={`flex items-center py-2 px-3 cursor-pointer hover:bg-pink-100 transition-colors ${
        isActive ? "bg-pink-50" : ""
      }`}
    >
      <ChevronRight className="w-4 h-4 text-pink-600 mr-2" />
      <span
        className={`text-sm ${
          isActive ? "font-medium text-pink-700" : "text-gray-700"
        }`}
      >
        {title}
      </span>
    </div>
  );

  const SectionHeader = ({
    title,
    isExpanded,
    onToggle,
    bgColor = "bg-pink-500",
  }) => (
    <div
      className={`${bgColor} text-white px-4 py-3 cursor-pointer flex items-center justify-between`}
      onClick={onToggle}
    >
      <h3 className="font-semibold text-sm">{title}</h3>
      <ChevronDown
        className={`w-4 h-4 transition-transform ${
          isExpanded ? "rotate-180" : ""
        }`}
      />
    </div>
  );

  const specificationsData = [
    { thickness: "1.2mm", width: "1250mm", length: "2500mm/3050mm" },
    { thickness: "1.5mm", width: "1250mm", length: "2500mm/3050mm" },
    { thickness: "2mm", width: "1250mm", length: "2500mm/3050mm" },
    { thickness: "3mm", width: "1250mm", length: "2500mm" },
    { thickness: "4mm", width: "1250mm", length: "2500mm" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Meta Tags would be handled by Next.js Head or React Helmet */}

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-3 text-sm">
            <a href="#" className="text-pink-600 hover:text-pink-700">
              Home
            </a>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Brass T Patti</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Imported Products Section */}
              <div className="border-b">
                <SectionHeader
                  title="Brass Sheet Products"
                  isExpanded={expandedSections.importedProducts}
                  onToggle={() => toggleSection("importedProducts")}
                />
                {expandedSections.importedProducts && (
                  <div className="bg-white">
                    <Link to={"/brass-sheet"}>
                      <MenuItem title="Rectangular Brass Sheet" />
                    </Link>
                    <Link to={"/brass-stripe-patti"}>
                      {" "}
                      <MenuItem title="Brass Stripe Patti" />
                    </Link>
                    <Link to={"/brass-sheet-striped-coils"}>
                      <MenuItem
                        title="Brass Sheet Striped coils"
                        isActive={true}
                      />
                    </Link>
                    <Link to={"/brass-t-patti"}>
                      <MenuItem title="Brass T Patti" />
                    </Link>
                  </div>
                )}
              </div>

              {/* Brass Products Section */}
              <div className="border-b">
                <SectionHeader
                  title="Brass Pipe Products"
                  isExpanded={expandedSections.brassProducts}
                  onToggle={() => toggleSection("brassProducts")}
                />
                {expandedSections.brassProducts && (
                  <div className="bg-white">
                    <Link to={"/round-brass-pipe"}>
                      <MenuItem title="Round Brass Pipe" />
                    </Link>
                    <Link to={"/brass-square-pipe"}>
                      <MenuItem title="Brass Square Pipe" />
                    </Link>
                    <Link to={"/round-brass-pipe-one"}>
                      <MenuItem title="Round Brass Pipe" />
                    </Link>
                    <Link to={"/copper-pipes"}>
                      <MenuItem title="Copper Pipes" />
                    </Link>
                  </div>
                )}
              </div>

              {/* Copper Products Section */}
              <div className="border-b">
                <SectionHeader
                  title="Brass Scrap Products"
                  isExpanded={expandedSections.copperProducts}
                  onToggle={() => toggleSection("copperProducts")}
                />
                {expandedSections.copperProducts && (
                  <div className="bg-white">
                    <Link to={"/honey-brass-scrap"}>
                      {" "}
                      <MenuItem title="Honey Brass Scrap" />
                    </Link>
                    <Link to={"/brass-turning-boring-scrap"}>
                      <MenuItem title="Brass Turning Boring Scrap" />
                    </Link>
                    <Link to={"/Brass-metal-scrap"}>
                      <MenuItem title="Brass Metal Scrap" />
                    </Link>
                  </div>
                )}
              </div>

              {/* ETP Copper Products Section */}
              <div className="border-b">
                <SectionHeader
                  title="Brass Fitting Products"
                  isExpanded={expandedSections.etpCopperProducts}
                  onToggle={() => toggleSection("etpCopperProducts")}
                />
                {expandedSections.etpCopperProducts && (
                  <div className="bg-white">
                    <Link to={"/brass-copper-wire"}>
                      <MenuItem title="Brass Copper Wire" />
                    </Link>
                    <Link to={"/brass-sanitary-pipe-fitting"}>
                      <MenuItem title="Brass Sanitary Pipe Fitting" />
                    </Link>
                    <Link to={"/round-brass-flange"}>
                      <MenuItem title="Round Brass Flange" />
                    </Link>
                    <Link to={"/brass-nozzle"}>
                      <MenuItem title="Brass Nozzle" />
                    </Link>
                  </div>
                )}
              </div>

              {/* Naval Brass Sheet Section */}
              <div>
                <SectionHeader
                  title="Brass Rod Products"
                  isExpanded={expandedSections.navalBrassSheet}
                  onToggle={() => toggleSection("navalBrassSheet")}
                />
                {expandedSections.navalBrassSheet && (
                  <div className="bg-white">
                    <Link to={"/brass-round-bar"}>
                      <MenuItem title="Brass Round Bar" />
                    </Link>
                    <Link to={"/brass-flat-bar"}>
                      <MenuItem title="Brass Flat Bar" />
                    </Link>
                    <Link to={"/brass-brass-rod"}>
                      <MenuItem title="Round Brass Rod" />
                    </Link>
                  </div>
                )}
              </div>

              <div>
                <SectionHeader
                  title="Stainless Steel Sheet"
                  isExpanded={expandedSections.StainlessSteelSheet}
                  onToggle={() => toggleSection("StainlessSteelSheet")}
                />
                {expandedSections.StainlessSteelSheet && (
                  <div className="bg-white">
                    <Link to={"/brass-branite-tee-patti"}>
                      <MenuItem title="Brass Granite tee patti" />
                    </Link>
                    <Link to={"/stainless-steel-flat-sheet"}>
                      <MenuItem title="Stainless Steel Flat Sheet" />
                    </Link>
                    <Link to={"/brass-sheet-one"}>
                      <MenuItem title="Brass Sheet" />
                    </Link>
                  </div>
                )}
              </div>

              <div>
                <SectionHeader
                  title="Stainless Steel Pipe"
                  isExpanded={expandedSections.StainlessSteelPipe}
                  onToggle={() => toggleSection("StainlessSteelPipe")}
                />
                {expandedSections.StainlessSteelPipe && (
                  <div className="bg-white">
                    <Link to={"/stainless-steel-square-pipe"}>
                      <MenuItem title="Stainless Steel Square Pipe" />
                    </Link>
                    <Link to={"/ss304-stainless-steel"}>
                      <MenuItem title="SS304 Stainless Steel Round Pipe" />
                    </Link>
                    <Link to={"/ss202-stainless-steel"}>
                      <MenuItem title="SS202 Stainless Steel Round Pipe" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6 lg:p-8">
              {/* Page Title */}
              <div className="text-center mb-8">
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  Brass T Patti
                </h1>
                <div className="w-16 h-1 bg-pink-500 mx-auto"></div>
              </div>

              {/* Product Price */}
              <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-center">
                  <span className="text-2xl font-bold text-pink-600">
                    ₹ 530
                  </span>
                  <span className="text-lg text-gray-600 ml-1">/Kg</span>
                </div>
                <p className="text-center text-sm text-gray-500 mt-1">
                  Best Price Available
                </p>
              </div>

              {/* Content Description */}
              <div className="space-y-4 text-gray-700 mb-8">
                <p className="leading-relaxed">
                  Rajlaxmi Metals one of the leading{" "}
                  <strong>
                    IMPORTER of Brass Sheet(JIS H 3100/ cuzn37) and Copper Sheet
                    (DHP) for Interior Decoration
                  </strong>
                  .
                </p>

                <p className="leading-relaxed">
                  Rajlaxmi metals is one the finest companies which provides
                  brass sheets. These brass sheets are also bought by many for
                  industrial use and in different applications. The sheets are
                  much more rigid and strong. The product is measured by
                  thickness x height x length. These sheets are extensively used
                  for feature walls, lift doors, office cubicles and artwork.
                </p>

                <p className="leading-relaxed">
                  Imported Brass sheets are available today in the market for
                  the interior and architectural uses. Imported Brass metal
                  sheet caused varies with thickness, height, length and the
                  patinas it is known for. Brass sheets have opened up a new
                  line of business for people around the world. Nowadays, best
                  of metal cladding and patina has created new avenues in
                  interior designing. The creativity in this field has extended
                  this metal to every houses and offices.
                </p>
              </div>

              {/* Product Image and Specifications */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Product Image */}
                <div className="order-2 lg:order-1">
                  <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video">
                    <img
                      src="https://5.imimg.com/data5/SELLER/Default/2024/3/396405073/LJ/VX/TA/124968442/brass-sheet-striped-coils-500x500.jpg"
                      alt="Brass Sheet Striped Coils"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Specifications Table */}
                <div className="order-1 lg:order-2">
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-4">
                      Imported brass sheet available size is thickness 1.2mm to
                      4 mm.
                    </p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-400">
                          <th className="border border-gray-300 px-4 py-2 text-left text-white font-semibold text-sm">
                            Thickness
                          </th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-white font-semibold text-sm">
                            Width
                          </th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-white font-semibold text-sm">
                            Length
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {specificationsData.map((spec, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="border border-gray-300 text-black px-4 py-2 text-sm">
                              {spec.thickness}
                            </td>
                            <td className="border border-gray-300 text-black px-4 py-2 text-sm">
                              {spec.width}
                            </td>
                            <td className="border border-gray-300 text-black px-4 py-2 text-sm">
                              {spec.length}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Additional Product Information */}
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  Brass is traditionally old warm golden color metal, an alloy
                  to be precise of copper and zinc. Brass is used by humans from
                  time immemorial as a utensil, artecrafts, musical instrument,
                  knobs, handles, etc. Brass is also known for its
                  anti-bacterial and anti-microbial effect. Brass kills these
                  microbes within minutes of contact. The metal is known for its
                  malleable and durable property and so today in this modern age
                  of aesthetics it is used for it the patina.
                </p>

                <p className="leading-relaxed">
                  Brass naturally tarnishes when exposed to the air. We regain
                  the natural shine and luster back by rubbing with brassol or
                  other household products. Today brass is widely used for
                  interior designing. Creativity in this field has extended this
                  metal to every house, offices, living room decorations,
                  receptions of offices, kitchen brass cabinets, bathrooms and
                  where not. Aesthetically, space planning with this metal is
                  the new hardware trend to create warm tones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrassTPatti;
