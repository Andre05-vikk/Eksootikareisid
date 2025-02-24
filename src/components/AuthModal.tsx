'use client';

import {useState} from 'react';
import {Dialog} from '@headlessui/react';
import {XMarkIcon} from '@heroicons/react/24/outline';

type AuthMode = 'login' | 'register';
type ValidationErrors = { [key: string]: string };

export default function AuthModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [mode, setMode] = useState<AuthMode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: ValidationErrors = {};

    // Email validation
    if (!email) {
      newErrors.email = 'E-post on kohustuslik';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Vale e-posti formaat';
    }

    // Password validation
    if (!password) {
      newErrors.password = 'Salasõna on kohustuslik';
    } else if (password.length < 8) {
      newErrors.password = 'Salasõna peab olema vähemalt 8 tähemärki pikk';
    }

    if (mode === 'register') {
      // Confirm password validation
      if (!confirmPassword) {
        newErrors.confirmPassword = 'Salasõna kordamine on kohustuslik';
      } else if (password !== confirmPassword) {
        newErrors.confirmPassword = 'Salasõnad ei kattu';
      }

      // Phone validation
      if (!phone) {
        newErrors.phone = 'Telefoni number on kohustuslik';
      } else if (!/^\+?[1-9]\d{7,14}$/.test(phone)) {
        newErrors.phone = 'Vale telefoni number';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: mode,
          email,
          password,
          ...(mode === 'register' && {
            confirmPassword,
            phone,
          }),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Midagi läks valesti');
      }

      // Handle successful auth
      onClose();
      // TODO: Update auth state and redirect

    } catch (error) {
      setErrors({
        submit: error instanceof Error ? error.message : 'Midagi läks valesti',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="relative w-full max-w-md rounded-lg bg-white p-8 pt-12 min-h-[500px] mt-[-2rem]">
          <button
            onClick={onClose}
            className="absolute top-4 right-6 text-gray-600 hover:text-gray-800"
          >
            <XMarkIcon className="h-6 w-6 font-bold stroke-2" />
          </button>

          <div className="flex justify-between items-center mb-6">
            <Dialog.Title className="text-xl font-bold">
              {mode === 'login' ? 'Logi sisse' : 'Loo konto'}
            </Dialog.Title>
            <button
              onClick={() => {
                setMode(mode === 'login' ? 'register' : 'login');
                setErrors({});
              }}
              className="text-xl font-bold text-orange-500 hover:text-orange-600"
            >
              {mode === 'login' ? 'Loo konto' : 'Logi sisse'}
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-post
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`mt-1 block w-full rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none`}
                required
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Salasõna
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`mt-1 block w-full rounded-md border ${errors.password ? 'border-red-500' : 'border-gray-300'} px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none`}
                required
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            {mode === 'register' && (
              <>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                    Korda salasõna
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`mt-1 block w-full rounded-md border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none`}
                    required
                  />
                  {errors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+372"
                    className={`mt-1 block w-full rounded-md border ${errors.phone ? 'border-red-500' : 'border-gray-300'} px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none`}
                    required
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>
              </>
            )}

            {mode === 'login' && (
              <button
                type="button"
                onClick={() => {/* TODO: Implement password reset */}}
                className="text-sm text-blue-500 hover:text-blue-700"
              >
                Unustasin salasõna?
              </button>
            )}

            {errors.submit && (
              <p className="text-sm text-red-600">{errors.submit}</p>
            )}

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-md bg-orange-500 px-6 py-2 text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50"
              >
                {isSubmitting ? 'Palun oota...' : mode === 'login' ? 'Logi sisse' : 'Loo konto'}
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
