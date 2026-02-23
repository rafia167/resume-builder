import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const ProfessionalTemplate = ({ data, photo }) => {
  const { personalInfo } = data;
  
  return (
    <div className="bg-white shadow-2xl" style={{ minHeight: '297mm', width: '210mm', overflowX: 'hidden', wordBreak: 'break-word', overflowWrap: 'break-word' }}>
      <div className="flex">
        {/* Left sidebar */}
        <div className="w-1/3 bg-gray-800 text-white p-8">
          {photo && (
            <img src={photo} alt="Profile" className="w-full rounded-lg mb-6 object-cover" />
          )}
          
          {/* Contact */}
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-3 pb-2 border-b border-gray-600">CONTACT</h2>
            <div className="space-y-2 text-sm">
              {personalInfo.email && (
                <div className="flex items-start gap-2">
                  <Mail size={16} className="mt-1 flex-shrink-0" />
                  <span className="break-all">{personalInfo.email}</span>
                </div>
              )}
              {personalInfo.phone && (
                <div className="flex items-center gap-2">
                  <Phone size={16} className="flex-shrink-0" />
                  <span>{personalInfo.phone}</span>
                </div>
              )}
              {personalInfo.location && (
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
              )}
              {personalInfo.website && (
                <div className="flex items-start gap-2">
                  <Globe size={16} className="mt-1 flex-shrink-0" />
                  <span className="break-all">{personalInfo.website}</span>
                </div>
              )}
            </div>
          </div>

          {/* Skills */}
          {data.skills.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-3 pb-2 border-b border-gray-600">SKILLS</h2>
              <div className="space-y-2">
                {data.skills.map((skill, index) => (
                  <div key={index} className="text-sm">• {skill.name}</div>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {data.languages.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-3 pb-2 border-b border-gray-600">LANGUAGES</h2>
              <div className="space-y-2">
                {data.languages.map((lang, index) => (
                  <div key={index} className="text-sm">
                    <div className="font-semibold">{lang.name}</div>
                    <div className="text-gray-400 text-xs">{lang.proficiency}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right content */}
        <div className="w-2/3 p-8">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-1">{personalInfo.fullName || 'Your Name'}</h1>
            <p className="text-xl text-gray-600">{personalInfo.jobTitle || 'Your Job Title'}</p>
          </div>

          {/* Summary */}
          {data.summary && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-900 mb-2 uppercase">Profile</h2>
              <p className="text-gray-700 text-sm leading-relaxed">{data.summary}</p>
            </div>
          )}

          {/* Experience */}
          {data.experience.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-900 mb-3 uppercase">Experience</h2>
              {data.experience.map((exp, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-bold text-gray-900">{exp.position}</h3>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>{exp.company}</span>
                    <span>{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <p className="text-gray-700 text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          {data.education.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-900 mb-3 uppercase">Education</h2>
              {data.education.map((edu, index) => (
                <div key={index} className="mb-3">
                  <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{edu.institution}</span>
                    <span>{edu.startDate} - {edu.endDate}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Projects */}
          {data.projects.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-900 mb-3 uppercase">Projects</h2>
              {data.projects.map((project, index) => (
                <div key={index} className="mb-3">
                  <h3 className="font-bold text-gray-900">{project.name}</h3>
                  <p className="text-gray-700 text-sm">{project.description}</p>
                  {project.link && <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-600 text-sm underline">{project.link}</a>}
                </div>
              ))}
            </div>
          )}

          {/* Certifications */}
          {data.certifications.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-900 mb-3 uppercase">Certifications</h2>
              {data.certifications.map((cert, index) => (
                <div key={index} className="mb-2 text-sm">
                  <p className="font-bold text-gray-800 text-lg">{cert.name}</p>
              <p className="text-gray-600 text-sm mt-1">{cert.institution}</p>
              {cert.date && <span className="text-gray-500 text-xs">Issued: {cert.date}</span>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTemplate;
