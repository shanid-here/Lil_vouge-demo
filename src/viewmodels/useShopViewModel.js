import { useState, useMemo } from 'react';
import { products, categories } from '../models/ProductModel';

export function useShopViewModel() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('default');

  const filteredProducts = useMemo(() => {
    let list = activeCategory === 'All'
      ? [...products]
      : products.filter(p => p.cat === activeCategory);

    if (sortOrder === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortOrder === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [activeCategory, sortOrder]);

  return {
    categories,
    activeCategory,
    setActiveCategory,
    sortOrder,
    setSortOrder,
    filteredProducts
  };
}
