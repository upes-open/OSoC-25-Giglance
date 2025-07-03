'use client';

import {
  Code,
  Palette,
  Megaphone,
  Pencil,
  Headset,
  Coins,
  Building2,
  Scale,
  GraduationCap,
  Star,
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

interface Category {
  id: string;
  name: string;
  group: 'tech' | 'creative' | 'support' | 'business' | 'education';
  skillsCount: number;
  rating: number;
  icon: JSX.Element;
}

const categories: Category[] = [
  { id: '1', name: 'Development & IT', group: 'tech', skillsCount: 459, rating: 4.8, icon: <Code className="w-8 h-8 text-blue-600" /> },
  { id: '2', name: 'Design & Creative', group: 'creative', skillsCount: 320, rating: 4.9, icon: <Palette className="w-8 h-8 text-pink-500" /> },
  { id: '3', name: 'Sales & Marketing', group: 'business', skillsCount: 280, rating: 4.7, icon: <Megaphone className="w-8 h-8 text-green-500" /> },
  { id: '4', name: 'Writing & Translation', group: 'creative', skillsCount: 200, rating: 4.6, icon: <Pencil className="w-8 h-8 text-yellow-500" /> },
  { id: '5', name: 'Admin & Customer Support', group: 'support', skillsCount: 350, rating: 4.8, icon: <Headset className="w-8 h-8 text-indigo-500" /> },
  { id: '6', name: 'Finance & Accounting', group: 'business', skillsCount: 180, rating: 4.9, icon: <Coins className="w-8 h-8 text-emerald-600" /> },
  { id: '7', name: 'Engineering & Architecture', group: 'tech', skillsCount: 220, rating: 4.7, icon: <Building2 className="w-8 h-8 text-amber-600" /> },
  { id: '8', name: 'Legal', group: 'business', skillsCount: 150, rating: 4.6, icon: <Scale className="w-8 h-8 text-red-500" /> },
  { id: '9', name: 'Education & Training', group: 'education', skillsCount: 190, rating: 4.8, icon: <GraduationCap className="w-8 h-8 text-violet-600" /> },
];

const groups = ['all', 'tech', 'creative', 'support', 'business', 'education'] as const;

const BrowseTalent = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Browse Talent by Category
      </h2>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="flex flex-wrap justify-center gap-2 mb-8">
          {groups.map((group) => (
            <TabsTrigger
              key={group}
              value={group}
              className="capitalize px-4 py-2 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              {group === 'all' ? 'All' : group}
            </TabsTrigger>
          ))}
        </TabsList>

        {groups.map((group) => (
          <TabsContent key={group} value={group}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories
                .filter((c) => group === 'all' || c.group === group)
                .map((category) => (
                  <Card
                    key={category.id}
                    className="group hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                      <div className="transition-transform group-hover:scale-110">
                        {category.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
                      <div className="flex items-center justify-center">
                        {[...Array(Math.floor(category.rating))].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">{category.rating.toFixed(1)}</span>
                      </div>
                      <p className="text-muted-foreground">{category.skillsCount} skills</p>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default BrowseTalent;
