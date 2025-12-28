import Image from "next/image";

export default function ContinuousGoal() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="section-box">
          <h2 className="text-[rgb(11,58,96)]">Our Continuous Goal</h2>
          <p className="paragraph">
            We at JM Eagle have philanthropic duties, rather that our founder,
            Chairman and CEO makes two proven, audited and certified to do so
            every day to do so will ensure we do our part is a visible force for
            the people of this world.
          </p>
        </div>

        <div className="bg-[#e6f5f0] rounded-lg overflow-hidden border border-[#b3d9d0]">
          <div className="grid grid-cols-1 gap-8 md:gap-12 items-center">
            <div className="p-6 md:p-8 lg:p-10">
              <h3 className="text-[#00a35a] text-lg md:text-xl lg:text-2xl font-bold mb-4">
                Philanthropic Duties
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                JM Eagle actively engages in philanthropic endeavors that
                resonate with our core values. Recognizing the significance of
                access to clean water and sanitation, we extend our reach to
                underserved regions by donating our innovative plastic pipe
                products. Through these contributions, we aid in the improvement
                of communities, ensuring sustainable water access to life's
                necessities, and building a stronger future for generations to
                come.
              </p>
            </div>
            <div className="relative w-full">
              <Image
                src="/company/jme_philanthropic_duties.jpg"
                alt="Philanthropic Duties"
                width={800}
                height={504}
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12 flex items-start gap-2">
          <div className="w-1 h-8 bg-[#00a35a] flex-shrink-0 mt-1" />
          <p className="text-gray-600 text-xs md:text-sm italic">
            <span className="font-semibold text-gray-800">
              Community Responsibility:
            </span>{" "}
            JM Eagle's commitment to environmental stewardship and community
            engagement is reflected in our manufacturing practices. We are
            dedicated to manufacturing sustainable plastic products as we
            address the world's resource and water needs while contributing to
            environmental goals.
          </p>
        </div>
      </div>
    </section>
  );
}
