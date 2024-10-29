import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginForm from './components/LoginForm';
import PrivateRoute from './components/PrivateRoute';
import CampaignsPage from './pages/CampaignsPage';
import CampaignDetailPage from './pages/CampaignDetailPage';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/campaigns" element={<CampaignsPage />} />
            <Route path="/campaigns/:id" element={<CampaignDetailPage />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <div className="container mx-auto px-4 py-8">
                    <h1 className="text-2xl font-bold">ダッシュボード</h1>
                  </div>
                </PrivateRoute>
              }
            />
            {/* Add other private routes here */}
            <Route
              path="/messages"
              element={
                <PrivateRoute>
                  <div className="container mx-auto px-4 py-8">
                    <h1 className="text-2xl font-bold">メッセージ</h1>
                  </div>
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;