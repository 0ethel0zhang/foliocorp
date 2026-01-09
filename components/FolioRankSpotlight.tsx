
import React from 'react';
import {
  CheckCircle2,
  Eye,
  Aperture,
  Layers,
  Smartphone,
  Monitor,
  Globe,
  Star,
  ArrowRight
} from 'lucide-react';

const FolioRankSpotlight: React.FC = () => {
  const features = [
    { icon: <Star className="w-5 h-5 text-yellow-400" />, title: "Personalized Taste Profile", desc: "Trains a model on your unique aesthetic to cull photos based on learned taste." },
    { icon: <Aperture className="w-5 h-5 text-pink-400" />, title: "Technical Analysis", desc: "Auto-identifies blur, overexposed, and underexposed shots instantly." },
    { icon: <Eye className="w-5 h-5 text-purple-400" />, title: "Smart Eye Detection", desc: "Detects when subjects have closed eyes or awkward expressions." },
  ];

  const platforms = [
    { icon: <Globe />, name: "Web Version", desc: "Instant access anywhere" },
    { icon: <Monitor />, name: "Desktop Pro", desc: "Enhanced local power" },
    { icon: <Smartphone />, name: "iOS Mobile", desc: "On-the-go analysis" },
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <h2 className="text-pink-400 font-semibold tracking-widest uppercase text-sm">Main Spotlight</h2>
            <div className="flex items-center gap-4">
              <img src="https://raw.githubusercontent.com/0ethel0zhang/folio_magic/refs/heads/main/flying_lens.png" alt="FolioRankAI" className="w-12 h-12 rounded-lg bg-pink-600 p-2 shadow-lg" onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/frlogo/48/48' }} />
              <h3 className="text-4xl md:text-5xl font-bold">FolioRankAI</h3>
            </div>
            <p className="text-xl text-gray-400 leading-relaxed">
              Culling shouldn't be a chore. FolioRankAI uses machine learning to understand your taste and automatically find your best photos.
            </p>
          </div>

          <div className="grid gap-6">
            {features.map((f, i) => (
              <div key={i} className="flex gap-4 group">
                <div className="mt-1 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-pink-600/20 transition-colors">
                  {f.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{f.title}</h4>
                  <p className="text-gray-400">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10">
            <p className="text-lg text-gray-400 leading-relaxed">
              It's not just us saying, it's tested by 3rd party users to perform at industry-leading accuracy (70%+). <a href="https://docs.google.com/presentation/d/185AMobhAN5VM8ekCdShEoB7ORgDGpefdPFRZVgU74UI/edit?slide=id.g3b5d5190cf4_0_1#slide=id.g3b5d5190cf4_0_1" className="text-pink-400 hover:underline">Read the report</a> & <a href="#testimonials" className="text-pink-400 hover:underline">Read the testimonials</a>.
            </p>
          </div>

          <div className="pt-4 border-t border-white/10">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-6">Available Platforms</h4>
            <div className="flex flex-wrap gap-8">
              {platforms.map((p, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="w-8 h-8 flex items-center justify-center text-pink-400">
                    {p.icon}
                  </div>
                  <div className="text-sm">
                    <div className="font-bold text-white">{p.name}</div>
                    <div className="text-xs text-gray-500">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <a
            href="https://foliorankai.bringezback.com/"
            className="inline-flex px-8 py-3 bg-pink-300 text-black font-bold rounded-xl hover:bg-pink-50 transition-all items-center gap-2 mt-4"
          >
            Launch FolioRankAI
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="flex-1 relative justify-center items-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/cx8Jb4n66tQ?si=wZuRthBzz_LaOTDz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          {/* Decorative badges */}
          <div className="absolute -bottom-16 -left-6 glass p-4 rounded-2xl border border-pink-500/30 shadow-xl hidden sm:block  animate-float">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Industry-leading accuracy in taste profiling: Compared to Evoto, Aftershoot, Imagen, and many more.</span>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default FolioRankSpotlight;
