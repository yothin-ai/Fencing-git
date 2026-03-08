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
      
      <footer className="bg-black text-gray-400 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-2 text-sm">
              © 2024 Fencing Academy. All rights reserved.
            </p>
            <p className="text-xs text-gray-500">
              Master the art of precision and honor
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
