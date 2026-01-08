
import React from 'react';
import { Zap, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-yellow-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[100px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-semibold uppercase tracking-wider mb-8">
            <Zap className="w-3 h-3" />
            Next-Gen Photo Intelligence
          </div>

          <h1 className="text-5xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">
            The intelligent assistant for your <span className="gradient-text">creative workflow.</span>
          </h1>

          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Professional-grade photo analysis, video extraction, and portrait alignment.
            Automate the tedious so you can focus on the art.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#foliorank" className="w-full sm:w-auto px-8 py-3 bg-pink-600 hover:bg-pink-300 rounded-full font-semibold transition-all flex items-center justify-center gap-2 group">
              Explore Tools
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://www.bringezback.com/folio" className="w-full sm:w-auto px-8 py-3 glass hover:bg-white/10 rounded-full font-semibold transition-all flex items-center justify-center gap-2">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
