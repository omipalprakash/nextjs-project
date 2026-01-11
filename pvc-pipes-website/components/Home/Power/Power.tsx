import {
  FileText,
  Video,
  Newspaper,
  BookOpen,
  Download,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

const resourceItems = [
  {
    icon: FileText,
    title: "SDS",
    description: "Safety Data Sheets",
    color: "bg-primary",
  },
  {
    icon: BookOpen,
    title: "Case Studies",
    description: "Project success stories",
    color: "bg-accent",
  },
  {
    icon: Newspaper,
    title: "White Papers",
    description: "Technical research",
    color: "bg-primary",
  },
  {
    icon: Video,
    title: "Video Library",
    description: "Training & tutorials",
    color: "bg-destructive",
  },
  {
    icon: Download,
    title: "Brochures",
    description: "Product information",
    color: "bg-accent",
  },
  {
    icon: ExternalLink,
    title: "eSales Portal",
    description: "Online ordering",
    color: "bg-primary",
  },
];

const Power = () => {
  return (
    <section className="section-padding bg-[#062a47]">
      <div className="container">
        {/* Header */}
        <div className="section-box">
          <h2 className="text-white">Power of Truth</h2>
          <p className="text-accent font-semibold uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4 text-[#00a35a]">
            Unrivaled Facts
          </p>
          <p className="paragraph text-white/70">
            Pipe products are constructed by materials and tested to standards.
            Our lab data shows the superior corrosion resistance compared to
            other pipe materials.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {resourceItems.map((item, index) => (
            <Link
              key={item.title}
              href="#"
              className="group bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 text-center border border-white/10 hover:bg-white/20 transition-all animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-10 h-10 sm:w-14 sm:h-14 ${item.color} rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}
              >
                <item.icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-white mb-1 group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-[10px] sm:text-xs text-white/60">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Power;
