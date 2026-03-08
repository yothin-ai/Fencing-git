export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-blue-400">Fencing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The sport of kings, the art of precision, the dance of steel
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-400">Our Philosophy</h3>
              <p className="text-gray-300 leading-relaxed">
                Fencing is more than just a sport—it&apos;s a discipline that combines physical agility, 
                mental sharpness, and strategic thinking. Our academy is dedicated to nurturing these 
                qualities in every student, from beginners to competitive athletes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-black p-6 rounded-lg border border-blue-800">
                <div className="text-3xl mb-3">⚔️</div>
                <h4 className="text-lg font-bold text-blue-400 mb-2">Weapon Mastery</h4>
                <p className="text-sm text-gray-400">
                  Expert training in foil, épée, and sabre
                </p>
              </div>
              <div className="bg-black p-6 rounded-lg border border-blue-800">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="text-lg font-bold text-blue-400 mb-2">Precision</h4>
                <p className="text-sm text-gray-400">
                  Develop accuracy and timing
                </p>
              </div>
              <div className="bg-black p-6 rounded-lg border border-blue-800">
                <div className="text-3xl mb-3">🧠</div>
                <h4 className="text-lg font-bold text-blue-400 mb-2">Strategy</h4>
                <p className="text-sm text-gray-400">
                  Master tactical thinking and anticipation
                </p>
              </div>
              <div className="bg-black p-6 rounded-lg border border-blue-800">
                <div className="text-3xl mb-3">💪</div>
                <h4 className="text-lg font-bold text-blue-400 mb-2">Athleticism</h4>
                <p className="text-sm text-gray-400">
                  Build speed, agility, and endurance
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-900 to-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Our History</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Founded 2008</h4>
                    <p className="text-gray-300 text-sm">
                      Started with just 5 students and a dream
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-white">National Recognition</h4>
                    <p className="text-gray-300 text-sm">
                      First national champion in 2012
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-white">International Success</h4>
                    <p className="text-gray-300 text-sm">
                      Multiple world championship qualifiers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
