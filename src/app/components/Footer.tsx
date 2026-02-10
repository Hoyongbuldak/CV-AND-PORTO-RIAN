import { Mail, Heart } from 'lucide-react';
import { footerData } from '../data/siteData';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">{footerData.name}</h3>
            <p className="text-gray-400 mb-4">
              {footerData.tagline}
            </p>
            <div className="flex gap-4">
              <a href={footerData.social.email} className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 transition-all flex items-center justify-center">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">My Journey</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">Skills</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* What I Do */}
          <div>
            <h3 className="text-xl font-bold mb-4">What I Do</h3>
            <ul className="space-y-2 text-gray-400">
              <li>UI/UX Design in Figma</li>
              <li>Simple Website Development</li>
              <li>Basic Laravel Projects</li>
              <li>MySQL Database Setup</li>
              <li>Learning Every Day!</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            Made with Effort by {footerData.name} © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}