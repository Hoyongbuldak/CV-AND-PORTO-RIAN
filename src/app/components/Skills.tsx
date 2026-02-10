import { skillsData } from '../data/siteData';

const categories = ['Design', 'Research', 'Development'];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{skillsData.heading}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {skillsData.subheading}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category) => (
            <div key={category} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{category}</h3>
              <div className="space-y-6">
                {skillsData.skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700">{skill.name}</span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-black-500 to-gray-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-black-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{skillsData.tools.title}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skillsData.tools.items.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-white text-gray-700 rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}