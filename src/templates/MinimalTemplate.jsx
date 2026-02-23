import React from 'react';

const MinimalTemplate = ({ data, photo }) => {
  const { personalInfo } = data;
  
  return (
    <div className="bg-white p-12 shadow-2xl" style={{ minHeight: '297mm', width: '210mm', overflowX: 'hidden', wordBreak: 'break-word', overflowWrap: 'break-word' }}>
      {/* Simple header */}
      <div className="text-center mb-8 pb-6 border-b border-gray-300">
        {photo && (
          <img src={photo} alt="Profile" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-gray-300" />
        )}
        <h1 className="text-5xl font-light text-gray-900 mb-2">{personalInfo.fullName || 'Your Name'}</h1>
        <p className="text-xl text-gray-600 mb-4">{personalInfo.jobTitle || 'Your Job Title'}</p>
        <div className="flex justify-center gap-4 text-sm text-gray-600">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>•</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>•</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
        </div>
      </div>

      {/* Summary */}
      {data.summary && (
        <div className="mb-8">
          <p className="text-gray-700 leading-relaxed text-center italic">{data.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wider">Experience</h2>
          {data.experience.map((exp, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-1">
                <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                <span className="text-gray-600 text-sm">{exp.startDate} - {exp.endDate}</span>
              </div>
              <p className="text-gray-700 mb-2">{exp.company}</p>
              <p className="text-gray-600 text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wider">Education</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1">
                <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                <span className="text-gray-600 text-sm">{edu.startDate} - {edu.endDate}</span>
              </div>
              <p className="text-gray-700">{edu.institution}</p>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wider">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {data.skills.map((skill, index) => (
              <span key={index} className="text-gray-700">
                {skill.name}{index < data.skills.length - 1 && ' •'}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wider">Projects</h2>
          {data.projects.map((project, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold text-gray-900">{project.name}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
              {project.link && <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-600 text-sm underline">{project.link}</a>}
            </div>
          ))}
        </div>
      )}

      {/* Certifications */}
      {data.certifications.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wider">Certifications</h2>
          {data.certifications.map((cert, index) => (
            <div key={index} className="mb-2">
              <p className="font-bold text-gray-800 text-lg">{cert.name}</p>
              <p className="text-gray-600 text-sm mt-1">{cert.institution}</p>
              {cert.date && <span className="text-gray-500 text-xs">Issued: {cert.date}</span>}
            </div>
          ))}
        </div>
      )}

      {/* Languages */}
      {data.languages.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wider">Languages</h2>
          <div className="grid grid-cols-2 gap-2">
            {data.languages.map((lang, index) => (
              <div key={index}>
                <span className="font-semibold text-gray-900">{lang.name}</span>
                <span className="text-gray-600 text-sm ml-2">- {lang.proficiency}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MinimalTemplate;
