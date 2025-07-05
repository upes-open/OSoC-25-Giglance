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
}


const TALENT_CATEGORIES: TalentCategory[] = [
  {
    id: 1,
    name: 'Development & IT',
    rating: 4.90,
    skillCount: 534,
    icon: Code2,
    iconColor: 'text-blue-500'
  },
  {
    id: 2,
    name: 'Design & Creative',
    rating: 4.94,
    skillCount: 768,
    icon: Palette,
    iconColor: 'text-purple-500'
  },
  {
    id: 3,
    name: 'Sales & Marketing',
    rating: 4.88,
    skillCount: 349,
    icon: TrendingUp,
    iconColor: 'text-green-500'
  },
  {
    id: 4,
    name: 'Customer Support',
    rating: 4.91,
    skillCount: 567,
    icon: Headphones,
    iconColor: 'text-orange-500'
  },
  {
    id: 5,
    name: 'Finance & Accounting',
    rating: 4.89,
    skillCount: 270,
    icon: Calculator,
    iconColor: 'text-teal-500'
  },
  {
    id: 6,
    name: 'Engineering',
    rating: 4.86,
    skillCount: 512,
    icon: Wrench,
    iconColor: 'text-gray-600'
  },
  {
    id: 7,
    name: 'Writing & Translation',
    rating: 4.92,
    skillCount: 423,
    icon: PenTool,
    iconColor: 'text-indigo-500'
  },
  {
    id: 8,
    name: 'Legal',
    rating: 4.87,
    skillCount: 156,
    icon: Scale,
    iconColor: 'text-red-500'
  },
  {
    id: 9,
    name: 'Photography',
    rating: 4.93,
    skillCount: 298,
    icon: Camera,
    iconColor: 'text-pink-500'
  }
];

// Main Component
const BrowseTalentByCategory: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Browse Talent by Category
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover skilled professionals across various categories and find the perfect match for your project needs.
          </p>
        </div>

        {/* Responsive 3x3 Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TALENT_CATEGORIES.map((category) => {
            const IconComponent = category.icon;
            
            return (
              <div 
                key={category.id}
                className="group bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              >
                {/* Category Icon */}
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-muted/50 group-hover:bg-muted transition-colors duration-300">
                    <IconComponent 
                      className={`w-8 h-8 ${category.iconColor}`} 
                    />
                  </div>
                </div>

                {/* Category Name */}
                <h3 className="text-xl font-semibold text-card-foreground text-center mb-3">
                  {category.name}
                </h3>

                {/* Star Rating */}
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    <span className="font-medium text-card-foreground">
                      {category.rating}/5
                    </span>
                  </div>
                </div>

                {/* Skills Count */}
                <p className="text-muted-foreground text-center">
                  {category.skillCount} Skills
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BrowseTalentByCategory;