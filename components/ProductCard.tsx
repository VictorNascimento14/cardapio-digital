
import React, { CSSProperties } from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSelect: () => void;
  onAdd: () => void;
  style?: CSSProperties;
  isFavorite: boolean;
  onToggleFavorite: (productId: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect, onAdd, style, isFavorite, onToggleFavorite }) => {
  const handleAddClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAdd();
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleFavorite(product.id);
  };

  return (
    <div 
      className="flex flex-col p-3 rounded-2xl bg-white dark:bg-surface-dark shadow-sm hover:shadow-md transition-all cursor-pointer opacity-0 animate-fade-in"
      onClick={onSelect}
      style={style}
    >
      <style>{`
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
      <div className="relative w-full aspect-square mb-3">
        <img alt={product.name} className="w-full h-full object-cover rounded-xl" src={product.image} />
        <button 
          onClick={handleFavoriteClick}
          className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/50 dark:bg-black/50 backdrop-blur-sm flex items-center justify-center text-red-500 hover:bg-white/70 dark:hover:bg-black/70 transition-colors"
        >
          <span 
            className="material-symbols-outlined text-sm"
            style={{ fontVariationSettings: isFavorite ? "'FILL' 1" : "'FILL' 0" }}
          >
            favorite
          </span>
        </button>
      </div>
      <h3 className="font-bold text-sm leading-tight text-gray-900 dark:text-gray-100 mb-1">{product.name}</h3>
      <p className="text-[10px] text-subtext-light dark:text-subtext-dark mb-3">{product.shortDescription}</p>
      <div className="flex items-center justify-between mt-auto">
        <span className="font-bold text-sm text-gray-900 dark:text-white">R$ {product.price.toFixed(2).replace('.', ',')}</span>
        <button 
          onClick={handleAddClick} 
          className="w-7 h-7 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black flex items-center justify-center hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined text-sm font-bold">add</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
