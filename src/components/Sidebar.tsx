import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Briefcase,
  Search,
  UserCircle,
  MessageSquare,
  Wallet,
  Settings,
  HelpCircle,
  X,
  Crown
} from 'lucide-react';
import { useSidebarStore } from '../store/sidebarStore';
import { useAuthStore } from '../store/authStore';

const menuItems = [
  { path: '/dashboard', icon: LayoutDashboard, label: 'ダッシュボード', requiresAuth: true },
  { path: '/campaign-management', icon: Briefcase, label: '案件管理', requiresAuth: true },
  { path: '/campaigns', icon: Search, label: '案件を探す', requiresAuth: false },
  { path: '/profile', icon: UserCircle, label: 'プロフィール', requiresAuth: true },
  { path: '/messages', icon: MessageSquare, label: 'メッセージ', requiresAuth: true },
  { path: '/earnings', icon: Wallet, label: '報酬管理', requiresAuth: true },
  { path: '/settings', icon: Settings, label: '設定', requiresAuth: true },
  { path: '/help', icon: HelpCircle, label: 'ヘルプ', requiresAuth: false },
];

const Sidebar = () => {
  const location = useLocation();
  const { isOpen, toggleSidebar } = useSidebarStore();
  const { user, isAuthenticated } = useAuthStore();

  const filteredMenuItems = menuItems.filter(item => 
    !item.requiresAuth || (item.requiresAuth && isAuthenticated)
  );

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white w-64 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:static md:z-0`}
      >
        <div className="p-4 flex justify-between items-center border-b md:hidden">
          <div className="flex items-center space-x-2">
            <Crown className="w-6 h-6 text-purple-600" />
            <span className="font-bold text-purple-600">VIPキャスティング</span>
          </div>
          <button
            onClick={toggleSidebar}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* User Profile Section */}
        <div className="p-4 border-b">
          {isAuthenticated && user ? (
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                <UserCircle className="w-8 h-8 text-purple-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">{user.name}</div>
                <div className="text-sm text-gray-500">{user.email}</div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col space-y-2">
              <Link
                to="/login"
                className="w-full px-4 py-2 text-center bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition"
              >
                ログイン
              </Link>
              <Link
                to="/register"
                className="w-full px-4 py-2 text-center border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition"
              >
                新規登録
              </Link>
            </div>
          )}
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {filteredMenuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                      location.pathname === item.path
                        ? 'bg-purple-50 text-purple-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    onClick={() => {
                      if (window.innerWidth < 768) {
                        toggleSidebar();
                      }
                    }}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;