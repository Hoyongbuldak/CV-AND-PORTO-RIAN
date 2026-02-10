import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { contactData } from '../data/siteData';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
  };

  const iconMap = {
    mail: Mail,
    phone: Phone,
    mapPin: MapPin,
  };

  const iconColors = [
    { bg: 'bg-gray-100', text: 'text-gray-600', hover: 'hover:text-gray-600' },
    { bg: 'bg-gray-100', text: 'text-gray-600', hover: 'hover:text-gray-600' },
    { bg: 'bg-gray-100', text: 'text-gray-600', hover: 'hover:text-gray-600' },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{contactData.heading}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {contactData.subheading}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
            <p className="text-gray-600 mb-8">
              I'm always happy to chat about design projects, especially if you need help with 
              Figma designs or simple websites. I'm still learning, but I'll do my best to help!
            </p>

            <div className="space-y-6">
              {contactData.contactInfo.map((info, index) => {
                const Icon = iconMap[info.icon as keyof typeof iconMap];
                const colors = iconColors[index];
                
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className={colors.text} size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{info.label}</h4>
                      <a href={info.link} className={`text-gray-600 ${colors.hover} transition-colors`}>
                        {info.value}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
              <p className="text-gray-600">
                I usually reply within 1-2 days. Thank you for your patience!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}