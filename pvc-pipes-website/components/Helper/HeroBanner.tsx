export default function HeroBanner() {
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
    </section>
  );
}
