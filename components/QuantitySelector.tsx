
import React from 'react';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ quantity, onQuantityChange }) => {
  const increment = () => onQuantityChange(quantity + 1);
  const decrement = () => onQuantityChange(Math.max(1, quantity - 1));

  return (
    <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-xl p-1 shadow-inner">
      <button onClick={decrement} className="w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 transition">
        <span className="material-symbols-outlined text-sm font-bold">remove</span>
      </button>
      <span className="w-8 text-center font-semibold text-gray-900 dark:text-white">{quantity}</span>
      <button onClick={increment} className="w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 transition">
        <span className="material-symbols-outlined text-sm font-bold">add</span>
      </button>
    </div>
  );
};

export default QuantitySelector;
