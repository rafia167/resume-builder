import React, { createContext, useContext, useState } from 'react'; 
import { translations } from '../utils/translations';

const ResumeContext = createContext();

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (!context) throw new Error('useResume must be within ResumeProvider');
  return context;
};

export const ResumeProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  const [photo, setPhoto] = useState(null);

  const [resumeData, setResumeData] = useState({
    personalInfo: {
      fullName: '',
      jobTitle: '',
      email: '',
      phone: '',
      location: '',
      website: '',
    },
    summary: '',
    education: [],
    experience: [],
    skills: [],
    projects: [],        // ✅ Projects section
    certifications: [],  // ✅ Certifications section
    languages: [],       // ✅ Languages section
  });

  const [sectionsEnabled, setSectionsEnabled] = useState({
    personalInfo: true,
    summary: true,
    education: true,
    experience: true,
    skills: true,
    projects: true,      
    certifications: true,
    languages: true,     
  });

  // Update personal info
  const updatePersonalInfo = (field, value) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value }
    }));
  };

  // Update summary
  const updateSummary = (value) => {
    setResumeData(prev => ({ ...prev, summary: value }));
  };

  // Generic add item to any section
  const addItem = (section) => {
    setResumeData(prev => ({
      ...prev,
      [section]: [...prev[section], {}]
    }));
  };

  // Generic update item in any section
  const updateItem = (section, index, field, value) => {
    setResumeData(prev => ({
      ...prev,
      [section]: prev[section].map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  // Generic remove item from any section
  const removeItem = (section, index) => {
    setResumeData(prev => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index)
    }));
  };

  // Toggle section visibility
  const toggleSection = (section) => {
    setSectionsEnabled(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const t = translations[language];

  return (
    <ResumeContext.Provider value={{
      language,
      setLanguage,
      selectedTemplate,
      setSelectedTemplate,
      photo,
      setPhoto,
      resumeData,
      updatePersonalInfo,
      updateSummary,
      addItem,
      updateItem,
      removeItem,
      sectionsEnabled,
      toggleSection,
      t
    }}>
      {children}
    </ResumeContext.Provider>
  );
};
