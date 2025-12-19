
import React, { useEffect, useRef } from 'react';

interface BottomNavProps {
    onNavigate: (view: 'home' | 'cart' | 'favorites' | 'search' | 'profile') => void;
    cartItemCount: number;
    activeView: 'home' | 'cart' | 'favorites' | 'search' | 'profile';
}

const tabs = [
    { id: 'profile', icon: 'person' },
    { id: 'favorites', icon: 'favorite' },
    { id: 'home', icon: 'home' },
    { id: 'cart', icon: 'shopping_bag' },
    { id: 'search', icon: 'search' },
];

const BottomNav: React.FC<BottomNavProps> = ({ onNavigate, cartItemCount, activeView }) => {
    const activeIndex = tabs.findIndex(t => t.id === activeView);
    const badgeRef = useRef<HTMLSpanElement>(null);
    const prevCountRef = useRef(cartItemCount);

    useEffect(() => {
        if (cartItemCount > prevCountRef.current && badgeRef.current) {
            badgeRef.current.classList.add('animate-badge-pop');
            const timer = setTimeout(() => {
                badgeRef.current?.classList.remove('animate-badge-pop');
            }, 300);
            return () => clearTimeout(timer);
        }
        prevCountRef.current = cartItemCount;
    }, [cartItemCount]);

    const handleNavClick = (e: React.MouseEvent, tabId: 'home' | 'cart' | 'favorites' | 'search' | 'profile') => {
        e.preventDefault();
        onNavigate(tabId);
    }

    return (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30">
            <div className="magic-navigation">
                <ul className="w-[300px]">
                    {tabs.map((tab) => (
                        <li
                            key={tab.id}
                            className={`list ${activeView === tab.id ? 'active' : ''}`}
                            onClick={(e) => handleNavClick(e, tab.id as any)}
                        >
                            <a href="#">
                                <span className="icon">
                                    <span
                                        className="material-symbols-outlined text-2xl"
                                        style={{ fontVariationSettings: activeView === tab.id ? "'FILL' 1, 'wght' 500" : "'FILL' 0, 'wght' 300" }}
                                    >
                                        {tab.icon}
                                    </span>
                                    {tab.id === 'cart' && cartItemCount > 0 && (
                                        <span
                                            ref={badgeRef}
                                            className="absolute top-1 right-1 w-5 h-5 bg-red-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-white dark:ring-surface-dark shadow-sm"
                                        >
                                            {cartItemCount > 9 ? '9+' : cartItemCount}
                                        </span>
                                    )}
                                </span>
                            </a>
                        </li>
                    ))}
                    <div
                        className="indicator"
                        style={{
                            transform: `translateX(calc(60px * ${activeIndex}))`
                        }}
                    ></div>
                </ul>
            </div>
        </div>
    );
};

export default BottomNav;