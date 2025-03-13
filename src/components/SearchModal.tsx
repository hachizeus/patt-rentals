import { X, Search } from 'lucide-react';
import { useState } from 'react';
import { vehicles, properties } from '../data/rentals';
import SearchResults from './search/SearchResults';
import { useSearchNavigation } from '../hooks/useSearchNavigation';
import type { SearchResult } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const { navigateToItem } = useSearchNavigation();

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const searchResults = [...vehicles, ...properties].filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setResults(searchResults);
  };

  const handleItemClick = (item: SearchResult) => {
    navigateToItem(item);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-lg w-full max-w-2xl mx-4">
        <div className="p-4 border-b flex items-center gap-2">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="search"
            placeholder="Search rentals, properties, locations..."
            className="w-full bg-transparent border-none focus:outline-none text-lg"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            autoFocus
          />
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        <SearchResults 
          results={results} 
          query={query} 
          onItemClick={handleItemClick} 
        />
      </div>
    </div>
  );
}