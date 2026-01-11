import {
  Award,
  FileCheck,
  Users,
  Wrench,
  GraduationCap,
  HeadphonesIcon,
} from "lucide-react";

const supportItems = [
  {
    icon: Award,
    title: "Certifications",
    description: "Industry-leading quality standards",
  },
  {
    icon: FileCheck,
    title: "Third Party Testing",
    description: "Independent verification",
  },
  {
    icon: Users,
    title: "Field Support",
    description: "On-site technical assistance",
  },
  {
    icon: Wrench,
    title: "Technical Services",
    description: "Expert engineering support",
  },
  {
    icon: GraduationCap,
    title: "Contractor Training",
    description: "Professional development",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock assistance",
  },
];

export default function Support() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Header */}
        <div className="section-box">
          <h2 className="text-[rgb(11,58,96)] leading-tight">
            STRENGTH OF SUPPORT
          </h2>
          <p className="text-teal-600 font-semibold text-sm md:text-base mb-4">
            ENGINEERING SERVICES
          </p>
          <p className="paragraph">
            Our engineering team provides live technical training, product
            guidance, project design services, and field troubleshooting support
            to ensure your success.
          </p>
        </div>

        {/* Support Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {supportItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-4 md:p-6 rounded-lg bg-gray-50 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-teal-100 flex items-center justify-center mb-3 md:mb-4">
                <item.icon className="w-6 h-6 md:w-7 md:h-7 text-teal-600" />
              </div>
              <h3 className="font-semibold text-gray-900 text-xs md:text-sm mb-1">
                {item.title}
              </h3>
              <p className="text-gray-600 text-[10px] md:text-xs leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
