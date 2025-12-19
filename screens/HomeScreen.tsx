
import React, { useState, useRef, useLayoutEffect } from 'react';
import { Product, Category } from '../types';
import ProductCard from '../components/ProductCard';
import ThemeToggle from '../components/ThemeToggle';

interface HomeScreenProps {
  products: Product[];
  onProductSelect: (product: Product) => void;
  onAddToCart: (product: Product, quantity: number) => void;
  favorites: number[];
  onToggleFavorite: (productId: number) => void;
}

const categories: Category[] = ['Hambúrguer', 'Massas', 'Saladas'];

const HomeScreen: React.FC<HomeScreenProps> = ({ products, onProductSelect, onAddToCart, favorites, onToggleFavorite }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('Hambúrguer');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const categoriesRef = useRef<HTMLDivElement>(null);
  
  useLayoutEffect(() => {
    const activeElement = categoriesRef.current?.querySelector(`[data-category="${activeCategory}"]`);
    if (activeElement) {
        const button = activeElement as HTMLButtonElement;
        setIndicatorStyle({
            width: button.offsetWidth,
            transform: `translateX(${button.offsetLeft}px)`,
        });
    }
  }, [activeCategory]);


  const filteredProducts = products.filter(p => p.category === activeCategory);

  return (
    <>
      <header className="flex items-center justify-between px-6 pt-8 pb-2 z-10">
        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
          <span className="material-symbols-outlined text-2xl text-gray-800 dark:text-gray-200">sort</span>
        </button>
        <ThemeToggle />
      </header>
      <main className="flex-1 overflow-y-auto no-scrollbar px-6 pb-24">
        <div className="mt-4 mb-8">
          <h1 className="text-[28px] font-bold leading-[1.2]">
            Cada Mordida, um <br />
            <span className="text-primary font-bold">Hambúrguer Melhor!</span>
          </h1>
        </div>
        <div ref={categoriesRef} className="relative flex items-center p-2 mb-8 overflow-x-auto no-scrollbar bg-white dark:bg-surface-dark rounded-full">
            <div
                className="absolute h-[calc(100%-1rem)] bg-primary rounded-full shadow-glow transition-all duration-300 ease-in-out"
                style={indicatorStyle}
            />
            {categories.map(category => (
                <button
                key={category}
                data-category={category}
                onClick={() => setActiveCategory(category)}
                className={`relative z-10 px-5 py-2.5 rounded-full whitespace-nowrap transition-colors duration-300 active:scale-95 text-sm font-semibold ${
                    activeCategory === category
                    ? 'text-white'
                    : 'text-subtext-light dark:text-subtext-dark'
                }`}
                >
                {category}
                </button>
            ))}
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-6">
          {filteredProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onSelect={() => onProductSelect(product)}
              onAdd={() => onAddToCart(product, 1)}
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              isFavorite={favorites.includes(product.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default HomeScreen;
