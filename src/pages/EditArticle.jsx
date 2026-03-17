import React from 'react';
import { ArrowLeft, Save } from 'lucide-react';

export default function EditArticle() {
  // Dit is de data die we "inladen" (in een echte app komt dit uit een database)
  const articleData = {
    title: "VPN Setup Guide",
    category: "Network & Connectivity",
    description: "Step-by-step instructions for connecting to the company VPN",
    tags: "vpn, remote, security",
    content: `# VPN Setup Guide\n\n## Overview\nThis guide will help you set up and connect to the company VPN for secure remote access.\n\n## Prerequisites\n- Company-issued laptop or approved personal device\n- VPN credentials (available from IT Help Desk)\n- Stable internet connection\n\n## Installation Steps\n\n### Windows\n1. Download the VPN client from the IT portal\n2. Run the installer as administrator\n3. Enter your employee ID when prompted\n4. Follow the on-screen installation steps\n\n### macOS\n1. Download the VPN client from the IT portal\n2. Open the .dmg file and drag the application to Applications folder`
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen flex flex-col font-sans text-gray-900 pb-12">
      
      {/* 1. Header met Terug-knop */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center sticky top-0 z-10">
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium transition shadow-sm">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <h1 className="text-xl font-bold text-gray-900">Edit Article</h1>
        </div>
      </nav>

      {/* 2. Formulier Container */}
      <main className="max-w-4xl mx-auto w-full px-4 sm:px-6 pt-8">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            {/* Article Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Article Title
              </label>
              <input 
                type="text" 
                id="title"
                defaultValue={articleData.title}
                className="w-full bg-gray-50 border border-transparent rounded-lg px-4 py-2.5 text-sm focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
              />
            </div>

            {/* Category Dropdown */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select 
                id="category"
                defaultValue={articleData.category}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition appearance-none cursor-pointer"
                style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 0.5rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em`, paddingRight: `2.5rem` }}
              >
                <option>Network & Connectivity</option>
                <option>Hardware & Devices</option>
                <option>Software & Applications</option>
                <option>Security & Access</option>
                <option>Email & Communication</option>
                <option>Troubleshooting</option>
              </select>
            </div>

            {/* Short Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Short Description
              </label>
              <textarea 
                id="description"
                rows="3"
                defaultValue={articleData.description}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition resize-y"
              ></textarea>
            </div>

            {/* Tags */}
            <div>
              <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
                Tags (comma-separated)
              </label>
              <input 
                type="text" 
                id="tags"
                defaultValue={articleData.tags}
                className="w-full bg-gray-50 border border-transparent rounded-lg px-4 py-2.5 text-sm focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
              />
              <p className="text-xs text-gray-500 mt-1.5">Enter tags separated by commas</p>
            </div>

            {/* Article Content (Markdown) */}
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                Article Content (Markdown supported)
              </label>
              <textarea 
                id="content"
                rows="16"
                defaultValue={articleData.content}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition resize-y font-mono"
              ></textarea>
              <p className="text-xs text-gray-500 mt-2">Use Markdown formatting: # for headings, ** for bold, * for italic, etc.</p>
            </div>

            {/* Action Buttons (Onderaan) */}
            <div className="flex items-center justify-end gap-3 pt-6 border-t border-gray-100">
              <button 
                type="button" 
                className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-6 py-2.5 rounded-lg text-sm font-medium transition shadow-sm"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="flex items-center gap-2 bg-[#0A0A0A] hover:bg-gray-800 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition shadow-sm"
              >
                <Save className="w-4 h-4" /> Update Article
              </button>
            </div>

          </form>

        </div>
      </main>

    </div>
  );
}