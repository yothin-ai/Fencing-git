import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900/20 to-black"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black text-white leading-tight tracking-tight">
                THE ART OF
                <span className="block text-blue-400">FENCING</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 font-light tracking-wide max-w-2xl mx-auto">
                Precision, speed, and strategy in perfect harmony
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-blue-600 text-white font-bold text-sm tracking-wider hover:bg-blue-700 transition-colors duration-300 uppercase">
                Start Training
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-bold text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300 uppercase">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto pt-12">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-black text-blue-400">15+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-black text-blue-400">500+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-black text-blue-400">50+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Medals</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-16 bg-white/30"></div>
        <div className="w-2 h-2 bg-white rounded-full mx-auto"></div>
      </div>
    </section>
  )
}
