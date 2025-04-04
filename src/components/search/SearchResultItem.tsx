import type { SearchResult } from '../../types';

interface SearchResultItemProps {
  item: SearchResult;
  onClick: () => void;
}

export default function SearchResultItem({ item, onClick }: SearchResultItemProps) {
  return (
    <div 
      onClick={onClick}
      className="flex items-center gap-4 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
    >
      <img 
        src={item.images[0]} 
        alt={item.title} 
        className="w-16 h-16 object-cover rounded-lg"
      />
      <div>
        <h3 className="font-semibold">{item.title}</h3>
        <p className="text-sm text-gray-600">{item.description}</p>
        <p className="text-sm text-gray-500">{item.location} • {item.price}</p>
      </div>
    </div>
  );
}