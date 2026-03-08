import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Fencing background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-blue-900/50"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black text-white leading-tight tracking-tight">
                  THE ART OF
                  <span className="block text-blue-400">FENCING</span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-300 font-light tracking-wide max-w-lg">
                  Precision, speed, and strategy in perfect harmony
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-blue-600 text-white font-bold text-sm tracking-wider hover:bg-blue-700 transition-all duration-300 uppercase">
                  Start Training
                </button>
                <button className="px-8 py-4 border-2 border-white text-white font-bold text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300 uppercase">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Content - Stats */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center space-y-2">
                  <div className="text-3xl lg:text-4xl font-black text-blue-400">15+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Years</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl lg:text-4xl font-black text-blue-400">500+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Students</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl lg:text-4xl font-black text-blue-400">50+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Medals</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl lg:text-4xl font-black text-blue-400">10+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Coaches</div>
                </div>
              </div>

              {/* Quote */}
              <div className="bg-black/40 backdrop-blur-sm border border-gray-700 p-6 rounded-lg">
                <p className="text-gray-300 italic text-sm">
                  &quot;The art of fencing is the art of hitting without being hit.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-12 bg-white/30"></div>
        <div className="w-1.5 h-1.5 bg-white rounded-full mx-auto mt-2"></div>
      </div>
    </section>
  )
}
