
import React, { useState, useEffect } from 'react';
import { Camera } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass border-b border-white/10' : 'py-6 bg-transparent'
      }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-pink-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
            <img src="https://static.wixstatic.com/media/83f08d_f4c0e552105b4457bcc60c28ca429404~mv2.png/v1/fill/w_84,h_84,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/BEZB%20official%20logo.png" alt="BRINGEZBACK Logo" className="w-full h-full rounded-lg" />
          </div>
          <span className="text-xl font-bold tracking-tight">Portfolio</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#foliorank" className="hover:text-white transition-colors">FolioRankAI</a>
          <a href="#tools" className="hover:text-white transition-colors">More Tools</a>
          <a
            href="https://foliorankai.bringezback.com/"
            className="px-5 py-2.5 bg-pink-300 text-black rounded-full hover:bg-gray-200 transition-colors"
          >
            Get Started with FolioRankAI
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
