import React from 'react';
import { ArrowLeft, Database, LineChart } from 'lucide-react';
import DikwPyramid from '../components/DikwPyramid';

interface WhyDataModuleProps {
  onBack?: () => void;
}

function WhyDataModule({ onBack }: WhyDataModuleProps) {
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
            <h1 className="text-2xl font-bold text-white">Why Data? The Big Picture</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-12">
          {/* Introduction Section */}
          <section className="prose prose-invert max-w-none">
            <div className="bg-white/5 rounded-xl p-8 backdrop-blur-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#FF6F61]/10 rounded-lg">
                  <Database className="w-8 h-8 text-[#FF6F61]" />
                </div>
                <h2 className="text-3xl font-bold text-white m-0">Welcome to the Data-Driven World</h2>
              </div>
              <p className="text-white/80 text-lg leading-relaxed">
                In today's digital age, data is everywhere. Every click, purchase, and interaction creates data points that can help us make better decisions. But how do we transform raw data into meaningful insights?
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-6">
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-3">Why It Matters</h3>
                  <ul className="space-y-3 text-white/70">
                    <li className="flex items-center gap-2">
                      <LineChart className="w-5 h-5 text-[#FF6F61]" />
                      Better decision making
                    </li>
                    <li className="flex items-center gap-2">
                      <LineChart className="w-5 h-5 text-[#FF6F61]" />
                      Improved efficiency
                    </li>
                    <li className="flex items-center gap-2">
                      <LineChart className="w-5 h-5 text-[#FF6F61]" />
                      Competitive advantage
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-3">What You'll Learn</h3>
                  <ul className="space-y-3 text-white/70">
                    <li className="flex items-center gap-2">
                      <LineChart className="w-5 h-5 text-[#FF6F61]" />
                      DIKW Pyramid
                    </li>
                    <li className="flex items-center gap-2">
                      <LineChart className="w-5 h-5 text-[#FF6F61]" />
                      Data-driven thinking
                    </li>
                    <li className="flex items-center gap-2">
                      <LineChart className="w-5 h-5 text-[#FF6F61]" />
                      Value of insights
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* DIKW Pyramid Section */}
          <section className="px-4 sm:px-0">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">The DIKW Pyramid</h2>
              <p className="text-white/60 max-w-2xl mx-auto text-lg">
                Click each level to explore how we transform raw data into actionable wisdom.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-[#FF6F61]/5 to-transparent rounded-xl" />
              <div className="relative backdrop-blur-sm rounded-xl p-8">
            <DikwPyramid />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default WhyDataModule;