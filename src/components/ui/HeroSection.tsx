import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-black via-blue-900 to-black text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Master the Art of
              <span className="text-blue-400 block">Fencing</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
              Discover the elegance, precision, and power of Olympic fencing. 
              From beginner to champion, we train the next generation of fencers 
              with world-class coaching and state-of-the-art facilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 transform hover:scale-105">
                Start Your Journey
              </button>
              <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black font-bold py-3 px-8 rounded-lg transition-colors duration-200">
                Learn More
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">15+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">500+</div>
                <div className="text-sm text-gray-400">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">20+</div>
                <div className="text-sm text-gray-400">National Medals</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-transparent rounded-lg opacity-30"></div>
            <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
              <div className="aspect-w-16 aspect-h-12">
                <Image 
                  src="/api/placeholder/600/400" 
                  alt="Fencer in action"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <p className="text-sm text-gray-300 italic">
                  &quot;The art of fencing is the art of hitting without being hit.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
