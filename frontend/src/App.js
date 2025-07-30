import React, { useState, useEffect } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { Toaster } from './components/ui/toaster';

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [activeView, setActiveView] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Mock authentication check
  useEffect(() => {
    const savedAuth = localStorage.getItem('decentralchat_auth');
    if (savedAuth) {
      setIsLoggedIn(true);
      setShowLanding(false);
    }
  }, []);

  const handleGetStarted = () => {
    // Mock login process
    localStorage.setItem('decentralchat_auth', 'true');
    setIsLoggedIn(true);
    setShowLanding(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('decentralchat_auth');
    setIsLoggedIn(false);
    setShowLanding(true);
    setActiveView('dashboard');
  };

  const handleViewChange = (view) => {
    setActiveView(view);
  };

  const renderMainContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />;
      case 'chat':
        return (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4">P2P Chat</h2>
              <p className="text-gray-400">Chat interface coming soon...</p>
            </div>
          </div>
        );
      case 'downloads':
        return (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Downloads</h2>
              <p className="text-gray-400">Torrent management interface coming soon...</p>
            </div>
          </div>
        );
      case 'peers':
        return (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Peers</h2>
              <p className="text-gray-400">Peer management interface coming soon...</p>
            </div>
          </div>
        );
      case 'activity':
        return (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Activity</h2>
              <p className="text-gray-400">Activity logs interface coming soon...</p>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Settings</h2>
              <p className="text-gray-400">Settings interface coming soon...</p>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  if (showLanding || !isLoggedIn) {
    return (
      <>
        <LandingPage onGetStarted={handleGetStarted} />
        <Toaster />
      </>
    );
  }

  return (
    <div className="App h-screen bg-gray-900 flex overflow-hidden">
      <div className="w-64 flex-shrink-0">
        <Sidebar 
          activeView={activeView} 
          onViewChange={handleViewChange}
          onLogout={handleLogout}
        />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-auto p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          {renderMainContent()}
        </main>
      </div>
      <Toaster />
    </div>
  );
}

export default App;