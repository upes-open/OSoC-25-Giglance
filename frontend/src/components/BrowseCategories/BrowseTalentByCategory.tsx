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
  iconBg: string;
  step: number;
  position: 'left' | 'center' | 'right';
}

const TALENT_CATEGORIES: TalentCategory[] = [
  {
    id: 1,
    name: 'Development & IT',
    rating: 4.90,
    skillCount: 534,
    icon: Code2,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-100',
    step: 1,
    position: 'left'
  },
  {
    id: 2,
    name: 'Design & Creative',
    rating: 4.94,
    skillCount: 768,
    icon: Palette,
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-100',
    step: 1,
    position: 'center'
  },
  {
    id: 3,
    name: 'Sales & Marketing',
    rating: 4.88,
    skillCount: 349,
    icon: TrendingUp,
    iconColor: 'text-green-600',
    iconBg: 'bg-green-100',
    step: 1,
    position: 'right'
  },
  {
    id: 4,
    name: 'Customer Support',
    rating: 4.91,
    skillCount: 567,
    icon: Headphones,
    iconColor: 'text-orange-600',
    iconBg: 'bg-orange-100',
    step: 2,
    position: 'left'
  },
  {
    id: 5,
    name: 'Finance & Accounting',
    rating: 4.89,
    skillCount: 270,
    icon: Calculator,
    iconColor: 'text-indigo-600',
    iconBg: 'bg-indigo-100',
    step: 2,
    position: 'center'
  },
  {
    id: 6,
    name: 'Engineering',
    rating: 4.86,
    skillCount: 512,
    icon: Wrench,
    iconColor: 'text-red-600',
    iconBg: 'bg-red-100',
    step: 2,
    position: 'right'
  },
  {
    id: 7,
    name: 'Writing & Translation',
    rating: 4.92,
    skillCount: 423,
    icon: PenTool,
    iconColor: 'text-teal-600',
    iconBg: 'bg-teal-100',
    step: 3,
    position: 'left'
  },
  {
    id: 8,
    name: 'Legal',
    rating: 4.87,
    skillCount: 156,
    icon: Scale,
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-100',
    step: 3,
    position: 'center'
  },
  {
    id: 9,
    name: 'Photography',
    rating: 4.93,
    skillCount: 298,
    icon: Camera,
    iconColor: 'text-pink-600',
    iconBg: 'bg-pink-100',
    step: 3,
    position: 'right'
  }
];

const BrowseTalentByCategory: React.FC = () => {
  const getStepCategories = (step: number) => {
    return TALENT_CATEGORIES.filter(category => category.step === step);
  };

  const CategoryCard: React.FC<{ category: TalentCategory; isMobile?: boolean }> = ({ category, isMobile = false }) => {
    const IconComponent = category.icon;
    
    return (
      <div className="relative">
        {/* External Icon - Always on top-left */}
        <div className="absolute -top-6 -left-6 z-10">
          <div className={`w-16 h-16 ${category.iconBg} border-3 border-stone-300 rounded-xl flex items-center justify-center shadow-lg`}>
            <IconComponent className={`w-8 h-8 ${category.iconColor}`} />
          </div>
        </div>

        {/* Card */}
        <div className="bg-stone-50 border-3 border-stone-300 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
          {/* Background Watermark Icon - Always on right */}
          <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
            <IconComponent className="w-24 h-24" />
          </div>

          {/* Content */}
          <div className="text-center pt-4">
            <h3 className="text-xl font-semibold text-stone-800 mb-4">
              {category.name}
            </h3>
            
            {/* Rating */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                <svg className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-stone-700 font-medium">
                  {category.rating}
                </span>
              </div>
              <span className="text-stone-600 text-sm">
                ({category.skillCount} skills)
              </span>
            </div>

            {/* Description */}
            <p className="text-stone-600 text-sm leading-relaxed">
              Connect with top-rated professionals who have proven expertise in this category.
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Browse Talent by 
              <span className="text-primary"> Category</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover skilled professionals across various categories and find the perfect match for your project needs. 
              Connect with top-rated experts who can bring your vision to life.
            </p>
          </div>
        </div>
      </div>

      {/* Desktop View - Clean 3x3 Grid */}
      <div className="hidden lg:block max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {/* Step 1 */}
          <div className="grid grid-cols-3 gap-8">
            {getStepCategories(1).map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>

          {/* Step 2 */}
          <div className="grid grid-cols-3 gap-8">
            {getStepCategories(2).map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>

          {/* Step 3 */}
          <div className="grid grid-cols-3 gap-8">
            {getStepCategories(3).map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile View - Single Column with Connecting Lines */}
      <div className="lg:hidden max-w-md mx-auto px-4 py-16">
        <div className="relative">
          {TALENT_CATEGORIES.map((category, index) => (
            <div key={category.id} className="relative mb-12">
              <CategoryCard category={category} isMobile={true} />
              
              {/* Connecting line to next card */}
              {index < TALENT_CATEGORIES.length - 1 && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-12 bg-blue-500"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Find Your Perfect Match?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start your journey today and connect with skilled professionals who can help bring your project to life.
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium text-lg shadow-lg hover:bg-primary/90 transition-colors duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseTalentByCategory;
