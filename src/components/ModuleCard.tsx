import React from 'react';
import { DivideIcon as LucideIcon, Lock } from 'lucide-react';

interface ModuleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  unlocked: boolean;
  onClick?: () => void;
}

function ModuleCard({ title, description, icon: Icon, unlocked, onClick }: ModuleCardProps) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-xl bg-card backdrop-blur-lg border border-card
        transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group
        ${unlocked ? 'cursor-pointer' : 'opacity-75 cursor-not-allowed'}
      `}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6F61]/5 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent dark:from-black/20" />
      
      <div className="relative p-6">
        <div className="flex items-start justify-between">
          <div className="p-3 bg-[#FF6F61]/10 rounded-lg transform group-hover:scale-110 transition-transform">
            <Icon className="w-6 h-6 text-[#FF6F61] group-hover:text-[#FF6F61] transition-colors" />
          </div>
          {!unlocked && (
            <div className="p-2 bg-white/10 rounded-lg">
              <Lock className="w-4 h-4 text-theme-secondary" />
            </div>
          )}
        </div>

        <h3 className="mt-4 text-xl font-semibold text-theme-primary group-hover:text-[#FF6F61] transition-colors">{title}</h3>
        <p className="mt-2 text-theme-secondary group-hover:text-theme-primary transition-colors">{description}</p>

        {unlocked && (
          <button
            className="mt-6 w-full py-2 bg-[#FF6F61]/10 text-[#FF6F61] rounded-lg hover:bg-[#FF6F61] hover:text-white transition-all duration-300 transform group-hover:translate-y-0 translate-y-1 opacity-0 group-hover:opacity-100"
            onClick={onClick}
          >
            Start Learning
          </button>
        )}
      </div>
    </div>
  );
}

export default ModuleCard