import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="Cosmic nebula with moon and DNA helixes - Moontaxi Lab"
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
        {/* Subtle gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-space-black/70 via-transparent to-space-black/30" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">
        <h1 className="animate-fade-in font-display text-5xl font-semibold tracking-wide text-star-white drop-shadow-2xl sm:text-6xl md:text-7xl lg:text-8xl">
          Moontaxi Lab
        </h1>
      </div>
    </main>
  )
}
