
import React from 'react';
import { Video, UserCircle, Download, Maximize, ArrowUpRight } from 'lucide-react';

const ToolCards: React.FC = () => {
  const tools = [
    {
      title: "Folio",
      url: "https://folio.bringezback.com",
      logo: "https://github.com/0ethel0zhang/headshots/raw/refs/heads/main/headshotify_favicon.ico",
      placeholder: "https://github.com/user-attachments/assets/ea1d4090-f720-4d0c-9fd2-1cdcb2e40053",
      icon: <Video className="w-8 h-8" />,
      tag: "Video Extraction",
      desc: "Effortlessly grab high-quality stills from video files for quick download and review.",
      features: ["Frame-perfect extraction", "High-res downloads", "Rapid batch processing"]
    },
    {
      title: "Headshotify",
      url: "https://headshotify.bringezback.com",
      logo: "https://raw.githubusercontent.com/0ethel0zhang/folio_magic/refs/heads/main/free_pictures/headshotify_logo.png",
      placeholder: "https://media.licdn.com/dms/image/v2/D4E03AQERG_HCwoPwug/profile-displayphoto-scale_400_400/B4EZpqS.wSGoAg-/0/1762719952443?e=1769644800&v=beta&t=lNu_8wwbNmpez657rwwxb_eNJdgmtI2hFB3E800pbyc",
      icon: <UserCircle className="w-8 h-8" />,
      tag: "Portrait Formatting",
      desc: "Auto-align faces and crop into squared formats with professional precision.",
      features: ["3 Preset square sizes", "Passport compliance check", "Face-centered auto-crop"]
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {tools.map((tool, i) => (
        <div key={i} className="glass rounded-3xl overflow-hidden group border border-white/5 hover:border-yellow-500/30 transition-all duration-500 flex flex-col">
          <div className="relative h-64 overflow-hidden">
            <img
              src={tool.placeholder}
              alt={tool.title}
              className="w-full h-45 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-6 left-6 flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                {tool.icon}
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">{tool.tag}</span>
                <h4 className="text-2xl font-bold">{tool.title}</h4>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-6 flex-grow flex flex-col">
            <p className="text-gray-400 leading-relaxed">
              {tool.desc}
            </p>

            <ul className="space-y-3 flex-grow">
              {tool.features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                  {feat}
                </li>
              ))}
            </ul>

            <a
              href={tool.url}
              className="w-full py-3 bg-white/5 group-hover:bg-yellow-500 text-white group-hover:text-black font-bold rounded-xl transition-all flex items-center justify-center gap-2"
            >
              Open {tool.title}
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToolCards;
