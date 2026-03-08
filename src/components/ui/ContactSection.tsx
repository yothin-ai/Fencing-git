export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your fencing journey? Contact us today for a free trial session
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gray-900 p-8 rounded-lg border border-blue-800">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
                    📍
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Address</h4>
                    <p className="text-gray-300">
                      123 Fencing Lane<br />
                      Bangkok, Thailand 10110
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
                    📞
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Phone</h4>
                    <p className="text-gray-300">+66 2 123 4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
                    ✉️
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Email</h4>
                    <p className="text-gray-300">info@fencingacademy.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
                    ⏰
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Hours</h4>
                    <p className="text-gray-300">
                      Monday - Friday: 4:00 PM - 9:00 PM<br />
                      Saturday - Sunday: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-black p-8 rounded-lg">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                  f
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                  📷
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                  🐦
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                  📹
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg border border-blue-800">
            <h3 className="text-2xl font-bold text-blue-400 mb-6">Send us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-black border border-blue-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-black border border-blue-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-black border border-blue-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 bg-black border border-blue-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400"
                  placeholder="+66 2 123 4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 bg-black border border-blue-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400"
                  placeholder="Tell us about your fencing experience and goals..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
