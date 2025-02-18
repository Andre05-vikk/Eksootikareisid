'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';

type AuthMode = 'login' | 'register';

export default function AuthModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [mode, setMode] = useState<AuthMode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication logic
    console.log('Form submitted:', { mode, email, password });
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded-lg bg-white p-6">
          <div className="flex justify-between items-center mb-6">
            <Dialog.Title className="text-xl font-bold">
              {mode === 'login' ? 'Logi sisse' : 'Uus konto'}
            </Dialog.Title>
            <button
              onClick={() => mode === 'login' ? setMode('register') : setMode('login')}
              className="text-blue-500 hover:text-blue-700"
            >
              {mode === 'login' ? 'Uus konto' : 'Logi sisse'}
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
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none"
                required
              />
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
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none"
                required
              />
            </div>

            {mode === 'login' && (
              <button
                type="button"
                onClick={() => {/* TODO: Implement password reset */}}
                className="text-sm text-blue-500 hover:text-blue-700"
              >
                Unustasin salasõna?
              </button>
            )}

            <button
              type="submit"
              className="w-full rounded-md bg-orange-500 px-4 py-2 text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              {mode === 'login' ? 'LOGI SISSE' : 'LOO KONTO'}
            </button>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
