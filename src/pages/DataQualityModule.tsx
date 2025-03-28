import React, { useState } from 'react';
import { ArrowLeft, BookOpen, CheckCircle2, Clock, FileCheck2, Fingerprint, History, Link2, Ruler, Scale, ShieldCheck, Target } from 'lucide-react';

interface QualityDimension {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  impact: string[];
  metrics: string[];
  example: {
    good: string;
    bad: string;
  };
}

const qualityDimensions: QualityDimension[] = [
  {
    id: 'accuracy',
    title: 'Accuracy',
    description: 'The degree to which data correctly represents the real-world entity or event',
    icon: <Target className="w-8 h-8" />,
    impact: [
      'Customer satisfaction',
      'Decision-making reliability',
      'Operational efficiency',
      'Regulatory compliance'
    ],
    metrics: [
      'Error rate',
      'Deviation from source',
      'Validation success rate',
      'Data correction frequency'
    ],
    example: {
      good: 'Customer phone: +1 (555) 123-4567',
      bad: 'Customer phone: 12345 (invalid format)'
    }
  },
  {
    id: 'completeness',
    title: 'Completeness',
    description: 'The extent to which all required data is present and available',
    icon: <CheckCircle2 className="w-8 h-8" />,
    impact: [
      'Analysis reliability',
      'Process efficiency',
      'Reporting quality',
      'Customer profiling'
    ],
    metrics: [
      'Missing value rate',
      'Required field completion',
      'Record completeness ratio',
      'Data coverage percentage'
    ],
    example: {
      good: 'Contact: {name, email, phone, address}',
      bad: 'Contact: {name, ???, ???, address}'
    }
  },
  {
    id: 'consistency',
    title: 'Consistency',
    description: 'The degree to which data is uniform across systems and processes',
    icon: <Link2 className="w-8 h-8" />,
    impact: [
      'System integration',
      'Data reconciliation',
      'Reporting accuracy',
      'User trust'
    ],
    metrics: [
      'Cross-system match rate',
      'Format consistency',
      'Value standardization',
      'Duplicate detection rate'
    ],
    example: {
      good: 'Status: ["Active", "Inactive", "Pending"]',
      bad: 'Status: ["Active", "INACTIVE", "Waiting", "1"]'
    }
  },
  {
    id: 'timeliness',
    title: 'Timeliness',
    description: 'How current and available the data is relative to its intended use',
    icon: <Clock className="w-8 h-8" />,
    impact: [
      'Real-time decisions',
      'Market responsiveness',
      'Customer service',
      'Operational agility'
    ],
    metrics: [
      'Update frequency',
      'Processing time',
      'Data lag time',
      'Real-time availability'
    ],
    example: {
      good: 'Stock level updated: 2 minutes ago',
      bad: 'Stock level updated: 3 days ago'
    }
  },
  {
    id: 'validity',
    title: 'Validity',
    description: 'The degree to which data conforms to defined business rules and formats',
    icon: <FileCheck2 className="w-8 h-8" />,
    impact: [
      'Process automation',
      'System reliability',
      'Data integration',
      'Compliance assurance'
    ],
    metrics: [
      'Format compliance rate',
      'Business rule conformity',
      'Validation success rate',
      'Schema compliance'
    ],
    example: {
      good: 'Email: user@domain.com',
      bad: 'Email: not.an.email.address'
    }
  },
  {
    id: 'uniqueness',
    title: 'Uniqueness',
    description: 'The absence of duplicate or redundant data across systems',
    icon: <Fingerprint className="w-8 h-8" />,
    impact: [
      'Storage efficiency',
      'Processing accuracy',
      'Customer experience',
      'Reporting clarity'
    ],
    metrics: [
      'Duplicate record rate',
      'Unique key violations',
      'Merge success rate',
      'Record uniqueness score'
    ],
    example: {
      good: 'One unique customer record',
      bad: 'Multiple duplicate customer entries'
    }
  },
  {
    id: 'integrity',
    title: 'Integrity',
    description: 'The maintenance of data accuracy and consistency over its lifecycle',
    icon: <ShieldCheck className="w-8 h-8" />,
    impact: [
      'Data trustworthiness',
      'Audit compliance',
      'System reliability',
      'Decision confidence'
    ],
    metrics: [
      'Referential integrity',
      'Data corruption rate',
      'Audit trail coverage',
      'Version consistency'
    ],
    example: {
      good: 'All order references link to valid customers',
      bad: 'Orphaned order records with invalid customer IDs'
    }
  }
];

function QualityScoreCard({ dimension }: { dimension: QualityDimension }) {
  const [showExample, setShowExample] = useState(false);
  
  return (
    <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-[#FF6F61]/10 rounded-lg">
          {dimension.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2">{dimension.title}</h3>
          <p className="text-white/70 mb-4">{dimension.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Business Impact */}
            <div>
              <h4 className="text-sm font-semibold text-white/90 mb-3 flex items-center gap-2">
                <Scale className="w-4 h-4 text-[#FF6F61]" />
                Business Impact
              </h4>
              <ul className="space-y-2">
                {dimension.impact.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-white/70 flex items-center gap-2"
                    style={{ animation: `fadeIn 0.3s ease-out ${i * 0.1}s both` }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF6F61]/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Key Metrics */}
            <div>
              <h4 className="text-sm font-semibold text-white/90 mb-3 flex items-center gap-2">
                <Ruler className="w-4 h-4 text-[#FF6F61]" />
                Key Metrics
              </h4>
              <ul className="space-y-2">
                {dimension.metrics.map((metric, i) => (
                  <li
                    key={i}
                    className="text-sm text-white/70 flex items-center gap-2"
                    style={{ animation: `fadeIn 0.3s ease-out ${i * 0.1}s both` }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF6F61]/50" />
                    {metric}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Example Toggle */}
          <button
            onClick={() => setShowExample(!showExample)}
            className="mt-4 text-sm text-white/60 hover:text-white flex items-center gap-2"
          >
            <History className="w-4 h-4" />
            {showExample ? 'Hide' : 'Show'} Examples
          </button>
          
          {/* Examples */}
          {showExample && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-emerald-500/10 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-medium text-emerald-400">Good Example</span>
                </div>
                <code className="text-sm text-emerald-300/90">{dimension.example.good}</code>
              </div>
              <div className="bg-red-500/10 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 rounded-full border-2 border-red-400" />
                  <span className="text-sm font-medium text-red-400">Poor Example</span>
                </div>
                <code className="text-sm text-red-300/90">{dimension.example.bad}</code>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function DataQualityModule({ onBack }: { onBack?: () => void }) {
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
            <h1 className="text-2xl font-bold text-white">Is Your Data Fit for Use?</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-12">
          {/* Introduction */}
          <section className="prose prose-invert max-w-none">
            <div className="bg-white/5 rounded-xl p-8 backdrop-blur-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#FF6F61]/10 rounded-lg">
                  <BookOpen className="w-8 h-8 text-[#FF6F61]" />
                </div>
                <h2 className="text-3xl font-bold text-white m-0">Data Quality Dimensions</h2>
              </div>
              <p className="text-white/80 text-lg leading-relaxed">
                High-quality data is essential for making informed decisions and running efficient operations. 
                Understanding these key dimensions of data quality helps ensure your data is fit for its intended use.
              </p>
            </div>
          </section>

          {/* Quality Dimensions Grid */}
          <section className="grid grid-cols-1 gap-6">
            {qualityDimensions.map((dimension) => (
              <QualityScoreCard key={dimension.id} dimension={dimension} />
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}

export default DataQualityModule;