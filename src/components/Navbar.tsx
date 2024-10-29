import React from 'react';
import { Menu, MessageSquare, Bell, Crown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { useSidebarStore } from '../store/sidebarStore';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuthStore();
  const { toggleSidebar } = useSidebarStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            {isAuthenticated && (
              <button
                onClick={toggleSidebar}
                className="text-gray-600 hover:text-purple-600"
              >
                <Menu className="w-6 h-6" />
              </button>
            )}
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-purple-600">
              <Crown className="w-6 h-6" />
              <span>VIPキャスティング</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/campaigns" className="text-gray-600 hover:text-purple-600">
              案件を探す
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-purple-600">
              サービスについて
            </Link>
            {isAuthenticated ? (
              <div className="flex items-center space-x-6">
                <Link to="/messages" className="text-gray-600 hover:text-purple-600">
                  <MessageSquare className="w-6 h-6" />
                </Link>
                <button className="text-gray-600 hover:text-purple-600">
                  <Bell className="w-6 h-6" />
                </button>
                <button
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-purple-600"
                >
                  ログアウト
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-500 transition"
              >
                ログイン
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-purple-600">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;