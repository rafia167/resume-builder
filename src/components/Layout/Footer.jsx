import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';

const Footer = () => {
  const { t } = useResume();
  const navigate = useNavigate();

  return (
    <footer style={{ backgroundColor: '#1665CD' }} className="text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">

          {/* Column 1: About */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
              Resume Builder Pro
            </h3>
            <p className="text-blue-100 text-xs sm:text-sm md:text-base leading-relaxed">
              {t.footerDescription || 'Create professional resumes in minutes with our easy-to-use resume builder.'}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
              {t.quickLinks || 'Quick Links'}
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <button
                  onClick={() => navigate('/')}
                  className="text-blue-100 hover:text-white transition-colors text-xs sm:text-sm md:text-base hover:underline focus:outline-none"
                >
                  {t.home || 'Home'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/templates')}
                  className="text-blue-100 hover:text-white transition-colors text-xs sm:text-sm md:text-base hover:underline focus:outline-none"
                >
                  {t.templates || 'Templates'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/preview')}
                  className="text-blue-100 hover:text-white transition-colors text-xs sm:text-sm md:text-base hover:underline focus:outline-none"
                >
                  {t.preview || 'Preview'}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
              {t.contact || 'Contact'}
            </h3>
            <ul className="space-y-2 text-blue-100 text-xs sm:text-sm md:text-base">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white flex-shrink-0" />
                <span>contact@resumepro.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white flex-shrink-0" />
                <span>+92 300 1234567</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-white flex-shrink-0" />
                <span>Lahore, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-400 mt-6 sm:mt-7 md:mt-8 pt-6 sm:pt-7 md:pt-8 text-center text-blue-100 text-xs sm:text-sm">
          <p>© {new Date().getFullYear()} Resume Builder Pro. {t.allRightsReserved || 'All rights reserved.'}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
