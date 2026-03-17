import React, { useState } from 'react';

// Importeer hier al je gemaakte pagina's
import Home from './pages/Home';
import Login from './pages/Login';
import ArticleDetail from './pages/ArticleDetail';
import AdminDashboard from './pages/AdminDashboard'; 
import CategoryDetail from './pages/CategoryDetail';
import NewArticle from './pages/NewArticle';
import EditArticle from './pages/EditArticle';

function App() {
  // Dit houdt bij op welke pagina we nu zijn (standaard op 'home')
  const [currentPage, setCurrentPage] = useState('home');

  // Deze functie kiest welke pagina er op het scherm getoond moet worden
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'login':
        return <Login />;
      case 'article':
        return <ArticleDetail />;
      case 'admin':
        return <AdminDashboard />;
      case 'category':
        return <CategoryDetail />;
      case 'new':
        return <NewArticle />;
      case 'edit':
        return <EditArticle />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="relative min-h-screen">
      
      {/* Hier wordt de daadwerkelijke pagina ingeladen */}
      {renderPage()}

      {/* --- DEV MENU (Dit is alleen voor jou om makkelijk te testen) --- */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-2xl shadow-2xl flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm font-medium z-50 border border-gray-700 w-max max-w-[95vw]">
        <span className="text-gray-400 mr-2 hidden sm:inline">Test Menu:</span>
        
        <button 
          onClick={() => setCurrentPage('home')}
          className={`${currentPage === 'home' ? 'text-blue-400' : 'hover:text-gray-300'} transition`}
        >
          Home
        </button>

        <button 
          onClick={() => setCurrentPage('category')}
          className={`${currentPage === 'category' ? 'text-blue-400' : 'hover:text-gray-300'} transition`}
        >
          Categorie
        </button>

        <button 
          onClick={() => setCurrentPage('article')}
          className={`${currentPage === 'article' ? 'text-blue-400' : 'hover:text-gray-300'} transition`}
        >
          Artikel
        </button>

        <button 
          onClick={() => setCurrentPage('login')}
          className={`${currentPage === 'login' ? 'text-blue-400' : 'hover:text-gray-300'} transition`}
        >
          Login
        </button>
        
        <button 
          onClick={() => setCurrentPage('admin')}
          className={`${currentPage === 'admin' ? 'text-blue-400' : 'hover:text-gray-300'} transition`}
        >
          Admin
        </button>

        <button 
          onClick={() => setCurrentPage('new')}
          className={`${currentPage === 'new' ? 'text-blue-400' : 'hover:text-gray-300'} transition`}
        >
          Nieuw
        </button>

        <button 
          onClick={() => setCurrentPage('edit')}
          className={`${currentPage === 'edit' ? 'text-blue-400' : 'hover:text-gray-300'} transition`}
        >
          Bewerk
        </button>
      </div>

    </div>
  );
}

export default App;