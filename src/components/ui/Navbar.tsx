'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">⚔️</span>
              </div>
              <span className="text-white text-xl font-bold tracking-wide">FENCING</span>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-white text-sm font-medium hover:text-blue-400 transition-colors tracking-wide"
            >
              HOME
            </Link>
            <Link 
              href="#about" 
              className="text-gray-400 text-sm font-medium hover:text-blue-400 transition-colors tracking-wide"
            >
              ACADEMY
            </Link>
            <Link 
              href="#programs" 
              className="text-gray-400 text-sm font-medium hover:text-blue-400 transition-colors tracking-wide"
            >
              PROGRAMS
            </Link>
            <Link 
              href="#achievements" 
              className="text-gray-400 text-sm font-medium hover:text-blue-400 transition-colors tracking-wide"
            >
              ACHIEVEMENTS
            </Link>
            <Link 
              href="#contact" 
              className="text-gray-400 text-sm font-medium hover:text-blue-400 transition-colors tracking-wide"
            >
              CONTACT
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-blue-400 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/" 
                className="block text-white px-3 py-3 text-base font-medium hover:bg-gray-800 transition-colors"
              >
                HOME
              </Link>
              <Link 
                href="#about" 
                className="block text-gray-400 px-3 py-3 text-base font-medium hover:bg-gray-800 hover:text-white transition-colors"
              >
                ACADEMY
              </Link>
              <Link 
                href="#programs" 
                className="block text-gray-400 px-3 py-3 text-base font-medium hover:bg-gray-800 hover:text-white transition-colors"
              >
                PROGRAMS
              </Link>
              <Link 
                href="#achievements" 
                className="block text-gray-400 px-3 py-3 text-base font-medium hover:bg-gray-800 hover:text-white transition-colors"
              >
                ACHIEVEMENTS
              </Link>
              <Link 
                href="#contact" 
                className="block text-gray-400 px-3 py-3 text-base font-medium hover:bg-gray-800 hover:text-white transition-colors"
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
