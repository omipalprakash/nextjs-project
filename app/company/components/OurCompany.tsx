import Image from "next/image";

const features = [
  {
    id: 1,
    title: "Crafting Sustainable Following in Plastic Piping",
    description:
      "At JM Eagle, the world's leading eco-conscious plastic pipe manufacturer, known for innovative products and a full suite of sustainable products. Our industry-leading open competitive advantages while introducing environmental impact. With global reach.",
    image: "/company/crafting-sustainable.jpg",
  },
  {
    id: 2,
    title: "Eco-Conscious Excellence in Product Innovation",
    description:
      "At JM Eagle, we proudly create an extensive range of premium, environmentally-friendly plastic pipes that deliver exceptional performance. Our commitment to innovation drives a continuous stream of groundbreaking solutions across multiple industries and applications.",
    image: "/company/Rectangle-35-piping-02.jpg",
  },
  {
    id: 3,
    title: "Cutting Edge Innovation",
    description:
      "Since our inception over half a century ago, JM Eagle has dedicated itself to advancing product innovation and manufacturing leadership through cutting-edge product technology with advanced design and development innovation, pushing our industry into the future.",
    image: "/company/cutting-edge.jpg",
  },
  {
    id: 4,
    title: "Superior Customer Service",
    description:
      "At JM Eagle, we're committed to superior customer service encompassing all facets of our relationships. We utilize our responsive customer support team to respond to all inquiries 24/7. Through continuous development and innovative training initiatives, we are dedicated to adding value to our customer service.",
    image: "/company/superior-customer.jpg",
  },
  {
    id: 5,
    title: "Superior Customer Service",
    description:
      "At JM Eagle, we're committed to superior customer service encompassing all facets of our relationships. We utilize our responsive customer support team to respond to all inquiries 24/7. Through continuous development and innovative training initiatives, we are dedicated to adding value to our customer service.",
    image: "/company/community-responsibility.jpg",
  },
];

export default function OurCompany() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-[rgb(11,58,96)]">Our Company</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="relative w-full">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  width={800}
                  height={504}
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-[#00a35a] text-base md:text-lg font-bold mb-3 md:mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
