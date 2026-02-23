import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TemplatesPage from './pages/TemplatesPage';
import PreviewPage from './pages/PreviewPage';
import LoginPage from './pages/LoginPage';

function App() {
  // Direct to home - NO auto-redirect to login
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/templates" element={<TemplatesPage />} />
      <Route path="/preview" element={<PreviewPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
