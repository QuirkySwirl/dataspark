import React, { useState } from 'react';
import { ArrowLeft, Shield, Users, FileCheck, Book, Settings, Lock, History, BarChart3, Workflow } from 'lucide-react';

interface GovernanceComponent {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  responsibilities: string[];
  bestPractices: string[];
  tools: string[];
  metrics: string[];
}

const governanceComponents: GovernanceComponent[] = [
  {
    id: 'roles',
    title: 'Roles & Responsibilities',
    description: 'Key stakeholders and their responsibilities in data governance',
    icon: <Users className="w-8 h-8" />,
    responsibilities: [
      'Define data ownership',
      'Establish stewardship',
      'Manage access rights',
      'Monitor compliance'
    ],
    bestPractices: [
      'Clear role definitions',
      'Regular training',
      'Documented procedures',
      'Accountability metrics'
    ],
    tools: [
      'RACI matrices',
      'Role management systems',
      'Training platforms',
      'Collaboration tools'
    ],
    metrics: [
      'Role coverage',
      'Training completion',
      'Issue resolution time',
      'Compliance rate'
    ]
  },
  {
    id: 'policies',
    title: 'Policies & Standards',
    description: 'Guidelines and rules for data management and usage',
    icon: <Book className="w-8 h-8" />,
    responsibilities: [
      'Create policies',
      'Update standards',
      'Ensure compliance',
      'Review effectiveness'
    ],
    bestPractices: [
      'Regular updates',
      'Clear documentation',
      'Stakeholder input',
      'Impact assessment'
    ],
    tools: [
      'Policy management systems',
      'Document repositories',
      'Compliance tracking',
      'Version control'
    ],
    metrics: [
      'Policy adherence',
      'Update frequency',
      'Exception rates',
      'Implementation success'
    ]
  },
  {
    id: 'security',
    title: 'Security & Privacy',
    description: 'Protecting data assets and ensuring privacy compliance',
    icon: <Lock className="w-8 h-8" />,
    responsibilities: [
      'Implement controls',
      'Monitor access',
      'Handle breaches',
      'Ensure compliance'
    ],
    bestPractices: [
      'Regular audits',
      'Access reviews',
      'Encryption standards',
      'Incident response'
    ],
    tools: [
      'Access control systems',
      'Encryption tools',
      'Monitoring solutions',
      'Audit platforms'
    ],
    metrics: [
      'Security incidents',
      'Access violations',
      'Audit findings',
      'Response times'
    ]
  },
  {
    id: 'lifecycle',
    title: 'Data Lifecycle Management',
    description: 'Managing data from creation to disposal',
    icon: <History className="w-8 h-8" />,
    responsibilities: [
      'Define retention',
      'Manage archives',
      'Ensure disposal',
      'Track lineage'
    ],
    bestPractices: [
      'Clear lifecycle stages',
      'Automated archiving',
      'Secure disposal',
      'Documentation'
    ],
    tools: [
      'Lifecycle management',
      'Archival systems',
      'Disposal tools',
      'Lineage tracking'
    ],
    metrics: [
      'Retention compliance',
      'Archive accuracy',
      'Disposal timeliness',
      'Lineage coverage'
    ]
  },
  {
    id: 'quality',
    title: 'Quality Management',
    description: 'Ensuring and maintaining data quality',
    icon: <FileCheck className="w-8 h-8" />,
    responsibilities: [
      'Set standards',
      'Monitor quality',
      'Resolve issues',
      'Improve processes'
    ],
    bestPractices: [
      'Regular assessments',
      'Automated validation',
      'Issue tracking',
      'Continuous improvement'
    ],
    tools: [
      'Quality monitoring',
      'Validation tools',
      'Cleansing solutions',
      'Profiling systems'
    ],
    metrics: [
      'Quality scores',
      'Error rates',
      'Resolution times',
      'Improvement trends'
    ]
  },
  {
    id: 'metadata',
    title: 'Metadata Management',
    description: 'Managing data about data',
    icon: <Settings className="w-8 h-8" />,
    responsibilities: [
      'Define standards',
      'Maintain catalog',
      'Track changes',
      'Ensure accuracy'
    ],
    bestPractices: [
      'Standardized formats',
      'Regular updates',
      'Version control',
      'Integration focus'
    ],
    tools: [
      'Metadata repositories',
      'Data catalogs',
      'Business glossaries',
      'Lineage tools'
    ],
    metrics: [
      'Catalog coverage',
      'Update frequency',
      'Search effectiveness',
      'Usage statistics'
    ]
  },
  {
    id: 'compliance',
    title: 'Compliance & Reporting',
    description: 'Meeting regulatory requirements and reporting needs',
    icon: <BarChart3 className="w-8 h-8" />,
    responsibilities: [
      'Monitor compliance',
      'Generate reports',
      'Track changes',
      'Handle audits'
    ],
    bestPractices: [
      'Regular audits',
      'Documentation',
      'Change tracking',
      'Risk assessment'
    ],
    tools: [
      'Compliance monitoring',
      'Reporting systems',
      'Audit tools',
      'Risk dashboards'
    ],
    metrics: [
      'Compliance rate',
      'Audit findings',
      'Report accuracy',
      'Response times'
    ]
  },
  {
    id: 'process',
    title: 'Process Integration',
    description: 'Integrating governance into business processes',
    icon: <Workflow className="w-8 h-8" />,
    responsibilities: [
      'Process alignment',
      'Change management',
      'Training delivery',
      'Performance monitoring'
    ],
    bestPractices: [
      'Process mapping',
      'Integration testing',
      'Change control',
      'Performance metrics'
    ],
    tools: [
      'Process management',
      'Workflow systems',
      'Training platforms',
      'Analytics tools'
    ],
    metrics: [
      'Integration success',
      'Process efficiency',
      'Change adoption',
      'Business impact'
    ]
  }
];

function GovernanceCard({ component, isActive, onClick }: { 
  component: GovernanceComponent;
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
          {component.icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{component.title}</h3>
          <p className="text-white/70">{component.description}</p>
        </div>
      </div>

      {isActive && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Responsibilities */}
          <div>
            <h4 className="text-sm font-semibold text-white/90 mb-3">Key Responsibilities</h4>
            <ul className="space-y-2">
              {component.responsibilities.map((item, i) => (
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

          {/* Best Practices */}
          <div>
            <h4 className="text-sm font-semibold text-white/90 mb-3">Best Practices</h4>
            <ul className="space-y-2">
              {component.bestPractices.map((practice, i) => (
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
            <h4 className="text-sm font-semibold text-white/90 mb-3">Common Tools</h4>
            <ul className="space-y-2">
              {component.tools.map((tool, i) => (
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

          {/* Metrics */}
          <div>
            <h4 className="text-sm font-semibold text-white/90 mb-3">Key Metrics</h4>
            <ul className="space-y-2">
              {component.metrics.map((metric, i) => (
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
      )}
    </div>
  );
}

function DataGovernanceModule({ onBack }: { onBack?: () => void }) {
  const [activeComponent, setActiveComponent] = useState<string>('roles');

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
            <h1 className="text-2xl font-bold text-white">Keeping Data Healthy</h1>
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
                  <Shield className="w-8 h-8 text-[#FF6F61]" />
                </div>
                <h2 className="text-3xl font-bold text-white m-0">Data Governance Framework</h2>
              </div>
              <p className="text-white/80 text-lg leading-relaxed">
                Data governance ensures that your organization's data assets are formally managed throughout the enterprise. 
                It establishes a system of decision rights and accountabilities for information-related processes.
              </p>
            </div>
          </section>

          {/* Governance Components */}
          <section className="grid grid-cols-1 gap-6">
            {governanceComponents.map((component) => (
              <GovernanceCard
                key={component.id}
                component={component}
                isActive={activeComponent === component.id}
                onClick={() => setActiveComponent(component.id)}
              />
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}

export default DataGovernanceModule;