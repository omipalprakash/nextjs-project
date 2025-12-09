export default function HeroBanner() {
  return (
    <section className="w-full bg-gray-900">
      <div className="relative w-full aspect-video">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="JM Eagle - Modern Infrastructure Made in America"
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  )
}
