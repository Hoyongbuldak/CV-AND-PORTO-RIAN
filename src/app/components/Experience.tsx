import { Calendar, MapPin } from 'lucide-react';
import { experienceData, educationData } from '../data/siteData';

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">{experienceData.heading}</h2>
            <div className="space-y-8">
              {experienceData.jobs.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-gray-600">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gray-600"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                    <p className="text-gray-600 font-semibold mb-2">{exp.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={16} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        {exp.location}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((desc, idx) => (
                        <li key={idx} className="text-gray-700 flex gap-2">
                          <span className="text-gray-600">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">{educationData.heading}</h2>
            <div className="space-y-8">
              {educationData.items.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-gray-600">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gray-600"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{edu.degree}</h3>
                    <p className="text-gray-600 font-semibold mb-2">{edu.school}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Calendar size={16} />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Learning Resources */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-4">{educationData.learningResources.title}</h3>
                <ul className="space-y-2">
                  {educationData.learningResources.items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}