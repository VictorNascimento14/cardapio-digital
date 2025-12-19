
import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';

interface SearchScreenProps {
  allProducts: Product[];
  onProductSelect: (product: Product) => void;
  onBack: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  favorites: number[];
  onToggleFavorite: (productId: number) => void;
}

const SearchScreen: React.FC<SearchScreenProps> = ({
  allProducts,
  onProductSelect,
  onBack,
  onAddToCart,
  favorites,
  onToggleFavorite,
}) => {
  const [query, setQuery] = useState('');

  const filteredProducts = useMemo(() => {
    if (!query.trim()) {
      return [];
    }
    const lowercasedQuery = query.toLowerCase();
    return allProducts.filter(
      product =>
        product.name.toLowerCase().includes(lowercasedQuery) ||
        product.shortDescription.toLowerCase().includes(lowercasedQuery)
    );
  }, [query, allProducts]);

  return (
    <div className="flex flex-col h-full">
      <header className="flex items-center gap-4 px-6 pt-8 pb-4 z-10">
        <button onClick={onBack} className="w-10 h-10 rounded-full bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-center text-gray-600 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors flex-shrink-0">
          <span className="material-symbols-outlined text-xl">arrow_back</span>
        </button>
        <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-subtext-light dark:text-subtext-dark text-xl">search</span>
            <input
                type="text"
                placeholder="Pesquisar item..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                className="w-full h-12 bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-700 rounded-xl pl-12 pr-4 text-sm font-medium text-gray-900 dark:text-white placeholder:text-subtext-light dark:placeholder:text-subtext-dark focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
            />
        </div>
      </header>
      <main className="flex-1 overflow-y-auto no-scrollbar px-6 pb-24">
        {query.trim() && filteredProducts.length > 0 && (
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 mt-2">
            {filteredProducts.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onSelect={() => onProductSelect(product)}
                onAdd={() => onAddToCart(product, 1)}
                isFavorite={favorites.includes(product.id)}
                onToggleFavorite={onToggleFavorite}
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              />
            ))}
          </div>
        )}
        {query.trim() && filteredProducts.length === 0 && (
          <div className="flex-1 flex flex-col items-center justify-center text-center h-full pt-16">
            <span className="material-symbols-outlined text-6xl text-subtext-light dark:text-subtext-dark mb-4">search_off</span>
            <h3 className="text-lg font-semibold">Nenhum item encontrado</h3>
            <p className="text-sm text-subtext-light dark:text-subtext-dark max-w-xs">Tente pesquisar por outro nome ou categoria.</p>
          </div>
        )}
        {!query.trim() && (
            <div className="flex-1 flex flex-col items-center justify-center text-center h-full pt-16">
                <span className="material-symbols-outlined text-6xl text-subtext-light dark:text-subtext-dark mb-4">ramen_dining</span>
                <h3 className="text-lg font-semibold">Encontre sua comida</h3>
                <p className="text-sm text-subtext-light dark:text-subtext-dark max-w-xs">Pesquise por hambúrgueres, saladas, massas e mais.</p>
            </div>
        )}
      </main>
    </div>
  );
};

export default SearchScreen;
