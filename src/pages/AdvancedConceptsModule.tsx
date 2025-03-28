import React, { useState } from 'react';
import { ArrowLeft, Brain, Shield, Eye, BarChart2, Network, Lock, UserCog, FileWarning, Scale, LineChart, Fingerprint, BookOpen, AlertTriangle } from 'lucide-react';

interface Concept {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  principles: string[];
  challenges: string[];
  bestPractices: string[];
  tools: string[];
}

const concepts: Concept[] = [
  {
    id: 'privacy',
    title: 'Data Privacy',
    description: 'Protecting personal and sensitive information while maintaining utility',
    icon: <Shield className="w-8 h-8" />,
    principles: [
      'Privacy by Design',
      'Data Minimization',
      'Purpose Limitation',
      'Consent Management'
    ],
    challenges: [
      'Regulatory Compliance',
      'Cross-border Data Transfers',
      'Privacy vs Utility Balance',
      'Evolving Threats'
    ],
    bestPractices: [
      'Regular Privacy Impact Assessments',
      'Data Encryption at Rest and in Transit',
      'Privacy-preserving Analytics',
      'Clear Privacy Policies'
    ],
    tools: [
      'Privacy Management Platforms',
      'Consent Management Tools',
      'Data Discovery Solutions',
      'Encryption Technologies'
    ]
  },
  {
    id: 'ethics',
    title: 'Data Ethics',
    description: 'Ensuring responsible and fair use of data in decision-making',
    icon: <Scale className="w-8 h-8" />,
    principles: [
      'Fairness and Non-discrimination',
      'Transparency',
      'Accountability',
      'Human-centered Design'
    ],
    challenges: [
      'Algorithmic Bias',
      'Ethical Decision Frameworks',
      'Automated Decision-making',
      'Social Impact'
    ],
    bestPractices: [
      'Ethics Review Boards',
      'Bias Testing',
      'Explainable AI',
      'Stakeholder Engagement'
    ],
    tools: [
      'Fairness Metrics',
      'Bias Detection Tools',
      'Model Explainability Frameworks',
      'Ethics Guidelines'
    ]
  },
  {
    id: 'visualization',
    title: 'Data Visualization',
    description: 'Creating effective visual representations of data insights',
    icon: <BarChart2 className="w-8 h-8" />,
    principles: [
      'Visual Hierarchy',
      'Data-ink Ratio',
      'Color Theory',
      'Gestalt Principles'
    ],
    challenges: [
      'Complex Data Sets',
      'Real-time Visualization',
      'Mobile Responsiveness',
      'Accessibility'
    ],
    bestPractices: [
      'Clear Visual Hierarchy',
      'Interactive Elements',
      'Consistent Design Language',
      'Performance Optimization'
    ],
    tools: [
      'D3.js',
      'Tableau',
      'Power BI',
      'Observable'
    ]
  },
  {
    id: 'security',
    title: 'Advanced Security',
    description: 'Implementing robust data security measures',
    icon: <Lock className="w-8 h-8" />,
    principles: [
      'Defense in Depth',
      'Zero Trust Architecture',
      'Least Privilege',
      'Security by Design'
    ],
    challenges: [
      'Advanced Persistent Threats',
      'Insider Threats',
      'Cloud Security',
      'IoT Security'
    ],
    bestPractices: [
      'Regular Security Audits',
      'Incident Response Planning',
      'Security Training',
      'Continuous Monitoring'
    ],
    tools: [
      'SIEM Systems',
      'Threat Intelligence',
      'Security Analytics',
      'Access Control'
    ]
  },
  {
    id: 'identity',
    title: 'Identity Management',
    description: 'Managing digital identities and access control',
    icon: <Fingerprint className="w-8 h-8" />,
    principles: [
      'Identity Lifecycle',
      'Authentication Factors',
      'Authorization Models',
      'Identity Federation'
    ],
    challenges: [
      'Identity Theft',
      'Password Management',
      'Access Governance',
      'Compliance Requirements'
    ],
    bestPractices: [
      'Multi-factor Authentication',
      'Regular Access Reviews',
      'Identity Governance',
      'Privileged Access Management'
    ],
    tools: [
      'IAM Platforms',
      'SSO Solutions',
      'Password Managers',
      'Access Certification'
    ]
  },
  {
    id: 'compliance',
    title: 'Advanced Compliance',
    description: 'Meeting complex regulatory requirements',
    icon: <FileWarning className="w-8 h-8" />,
    principles: [
      'Regulatory Framework',
      'Documentation',
      'Risk Assessment',
      'Control Implementation'
    ],
    challenges: [
      'Multiple Jurisdictions',
      'Changing Regulations',
      'Technical Controls',
      'Audit Requirements'
    ],
    bestPractices: [
      'Compliance Program',
      'Regular Assessments',
      'Documentation',
      'Training Programs'
    ],
    tools: [
      'GRC Platforms',
      'Audit Tools',
      'Policy Management',
      'Training Systems'
    ]
  },
  {
    id: 'analytics',
    title: 'Advanced Analytics',
    description: 'Leveraging advanced data analysis techniques',
    icon: <LineChart className="w-8 h-8" />,
    principles: [
      'Statistical Analysis',
      'Machine Learning',
      'Predictive Modeling',
      'Data Mining'
    ],
    challenges: [
      'Data Quality',
      'Model Complexity',
      'Scalability',
      'Interpretability'
    ],
    bestPractices: [
      'Model Validation',
      'Feature Engineering',
      'Version Control',
      'Performance Monitoring'
    ],
    tools: [
      'Python Libraries',
      'R Statistics',
      'ML Platforms',
      'Analytics Dashboards'
    ]
  },
  {
    id: 'integration',
    title: 'Data Integration',
    description: 'Advanced techniques for combining data sources',
    icon: <Network className="w-8 h-8" />,
    principles: [
      'Data Federation',
      'ETL Processes',
      'Master Data',
      'Data Lakes'
    ],
    challenges: [
      'Data Silos',
      'Schema Matching',
      'Real-time Integration',
      'Data Volume'
    ],
    bestPractices: [
      'Data Mapping',
      'Quality Checks',
      'Error Handling',
      'Performance Tuning'
    ],
    tools: [
      'ETL Tools',
      'Data Lakes',
      'Integration Platforms',
      'API Management'
    ]
  }
];

function ConceptCard({ concept, isActive, onClick }: {
  concept: Concept;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`
        bg-white/5 rounded-xl p-6 backdrop-blur-sm border transition-all duration-500 cursor-pointer
        ${isActive
          ? 'border-[#FF6F61] shadow-lg shadow-[#FF6F61]/5 scale-102'
          : 'border-white/10 hover:border-[#FF6F61]/50 hover:shadow-lg hover:shadow-[#FF6F61]/5'
        }
      `}
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <div className={`
          p-2 rounded-lg transition-all duration-300
          ${isActive ? 'bg-[#FF6F61] text-white' : 'bg-white/10 text-white/60'}
        `}>
          {concept.icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{concept.title}</h3>
          <p className="text-white/70">{concept.description}</p>
        </div>
      </div>

      {isActive && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Principles */}
          <div>
            <h4 className="text-sm font-semibold text-white/90 mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#FF6F61]" />
              Key Principles
            </h4>
            <ul className="space-y-2">
              {concept.principles.map((item, i) => (
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

          {/* Challenges */}
          <div>
            <h4 className="text-sm font-semibold text-white/90 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-[#FF6F61]" />
              Key Challenges
            </h4>
            <ul className="space-y-2">
              {concept.challenges.map((challenge, i) => (
                <li
                  key={i}
                  className="text-sm text-white/70 flex items-center gap-2"
                  style={{ animation: `fadeIn 0.3s ease-out ${i * 0.1}s both` }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF6F61]/50" />
                  {challenge}
                </li>
              ))}
            </ul>
          </div>

          {/* Best Practices */}
          <div>
            <h4 className="text-sm font-semibold text-white/90 mb-3 flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#FF6F61]" />
              Best Practices
            </h4>
            <ul className="space-y-2">
              {concept.bestPractices.map((practice, i) => (
                <li
                  key={i}
                  className="text-sm text-white/70 flex items-center gap-2"
                  style={{ animation: `fadeIn 0.3s ease-out ${i * 0.1}s both` }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF6F61]/50" />
                  {practice}
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-sm font-semibold text-white/90 mb-3 flex items-center gap-2">
              <UserCog className="w-4 h-4 text-[#FF6F61]" />
              Common Tools
            </h4>
            <ul className="space-y-2">
              {concept.tools.map((tool, i) => (
                <li
                  key={i}
                  className="text-sm text-white/70 flex items-center gap-2"
                  style={{ animation: `fadeIn 0.3s ease-out ${i * 0.1}s both` }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF6F61]/50" />
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

function AdvancedConceptsModule({ onBack }: { onBack?: () => void }) {
  const [activeConcept, setActiveConcept] = useState<string>('privacy');

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
            <h1 className="text-2xl font-bold text-white">Advanced Concepts</h1>
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
                  <Brain className="w-8 h-8 text-[#FF6F61]" />
                </div>
                <h2 className="text-3xl font-bold text-white m-0">Advanced Data Concepts</h2>
              </div>
              <p className="text-white/80 text-lg leading-relaxed">
                Explore advanced topics in data management, including privacy, ethics, visualization, and security. 
                These concepts are crucial for building robust and responsible data-driven systems.
              </p>
            </div>
          </section>

          {/* Concepts Grid */}
          <section className="grid grid-cols-1 gap-6">
            {concepts.map((concept) => (
              <ConceptCard
                key={concept.id}
                concept={concept}
                isActive={activeConcept === concept.id}
                onClick={() => setActiveConcept(concept.id)}
              />
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}

export default AdvancedConceptsModule