"use client"
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react"


const applications = [
  {
    title: "Municipalities",
    image: "/pipes-1.jpg",
    description: "Water & sewer systems",
  },
  {
    title: "Plumbing",
    image: "/pipes-2.jpg",
    description: "Residential & commercial",
  },
  {
    title: "Storm Water",
    image: "/pipes-3.jpg",
    description: "Drainage solutions",
  },
  {
    title: "Golf Turf",
    image: "/pipes-4.jpg",
    description: "Irrigation systems",
  },
  {
    title: "Industrial",
    image: "/pipes-1.jpg",
    description: "Heavy-duty applications",
  },
];

const Applications = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("carousel")
    if (container) {
      const scrollAmount = 300
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="products" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container px-4 sm:px-6 mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="section-title mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl">
            APPLICATIONS
          </h2>
          <p className="text-[#67737e] max-w-2xl mx-auto text-sm sm:text-base px-4">
            With great strength, capacity, and designs for numerous water, sewer, and irrigation needs, our pipe
            products cover every application for the professional contractor.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation buttons - hidden on mobile, visible on larger screens */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-4 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-white shadow-md rounded-full items-center justify-center text-gray-400 hover:text-blue-600 hover:shadow-lg transition-all"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-4 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-white shadow-md rounded-full items-center justify-center text-gray-400 hover:text-blue-600 hover:shadow-lg transition-all"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>

          {/* Cards - horizontal scroll on mobile, grid on larger screens */}
          <div
            id="carousel"
            className="flex md:grid md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 px-1 md:px-4 snap-x snap-mandatory scrollbar-hide"
          >
            {applications.map((app, index) => (
              <div
                key={app.title}
                className="group cursor-pointer flex-shrink-0 w-[45%] sm:w-[40%] md:w-auto snap-center"
              >
                <div className="relative overflow-hidden rounded-lg shadow-md">
                  <img
                    src={app.image || "/placeholder.svg"}
                    alt={app.title}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,58,96,0.8)] to-transparent md:opacity-0 opacity-100 md:group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs sm:text-sm md:opacity-0 opacity-100 md:group-hover:opacity-100 transition-opacity duration-300">
                      {app.description}
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:mt-3 text-center">
                  <h3 className="font-semibold text-gray-900 group-hover:text-[#00a35a] transition-colors text-sm sm:text-base">
                    {app.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Applications
