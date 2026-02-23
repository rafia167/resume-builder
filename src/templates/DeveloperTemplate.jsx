import React from 'react';
import { Code } from 'lucide-react';

const DeveloperTemplate = ({ data, photo }) => {
  const { personalInfo } = data;
  
  return (
    <div className="bg-gray-900 text-gray-100 p-8 shadow-2xl font-mono" style={{ minHeight: '297mm', width: '210mm', overflowX: 'hidden', wordBreak: 'break-word', overflowWrap: 'break-word' }}>
      {/* Terminal-style header */}
      <div className="bg-gray-800 rounded-lg p-6 mb-6 border border-gray-700">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-gray-500 text-sm">resume.dev</span>
        </div>
        
        <div className="flex items-center gap-4">
          {photo && (
            <img src={photo} alt="Profile" className="w-24 h-24 rounded-lg object-cover border-2 border-green-500" />
          )}
          <div>
            <div className="text-green-400 mb-1">$ whoami</div>
            <h1 className="text-3xl font-bold text-white mb-1">{personalInfo.fullName || 'Developer Name'}</h1>
            <p className="text-blue-400 text-lg">{personalInfo.jobTitle || 'Software Developer'}</p>
          </div>
        </div>
        
        <div className="mt-4 space-y-1 text-sm">
          {personalInfo.email && <div><span className="text-gray-500">email:</span> <span className="text-gray-300">{personalInfo.email}</span></div>}
          {personalInfo.phone && <div><span className="text-gray-500">phone:</span> <span className="text-gray-300">{personalInfo.phone}</span></div>}
          {personalInfo.website && <div><span className="text-gray-500">web:</span> <span className="text-blue-400">{personalInfo.website}</span></div>}
          {personalInfo.location && <div><span className="text-gray-500">location:</span> <span className="text-gray-300">{personalInfo.location}</span></div>}
        </div>
      </div>

      {/* Summary */}
      {data.summary && (
        <div className="mb-6">
          <div className="text-green-400 mb-2">{'// About'}</div>
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <p className="text-gray-300">{data.summary}</p>
          </div>
        </div>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <div className="mb-6">
          <div className="text-green-400 mb-2">{'// Technical Skills'}</div>
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, index) => (
                <code key={index} className="px-3 py-1 bg-gray-700 text-yellow-400 rounded border border-gray-600 text-sm">
                  {skill.name}
                </code>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <div className="mb-6">
          <div className="text-green-400 mb-2">{'// Projects'}</div>
          {data.projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-4 border border-gray-700 mb-3">
              <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                <Code size={18} className="text-blue-400" />
                {project.name}
              </h3>
              <p className="text-gray-400 text-sm">{project.description}</p>
              {project.link && <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-600 text-sm underline">{project.link}</a>}
            </div>
          ))}
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-6">
          <div className="text-green-400 mb-2">{'// Work Experience'}</div>
          {data.experience.map((exp, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-4 border border-gray-700 mb-3">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-white font-bold">{exp.position}</h3>
                  <p className="text-blue-400">{exp.company}</p>
                </div>
                <span className="text-gray-500 text-sm">{exp.startDate} - {exp.endDate}</span>
              </div>
              <p className="text-gray-400 text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className="mb-6">
          <div className="text-green-400 mb-2">{'// Education'}</div>
          {data.education.map((edu, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-4 border border-gray-700 mb-2">
              <h3 className="text-white font-bold">{edu.degree}</h3>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">{edu.institution}</span>
                <span className="text-gray-500">{edu.startDate} - {edu.endDate}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Certifications */}
      {data.certifications.length > 0 && (
        <div className="mb-6">
          <div className="text-green-400 mb-2">{'// Certifications'}</div>
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            {data.certifications.map((cert, index) => (
              <div key={index} className="mb-2 text-sm">
                <p className="font-bold text-gray-800 text-lg">{cert.name}</p>
              <p className="text-gray-600 text-sm mt-1">{cert.institution}</p>
              {cert.date && <span className="text-gray-500 text-xs">Issued: {cert.date}</span>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Languages */}
      {data.languages.length > 0 && (
        <div className="mb-6">
          <div className="text-green-400 mb-2">{'// Languages'}</div>
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            {data.languages.map((lang, index) => (
              <div key={index} className="mb-1 text-sm">
                <span className="text-gray-300">{lang.name}</span>
                <span className="text-gray-500"> - {lang.proficiency}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DeveloperTemplate;
