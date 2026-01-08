
import React from 'react';
import { Camera, Github, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <img src="https://static.wixstatic.com/media/83f08d_f4c0e552105b4457bcc60c28ca429404~mv2.png/v1/fill/w_84,h_84,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/BEZB%20official%20logo.png" alt="BRINGEZBACK Logo" className="w-full h-full rounded-lg" />
              </div>
              <span className="text-xl font-bold">Mission</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Empowering photographers and creators with next-generation AI tools.
              Built for speed, trained for taste.
            </p>
            <div className="flex items-center gap-4 text-gray-400">
              <a href="https://github.com/0ethel0zhang" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
              <a href="https://www.youtube.com/@bringezback" className="hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
              <a href="https://www.instagram.com/ez_yoga" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h5 className="font-bold mb-6">Tools</h5>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="https://foliorankai.bringezback.com/" className="hover:text-white transition-colors">FolioRankAI</a></li>
              <li><a href="https://folio.bringezback.com" className="hover:text-white transition-colors">Folio Video Extractor</a></li>
              <li><a href="https://headshotify.bringezback.com" className="hover:text-white transition-colors">Headshotify</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6">Company</h5>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="https://bringezback.com" className="hover:text-white transition-colors">About</a></li>
              <li><a href="https://bringezback.com/contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="https://portfolio.bringezback.com/set/6c6be423-733d-47de-92e2-1a6c88e030d8" className="hover:text-white transition-colors">Portfolio</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Bringezback. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 flex items-center gap-1">
            Designed for creative professionals worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
