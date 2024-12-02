import React from 'react';
import { Stats } from '../components/Stats';
import { Filters } from '../components/Filters';
import { DappCard } from '../components/DappCard';
import { mockDApps } from '../data/mockData';

export const HomePage: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">DApp Rankings</h1>
      
      <Stats />
      <Filters />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockDApps.map((dapp) => (
          <DappCard key={dapp.id} dapp={dapp} />
        ))}
      </div>
    </main>
  );
};