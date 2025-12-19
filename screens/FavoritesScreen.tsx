
import React from 'react';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';

interface FavoritesScreenProps {
  favoriteProducts: Product[];
  onProductSelect: (product: Product) => void;
  onBack: () => void;
  onToggleFavorite: (productId: number) => void;
  favorites: number[];
  onAddToCart: (product: Product, quantity: number) => void;
}

const FavoritesScreen: React.FC<FavoritesScreenProps> = ({ favoriteProducts, onProductSelect, onBack, onToggleFavorite, favorites, onAddToCart }) => {
  return (
    <>
      <header className="flex items-center justify-between px-6 pt-8 pb-4 z-10">
        <button onClick={onBack} className="w-10 h-10 rounded-full bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-center text-gray-600 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-xl">arrow_back</span>
        </button>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Meus Favoritos</h2>
        <div className="w-10 h-10"></div>
      </header>
      <main className="flex-1 overflow-y-auto no-scrollbar px-6 pb-6">
        {favoriteProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 mt-2">
            {favoriteProducts.map((product, index) => (
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
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-center h-full">
            <span className="material-symbols-outlined text-6xl text-subtext-light dark:text-subtext-dark mb-4">favorite</span>
            <h3 className="text-lg font-semibold">Sem favoritos ainda</h3>
            <p className="text-sm text-subtext-light dark:text-subtext-dark">Toque no coração para adicionar itens.</p>
          </div>
        )}
      </main>
    </>
  );
};

export default FavoritesScreen;
