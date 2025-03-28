import React, { useState } from 'react';
import { Brain, CircleDot, Database, FileText, Lightbulb } from 'lucide-react';

interface DikwLevel {
  title: string;
  description: string;
  example: string;
  color: string;
  icon: React.ReactNode;
}

const dikwLevels: DikwLevel[] = [
  {
    title: 'Data',
    description: 'Raw facts and numbers without context',
    example: 'Temperature reading: 98.6°F',
    color: 'from-[#ef4444] to-[#dc2626]',
    icon: <Database className="w-6 h-6" />,
  },
  {
    title: 'Information',
    description: 'Data with context and meaning',
    example: 'Patient\'s body temperature is 98.6°F at 9:00 AM',
    color: 'from-[#f59e0b] to-[#d97706]',
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: 'Knowledge',
    description: 'Information put into context through experience',
    example: '98.6°F is a normal body temperature, indicating the patient is healthy',
    color: 'from-[#10b981] to-[#059669]',
    icon: <Brain className="w-6 h-6" />,
  },
  {
    title: 'Wisdom',
    description: 'Applied knowledge that enables better decision-making',
    example: 'Based on normal temperature and other vital signs, no immediate medical intervention needed',
    color: 'from-[#6366f1] to-[#4f46e5]',
    icon: <Lightbulb className="w-6 h-6" />,
  },
];

function DikwPyramid() {
  const [activeLevel, setActiveLevel] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleClick = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveLevel(index);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  return (
    <div className="relative w-full max-w-4xl mx-auto mt-8 px-4 sm:px-6">
      <div className="relative">
        {/* Pyramid Background Shape */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2B3A67]/20 to-transparent transform -skew-y-6 rounded-lg" />
        
        {/* Connecting Lines */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 to-transparent" />
        
        {dikwLevels.map((level, index) => (
          <div
            key={level.title}
            className={`
              relative grid grid-cols-1 sm:grid-cols-[1fr,auto,1fr] items-center gap-2 sm:gap-4 p-4 sm:p-6
              transition-all duration-500 cursor-pointer
              transform hover:scale-102
              ${index === activeLevel
                ? 'z-10 scale-105'
                : 'opacity-80'
              }
            `}
            style={{
              marginTop: index === 0 ? '0' : '-1rem',
              width: `${100 - (index * (window.innerWidth < 640 ? 5 : 15))}%`,
              marginLeft: `${index * (window.innerWidth < 640 ? 2.5 : 7.5)}%`,
            }}
            onClick={() => handleClick(index)}
          >
            {/* Left Content */}
            <div className="text-center sm:text-right sm:pr-4 order-2 sm:order-1">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">{level.title}</h3>
              <p className="text-white/80 text-xs sm:text-sm">{level.description}</p>
            </div>
            
            {/* Center Icon */}
            <div className={`
              order-1 sm:order-2 mx-auto sm:mx-0
              w-12 h-12 rounded-full flex items-center justify-center
              bg-gradient-to-br ${level.color}
              transform transition-all duration-500
              ${index === activeLevel ? 'scale-125 shadow-lg shadow-white/10' : ''}
              `}>
                {index === activeLevel ? level.icon : <CircleDot className="w-6 h-6" />}
            </div>
            
            {/* Right Content */}
            <div className="pl-0 sm:pl-4 order-3">
              <div className={`
                bg-white/5 p-2 sm:p-4 rounded-lg border border-white/10
                transform transition-all duration-500
                ${index === activeLevel ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
              `}>
                <p className="text-white/70 italic text-xs sm:text-sm">{level.example}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute -top-12 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-[#FF6F61]/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-12 left-0 w-32 sm:w-40 h-32 sm:h-40 bg-[#6366f1]/20 rounded-full blur-3xl" />
    </div>
  );
}

export default DikwPyramid