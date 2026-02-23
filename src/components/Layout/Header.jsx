import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FileText, Menu, X, LogIn, LogOut, Home as HomeIcon, Layout as LayoutIcon, Eye as PreviewIcon } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { t, language, setLanguage } = useResume();
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: t.home, icon: HomeIcon },
    { path: '/templates', label: t.templates, icon: LayoutIcon },
    { path: '/preview', label: t.preview, icon: PreviewIcon },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (<header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
    
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Main Header Bar - Responsive height */}
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-18 lg:h-20">
          
          {/* Logo - Responsive sizing */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <FileText className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-[#1665CD]" />
            <span className="ml-2 text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900">
              Resume Pro
            </span>
          </div>

          {/* Desktop Navigation - Hidden on mobile/tablet */}
          <nav className="hidden lg:flex space-x-2 xl:space-x-4">
            {navItems.map(item => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex items-center gap-1.5 xl:gap-2 px-3 xl:px-4 py-2 xl:py-2.5 
                          rounded-md text-sm xl:text-base font-medium transition-all duration-300
                          ${location.pathname === item.path 
                            ? 'bg-[#1665CD] text-white shadow-lg' 
                            : 'text-gray-600 hover:bg-blue-50 hover:text-[#1665CD]'}`}
              >
                <item.icon size={18} className="xl:w-5 xl:h-5" />
                <span className="hidden xl:inline">{item.label}</span>
                <span className="xl:hidden">{item.label.substring(0, 1)}</span>
              </button>
            ))}
          </nav>

          {/* Desktop Actions - Hidden on mobile/tablet */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            {/* Language Selector */}
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="px-2 xl:px-3 py-1.5 xl:py-2 border border-gray-300 rounded-md 
                        bg-white text-gray-700 text-xs xl:text-sm 
                        focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="en">EN</option>
              <option value="ur">UR</option>
            </select>

            {/* Auth Button */}
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 xl:gap-2 px-3 xl:px-4 py-1.5 xl:py-2 
                          bg-red-600 text-white rounded-md hover:bg-red-700 
                          transition-colors text-sm xl:text-base shadow-md"
              >
                <LogOut size={16} className="xl:w-5 xl:h-5" />
                <span className="hidden xl:inline">{t.logout}</span>
              </button>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className="flex items-center gap-1.5 xl:gap-2 px-3 xl:px-4 py-1.5 xl:py-2 
                          bg-[#1665CD] text-white rounded-md hover:bg-blue-700 
                          transition-colors text-sm xl:text-base shadow-md"
              >
                <LogIn size={16} className="xl:w-5 xl:h-5" />
                <span className="hidden xl:inline">{t.login}</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Toggle - Visible on mobile/tablet */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
          >
            {mobileMenuOpen ? <X size={22} className="sm:w-6 sm:h-6" /> : <Menu size={22} className="sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-xl">
          <div className="px-2 sm:px-3 pt-2 pb-3 space-y-1">
            {/* Navigation Links */}
            {navItems.map(item => (
              <button
                key={item.path}
                onClick={() => {
                  navigate(item.path);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 
                          rounded-md text-sm sm:text-base font-medium transition-all
                          ${location.pathname === item.path
                            ? 'bg-[#1665CD] text-white shadow-md'
                            : 'text-gray-600 hover:bg-blue-50 hover:text-[#1665CD]'}`}
              >
                <item.icon size={18} className="sm:w-5 sm:h-5" />
                {item.label}
              </button>
            ))}

            {/* Divider */}
            <div className="pt-3 sm:pt-4 pb-2 border-t border-gray-200 space-y-2 sm:space-y-3">
              {/* Language Selector */}
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 
                          rounded-md bg-white text-gray-700 text-sm sm:text-base 
                          focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="en">English</option>
                <option value="ur">اردو</option>
              </select>

              {/* Auth Button - ADDED FOR MOBILE */}
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 
                            bg-red-600 text-white rounded-md hover:bg-red-700 
                            transition-colors text-sm sm:text-base font-medium shadow-md"
                >
                  <LogOut size={18} className="sm:w-5 sm:h-5" />
                  {t.logout}
                </button>
              ) : (
                <button
                  onClick={() => {
                    navigate('/login');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 
                            bg-[#1665CD] text-white rounded-md hover:bg-blue-700 
                            transition-colors text-sm sm:text-base font-medium shadow-md"
                >
                  <LogIn size={18} className="sm:w-5 sm:h-5" />
                  {t.login}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
