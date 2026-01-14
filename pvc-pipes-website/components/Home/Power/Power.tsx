"use client";

import {
  FileText,
  Video,
  Newspaper,
  BookOpen,
  Download,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { ApplicationsBlock } from "@/types/application";

const icons = [FileText, BookOpen, Newspaper, Video, Download, ExternalLink];

type PowerProps = {
  data: ApplicationsBlock;
};

export default function Power({ data }: PowerProps) {
  return (
    <section className="section-padding bg-[#062a47]">
      <div className="container">
        {/* Header (STATIC as requested) */}
        <div className="section-box">
          <h2 className="text-white">Power of Truth</h2>
          <p className="text-[#00a35a] font-semibold uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4">
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
          {data.cards.map((card, index) => {
            const Icon = icons[index % icons.length];

            return (
              <Link
                key={card.id}
                href={`/power/${card.slug}`}
                className="group bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 text-center border border-white/10 hover:bg-white/20 transition-all"
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                </div>

                <h3 className="text-xs sm:text-sm font-semibold text-white mb-1">
                  {card.title}
                </h3>

                <p className="text-[10px] sm:text-xs text-white/60">
                  {card.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
