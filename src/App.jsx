import React, { useState } from 'react';
import AdminDashboard from './pages/AdminDashboard';
import NewArticle from './pages/NewArticle';
import SearchResults from './pages/SearchResults';
import ArticleDetail from './pages/ArticleDetail';
import EditArticle from './pages/EditArticle'; // NIEUW IMPORT!

export default function App() {
  const [currentPage, setCurrentPage] = useState('admin');
  const [currentArticleId, setCurrentArticleId] = useState(null);

  const handleReadArticle = (id) => {
    setCurrentArticleId(id);
    setCurrentPage('read');
  };

  // Nieuwe functie: Ga naar bewerken!
  const handleEditArticle = (id) => {
    setCurrentArticleId(id);
    setCurrentPage('edit');
  };

  const renderPage = () => {
    switch (currentPage) {
      // We geven de Edit-functie nu door aan het Dashboard
      case 'admin': 
        return <AdminDashboard onReadArticle={handleReadArticle} onEditArticle={handleEditArticle} />;
      case 'new': 
        return <NewArticle />;
      case 'search': 
        return <SearchResults onReadArticle={handleReadArticle} />;
      case 'read': 
        return <ArticleDetail articleId={currentArticleId} onBack={() => setCurrentPage('admin')} />;
      // Onze nieuwe Edit pagina!
      case 'edit': 
        return <EditArticle articleId={currentArticleId} onBack={() => setCurrentPage('admin')} />;
      default: 
        return <AdminDashboard onReadArticle={handleReadArticle} onEditArticle={handleEditArticle} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-50">
      {renderPage()}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[#0A0A0A] text-gray-400 px-6 py-3 rounded-full shadow-2xl flex items-center gap-6 text-sm font-medium z-50">
        <span className="text-gray-500 mr-2">Test Menu:</span>
        <button onClick={() => setCurrentPage('admin')} className={`${currentPage === 'admin' ? 'text-blue-400' : 'hover:text-gray-300'} transition`}>Admin</button>
        <button onClick={() => setCurrentPage('new')} className={`${currentPage === 'new' ? 'text-blue-400' : 'hover:text-gray-300'} transition`}>Nieuw</button>
        <button onClick={() => setCurrentPage('search')} className={`${currentPage === 'search' ? 'text-blue-400' : 'hover:text-gray-300'} transition`}>Zoeken</button>
      </div>
    </div>
  );
}