'use client';

import React from 'react';

interface CategoryCard {
  id: string;
  name: string;
  skillsCount: number;
  rating: number;
  icon: string;
}

const categories: CategoryCard[] = [
  { id: '1', name: 'Development & IT', skillsCount: 459, rating: 4.8, icon: '💻' },
  { id: '2', name: 'Design & Creative', skillsCount: 320, rating: 4.9, icon: '🎨' },
  { id: '3', name: 'Sales & Marketing', skillsCount: 280, rating: 4.7, icon: '📈' },
  { id: '4', name: 'Writing & Translation', skillsCount: 200, rating: 4.6, icon: '✍️' },
  { id: '5', name: 'Admin & Customer Support', skillsCount: 350, rating: 4.8, icon: '📞' },
  { id: '6', name: 'Finance & Accounting', skillsCount: 180, rating: 4.9, icon: '💰' },
  { id: '7', name: 'Engineering & Architecture', skillsCount: 220, rating: 4.7, icon: '🏗️' },
  { id: '8', name: 'Legal', skillsCount: 150, rating: 4.6, icon: '⚖️' },
  { id: '9', name: 'Education & Training', skillsCount: 190, rating: 4.8, icon: '📚' },
];

const BrowseTalent: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Browse Talent by Category
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative group bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="p-6 flex flex-col items-center text-center">
              <div className="text-4xl mb-4 animate-bounce">{category.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {category.name}
              </h3>
              <div className="flex items-center mb-2">
                <span className="text-yellow-400">
                  {'★'.repeat(Math.floor(category.rating))}
                </span>
                <span className="text-gray-600 ml-2">
                  {category.rating.toFixed(1)}
                </span>
              </div>
              <p className="text-gray-500">{category.skillsCount} skills</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrowseTalent;
