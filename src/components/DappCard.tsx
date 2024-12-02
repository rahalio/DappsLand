import React from 'react';
import { ArrowUpRight, Users, DollarSign, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DApp } from '../types/dapp';

interface DappCardProps {
  dapp: DApp;
}

export const DappCard: React.FC<DappCardProps> = ({ dapp }) => {
  const formatNumber = (num: number) => {
    if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
    return num.toString();
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center space-x-4">
        <img
          src={dapp.logo}
          alt={dapp.name}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="text-lg font-semibold">{dapp.name}</h3>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>{dapp.category}</span>
            <span>•</span>
            <span>{dapp.chain}</span>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="flex flex-col">
          <span className="text-sm text-gray-500 flex items-center">
            <Wallet className="w-4 h-4 mr-1" /> TVL
          </span>
          <span className="font-semibold">${formatNumber(dapp.tvl)}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-500 flex items-center">
            <DollarSign className="w-4 h-4 mr-1" /> Volume 24h
          </span>
          <span className="font-semibold">${formatNumber(dapp.volume24h)}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-500 flex items-center">
            <Users className="w-4 h-4 mr-1" /> Users 24h
          </span>
          <span className="font-semibold">{formatNumber(dapp.users24h)}</span>
        </div>
      </div>

      <Link 
        to={`/dapp/${dapp.id}`}
        className="mt-4 w-full flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-700"
      >
        <span>View Details</span>
        <ArrowUpRight className="w-4 h-4" />
      </Link>
    </div>
  );
};