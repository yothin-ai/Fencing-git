import Navbar from '@/components/ui/Navbar'
import HeroSection from '@/components/ui/HeroSection'
import AboutSection from '@/components/ui/AboutSection'
import ContactSection from '@/components/ui/ContactSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ContactSection />
      
      <footer className="bg-gray-900 text-gray-400 py-8 border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-2">
              © 2024 Fencing Academy. All rights reserved.
            </p>
            <p className="text-sm">
              Master the art of precision and honor
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
