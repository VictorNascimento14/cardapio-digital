
import React, { useMemo } from 'react';
import { CartItem as CartItemType } from '../types';
import CartItem from '../components/CartItem';

interface CartScreenProps {
  cartItems: CartItemType[];
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
  onRemoveItem: (productId: number) => void;
  onBack: () => void;
}

const CartScreen: React.FC<CartScreenProps> = ({ cartItems, onUpdateQuantity, onRemoveItem, onBack }) => {

  const { subtotal, deliveryFee, total } = useMemo(() => {
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const deliveryFee = subtotal > 0 ? 5.00 : 0;
    const total = subtotal + deliveryFee;
    return { subtotal, deliveryFee, total };
  }, [cartItems]);
  
  const formatCurrency = (value: number) => `R$ ${value.toFixed(2).replace('.', ',')}`;

  return (
    <>
      <header className="flex items-center justify-between px-6 pt-8 pb-4 z-10">
        <button onClick={onBack} className="w-10 h-10 rounded-full bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-center text-gray-600 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-xl">arrow_back</span>
        </button>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Meu Carrinho</h2>
        <div className="w-10 h-10"></div>
      </header>
      <main className="flex-1 overflow-y-auto no-scrollbar px-6 pb-6 flex flex-col">
        {cartItems.length > 0 ? (
          <div className="space-y-4 mt-2">
            {cartItems.map((item, index) => (
              <CartItem 
                key={item.id}
                item={item}
                onUpdateQuantity={onUpdateQuantity}
                onRemoveItem={onRemoveItem}
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              />
            ))}
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <span className="material-symbols-outlined text-6xl text-subtext-light dark:text-subtext-dark mb-4">shopping_cart_off</span>
            <h3 className="text-lg font-semibold">Seu carrinho está vazio</h3>
            <p className="text-sm text-subtext-light dark:text-subtext-dark">Adicione itens para vê-los aqui.</p>
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="mt-auto pt-8">
            <div className="bg-white dark:bg-surface-dark p-4 rounded-2xl shadow-sm space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-subtext-light dark:text-subtext-dark">Subtotal</span>
                <span className="font-bold text-gray-900 dark:text-white">{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-subtext-light dark:text-subtext-dark">Taxa de entrega</span>
                <span className="font-bold text-gray-900 dark:text-white">{formatCurrency(deliveryFee)}</span>
              </div>
              <div className="border-t border-gray-100 dark:border-gray-700 my-2"></div>
              <div className="flex justify-between items-center text-base">
                <span className="font-bold text-gray-900 dark:text-white">Total</span>
                <span className="font-bold text-primary text-lg">{formatCurrency(total)}</span>
              </div>
            </div>
            <button className="w-full mt-4 bg-primary text-white font-bold py-4 rounded-2xl shadow-glow active:scale-95 transition-transform mb-4 flex items-center justify-center space-x-2">
              <span>Finalizar Pedido</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        )}
      </main>
    </>
  );
};

export default CartScreen;
