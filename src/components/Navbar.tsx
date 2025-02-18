'use client';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-xl font-bold text-slate-900">
            Eksootikareisid
          </div>
          <div className="hidden sm:flex space-x-8 items-center">
            <a href="/destinations" className="text-slate-600 hover:text-slate-900">
              Sihtkohad
            </a>
            <a href="/packages" className="text-slate-600 hover:text-slate-900">
              Paketid
            </a>
            <a href="/contact" className="text-slate-600 hover:text-slate-900">
              Kontakt
            </a>
            <div className="flex space-x-4">
              <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900">
                Logi sisse
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                Registreeru
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
