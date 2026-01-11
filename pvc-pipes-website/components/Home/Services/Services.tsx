"use client";

import { Truck, Clock, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Services() {
  const router = useRouter();
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/delivery-truck.jpg"
          alt="Delivery truck with pipes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(11,58,96,0.95)] via-[rgba(11,58,96,0.85)] to-[rgba(11,58,96,0.7)] md:to-[rgba(11,58,96,0.6)]" />
      </div>

      <div className="relative container text-center">
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Truck className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
            <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
          </div>

          <h2 className="lg:text-5xl text-white">
            Express Service Trucks (ESTs)
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-green-400 font-medium">
            Deliver within 24 hours*
          </p>

          <p className="paragraph text-white/70">
            Our fleet of Express Service Trucks ensures rapid delivery to your
            job site, minimizing project delays and keeping your work on
            schedule.
          </p>

          <button onClick={() => router.push("/contact")} className="btn-green">
            View Details & Locations
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-white/50 text-xs mt-3 sm:mt-4">
            *Subject to availability and location. Terms and conditions apply.
          </p>
        </div>
      </div>
    </section>
  );
}
