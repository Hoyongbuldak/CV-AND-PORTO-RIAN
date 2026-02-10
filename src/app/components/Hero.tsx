import { Mail, Download } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { heroData } from '../data/siteData';

export function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-black-600 font-bold">{heroData.greeting}</p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                {heroData.name}
              </h1>
              <p className="text-2xl text-gray-600">{heroData.jobTitle}</p>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              {heroData.description}
            </p>

            <div className="flex flex-wrap gap-4">

              <button className="px-6 py-3 border-2 border-gray-600 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors">
                {heroData.buttons.viewWork}
              </button>
            </div>

            <div className="flex gap-4 pt-4">
              <a href={heroData.social.email} className="w-10 h-10 rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full blur-3xl opacity-30"></div>
              <ImageWithFallback
                src={heroData.profileImage}
                alt="Profile"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}