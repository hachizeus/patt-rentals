import { useCallback } from 'react';
import type { SearchResult } from '../types';

export function useSearchNavigation() {
  const navigateToItem = useCallback((item: SearchResult) => {
    const section = item.type === 'vehicle' ? 'rentals' : 'properties';
    const element = document.getElementById(item.id);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Add highlight effect
      element.classList.add('highlight-item');
      setTimeout(() => {
        element.classList.remove('highlight-item');
      }, 2000);
    } else {
      // If element not found, scroll to section
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return { navigateToItem };
}