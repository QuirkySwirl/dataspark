import React from 'react';
import { ArrowLeft, Book, Search } from 'lucide-react';

interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
}

const glossaryTerms: GlossaryTerm[] = [
  {
    term: 'Data Governance',
    definition: 'A system of decision rights and accountabilities for information-related processes, executed according to agreed-upon models which describe who can take what actions with what information, and when, under what circumstances, using what methods.',
    category: 'Governance'
  },
  {
    term: 'Data Quality',
    definition: 'The measure of data\'s fitness to serve its purpose in a given context, typically assessed through dimensions such as accuracy, completeness, consistency, and timeliness.',
    category: 'Quality'
  },
  {
    term: 'ETL',
    definition: 'Extract, Transform, Load - A three-phase process where data is extracted from sources, transformed to fit operational needs, and loaded into a target database.',
    category: 'Integration'
  },
  {
    term: 'Data Lake',
    definition: 'A storage repository that holds a vast amount of raw data in its native format until it is needed, allowing for diverse types of analytics.',
    category: 'Storage'
  },
  {
    term: 'Data Warehouse',
    definition: 'A central repository of integrated data from one or more disparate sources, designed for query and analysis.',
    category: 'Storage'
  },
  {
    term: 'Master Data',
    definition: 'Core business data representing the fundamental entities of an enterprise, such as customers, products, employees, and locations.',
    category: 'Data Types'
  },
  {
    term: 'Data Lineage',
    definition: 'The data\'s life cycle that includes its origins, movements, characteristics and quality.',
    category: 'Governance'
  },
  {
    term: 'Data Mart',
    definition: 'A subset of a data warehouse oriented to a specific business line or team.',
    category: 'Storage'
  },
  {
    term: 'Data Mining',
    definition: 'The process of discovering patterns and relationships in large datasets.',
    category: 'Analytics'
  },
  {
    term: 'Business Intelligence',
    definition: 'The strategies and technologies used for data analysis and business information.',
    category: 'Analytics'
  }
];

function Glossary({ onBack }: { onBack?: () => void }) {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  const categories = Array.from(new Set(glossaryTerms.map(term => term.category)));

  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
            <h1 className="text-2xl font-bold text-white">Data Glossary</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Introduction */}
          <section className="prose prose-invert max-w-none">
            <div className="bg-white/5 rounded-xl p-8 backdrop-blur-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#FF6F61]/10 rounded-lg">
                  <Book className="w-8 h-8 text-[#FF6F61]" />
                </div>
                <h2 className="text-3xl font-bold text-white m-0">Data Terms & Definitions</h2>
              </div>
              <p className="text-white/80 text-lg leading-relaxed">
                A comprehensive glossary of data-related terms and concepts used throughout the learning modules.
              </p>
            </div>
          </section>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Search terms..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#FF6F61]/50"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`
                  px-4 py-2 rounded-lg whitespace-nowrap transition-colors
                  ${!selectedCategory
                    ? 'bg-[#FF6F61] text-white'
                    : 'bg-white/5 text-white/60 hover:bg-white/10'}
                `}
              >
                All
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`
                    px-4 py-2 rounded-lg whitespace-nowrap transition-colors
                    ${selectedCategory === category
                      ? 'bg-[#FF6F61] text-white'
                      : 'bg-white/5 text-white/60 hover:bg-white/10'}
                  `}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Terms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTerms.map((term, index) => (
              <div
                key={term.term}
                className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-[#FF6F61]/50 transition-all duration-300"
                style={{
                  animation: `fadeIn 0.3s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-white">{term.term}</h3>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-white/60 text-sm">
                    {term.category}
                  </span>
                </div>
                <p className="mt-4 text-white/70 leading-relaxed">
                  {term.definition}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Glossary;