'use client';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Link from "next/link";
import Image from 'next/image';
import '../styles/navbar.css';
import '../styles/login-modal.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [language, setLanguage] = useState(i18n.language || 'et');

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Site logo"
            width={120}
            height={48}
            className="h-12 w-auto"
            priority
          />
        </Link>
      </div>
      
      <div className="nav-links">
        <Link href="/">{t('navbar.home')}</Link>
        <Link href="/offers">{t('navbar.offers')}</Link>
        <Link href="/calendar">{t('navbar.calendar')}</Link>
      </div>

      <div className="nav-controls">
        <div className="language-selector">
          <select 
            value={language} 
            onChange={handleLanguageChange}
            className="lang-select"
          >
            <option value="et">🇪🇪 ET</option>
            <option value="en">🇬🇧 EN</option>
            <option value="ru">🇷🇺 RU</option>
            <option value="lv">🇱🇻 LV</option>
            <option value="lt">🇱🇹 LT</option>
          </select>
        </div>

        <div className="auth-buttons">
          <button 
            className="btn btn-secondary" 
            onClick={() => setIsLoginModalOpen(true)}
          >
            {t('navbar.login')}
          </button>
          <button 
            className="btn btn-primary" 
            onClick={() => setIsSignUpModalOpen(true)}
          >
            {t('navbar.signup')}
          </button>
        </div>
      </div>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsLoginModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{t('login.title')}</h3>
              <button 
                className="close-button" 
                onClick={() => setIsLoginModalOpen(false)}
              >
                ×
              </button>
            </div>
            <form className="auth-form">
              <div className="form-group">
                <label>{t('login.email')}</label>
                <input type="email" placeholder={t('login.emailPlaceholder')} />
              </div>
              <div className="form-group">
                <label>{t('login.password')}</label>
                <input type="password" placeholder={t('login.passwordPlaceholder')} />
              </div>
              <div className="form-footer">
                <button type="submit" className="btn btn-primary">
                  {t('login.submit')}
                </button>
                <a href="#" className="forgot-password">
                  {t('login.forgotPassword')}
                </a>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {isSignUpModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsSignUpModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{t('signup.title')}</h3>
              <button 
                className="close-button" 
                onClick={() => setIsSignUpModalOpen(false)}
              >
                ×
              </button>
            </div>
            <form className="auth-form">
              <div className="form-group">
                <label>{t('signup.name')}</label>
                <input type="text" placeholder={t('signup.namePlaceholder')} />
              </div>
              <div className="form-group">
                <label>{t('signup.email')}</label>
                <input type="email" placeholder={t('signup.emailPlaceholder')} />
              </div>
              <div className="form-group">
                <label>{t('signup.password')}</label>
                <input type="password" placeholder={t('signup.passwordPlaceholder')} />
              </div>
              <div className="form-group">
                <label>{t('signup.confirmPassword')}</label>
                <input type="password" placeholder={t('signup.confirmPasswordPlaceholder')} />
              </div>
              <button type="submit" className="btn btn-primary">
                {t('signup.submit')}
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
