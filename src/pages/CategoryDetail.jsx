import React from 'react';
import { 
  BookOpen, 
  Search, 
  ChevronRight, 
  Home, 
  Wifi, 
  Clock 
} from 'lucide-react';

export default function CategoryDetail() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen flex flex-col font-sans text-gray-900">
      
      {/* 1. Navigatiebalk (Hetzelfde als altijd) */}
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

      <main className="flex-grow max-w-6xl mx-auto w-full px-6 py-8">
        
        {/* 2. Breadcrumbs (Kruimelpad) */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <a href="#" className="hover:text-gray-900 flex items-center gap-1">
            <Home className="w-4 h-4" /> Home
          </a>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Network & Connectivity</span>
        </nav>

        {/* 3. Categorie Header */}
        <div className="mb-12">
          <div className="w-16 h-16 bg-blue-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
            <Wifi className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">Network & Connectivity</h1>
          <p className="text-xl text-gray-500">VPN setup, WiFi troubleshooting, and network access</p>
        </div>

        {/* 4. Artikelen Grid */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">3 Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Article Card 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition cursor-pointer flex flex-col h-full">
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">VPN Setup Guide</h3>
                <p className="text-gray-500 mb-6 leading-relaxed">Step-by-step instructions for connecting to the company VPN</p>
              </div>
              <div className="mt-auto pt-4 flex flex-col gap-4">
                <span className="text-gray-400 text-sm flex items-center gap-1.5">
                  <Clock className="w-4 h-4" /> Updated Mar 5, 2026
                </span>
                <div className="flex gap-2">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium text-xs">vpn</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium text-xs">remote</span>
                </div>
              </div>
            </div>

            {/* Article Card 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition cursor-pointer flex flex-col h-full">
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Remote Desktop Connection</h3>
                <p className="text-gray-500 mb-6 leading-relaxed">Access your office computer from home</p>
              </div>
              <div className="mt-auto pt-4 flex flex-col gap-4">
                <span className="text-gray-400 text-sm flex items-center gap-1.5">
                  <Clock className="w-4 h-4" /> Updated Mar 1, 2026
                </span>
                <div className="flex gap-2">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium text-xs">remote</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium text-xs">rdp</span>
                </div>
              </div>
            </div>

            {/* Article Card 3 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition cursor-pointer flex flex-col h-full">
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Office WiFi Access</h3>
                <p className="text-gray-500 mb-6 leading-relaxed">How to connect to office WiFi networks</p>
              </div>
              <div className="mt-auto pt-4 flex flex-col gap-4">
                <span className="text-gray-400 text-sm flex items-center gap-1.5">
                  <Clock className="w-4 h-4" /> Updated Feb 28, 2026
                </span>
                <div className="flex gap-2">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium text-xs">wifi</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium text-xs">network</span>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}