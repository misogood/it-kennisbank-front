import React, { useState, useEffect } from 'react';
import { BookOpen, Search, ChevronRight, Home, Clock, FileText, AlertCircle } from 'lucide-react';

export default function SearchResults({ onReadArticle }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Deze useEffect wordt elke keer uitgevoerd als 'searchQuery' verandert (dus bij elke letter die je typt!)
  useEffect(() => {
    setIsSearching(true);
    
    // We roepen onze nieuwe zoek-route aan op de backend
    fetch(`http://localhost:5000/api/articles/search?q=${searchQuery}`)
      .then(response => response.json())
      .then(data => {
        setSearchResults(data);
        setIsSearching(false);
      })
      .catch(error => {
        console.error("Fout bij zoeken:", error);
        setIsSearching(false);
      });
  }, [searchQuery]); // Hier vertellen we React: let op de zoekterm!

  return (
    <div className="bg-[#FAFAFA] min-h-screen flex flex-col font-sans text-gray-900 pb-20">
      
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2 font-bold text-xl text-gray-900">
          <BookOpen className="text-blue-600 w-6 h-6" /> IT Knowledge Base
        </div>
        
        <div className="hidden md:block w-1/2 relative max-w-lg">
          <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update de zoekterm als je typt
            placeholder="Search articles, tags, or categories..."
            className="w-full bg-gray-100 border border-transparent rounded-lg pl-10 pr-4 py-2 text-sm focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
          />
        </div>

        <div className="w-24"></div> {/* Lege ruimte voor balans */}
      </nav>

      <main className="flex-grow max-w-5xl mx-auto w-full px-6 py-8">
        
        <div className="mb-10 border-b border-gray-200 pb-8 mt-4">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">
            {searchQuery === "" ? "All Articles" : `Search results for "${searchQuery}"`}
          </h1>
          <p className="text-lg text-gray-500">
            Found <span className="font-semibold text-gray-700">{searchResults.length} articles</span>
          </p>
        </div>

        {isSearching ? (
          <div className="text-center py-20 text-gray-500 animate-pulse">Searching knowledge base...</div>
        ) : searchResults.length > 0 ? (
          <div className="space-y-4">
            {searchResults.map((article) => (
              <div 
                key={article.id} 
                onClick={() => onReadArticle(article.id)} // Maak de resultaten klikbaar!
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6 group"
              >
                <div className="flex gap-4 items-start">
                  <div className="mt-1 bg-blue-50 p-2 rounded-lg text-blue-500 hidden sm:block group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-gray-500 mb-3">{article.desc}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-xs">
                      <span className="text-gray-400 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" /> Updated {article.date}
                      </span>
                      <div className="flex gap-1.5">
                        {article.tags && article.tags.map(tag => (
                          <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-blue-500 hidden md:block" />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white border border-gray-200 rounded-2xl border-dashed">
            <AlertCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              We couldn't find any articles matching "{searchQuery}". Try adjusting your keywords or checking your spelling.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}