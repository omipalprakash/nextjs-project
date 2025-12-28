"use client";
import { useRouter } from "next/navigation";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToContent = () => {
    const applicationsSection = document.getElementById("applications");
    if (applicationsSection) {
      applicationsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const router = useRouter();
  return (
    <section className="relative min-h-[350px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          src="/video/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[rgba(11,58,96,0.95)] via-[rgba(11,58,96,0.8)] to-[rgba(11,58,96,0.4)] md:via-[rgba(11,58,96,0.7)] md:to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container h-full flex items-center py-10 sm:py-14 lg:py-20">
        <div className="max-w-2xl space-y-4 sm:space-y-6 animate-slide-in-left">
          {/* Featured tag */}
          <div className="inline-flex items-center gap-2 bg-[rgba(0,163,90,0.2)] backdrop-blur-sm border border-[rgba(0,163,90,0.3)] rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
            <span className="w-2 h-2 bg-[#00a35a] rounded-full animate-pulse" />
            <span className="text-white text-xs sm:text-sm font-medium">
              Featured Project: Utah Infrastructure
            </span>
          </div>

          {/* Main heading */}
          <div className="space-y-1 sm:space-y-2">
            <h1 className=" text-white leading-tight">
              APEX<span className="text-[#00a35a]">PIPE</span>
            </h1>
            <p className="font-display text-xl sm:text-2xl md:text-3xl text-white/90 font-medium">
              BUILDING AMERICA'S FUTURE
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white/80 font-light">
              Premium Infrastructure Solutions
            </p>
          </div>

          {/* Description */}
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-lg leading-relaxed">
            Delivering life's essentials through the most eco-friendly plastic
            pipe products on the market. Trusted by contractors nationwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
            <button
              onClick={() => router.push("/contact")}
              className="group bg-[rgb(0,163,90)] hover:bg-[rgba(0,163,90,0.9)] text-white font-semibold px-8 py-3  transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => router.push("/products")}
              className="border-2 border-white/30 text-white hover:bg-white hover:text-[rgb(11,58,96)] font-semibold px-8 py-3 transition-colors cursor-pointer"
            >
              View Products
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-4 sm:pt-6 border-t border-white/20 mt-6 sm:mt-8">
            <div className="text-center sm:text-left">
              <p className="font-display text-2xl sm:text-3xl font-bold text-[rgb(0,163,90)]">
                50+
              </p>
              <p className="text-white/70 text-xs sm:text-sm">
                Years Experience
              </p>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-display text-2xl sm:text-3xl font-bold text-[rgb(0,163,90)]">
                500M+
              </p>
              <p className="text-white/70 text-xs sm:text-sm">Feet of Pipe</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-display text-2xl sm:text-3xl font-bold text-[rgb(0,163,90)]">
                24/7
              </p>
              <p className="text-white/70 text-xs sm:text-sm">Support</p>
            </div>
          </div>
        </div>

        {/* Right side info card */}
        <div
          className="hidden xl:block absolute right-8 top-1/2 -translate-y-1/2 animate-slide-in-right"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="bg-[rgba(11,58,96,0.9)] backdrop-blur-sm rounded-sm p-6 max-w-xs border border-white/10">
            <div className="w-12 h-12 bg-[rgba(0,163,90,0.2)] rounded-full flex items-center justify-center mb-4">
              <span className="font-display text-2xl font-bold text-[rgb(0,163,90)]">
                AP
              </span>
            </div>
            <h3 className="text-white font-display text-lg font-semibold mb-2">
              Delivering life's essentials
            </h3>
            <p className="text-white/70 text-sm mb-4">
              through the most eco-friendly plastic pipe products on the market.
            </p>
            <button
              onClick={() => router.push("/contact")}
              className="btn-secondary bg-white text-[rgb(11,58,96)] w-auto font-semibold hover:bg-[rgb(0,163,90)] hover:text-white transition-colors cursor-pointer"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div
        onClick={scrollToContent}
        className="hidden xl:block absolute right-8 top-1/2 -translate-y-1/2 cursor-pointer"
      >
        <div className="flex flex-col items-center gap-2 text-white">
          <div className="w-px h-16 bg-white" />
          <ChevronDown className="h-8 w-8 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
