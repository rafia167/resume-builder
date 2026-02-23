import React from 'react';
import { Plus, Trash2, X } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';

const ResumeForm = () => {
  const { resumeData, updatePersonalInfo, updateSummary, addItem, updateItem, removeItem, t } = useResume();

  return (
    <div className="space-y-6">
      {/* Personal Info */}
      <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-5 md:p-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">{t.personalInfo}</h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder={t.fullName}
            value={resumeData.personalInfo.fullName}
            onChange={(e) => updatePersonalInfo('fullName', e.target.value)}
            className="input-field text-sm sm:text-base"
          />
          <input
            type="text"
            placeholder={t.jobTitle}
            value={resumeData.personalInfo.jobTitle}
            onChange={(e) => updatePersonalInfo('jobTitle', e.target.value)}
            className="input-field text-sm sm:text-base"
          />
          <input
            type="email"
            placeholder={t.email}
            value={resumeData.personalInfo.email}
            onChange={(e) => updatePersonalInfo('email', e.target.value)}
            className="input-field text-sm sm:text-base"
          />
          <input
            type="tel"
            placeholder={t.phone}
            value={resumeData.personalInfo.phone}
            onChange={(e) => updatePersonalInfo('phone', e.target.value)}
            className="input-field text-sm sm:text-base"
          />
          <input
            type="text"
            placeholder={t.location}
            value={resumeData.personalInfo.location}
            onChange={(e) => updatePersonalInfo('location', e.target.value)}
            className="input-field text-sm sm:text-base"
          />
          <input
            type="url"
            placeholder={t.website}
            value={resumeData.personalInfo.website}
            onChange={(e) => updatePersonalInfo('website', e.target.value)}
            className="input-field text-sm sm:text-base"
          />
        </div>
      </div>

      {/* Summary */}
      <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-5 md:p-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">{t.summary}</h3>
        <textarea
          placeholder={t.summaryPlaceholder}
          value={resumeData.summary}
          onChange={(e) => updateSummary(e.target.value)}
          rows={4}
          className="input-field text-sm sm:text-base"
        />
      </div>

      {/* Education */}
      <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-5 md:p-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">{t.education}</h3>
        {resumeData.education.map((edu, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg bg-gray-50 space-y-3 mb-3">
            <input
              type="text"
              placeholder={t.degree}
              value={edu.degree || ''}
              onChange={(e) => updateItem('education', index, 'degree', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder={t.institution}
              value={edu.institution || ''}
              onChange={(e) => updateItem('education', index, 'institution', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              <input
                type="text"
                placeholder={t.startDate}
                value={edu.startDate || ''}
                onChange={(e) => updateItem('education', index, 'startDate', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg"
              />
              <input
                type="text"
                placeholder={t.endDate}
                value={edu.endDate || ''}
                onChange={(e) => updateItem('education', index, 'endDate', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <button
              onClick={() => removeItem('education', index)}
              className="text-red-600 hover:text-red-800"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
        <button
          onClick={() => addItem('education')}
          className="w-full px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
        >
          <Plus size={18} />
          {t.addEducation}
        </button>
      </div>

      {/* Experience */}
      <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-5 md:p-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">{t.experience}</h3>
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg bg-gray-50 space-y-3 mb-3">
            <input
              type="text"
              placeholder={t.position}
              value={exp.position || ''}
              onChange={(e) => updateItem('experience', index, 'position', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder={t.company}
              value={exp.company || ''}
              onChange={(e) => updateItem('experience', index, 'company', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              <input
                type="text"
                placeholder={t.startDate}
                value={exp.startDate || ''}
                onChange={(e) => updateItem('experience', index, 'startDate', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg"
              />
              <input
                type="text"
                placeholder={t.endDate}
                value={exp.endDate || ''}
                onChange={(e) => updateItem('experience', index, 'endDate', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <textarea
              placeholder={t.description}
              value={exp.description || ''}
              onChange={(e) => updateItem('experience', index, 'description', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
            <button
              onClick={() => removeItem('experience', index)}
              className="text-red-600 hover:text-red-800"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
        <button
          onClick={() => addItem('experience')}
          className="w-full px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
        >
          <Plus size={18} />
          {t.addExperience}
        </button>
      </div>

      {/* Skills */}
      <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-5 md:p-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">{t.skills}</h3>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 mb-3">
          {resumeData.skills.map((skill, index) => (
            <div key={index} className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 text-xs sm:text-sm bg-blue-100 text-blue-800 rounded-full">
              <input
                type="text"
                placeholder={t.skillName}
                value={skill.name || ''}
                onChange={(e) => updateItem('skills', index, 'name', e.target.value)}
                className="bg-transparent border-none outline-none w-24"
              />
              <button onClick={() => removeItem('skills', index)} className="text-red-600">
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={() => addItem('skills')}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
        >
          <Plus size={18} />
          {t.addSkill}
        </button>
      </div>

      {/* Projects */}
<div className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-5 md:p-6">
  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">{t.projects}</h3>
  {resumeData.projects.map((project, index) => (
    <div key={index} className="p-4 border border-gray-200 rounded-lg bg-gray-50 space-y-3 mb-3">
      <input
        type="text"
        placeholder={t.projectName}
        value={project.name || ''}
        onChange={(e) => updateItem('projects', index, 'name', e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
      />
      <input
        type="text"
        placeholder={t.projectLink}
        value={project.link || ''}
        onChange={(e) => updateItem('projects', index, 'link', e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
      />
      <textarea
        placeholder={t.projectDescription}
        value={project.description || ''}
        onChange={(e) => updateItem('projects', index, 'description', e.target.value)}
        rows={3}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
      />
      <button
        onClick={() => removeItem('projects', index)}
        className="text-red-600 hover:text-red-800"
      >
        <Trash2 size={18} />
      </button>
    </div>
  ))}
  <button
    onClick={() => addItem('projects')}
    className="w-full px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
  >
    <Plus size={18} /> {t.addProject}
  </button>
</div>

{/* Languages */}
<div className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-5 md:p-6">
  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">{t.languages}</h3>
  {resumeData.languages.map((lang, index) => (
    <div key={index} className="flex items-center gap-3 mb-3">
      <input
        type="text"
        placeholder={t.languageName}
        value={lang.name || ''}
        onChange={(e) => updateItem('languages', index, 'name', e.target.value)}
        className="px-3 py-2 border border-gray-300 rounded-lg flex-1"
      />
      <input
        type="text"
        placeholder={t.proficiency}
        value={lang.proficiency || ''}
        onChange={(e) => updateItem('languages', index, 'proficiency', e.target.value)}
        className="px-3 py-2 border border-gray-300 rounded-lg flex-1"
      />
      <button onClick={() => removeItem('languages', index)} className="text-red-600">
        <X size={14} />
      </button>
    </div>
  ))}
  <button
    onClick={() => addItem('languages')}
    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
  >
    <Plus size={18} /> {t.addLanguage}
  </button>
</div>

{/* Certifications */}
<div className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-5 md:p-6">
  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">{t.certifications}</h3>
  {resumeData.certifications.map((cert, index) => (
    <div key={index} className="p-4 border border-gray-200 rounded-lg bg-gray-50 space-y-3 mb-3">
      <input
        type="text"
        placeholder={t.certName}
        value={cert.name || ''}
        onChange={(e) => updateItem('certifications', index, 'name', e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
      />
      <input
        type="text"
        placeholder={t.certInstitution}
        value={cert.institution || ''}
        onChange={(e) => updateItem('certifications', index, 'institution', e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
      />
      <input
        type="text"
        placeholder={t.certDate}
        value={cert.date || ''}
        onChange={(e) => updateItem('certifications', index, 'date', e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
      />
      <button
        onClick={() => removeItem('certifications', index)}
        className="text-red-600 hover:text-red-800"
      >
        <Trash2 size={18} />
      </button>
    </div>
  ))}
  <button
    onClick={() => addItem('certifications')}
    className="w-full px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
  >
    <Plus size={18} /> {t.addCertification}
  </button>
</div>

    </div>
  );
};

export default ResumeForm;
