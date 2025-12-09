import { ArrowRight } from "lucide-react";
import Image from "next/image";
export default function Hero() {
  return (
    // <section className="relative w-full min-h-screen lg:h-screen overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700">
    //   {/* Background Image with Overlay */}
    //   <div
    //     className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    //     style={{
    //       backgroundImage: "url(/hero-worker.jpg)",
    //     }}
    //   />

    //   {/* Dark Overlay */}
    //   <div className="absolute inset-0 bg-[rgba(11,58,96,0.7)] " />

    //   {/* Content Container */}
    //   <div className="relative container mx-auto px-4 py-16 md:py-20 lg:py-0 lg:h-full flex items-center">
    //     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 w-full items-center">
    //       {/* Left Content */}
    //       <div className="lg:col-span-2 text-white">
    //         {/* Featured Label */}
    //         <div className="inline-flex items-center gap-2 mb-6 bg-[rgba(0,163,90,0.3)] bg-opacity-20 px-4 py-2 rounded-full border border-[#00a35a] border-opacity-30">
    //           <span className="w-2 h-2 bg-[#00a35a] rounded-full" />
    //           <span className="text-white text-xs md:text-sm font-semibold">
    //             Featured Project | Utah Infrastructure
    //           </span>
    //         </div>

    //         {/* Main Title */}
    //         <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold mb-2 text-balance">
    //           APEX<span className="text-green-400">PIPE</span>
    //         </h1>

    //         {/* Subtitle */}
    //         <p className="text-2xl md:text-3xl font-light text-white mb-4">BUILDING AMERICA'S FUTURE</p>

    //         {/* Secondary Subtitle */}
    //         <p className="text-lg md:text-xl text-gray-200 mb-6 font-light">Premium Infrastructure Solutions</p>

    //         {/* Description */}
    //         <p className="text-gray-100 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
    //           Delivering life's essentials through the most eco-friendly plastic pipe products on the market. Trusted by
    //           contractors nationwide.
    //         </p>

    //         {/* CTA Buttons */}
    //         <div className="flex flex-col sm:flex-row gap-4 mb-12">
    //           <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3  transition-colors inline-flex items-center justify-center gap-2">
    //             Learn More
    //             <span>→</span>
    //           </button>
    //           <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-3 transition-colors">
    //             View Products
    //           </button>
    //         </div>

    //         {/* Stats */}
    //         <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-4 sm:pt-6 border-t border-b-gray-200 mt-6 sm:mt-8">
    //           <div>
    //             <p className="text-3xl md:text-4xl font-bold text-green-400">50+</p>
    //             <p className="text-gray-200 text-sm mt-2">Years Experience</p>
    //           </div>
    //           <div>
    //             <p className="text-3xl md:text-4xl font-bold text-green-400">500M+</p>
    //             <p className="text-gray-200 text-sm mt-2">Feet of Pipe</p>
    //           </div>
    //           <div>
    //             <p className="text-3xl md:text-4xl font-bold text-green-400">24/7</p>
    //             <p className="text-gray-200 text-sm mt-2">Support</p>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Right Side Info Card - Hidden on mobile and tablet */}
    //       <div className="hidden lg:flex lg:col-span-1 h-full items-center justify-end">
    //         <div className="bg-blue-900 bg-opacity-90 backdrop-blur-sm p-8 rounded-lg border border-blue-800 max-w-xs h-fit">
    //           <div className="flex items-center gap-3 mb-6">
    //             <div className="text-green-400 text-2xl font-bold">AP</div>
    //           </div>
    //           <h3 className="text-white text-xl font-bold mb-4">Delivering life's essentials</h3>
    //           <p className="text-gray-200 text-sm leading-relaxed mb-6">
    //             through the most eco-friendly plastic pipe products on the market.
    //           </p>
    //           <button className="w-full bg-white text-blue-900 font-semibold py-2 rounded hover:bg-gray-100 transition-colors">
    //             Learn More
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
        <section className="relative min-h-[500px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-worker.jpg"
          alt="Construction worker with pipes"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(11,58,96,0.95)] via-[rgba(11,58,96,0.8)] to-[rgba(11,58,96,0.4)] md:via-[rgba(11,58,96,0.7)] md:to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container h-full flex items-center py-16 sm:py-20 lg:py-32">
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
            Delivering life's essentials through the most eco-friendly plastic pipe products on the market. Trusted by contractors nationwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
            <button className="group bg-[rgb(0,163,90)] hover:bg-[rgba(0,163,90,0.9)] text-white font-semibold px-8 py-3  transition-colors inline-flex items-center justify-center gap-2">
              Learn More
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white/30 text-white hover:bg-white hover:text-[rgb(11,58,96)] font-semibold px-8 py-3 transition-colors">
              View Products
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-4 sm:pt-6 border-t border-white/20 mt-6 sm:mt-8">
            <div className="text-center sm:text-left">
              <p className="font-display text-2xl sm:text-3xl font-bold text-[rgb(0,163,90)]">50+</p>
              <p className="text-white/70 text-xs sm:text-sm">Years Experience</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-display text-2xl sm:text-3xl font-bold text-[rgb(0,163,90)]">500M+</p>
              <p className="text-white/70 text-xs sm:text-sm">Feet of Pipe</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-display text-2xl sm:text-3xl font-bold text-[rgb(0,163,90)]">24/7</p>
              <p className="text-white/70 text-xs sm:text-sm">Support</p>
            </div>
          </div>
        </div>

        {/* Right side info card */}
        <div className="hidden xl:block absolute right-8 top-1/2 -translate-y-1/2 animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
          <div className="bg-[rgba(11,58,96,0.9)] backdrop-blur-sm rounded-sm p-6 max-w-xs border border-white/10">
            <div className="w-12 h-12 bg-[rgba(0,163,90,0.2)] rounded-full flex items-center justify-center mb-4">
              <span className="font-display text-2xl font-bold text-[rgb(0,163,90)]">AP</span>
            </div>
            <h3 className="text-white font-display text-lg font-semibold mb-2">
              Delivering life's essentials
            </h3>
            <p className="text-white/70 text-sm mb-4">
              through the most eco-friendly plastic pipe products on the market.
            </p>
            <button className="w-auto bg-white text-[rgb(11,58,96)]  font-semibold py-2 rounded hover:bg-gray-100 transition-colors px-4">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
