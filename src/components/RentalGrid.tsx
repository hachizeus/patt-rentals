import { useState } from 'react';
import RentalCard from './RentalCard';
import { RentalItem } from '../types';
import { ChevronRight } from 'lucide-react';

interface RentalGridProps {
  items: RentalItem[];
  title: string;
  type: 'vehicle' | 'property';
}

export default function RentalGrid({ items, title, type }: RentalGridProps) {
  const [showAll, setShowAll] = useState(false);
  const displayedItems = showAll ? items : items.slice(0, 6);

  return (
    <section id={type === 'vehicle' ? 'rentals' : 'properties'} className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedItems.map((item) => (
            <RentalCard key={item.id} {...item} />
          ))}
        </div>

        {items.length > 6 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              {showAll ? 'Show Less' : 'View All'}
              {!showAll && <ChevronRight className="w-5 h-5" />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}