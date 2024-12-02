import React from 'react';
import { Filter } from 'lucide-react';

export const Filters: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-6">
      <div className="flex items-center space-x-2">
        <Filter className="w-5 h-5 text-gray-500" />
        <span className="font-medium">Filters:</span>
      </div>
      
      <select className="bg-white border border-gray-300 rounded-md px-3 py-1.5 text-sm">
        <option>All Chains</option>
        <option>Ethereum</option>
        <option>BSC</option>
        <option>Polygon</option>
      </select>

      <select className="bg-white border border-gray-300 rounded-md px-3 py-1.5 text-sm">
        <option>All Categories</option>
        <option>DEX</option>
        <option>Lending</option>
        <option>NFT</option>
      </select>

      <select className="bg-white border border-gray-300 rounded-md px-3 py-1.5 text-sm">
        <option>Sort by TVL</option>
        <option>Sort by Volume</option>
        <option>Sort by Users</option>
      </select>
    </div>
  );
};