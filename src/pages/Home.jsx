import React from 'react';
import { 
  BookOpen, 
  Search, 
  Book, 
  Wifi, 
  Monitor, 
  Package, 
  Shield, 
  Mail, 
  Wrench, 
  TrendingUp, 
  Clock 
} from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-[#FAFAFA] text-gray-900 min-h-screen flex flex-col font-sans">

      {/* 1. Navigatiebalk */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2 font-bold text-xl text-gray-900 cursor-pointer">
          <BookOpen className="text-blue-600 w-6 h-6" />
          IT Knowledge Base
        </div>
        
        <div className="hidden md:block w-1/3 relative">
          <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search articles..." 
            className="w-full bg-gray-100 border border-transparent rounded-lg pl-10 pr-4 py-2 text-sm focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
          />
        </div>

        <button className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition shadow-sm">
          Browse All
        </button>
      </nav>

      {/* 2. Hero Sectie */}
      <header className="text-center py-16 px-4">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">IT Knowledge Base</h1>
        <p className="text-gray-500 max-w-xl mx-auto text-lg">
          Find answers to common IT questions, troubleshooting guides, and step-by-step manuals
        </p>
      </header>

      {/* 3. Main Content */}
      <main className="flex-grow max-w-6xl mx-auto px-6 w-full">
        
        {/* Categorieën */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Book className="text-gray-700 w-6 h-6" /> 
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition cursor-pointer">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-xl flex items-center justify-center mb-4">
                <Wifi className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Network & Connectivity</h3>
              <p className="text-sm text-gray-500 leading-relaxed">VPN setup, WiFi troubleshooting, and network access</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition cursor-pointer">
              <div className="w-12 h-12 bg-purple-500 text-white rounded-xl flex items-center justify-center mb-4">
                <Monitor className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Hardware & Devices</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Computer setup, printer configuration, and peripherals</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition cursor-pointer">
              <div className="w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center mb-4">
                <Package className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Software & Applications</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Application installation, licenses, and usage guides</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition cursor-pointer">
              <div className="w-12 h-12 bg-red-500 text-white rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Security & Access</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Password management, 2FA, and security policies</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition cursor-pointer">
              <div className="w-12 h-12 bg-indigo-500 text-white rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email & Communication</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Email setup, Teams, Slack, and messaging tools</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition cursor-pointer">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-xl flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Troubleshooting</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Common issues and their solutions</p>
            </div>

          </div>
        </section>

        {/* Recente Artikelen */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="text-gray-700 w-6 h-6" /> 
            Recently Updated
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition cursor-pointer flex flex-col h-full">
              <div className="flex-grow">
                <h3 className="font-bold text-gray-900 mb-2">Common IT Issues and Solutions</h3>
                <p className="text-sm text-gray-500 mb-6 line-clamp-2">Quick fixes for frequently encountered problems</p>
              </div>
              <div className="flex items-center justify-between text-xs mt-auto pt-4 border-t border-gray-50">
                <span className="text-gray-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> Updated Mar 10, 2026
                </span>
                <div className="flex gap-2">
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md font-medium">troubleshooting</span>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md font-medium">help</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition cursor-pointer flex flex-col h-full">
              <div className="flex-grow">
                <h3 className="font-bold text-gray-900 mb-2">Password Requirements and Best Practices</h3>
                <p className="text-sm text-gray-500 mb-6 line-clamp-2">Company password policy and security guidelines</p>
              </div>
              <div className="flex items-center justify-between text-xs mt-auto pt-4 border-t border-gray-50">
                <span className="text-gray-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> Updated Mar 9, 2026
                </span>
                <div className="flex gap-2">
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md font-medium">password</span>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md font-medium">security</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition cursor-pointer flex flex-col h-full">
              <div className="flex-grow">
                <h3 className="font-bold text-gray-900 mb-2">Microsoft 365 Apps Guide</h3>
                <p className="text-sm text-gray-500 mb-6 line-clamp-2">Using Word, Excel, PowerPoint, and other Office apps</p>
              </div>
              <div className="flex items-center justify-between text-xs mt-auto pt-4 border-t border-gray-50">
                <span className="text-gray-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> Updated Mar 8, 2026
                </span>
                <div className="flex gap-2">
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md font-medium">microsoft</span>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md font-medium">office</span>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* 4. Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm mb-2">Need additional help? Contact IT Help Desk at ext. 1234 or helpdesk@company.com</p>
          <a href="#" className="text-blue-600 text-sm hover:underline font-medium">Admin Login</a>
        </div>
      </footer>

    </div>
  );
}