import React from 'react';
import { 
  Code2, 
  Palette, 
  TrendingUp, 
  Headphones, 
  Calculator, 
  Wrench,
  PenTool,
  Scale,
  Camera,
  type LucideIcon
} from 'lucide-react';

// TypeScript interface
interface TalentCategory {
  id: number;
  name: string;
  rating: number;
  skillCount: number;
  icon: LucideIcon;
  iconColor: string;
  bgColor: string;
}

const TALENT_CATEGORIES: TalentCategory[] = [
  {
    id: 1,
    name: 'Development & IT',
    rating: 4.90,
    skillCount: 534,
    icon: Code2,
    iconColor: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    id: 2,
    name: 'Design & Creative',
    rating: 4.94,
    skillCount: 768,
    icon: Palette,
    iconColor: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    id: 3,
    name: 'Sales & Marketing',
    rating: 4.88,
    skillCount: 349,
    icon: TrendingUp,
    iconColor: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    id: 4,
    name: 'Customer Support',
    rating: 4.91,
    skillCount: 567,
    icon: Headphones,
    iconColor: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    id: 5,
    name: 'Finance & Accounting',
    rating: 4.89,
    skillCount: 270,
    icon: Calculator,
    iconColor: 'text-teal-600',
    bgColor: 'bg-teal-50'
  },
  {
    id: 6,
    name: 'Engineering',
    rating: 4.86,
    skillCount: 512,
    icon: Wrench,
    iconColor: 'text-gray-600',
    bgColor: 'bg-gray-50'
  },
  {
    id: 7,
    name: 'Writing & Translation',
    rating: 4.92,
    skillCount: 423,
    icon: PenTool,
    iconColor: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  },
  {
    id: 8,
    name: 'Legal',
    rating: 4.87,
    skillCount: 156,
    icon: Scale,
    iconColor: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    id: 9,
    name: 'Photography',
    rating: 4.93,
    skillCount: 298,
    icon: Camera,
    iconColor: 'text-pink-600',
    bgColor: 'bg-pink-50'
  }
];

const BrowseTalentByCategory: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Browse Talent by 
              <span className="text-blue-600"> Category</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover skilled professionals across various categories and find the perfect match for your project needs. 
              Connect with top-rated experts who can bring your vision to life.
            </p>
          </div>
        </div>
      </div>

      {/* Categories Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TALENT_CATEGORIES.map((category) => {
            const IconComponent = category.icon;
            
            return (
              <div 
                key={category.id}
                className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                {/* Icon Container */}
                <div className="mb-6 flex justify-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${category.bgColor} border border-gray-200`}>
                    <IconComponent className={`w-8 h-8 ${category.iconColor}`} />
                  </div>
                </div>

                {/* Category Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center justify-center gap-2">
                    <div className="flex items-center gap-1">
                      <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-gray-900 font-medium">
                        {category.rating}
                      </span>
                    </div>
                    <span className="text-gray-500 text-sm">
                      ({category.skillCount} skills)
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Connect with top-rated professionals who have proven expertise in this category.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ready to Find Your Perfect Match?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Start your journey today and connect with skilled professionals who can help bring your project to life.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium text-lg shadow-lg hover:bg-blue-700 transition-colors duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseTalentByCategory;
