import React, { useState } from 'react';
import { ArrowLeft, GitBranch, DollarSign, ShoppingCart, Package, FileCheck, CreditCard, UserCheck, Truck, ClipboardCheck, Boxes, Warehouse, BarChart3, Scan, PackageSearch, Users, BarChart, Workflow, Wrench, Settings, FileText, Handshake, Search, UserPlus, FilePlus, CheckCircle, TrendingUp, ListOrdered, Activity, Heart, Repeat } from 'lucide-react';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  dataPoints: string[];
}

const l2cSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Lead Management',
    description: 'Capturing and qualifying potential customer data',
    icon: <UserCheck className="w-6 h-6" />,
    dataPoints: ['Lead Source Data', 'Contact Information', 'Lead Scoring Metrics', 'Interaction History']
  },
  {
    id: 2,
    title: 'Opportunity & Quote',
    description: 'Managing sales opportunities and quote generation',
    icon: <FileText className="w-6 h-6" />,
    dataPoints: ['Opportunity Details', 'Pricing Data', 'Product Configuration', 'Quote History']
  },
  {
    id: 3,
    title: 'Contract Management',
    description: 'Handling contract creation and negotiation process',
    icon: <Handshake className="w-6 h-6" />,
    dataPoints: ['Contract Terms', 'Version History', 'Approval Status', 'Digital Signatures']
  },
  {
    id: 4,
    title: 'Order Processing',
    description: 'Processing and validating customer orders',
    icon: <ClipboardCheck className="w-6 h-6" />,
    dataPoints: ['Order Data', 'Credit Verification', 'Payment Terms', 'Validation Rules']
  },
  {
    id: 5,
    title: 'Order Fulfillment',
    description: 'Managing order fulfillment and delivery',
    icon: <Truck className="w-6 h-6" />,
    dataPoints: ['Inventory Data', 'Shipping Details', 'Tracking Information', 'Delivery Status']
  },
  {
    id: 6,
    title: 'Billing & Collection',
    description: 'Managing invoicing and payment collection',
    icon: <CreditCard className="w-6 h-6" />,
    dataPoints: ['Invoice Data', 'Payment Records', 'Collection Metrics', 'Revenue Data']
  }
];

const s2pSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Vendor Management',
    description: 'Managing vendor data and relationships',
    icon: <UserPlus className="w-6 h-6" />,
    dataPoints: ['Vendor Master Data', 'Performance Metrics', 'Compliance Records', 'Risk Assessment']
  },
  {
    id: 2,
    title: 'Supplier Selection',
    description: 'Evaluating and selecting suppliers',
    icon: <Search className="w-6 h-6" />,
    dataPoints: ['Supplier Data', 'Evaluation Criteria', 'Pricing Information', 'Capability Assessment']
  },
  {
    id: 3,
    title: 'Purchase Requisition',
    description: 'Managing purchase request data',
    icon: <FilePlus className="w-6 h-6" />,
    dataPoints: ['Request Details', 'Budget Information', 'Approval Workflow', 'Department Data']
  },
  {
    id: 4,
    title: 'Purchase Order',
    description: 'Creating and managing purchase orders',
    icon: <Package className="w-6 h-6" />,
    dataPoints: ['PO Data', 'Terms & Conditions', 'Delivery Schedule', 'Price Information']
  },
  {
    id: 5,
    title: 'Contract Management',
    description: 'Managing supplier contracts and agreements',
    icon: <Handshake className="w-6 h-6" />,
    dataPoints: ['Contract Data', 'SLA Metrics', 'Compliance Records', 'Term Details']
  },
  {
    id: 6,
    title: 'Goods Receipt',
    description: 'Recording and validating received goods',
    icon: <CheckCircle className="w-6 h-6" />,
    dataPoints: ['Receipt Data', 'Quality Checks', 'Quantity Verification', 'Storage Location']
  },
  {
    id: 7,
    title: 'Invoice Processing',
    description: 'Processing and managing supplier invoices',
    icon: <CreditCard className="w-6 h-6" />,
    dataPoints: ['Invoice Data', 'Payment Records', '3-Way Match', 'Approval Status']
  }
];

const i2oSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Inventory Planning',
    description: 'Managing inventory forecasting and planning data',
    icon: <TrendingUp className="w-6 h-6" />,
    dataPoints: ['Forecast Data', 'Stock Levels', 'Demand Patterns', 'Planning Parameters']
  },
  {
    id: 2,
    title: 'Warehouse Management',
    description: 'Managing warehouse operations data',
    icon: <Warehouse className="w-6 h-6" />,
    dataPoints: ['Location Data', 'Space Metrics', 'Equipment Status', 'Labor Data']
  },
  {
    id: 3,
    title: 'Stock Management',
    description: 'Maintaining accurate inventory records',
    icon: <ListOrdered className="w-6 h-6" />,
    dataPoints: ['Stock Data', 'Location Records', 'Batch Information', 'Product Status']
  },
  {
    id: 4,
    title: 'Inventory Operations',
    description: 'Managing daily inventory movements',
    icon: <Boxes className="w-6 h-6" />,
    dataPoints: ['Movement Data', 'Transaction Logs', 'Operation Metrics', 'Resource Usage']
  },
  {
    id: 5,
    title: 'Quality Control',
    description: 'Ensuring inventory quality standards',
    icon: <Scan className="w-6 h-6" />,
    dataPoints: ['Quality Data', 'Inspection Records', 'Compliance Metrics', 'Issue Tracking']
  }
];

const h2rSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Recruitment',
    description: 'Managing recruitment and candidate data',
    icon: <Users className="w-6 h-6" />,
    dataPoints: ['Candidate Data', 'Job Requirements', 'Assessment Results', 'Application Status']
  },
  {
    id: 2,
    title: 'Onboarding',
    description: 'Processing new employee data',
    icon: <ClipboardCheck className="w-6 h-6" />,
    dataPoints: ['Employee Records', 'Document Status', 'System Access', 'Training Data']
  },
  {
    id: 3,
    title: 'Performance',
    description: 'Tracking employee performance data',
    icon: <Activity className="w-6 h-6" />,
    dataPoints: ['Performance Metrics', 'Goal Tracking', 'Review History', 'Skill Data']
  },
  {
    id: 4,
    title: 'Benefits',
    description: 'Managing employee benefits data',
    icon: <Heart className="w-6 h-6" />,
    dataPoints: ['Benefits Records', 'Enrollment Data', 'Claims History', 'Coverage Details']
  },
  {
    id: 5,
    title: 'Retention',
    description: 'Tracking employee engagement data',
    icon: <Repeat className="w-6 h-6" />,
    dataPoints: ['Satisfaction Metrics', 'Feedback Data', 'Development Plans', 'Recognition Records']
  }
];

const i2rSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Incident Detection',
    description: 'Identifying and logging issues',
    icon: <Wrench className="w-6 h-6" />,
    dataPoints: ['Alert Details', 'Severity Level', 'Impact Scope', 'Detection Time']
  },
  {
    id: 2,
    title: 'Classification',
    description: 'Categorizing and prioritizing incidents',
    icon: <Settings className="w-6 h-6" />,
    dataPoints: ['Category', 'Priority', 'SLA Requirements', 'Resource Needs']
  },
  {
    id: 3,
    title: 'Investigation',
    description: 'Analyzing root causes',
    icon: <FileCheck className="w-6 h-6" />,
    dataPoints: ['Diagnostic Data', 'Error Logs', 'System Status', 'Historical Data']
  },
  {
    id: 4,
    title: 'Resolution',
    description: 'Implementing solutions',
    icon: <Workflow className="w-6 h-6" />,
    dataPoints: ['Action Taken', 'Resolution Time', 'Testing Results', 'Verification Status']
  },
  {
    id: 5,
    title: 'Review',
    description: 'Post-incident analysis and learning',
    icon: <BarChart className="w-6 h-6" />,
    dataPoints: ['Response Metrics', 'Lessons Learned', 'Process Updates', 'Prevention Steps']
  }
];

function ProcessFlow({ steps, activeStep, onStepClick }: { 
  steps: ProcessStep[];
  activeStep: number;
  onStepClick: (step: number) => void;
}) {
  return (
    <div className="relative">
      {/* Process Flow Line */}
      <div className="absolute left-[2.25rem] top-0 bottom-0 w-px bg-gradient-to-b from-[#FF6F61] via-[#FF6F61]/50 to-transparent animate-pulse" />
      
      {steps.map((step, index) => (
        <div
          key={step.id}
          className={`
            relative flex gap-6 p-6 rounded-xl transition-all duration-500 cursor-pointer
            ${activeStep === index 
              ? 'bg-white/10 shadow-lg shadow-[#FF6F61]/5 scale-102' 
              : 'hover:bg-white/5 hover:shadow-lg hover:shadow-[#FF6F61]/5'}
          `}
          onClick={() => onStepClick(index)}
        >
          {/* Step Icon */}
          <div className={`
            relative z-10 w-12 h-12 rounded-full flex items-center justify-center
            transition-all duration-300
            ${activeStep === index 
              ? 'bg-[#FF6F61] text-white shadow-lg shadow-[#FF6F61]/30 scale-110' 
              : 'bg-white/5 text-white/60 hover:shadow-md hover:shadow-[#FF6F61]/20'
            }
          `}>
            {step.icon}
          </div>
          
          {/* Step Content */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
            <p className="text-white/60 mb-4">{step.description}</p>
            
            {/* Data Points */}
            <div className={`
              grid grid-cols-2 gap-3 transition-all duration-500
              ${activeStep === index ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}
            `}>
              {step.dataPoints.map((point, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-2 text-sm text-white/80"
                  style={{
                    animation: `fadeIn 0.5s ease-out ${i * 0.1}s both`
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-[#FF6F61]/50 animate-pulse" />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function DataInActionModule({ onBack }: { onBack?: () => void }) {
  const [selectedProcess, setSelectedProcess] = useState<'l2c' | 's2p' | 'i2o' | 'h2r'>('l2c');
  const [activeStep, setActiveStep] = useState(0);

  const getProcessSteps = () => {
    switch (selectedProcess) {
      case 'l2c': return l2cSteps;
      case 's2p': return s2pSteps;
      case 'i2o': return i2oSteps;
      case 'h2r': return h2rSteps;
      default: return l2cSteps;
    }
  };

  const processes = [
    { 
      id: 'l2c',
      title: 'Lead-to-Cash (L2C)',
      description: 'Complete sales lifecycle including lead generation, opportunity management, order processing, fulfillment, and revenue collection'
    },
    { 
      id: 's2p',
      title: 'Source-to-Pay (S2P)',
      description: 'End-to-end procurement process from supplier selection and purchasing to invoice processing and payment'
    },
    { 
      id: 'i2o',
      title: 'Inventory-to-Optimize (I2O)',
      description: 'Comprehensive inventory and warehouse management including planning, storage, operations, and quality control'
    },
    {
      id: 'h2r',
      title: 'Hire-to-Retire (H2R)',
      description: 'Complete employee lifecycle from recruitment and onboarding through performance management, benefits administration, and retention'
    }
  ];

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
            <h1 className="text-2xl font-bold text-white">Data in Action: Business Lifecycles</h1>
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
                  <GitBranch className="w-8 h-8 text-[#FF6F61]" />
                </div>
                <h2 className="text-3xl font-bold text-white m-0">Business Process Lifecycles</h2>
              </div>
              <p className="text-white/80 text-lg leading-relaxed">
                Every business process generates and consumes data throughout its lifecycle. Understanding how data flows through these processes is essential for effective data management, process optimization, and decision-making.
              </p>
            </div>
          </section>

          {/* Process Selection */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {processes.map((process) => (
              <button
                key={process.id}
                className={`
                  group p-4 sm:p-6 rounded-xl border transition-all duration-500
                  ${selectedProcess === process.id
                    ? 'bg-white/10 border-[#FF6F61] text-white shadow-lg shadow-[#FF6F61]/10'
                    : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:border-[#FF6F61]/50'}
                `}
                onClick={() => setSelectedProcess(process.id as typeof selectedProcess)}
              >
                <div className="relative overflow-hidden">
                  <div className={`
                    absolute inset-0 bg-gradient-to-r from-[#FF6F61]/20 to-transparent
                    transition-transform duration-700 -translate-x-full
                    ${selectedProcess === process.id ? 'translate-x-0' : 'group-hover:translate-x-0'}
                  `} />
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{process.title}</h3>
                  <p className="text-xs sm:text-sm opacity-80">{process.description}</p>
                </div>
              </button>
            ))}
          </section>

          {/* Process Flow */}
          <section className="bg-white/5 rounded-xl p-4 sm:p-8 backdrop-blur-lg">
            <ProcessFlow
              steps={getProcessSteps()}
              activeStep={activeStep}
              onStepClick={setActiveStep}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default DataInActionModule;