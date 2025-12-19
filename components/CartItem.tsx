
import React, { CSSProperties } from 'react';
import { CartItem as CartItemType } from '../types';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
  onRemoveItem: (productId: number) => void;
  style?: CSSProperties;
}

const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemoveItem, style }) => {
  const handleQuantityChange = (change: number) => {
    onUpdateQuantity(item.id, item.quantity + change);
  };

  const isSinglePrice = item.name === 'Hambúrguer de Carne' || item.name === 'Salada Fresca';

  return (
     <div 
        className="flex items-center p-3 rounded-2xl bg-white dark:bg-surface-dark shadow-sm opacity-0 animate-fade-in"
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
      <div className="w-20 h-20 flex-shrink-0">
        <img alt={item.name} className="w-full h-full object-cover rounded-xl" src={item.image} />
      </div>
      <div className="flex-1 ml-4 flex flex-col justify-between h-20 py-1">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-sm text-gray-900 dark:text-gray-100 leading-tight">{item.name}</h3>
            <p className="text-[10px] text-subtext-light dark:text-subtext-dark mt-1">{item.shortDescription}</p>
          </div>
          <button onClick={() => onRemoveItem(item.id)} className="text-subtext-light dark:text-subtext-dark hover:text-red-500 transition-colors">
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>
        <div className="flex items-center justify-between mt-auto">
          {isSinglePrice ? (
             <span className="font-bold text-sm text-primary">R$ {item.price.toFixed(2).replace('.', ',')}</span>
          ) : (
            <div className="flex flex-col">
              <span className="text-[10px] text-subtext-light dark:text-subtext-dark leading-none mb-0.5">R$ {item.price.toFixed(2).replace('.', ',')} un.</span>
              <span className="font-bold text-sm text-primary leading-none">R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
            </div>
          )}
          <div className="flex items-center bg-gray-100 dark:bg-black rounded-full px-2 py-1 space-x-3">
            <button onClick={() => handleQuantityChange(-1)} className="w-5 h-5 rounded-full bg-white dark:bg-surface-dark flex items-center justify-center text-gray-600 dark:text-gray-300 shadow-sm hover:text-primary transition-colors text-xs font-bold">-</button>
            <span className="text-xs font-bold text-gray-900 dark:text-white">{item.quantity}</span>
            <button onClick={() => handleQuantityChange(1)} className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center shadow-glow text-xs font-bold">+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
