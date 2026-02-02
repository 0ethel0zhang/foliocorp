
import React, { useState, useEffect } from 'react';
import {
  Camera,
  Video,
  UserCircle,
  Zap,
  Layers,
  Eye,
  Aperture,
  Monitor,
  Smartphone,
  Globe,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Github
} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FolioRankSpotlight from './components/FolioRankSpotlight';
import ToolCards from './components/ToolCards';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-50 overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />

        <section id="foliorank" className="py-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-pink-900/10 to-transparent pointer-events-none" />
          <FolioRankSpotlight />
        </section>

        <section id="tools" className="py-20 bg-black/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">Additional Precision Utilities</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Complement your workflow with specialized tools designed for high-fidelity extraction and professional cropping.
              </p>
            </div>
            <ToolCards />
          </div>
        </section>

        <div className="container mx-auto px-6 py-20 relative bg-black/50" id="testimonials">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass p-6 rounded-2xl border border-pink-500/20">
              <p className="text-gray-400">
                "Great job! It's such a good idea ... to pick out the best angle, lighting, etc from the bunch." - DL
              </p>
            </div>
            <div className="glass p-6 rounded-2xl border border-pink-500/20">
              <p className="text-gray-400">
                "Makes sense if I have a couple hundreds of pictures and don't want to go through them manually." - EM
              </p>
            </div>
            <div className="glass p-6 rounded-2xl border border-pink-500/20">
              <p className="text-gray-400">
                "I definitely will be using this with my wedding video ... now I have hope thanks to your tool!" - AN
              </p>
            </div>
          </div>
        </div>

        <section className="py-12 border-t border-white/5">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto glass p-12 rounded-3xl border border-pink-500/20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to elevate your vision?</h2>
              <p className="text-xl text-gray-400 mb-10">
                Join our community of creatives using Bringezback tools to reclaim their time and perfect their craft.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://foliorankai.bringezback.com/"
                  className="px-8 py-3 bg-pink-600 hover:bg-pink-700 rounded-full font-semibold transition-all flex items-center justify-center gap-2 group"
                >
                  Start with FolioRankAI
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

      </main >

      <Footer />
    </div >
  );
};

export default App;
