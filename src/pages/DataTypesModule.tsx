import React, { useState } from 'react';
import { ArrowLeft, FileSpreadsheet, Database, FileText, Image, FileJson, Table, Binary, FileCode, BarChart, Book, Users, Settings } from 'lucide-react';

interface DataTypeExample {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  examples: string[];
  characteristics: string[];
  tools: string[];
}

const dataTypes: DataTypeExample[] = [
  {
    id: 'structured',
    title: 'Structured Data',
    description: 'Data that follows a predefined schema and is organized in a highly-organized format',
    icon: <Table className="w-8 h-8" />,
    examples: [
      'Relational Databases',
      'Excel Spreadsheets',
      'CSV Files',
      'Sales Records',
      'Customer Information'
    ],
    characteristics: [
      'Fixed schema',
      'Clearly defined relationships',
      'Easy to query',
      'Consistent format',
      'Quantitative analysis friendly'
    ],
    tools: [
      'SQL Databases',
      'Excel',
      'Business Intelligence Tools',
      'Data Warehouses'
    ]
  },
  {
    id: 'unstructured',
    title: 'Unstructured Data',
    description: 'Data that lacks a predefined data model or organization',
    icon: <FileText className="w-8 h-8" />,
    examples: [
      'Text Documents',
      'Social Media Posts',
      'Images',
      'Audio Files',
      'Video Content'
    ],
    characteristics: [
      'No predefined model',
      'Qualitative in nature',
      'Complex to analyze',
      'Rich in content',
      'Requires specialized processing'
    ],
    tools: [
      'Text Analytics',
      'Natural Language Processing',
      'Computer Vision',
      'Machine Learning'
    ]
  },
  {
    id: 'semi-structured',
    title: 'Semi-structured Data',
    description: 'Data that has some organizational properties but doesn\'t conform to a rigid structure',
    icon: <FileJson className="w-8 h-8" />,
    examples: [
      'JSON Files',
      'XML Documents',
      'Email Messages',
      'NoSQL Databases',
      'Log Files'
    ],
    characteristics: [
      'Flexible schema',
      'Self-describing',
      'Hierarchical',
      'Tags and markers',
      'Variable format'
    ],
    tools: [
      'Document Databases',
      'Graph Databases',
      'API Integration',
      'Log Analytics'
    ]
  },
  {
    id: 'transactional',
    title: 'Transactional Data',
    description: 'Data that records business events and transactions as they occur',
    icon: <BarChart className="w-8 h-8" />,
    examples: [
      'Sales Transactions',
      'Bank Transfers',
      'Order Details',
      'Inventory Changes',
      'Service Requests'
    ],
    characteristics: [
      'Time-stamped',
      'Detailed records',
      'High volume',
      'ACID compliant',
      'Operational focus'
    ],
    tools: [
      'OLTP Databases',
      'Transaction Processing Systems',
      'ERP Systems',
      'Point of Sale Systems'
    ]
  },
  {
    id: 'reference',
    title: 'Reference Data',
    description: 'Standardized lists and codes used to categorize and classify other data',
    icon: <Book className="w-8 h-8" />,
    examples: [
      'Country Codes',
      'Currency Codes',
      'Product Categories',
      'Status Codes',
      'Department Codes'
    ],
    characteristics: [
      'Standardized format',
      'Slowly changing',
      'Widely referenced',
      'Hierarchical',
      'Controlled values'
    ],
    tools: [
      'Data Dictionaries',
      'Lookup Tables',
      'Code Repositories',
      'Reference Data Management Systems'
    ]
  },
  {
    id: 'master',
    title: 'Master Data',
    description: 'Core business entities that are shared across multiple systems and processes',
    icon: <Users className="w-8 h-8" />,
    examples: [
      'Customer Records',
      'Product Catalog',
      'Employee Directory',
      'Vendor List',
      'Location Data'
    ],
    characteristics: [
      'Single source of truth',
      'Consistent across systems',
      'Long-term relevance',
      'Business critical',
      'Quality controlled'
    ],
    tools: [
      'MDM Systems',
      'Data Quality Tools',
      'Data Governance Platforms',
      'Enterprise Databases'
    ]
  },
  {
    id: 'metadata',
    title: 'Metadata',
    description: 'Data that describes other data - its structure, format, and relationships',
    icon: <Settings className="w-8 h-8" />,
    examples: [
      'Schema Definitions',
      'Data Lineage',
      'Access Rights',
      'Data Dictionary',
      'Version History'
    ],
    characteristics: [
      'Descriptive nature',
      'System-level view',
      'Governance focused',
      'Change tracking',
      'Relationship mapping'
    ],
    tools: [
      'Data Catalogs',
      'Metadata Repositories',
      'Data Lineage Tools',
      'Schema Management Systems'
    ]
  }
];

const codeExamples = {
  structured: `-- SQL Table Definition
CREATE TABLE customers (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(255),
  created_at TIMESTAMP
);`,
  'semi-structured': `{
  "customer": {
    "id": 123,
    "name": "John Doe",
    "orders": [
      {
        "id": "ord_1",
        "items": ["item1", "item2"]
      }
    ],
    "preferences": {
      "newsletter": true,
      "theme": "dark"
    }
  }
}`,
  unstructured: `Dear Customer Service,

I recently purchased your product
and I'm very happy with it. However, 
I have a few suggestions for 
improvement... 

Best regards,
John`,
  transactional: `INSERT INTO transactions (
  id, customer_id, product_id,
  quantity, price, timestamp
) VALUES (
  'tx_123', 'cust_456', 'prod_789',
  2, 99.99, '2024-03-15 14:30:00'
);`,
  reference: `CREATE TABLE status_codes (
  code VARCHAR(3) PRIMARY KEY,
  description TEXT,
  category VARCHAR(50),
  is_active BOOLEAN
);`,
  master: `{
  "customer": {
    "id": "CUST001",
    "type": "Enterprise",
    "status": "Active",
    "hierarchy": {
      "parent": null,
      "subsidiaries": ["SUB001", "SUB002"]
    }
  }
}`,
  metadata: `{
  "table": "customers",
  "version": "2.0",
  "lastUpdated": "2024-03-15",
  "columns": [
    {
      "name": "id",
      "type": "uuid",
      "pii": true,
      "indexed": true
    }
  ]
}`
};

function DataTypesModule({ onBack }: { onBack?: () => void }) {
  const [selectedType, setSelectedType] = useState<string>('structured');
  const [showCode, setShowCode] = useState(false);

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
            <h1 className="text-2xl font-bold text-white">Understanding Your Ingredients: Types of Data</h1>
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
                  <FileSpreadsheet className="w-8 h-8 text-[#FF6F61]" />
                </div>
                <h2 className="text-3xl font-bold text-white m-0">The Three Flavors of Data</h2>
              </div>
              <p className="text-white/80 text-lg leading-relaxed">
                Data comes in various forms, each with its own characteristics and best uses. Understanding these different types helps us choose the right tools and approaches for working with our data.
              </p>
            </div>
          </section>

          {/* Data Type Selection */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dataTypes.map((type) => (
              <button
                key={type.id}
                className={`
                  group p-6 rounded-xl border transition-all duration-500
                  ${selectedType === type.id
                    ? 'bg-white/10 border-[#FF6F61] text-white shadow-lg shadow-[#FF6F61]/10'
                    : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:border-[#FF6F61]/50'}
                `}
                onClick={() => setSelectedType(type.id)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`
                    p-2 rounded-lg transition-all duration-300
                    ${selectedType === type.id
                      ? 'bg-[#FF6F61] text-white'
                      : 'bg-white/10 text-white/60'
                    }
                  `}>
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{type.title}</h3>
                </div>
                <p className="text-sm opacity-80 text-left">{type.description}</p>
              </button>
            ))}
          </section>

          {/* Selected Type Details */}
          {dataTypes.map((type) => (
            <section
              key={type.id}
              className={`
                bg-white/5 rounded-xl backdrop-blur-lg overflow-hidden transition-all duration-500
                ${selectedType === type.id ? 'opacity-100' : 'hidden opacity-0'}
              `}
            >
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Examples */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Database className="w-5 h-5 text-[#FF6F61]" />
                      Common Examples
                    </h4>
                    <ul className="space-y-3">
                      {type.examples.map((example, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-white/80"
                          style={{
                            animation: `fadeIn 0.5s ease-out ${i * 0.1}s both`
                          }}
                        >
                          <div className="w-2 h-2 rounded-full bg-[#FF6F61]/50" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Characteristics */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Binary className="w-5 h-5 text-[#FF6F61]" />
                      Key Characteristics
                    </h4>
                    <ul className="space-y-3">
                      {type.characteristics.map((characteristic, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-white/80"
                          style={{
                            animation: `fadeIn 0.5s ease-out ${i * 0.1}s both`
                          }}
                        >
                          <div className="w-2 h-2 rounded-full bg-[#FF6F61]/50" />
                          {characteristic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <FileCode className="w-5 h-5 text-[#FF6F61]" />
                      Common Tools
                    </h4>
                    <ul className="space-y-3">
                      {type.tools.map((tool, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-white/80"
                          style={{
                            animation: `fadeIn 0.5s ease-out ${i * 0.1}s both`
                          }}
                        >
                          <div className="w-2 h-2 rounded-full bg-[#FF6F61]/50" />
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Code Example */}
                <div className="mt-8">
                  <button
                    onClick={() => setShowCode(!showCode)}
                    className="text-white/80 hover:text-white flex items-center gap-2 mb-4"
                  >
                    <FileCode className="w-5 h-5" />
                    {showCode ? 'Hide' : 'Show'} Example
                  </button>
                  
                  {showCode && (
                    <pre className="bg-white/5 p-6 rounded-lg overflow-x-auto">
                      <code className="text-white/90 text-sm">
                        {codeExamples[type.id as keyof typeof codeExamples]}
                      </code>
                    </pre>
                  )}
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}

export default DataTypesModule;