import type { SearchResult } from '../../types';
import SearchResultItem from './SearchResultItem';

interface SearchResultsProps {
  results: SearchResult[];
  query: string;
  onItemClick: (item: SearchResult) => void;
}

export default function SearchResults({ results, query, onItemClick }: SearchResultsProps) {
  return (
    <div className="max-h-[60vh] overflow-y-auto">
      {results.length > 0 ? (
        <div className="p-2">
          {results.map((item) => (
            <SearchResultItem 
              key={item.id} 
              item={item} 
              onClick={() => onItemClick(item)} 
            />
          ))}
        </div>
      ) : query ? (
        <div className="p-8 text-center text-gray-500">
          No results found for "{query}"
        </div>
      ) : (
        <div className="p-8 text-center text-gray-500">
          Start typing to search...
        </div>
      )}
    </div>
  );
}