
import React from 'react';

interface ProfileScreenProps {
  onBack: () => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col h-full">
      <header className="flex items-center justify-between px-6 pt-8 pb-4 z-10">
        <button onClick={onBack} className="w-10 h-10 rounded-full bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-center text-gray-600 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-xl">arrow_back</span>
        </button>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Meu Perfil</h2>
        <div className="w-10 h-10"></div>
      </header>
      <main className="flex-1 overflow-y-auto no-scrollbar px-6 pb-24">
        <div className="space-y-6 mt-4">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-subtext-light dark:text-subtext-dark mb-2 block">Nome Completo</label>
            <input type="text" id="name" placeholder="Seu nome" className="w-full h-12 bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-700 rounded-xl px-4 text-sm font-medium text-gray-900 dark:text-white placeholder:text-subtext-light dark:placeholder:text-subtext-dark focus:ring-2 focus:ring-primary focus:outline-none transition-shadow" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-subtext-light dark:text-subtext-dark mb-2 block">Email</label>
            <input type="email" id="email" placeholder="seuemail@example.com" className="w-full h-12 bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-700 rounded-xl px-4 text-sm font-medium text-gray-900 dark:text-white placeholder:text-subtext-light dark:placeholder:text-subtext-dark focus:ring-2 focus:ring-primary focus:outline-none transition-shadow" />
          </div>
          <div>
            <label htmlFor="address" className="text-sm font-medium text-subtext-light dark:text-subtext-dark mb-2 block">Endereço de Entrega</label>
            <textarea id="address" placeholder="Seu endereço" rows={3} className="w-full bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-700 rounded-xl p-4 text-sm font-medium text-gray-900 dark:text-white placeholder:text-subtext-light dark:placeholder:text-subtext-dark focus:ring-2 focus:ring-primary focus:outline-none transition-shadow resize-none"></textarea>
          </div>
          <button className="w-full mt-4 bg-primary text-white font-bold py-4 rounded-2xl shadow-glow active:scale-95 transition-transform flex items-center justify-center space-x-2">
            <span>Salvar Alterações</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default ProfileScreen;
