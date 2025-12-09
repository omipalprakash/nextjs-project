import Image from "next/image"

export default function ContinuousGoal() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-8 text-gray-900">
          Our Continuous Goal
        </h2>
        <p className="text-center text-gray-700 text-sm md:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed mb-12 md:mb-16">
          We at JM Eagle have philanthropic duties, rather that our founder, Chairman and CEO makes two proven, audited
          and certified to do so every day to do so will ensure we do our part is a visible force for the people of this
          world.
        </p>

        <div className="bg-[#e6f5f0] rounded-lg overflow-hidden border border-[#b3d9d0]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="p-6 md:p-8 lg:p-10">
              <h3 className="text-[#00a35a] text-lg md:text-xl lg:text-2xl font-bold mb-4">Philanthropic Duties</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                JM Eagle actively engages in philanthropic endeavors that resonate with our core values. Recognizing the
                significance of access to clean water and sanitation, we extend our reach to underserved regions by
                donating our innovative plastic pipe products. Through these contributions, we aid in the improvement of
                communities, ensuring sustainable water access to life's necessities, and building a stronger future for
                generations to come.
              </p>
            </div>
            <div className="relative h-64 md:h-80 lg:h-96">
              <Image
                src="/company/jme_philanthropic_duties.jpg"
                alt="Philanthropic Duties"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12 flex items-start gap-2">
          <div className="w-1 h-8 bg-[#00a35a] flex-shrink-0 mt-1" />
          <p className="text-gray-600 text-xs md:text-sm italic">
            <span className="font-semibold text-gray-800">Community Responsibility:</span> JM Eagle's commitment to
            environmental stewardship and community engagement is reflected in our manufacturing practices. We are
            dedicated to manufacturing sustainable plastic products as we address the world's resource and water needs
            while contributing to environmental goals.
          </p>
        </div>
      </div>
    </section>
  )
}
