import {
  FileText,
  ClipboardList,
  Calculator,
  Award,
  BookOpen,
  Scale,
} from "lucide-react";

const performanceItems = [
  {
    icon: FileText,
    title: "Product Installation Guides",
    link: "#",
  },
  {
    icon: ClipboardList,
    title: "Product Catalog",
    link: "#",
  },
  {
    icon: Calculator,
    title: "Installation Calculators",
    link: "#",
  },
  {
    icon: Award,
    title: "50 Year Warranty",
    link: "#",
  },
  {
    icon: BookOpen,
    title: "Technical Information",
    link: "#",
  },
  {
    icon: Scale,
    title: "Terms and Conditions",
    link: "#",
  },
];

const Strength = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="section-box">
          <h2 className="text-[rgb(11,58,96)]">STRENGTH OF PERFORMANCE</h2>
          <p className="text-blue-600 text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4">
            Documentation & Resources
          </p>
          <p className="paragraph">
            All you need to know to design and install, includes SDS,
            specifications, design tools, CAD details, installation
            instructions, and product information.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {performanceItems.map((item, index) => (
            <a
              key={item.title}
              href={item.link}
              className="group bg-white rounded-lg p-4 sm:p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-blue-50 transition-colors">
                <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 group-hover:text-blue-700 transition-colors" />
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                {item.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strength;
