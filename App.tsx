
import React, { useState, useCallback } from 'react';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import CartScreen from './screens/CartScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import BottomNav from './components/BottomNav';
import { Product, CartItem } from './types';
import { products as initialProducts } from './data/products';

type View = 'home' | 'details' | 'cart' | 'favorites' | 'search' | 'profile';

const App: React.FC = () => {
    const [view, setView] = useState<View>('home');
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [cart, setCart] = useState<CartItem[]>([]);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [toastMessage, setToastMessage] = useState<string | null>(null);

    const showToast = useCallback((message: string) => {
        setToastMessage(message);
        setTimeout(() => {
            setToastMessage(null);
        }, 2500);
    }, []);

    const handleProductSelect = useCallback((product: Product) => {
        setSelectedProduct(product);
        setView('details');
    }, []);

    const handleNavigate = useCallback((newView: 'home' | 'cart' | 'favorites' | 'search' | 'profile') => {
        setView(newView);
    }, []);

    const handleBackToHome = useCallback(() => {
        setView('home');
        setSelectedProduct(null);
    }, []);
    
    const handleToggleFavorite = useCallback((productId: number) => {
        setFavorites(prev => {
            const isFav = prev.includes(productId);
            const newFavs = isFav
                ? prev.filter(id => id !== productId)
                : [...prev, productId];
            if (!isFav) {
                showToast('Item adicionado aos favoritos!');
            }
            return newFavs;
        });
    }, [showToast]);


    const addToCart = useCallback((product: Product, quantity: number) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prevCart, { ...product, quantity }];
        });
        showToast('Adicionado ao carrinho!');
    }, [showToast]);
    
    const updateCartQuantity = useCallback((productId: number, newQuantity: number) => {
        setCart(prevCart => {
            if (newQuantity <= 0) {
                return prevCart.filter(item => item.id !== productId);
            }
            return prevCart.map(item =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            );
        });
    }, []);

    const removeFromCart = useCallback((productId: number) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    }, []);


    const renderContent = () => {
        const favoriteProducts = initialProducts.filter(p => favorites.includes(p.id));
        switch (view) {
            case 'details':
                return selectedProduct && (
                    <DetailsScreen 
                        product={selectedProduct} 
                        onBack={handleBackToHome} 
                        onAddToCart={addToCart} 
                        isFavorite={favorites.includes(selectedProduct.id)}
                        onToggleFavorite={handleToggleFavorite}
                    />
                );
            case 'cart':
                return <CartScreen cartItems={cart} onUpdateQuantity={updateCartQuantity} onRemoveItem={removeFromCart} onBack={handleNavigate.bind(null, 'home')} />;
            case 'favorites':
                return (
                    <FavoritesScreen 
                        favoriteProducts={favoriteProducts}
                        onProductSelect={handleProductSelect}
                        onBack={handleBackToHome}
                        onToggleFavorite={handleToggleFavorite}
                        favorites={favorites}
                        onAddToCart={addToCart}
                    />
                );
             case 'search':
                return (
                    <SearchScreen
                        allProducts={initialProducts}
                        onProductSelect={handleProductSelect}
                        onBack={handleBackToHome}
                        onAddToCart={addToCart}
                        favorites={favorites}
                        onToggleFavorite={handleToggleFavorite}
                    />
                );
            case 'profile':
                return <ProfileScreen onBack={handleBackToHome} />;
            case 'home':
            default:
                return (
                    <HomeScreen 
                        products={initialProducts} 
                        onProductSelect={handleProductSelect} 
                        onAddToCart={addToCart} 
                        favorites={favorites}
                        onToggleFavorite={handleToggleFavorite}
                    />
                );
        }
    };
    
    const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div className="flex items-center justify-center min-h-screen py-8">
            <div className="w-full max-w-[380px] h-[812px] bg-background-light dark:bg-background-dark text-gray-900 dark:text-white shadow-2xl overflow-hidden relative flex flex-col sm:rounded-[40px] border border-gray-300 dark:border-gray-800 transition-colors duration-300 ring-8 ring-gray-900/5 dark:ring-white/5">
                <div
                    className={`absolute top-8 left-1/2 -translate-x-1/2 z-50 bg-gray-900/90 dark:bg-gray-100/90 backdrop-blur-sm text-white dark:text-black text-sm font-semibold py-2 px-5 rounded-full shadow-lg flex items-center gap-2 transition-all duration-500 ease-out ${
                        toastMessage ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12 pointer-events-none'
                    }`}
                >
                     <span className="material-symbols-outlined text-base">check_circle</span>
                     <span>{toastMessage}</span>
                </div>

                {renderContent()}
                
                { (view !== 'details' && view !== 'cart') && (
                  <BottomNav 
                    onNavigate={handleNavigate} 
                    cartItemCount={cartItemCount} 
                    activeView={view as 'home' | 'cart' | 'favorites' | 'search' | 'profile'} 
                  />
                )}

                {(view === 'home') && (
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background-light via-background-light/90 to-transparent dark:from-background-dark dark:via-background-dark/90 dark:to-transparent pointer-events-none z-20"></div>
                )}
            </div>
        </div>
    );
};

export default App;