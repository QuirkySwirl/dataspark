import React from 'react';
import { ArrowLeft, Sparkles, Code2, Palette, Rocket, Heart } from 'lucide-react';

function About({ onBack }: { onBack?: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2B3A67] to-[#1a2544]">
      <header className="bg-white/10 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={onBack}
              className="text-white/80 hover:text-white transition-colors hover:scale-105 active:scale-95"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-2xl font-bold text-white">About DataSpark</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-12">
          {/* Hero Section */}
          <section className="prose prose-invert max-w-none">
            <div className="bg-white/5 rounded-xl p-8 backdrop-blur-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#FF6F61]/10 rounded-lg">
                  <Sparkles className="w-8 h-8 text-[#FF6F61]" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white m-0">Because AI needs clean snacks</h2>
                  <p className="text-white/60 m-0">and we're serving the basics with style 🍽️</p>
                </div>
              </div>
              <p className="text-white/80 text-lg leading-relaxed">
                DataSpark is a vibe-coded learning experience that transforms dry data concepts into digestible, engaging content. 
                In a world where data literacy is no longer optional, we're making the journey from data novice to data-fluent 
                professional not just educational, but enjoyable.
              </p>
            </div>
          </section>

          {/* Why DataSpark */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Code2 className="w-6 h-6 text-[#FF6F61]" />
                Built Different
              </h3>
              <ul className="space-y-3">
                <li className="text-white/70 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF6F61]/50" />
                  Interactive DIKW Pyramid visualization
                </li>
                <li className="text-white/70 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF6F61]/50" />
                  Business Process Flows
                </li>
                <li className="text-white/70 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF6F61]/50" />
                  Quality Dimensions explorer
                </li>
                <li className="text-white/70 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF6F61]/50" />
                  Governance Framework guide
                </li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Palette className="w-6 h-6 text-[#FF6F61]" />
                The Vibe
              </h3>
              <ul className="space-y-3">
                <li className="text-white/70 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF6F61]/50" />
                  Learning through exploration
                </li>
                <li className="text-white/70 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF6F61]/50" />
                  Real-world examples
                </li>
                <li className="text-white/70 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF6F61]/50" />
                  Inspiring design
                </li>
                <li className="text-white/70 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF6F61]/50" />
                  Practical application focus
                </li>
              </ul>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Rocket className="w-6 h-6 text-[#FF6F61]" />
              Built With Modern Tech
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white/5 rounded-lg p-4 text-center">
                <div className="text-[#FF6F61] font-semibold">React 18</div>
                <div className="text-white/60 text-sm">Smooth interactions</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 text-center">
                <div className="text-[#FF6F61] font-semibold">TypeScript</div>
                <div className="text-white/60 text-sm">Type safety</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 text-center">
                <div className="text-[#FF6F61] font-semibold">Tailwind CSS</div>
                <div className="text-white/60 text-sm">Beautiful design</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 text-center">
                <div className="text-[#FF6F61] font-semibold">Vite</div>
                <div className="text-white/60 text-sm">Lightning fast</div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <section className="text-center">
            <div className="inline-flex items-center gap-2 text-white/60">
              <Heart className="w-4 h-4 text-[#FF6F61]" />
              Made with love for the data-curious
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default About;