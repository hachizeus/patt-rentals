export interface RentalItem {
  id: string;
  images: string[];
  title: string;
  description: string;
  price: string;
  type: 'vehicle' | 'property';
  category: string;
  features: string[];
  location: string;
}

export interface SearchFilters {
  query: string;
  type: string;
  category: string;
  priceRange: [number, number];
  location: string;
}

export type SearchResult = RentalItem;