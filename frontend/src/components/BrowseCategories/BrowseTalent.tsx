import React from 'react';
import { Star, Code, Palette, TrendingUp, HeadphonesIcon, Calculator, Wrench, PenTool, Scale, Camera } from 'lucide-react';

interface TalentCategory {
  id: string;
  name: string;
  rating: number;
  skillCount: number;
  icon: React.ReactNode;
}

const categories: TalentCategory[] = [
  {
    id: 'development-it',
    name: 'Development & IT',
    rating: 4.90,
    skillCount: 459,
    icon: <Code className="w-8 h-8 text-blue-600" />
  },
  {
    id: 'design-creative',
    name: 'Design & Creative',
    rating: 4.95,
    skillCount: 768,
    icon: <Palette className="w-8 h-8 text-purple-600" />
  },
  {
    id: 'sales-marketing',
    name: 'Sales & Marketing',
    rating: 4.88,
    skillCount: 349,
    icon: <TrendingUp className="w-8 h-8 text-green-600" />
  },
  {
    id: 'customer-support',
    name: 'Customer Support',
    rating: 4.91,
    skillCount: 567,
    icon: <HeadphonesIcon className="w-8 h-8 text-orange-600" />
  },
  {
    id: 'finance-accounting',
    name: 'Finance & Accounting',
    rating: 4.89,
    skillCount: 123,
    icon: <Calculator className="w-8 h-8 text-emerald-600" />
  },
  {
    id: 'engineering',
    name: 'Engineering',
    rating: 4.86,
    skillCount: 567,
    icon: <Wrench className="w-8 h-8 text-gray-600" />
  },
  {
    id: 'writing-translation',
    name: 'Writing & Translation',
    rating: 4.89,
    skillCount: 109,
    icon: <PenTool className="w-8 h-8 text-indigo-600" />
  },
  {
    id: 'legal',
    name: 'Legal',
    rating: 4.80,
    skillCount: 289,
    icon: <Scale className="w-8 h-8 text-red-600" />
  },
  {
    id: 'photography',
    name: 'Photography',
    rating: 4.88,
    skillCount: 378,
    icon: <Camera className="w-8 h-8 text-pink-600" />
  }
];

const BrowseTalent: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Browse Talent by Category
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-shrink-0 p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors duration-300">
                  {category.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {category.name}
              </h3>
              
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-4 h-4 text-blue-500 fill-current" />
                <span className="text-sm font-medium text-gray-700">
                  {category.rating.toFixed(2)}/5
                </span>
              </div>
              
              <p className="text-sm text-gray-600">
                {category.skillCount} Skills
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseTalent;