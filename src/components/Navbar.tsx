'use client';

import { useState } from 'react';
import Link from 'next/link';
import AuthModal from './AuthModal';

export default function Navbar() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="text-xl font-bold text-slate-900">
              Eksootikareisid
            </Link>

            <div className="hidden sm:flex space-x-8 items-center">
              <Link href="/destinations" className="text-slate-600 hover:text-slate-900">
                Sihtkohad
              </Link>
              <Link href="/packages" className="text-slate-600 hover:text-slate-900">
                Paketid
              </Link>
              <Link href="/contact" className="text-slate-600 hover:text-slate-900">
                Kontakt
              </Link>
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Logi sisse
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  )
}
