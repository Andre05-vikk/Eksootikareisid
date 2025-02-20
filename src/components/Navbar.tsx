'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import '../i18n/config';
import AuthModal from './AuthModal';

export default function Navbar() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || 'et');
  const router = useRouter();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="gradient-text">
              Eksootikareisid
            </Link>

            <div className="hidden sm:flex items-center">
              <div className="flex space-x-8 mr-8">
              <Link href="/destinations" className="text-slate-600 hover:text-slate-900">
                {t('nav.destinations')}
              </Link>
              <Link href="/packages" className="text-slate-600 hover:text-slate-900">
                {t('nav.packages')}
              </Link>
              <Link href="/contact" className="text-slate-600 hover:text-slate-900">
                {t('nav.contact')}
              </Link>
              </div>
              <div className="flex items-center space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=100093667945980" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#1877F2] hover:opacity-90 inline-flex items-center"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <div className="h-8 w-px bg-gray-200"></div>
              <select
                value={language}
                onChange={(e) => {
                  const newLang = e.target.value;
                  setLanguage(newLang);
                  i18n.changeLanguage(newLang);
                }}
                className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 p-1.5"
              >
                <option value="et">🇪🇪 ET</option>
                <option value="en">🇬🇧 EN</option>
                <option value="ru">🇷🇺 RU</option>
                <option value="lv">🇱🇻 LV</option>
                <option value="lt">🇱🇹 LT</option>
              </select>
              <div className="h-8 w-px bg-gray-200"></div>
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                {t('nav.login')}
              </button>
              </div>
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
