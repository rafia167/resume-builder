import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Check, ArrowLeft } from 'lucide-react';
import { useResume } from '../context/ResumeContext';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const { t } = useResume();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (login(email, password)) {
      setShowSuccess(true);
      setTimeout(() => {
        navigate('/');
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* Top bar — Back to Home button */}
      <div className="w-full px-6 py-4 bg-white shadow-sm">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-600 hover:text-[#1665CD] transition-colors font-medium"
        >
          <ArrowLeft size={18} />
          Back to Home
        </button>
      </div>

      {/* Login Card */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

          {/* Logo + Title */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FileText className="h-8 w-8 text-[#1665CD]" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">{t.loginTitle || 'Welcome Back'}</h2>
            <p className="text-gray-500 text-sm">{t.loginSubtitle || 'Login to continue'}</p>
          </div>

          {showSuccess ? (
            <div className="text-center py-6">
              <Check className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-600">{t.loginSuccess || 'Login Successful!'}</h3>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-5">

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t.email || 'Email'}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-200 bg-gray-50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900"
                  placeholder="your@email.com"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t.password || 'Password'}
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-200 bg-gray-50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900"
                  placeholder="••••••••"
                />
              </div>

              {/* Remember Me + Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-600">{t.rememberMe || 'Remember me'}</span>
                </label>
                <a href="#" className="text-sm text-[#1665CD] hover:underline">
                  {t.forgotPassword || 'Forgot Password?'}
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full py-3 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
                style={{ backgroundColor: '#1665CD' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1254b0'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1665CD'}
              >
                {t.loginButton || 'Login'}
              </button>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;