import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export function ScrollingFooter() {
  return (
    <footer className="bg-card backdrop-blur-lg border-t border-card py-2">
      <div className="animate-scroll-x flex items-center gap-4 text-theme-secondary">
        <div className="flex items-center gap-2 whitespace-nowrap">
          <Sparkles className="w-4 h-4 text-[#FF6F61]" />
          Vibe-coded data guidance ✨ because AI needs clean snacks 🍽️ and we're serving the basics 🎓
          <Sparkles className="w-4 h-4 text-[#FF6F61]" />
        </div>
        {/* Duplicate content for seamless scrolling */}
        <div className="flex items-center gap-2 whitespace-nowrap">
          <Sparkles className="w-4 h-4 text-[#FF6F61]" />
          Vibe-coded data guidance ✨ because AI needs clean snacks 🍽️ and we're serving the basics 🎓
          <Sparkles className="w-4 h-4 text-[#FF6F61]" />
        </div>
      </div>
    </footer>
  );
}