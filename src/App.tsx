import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Brain, Database, FileSpreadsheet, GitBranch, Shield, Book, Info } from 'lucide-react';
import ModuleCard from './components/ModuleCard';
import WhyDataModule from './pages/WhyDataModule';
import DataInActionModule from './pages/DataInActionModule';
import DataTypesModule from './pages/DataTypesModule';
import DataQualityModule from './pages/DataQualityModule';
import DataGovernanceModule from './pages/DataGovernanceModule';
import { ThemeToggle } from './components/ThemeToggle';
import { ParticleBackground } from './components/ParticleBackground';
import Glossary from './pages/Glossary';
import AdvancedConceptsModule from './pages/AdvancedConceptsModule';
import About from './pages/About';
import { ScrollingFooter } from './components/ScrollingFooter';

const modules = [
  {
    id: 1,
    title: 'Why Data? The Big Picture',
    description: 'Introduction to the Data-Driven World and the DIKW Pyramid',
    icon: Database,
    unlocked: true,
  },
  {
    id: 2,
    title: 'Data in Action: Business Lifecycles',
    description: 'Explore key business processes like Lead-to-Cash, Source-to-Pay, Inventory Management, and HR Lifecycles',
    icon: GitBranch,
    unlocked: true,
  },
  {
    id: 3,
    title: 'Understanding Your Ingredients',
    description: 'Types of Data: Structured, Unstructured, and Semi-structured',
    icon: FileSpreadsheet,
    unlocked: true,
  },
  {
    id: 4,
    title: 'Is Your Data Fit for Use?',
    description: 'Data Quality Dimensions and Their Impact',
    icon: BookOpen,
    unlocked: true,
  },
  {
    id: 5,
    title: 'Keeping Data Healthy',
    description: 'Data Governance Basics and Best Practices',
    icon: Shield,
    unlocked: true,
  },
  {
    id: 6,
    title: 'Advanced Concepts',
    description: 'Data Privacy, Ethics, and Visualization',
    icon: Brain,
    unlocked: true,
  },
];

function App() {
  const [currentModule, setCurrentModule] = React.useState<number | null>(null);
  const [showGlossary, setShowGlossary] = React.useState(false);
  const [showAbout, setShowAbout] = React.useState(false);

  if (currentModule === 1) {
    return <WhyDataModule onBack={() => setCurrentModule(null)} />;
  }
  
  if (currentModule === 2) {
    return <DataInActionModule onBack={() => setCurrentModule(null)} />;
  }
  
  if (currentModule === 3) {
    return <DataTypesModule onBack={() => setCurrentModule(null)} />;
  }
  
  if (currentModule === 4) {
    return <DataQualityModule onBack={() => setCurrentModule(null)} />;
  }
  
  if (currentModule === 5) {
    return <DataGovernanceModule onBack={() => setCurrentModule(null)} />;
  }
  
  if (currentModule === 6) {
    return <AdvancedConceptsModule onBack={() => setCurrentModule(null)} />;
  }
  
  if (showGlossary) {
    return <Glossary onBack={() => setShowGlossary(false)} />;
  }
  
  if (showAbout) {
    return <About onBack={() => setShowAbout(false)} />;
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#2B3A67]/50 to-[#1a2544]/50 overflow-x-hidden">
      <Helmet>
        <title>DataSpark - Interactive Data Learning Platform</title>
        <meta name="description" content="Master data concepts through interactive learning modules. From fundamentals to advanced topics in data quality, governance, and analytics." />
        <meta name="keywords" content="data learning, DIKW pyramid, data governance, data quality, business processes, data analytics" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DataSpark - Interactive Data Learning Platform" />
        <meta property="og:description" content="Master data concepts through interactive learning modules. From fundamentals to advanced topics in data quality, governance, and analytics." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&h=630&fit=crop" />
        <meta property="og:url" content="https://data.aboveppt.com" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DataSpark - Interactive Data Learning Platform" />
        <meta name="twitter:description" content="Master data concepts through interactive learning modules. From fundamentals to advanced topics in data quality, governance, and analytics." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&h=630&fit=crop" />
      </Helmet>
      <ParticleBackground />
      <header className="relative z-10 bg-white/5 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setCurrentModule(null)}
              className="text-2xl font-bold text-white flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Database className="w-8 h-8" />
              DataSpark
            </button>
            <nav className="flex items-center gap-4">
              <button
                onClick={() => setShowGlossary(true)}
                className="text-white/70 hover:text-white transition-colors flex items-center gap-2"
              >
                <Book className="w-5 h-5" />
                Glossary
              </button>
              <button
                onClick={() => setShowAbout(true)}
                className="text-white/70 hover:text-white transition-colors flex items-center gap-2"
              >
                <Info className="w-5 h-5" />
                About
              </button>
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <ModuleCard
              key={module.id}
              {...module}
              onClick={() => module.unlocked && setCurrentModule(module.id)}
            />
          ))}
        </div>
      </main>
      <ScrollingFooter className="relative z-10" />
    </div>
  );
}

export default App;