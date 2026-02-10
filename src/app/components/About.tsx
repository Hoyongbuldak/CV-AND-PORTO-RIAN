import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { aboutData } from '../data/siteData';

export function About() {
  const iconMap = {
    briefcase : Briefcase,
    award: Award,
    graduation: GraduationCap,
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{aboutData.heading}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {aboutData.subheading}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {aboutData.stats.map((stat, index) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap];
            const gradients = [
              'from-gray-50 to-gray-100 bg-gray-600',
              'from-gray-100 to-white bg-gray-600',
              'from-gray-200 to-white-80 bg-gray-600',
            ];
            
            return (
              <div key={index} className={`text-center p-8 rounded-xl bg-gradient-to-br ${gradients[index].split(' ')[0]} ${gradients[index].split(' ')[1]} hover:shadow-lg transition-shadow`}>
                <div className={`w-16 h-16 ${gradients[index].split(' ')[2]} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}