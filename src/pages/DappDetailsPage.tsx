import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area
} from 'recharts';
import { Users, DollarSign, Wallet, Globe, Shield, Activity } from 'lucide-react';
import { mockDApps } from '../data/mockData';

const mockChartData = [
  { date: '2024-03-01', tvl: 3200000000, volume: 1200000, users: 45000 },
  { date: '2024-03-02', tvl: 3250000000, volume: 1150000, users: 46000 },
  { date: '2024-03-03', tvl: 3300000000, volume: 1300000, users: 47000 },
  { date: '2024-03-04', tvl: 3150000000, volume: 1250000, users: 44000 },
  { date: '2024-03-05', tvl: 3400000000, volume: 1400000, users: 48000 },
];

export const DappDetailsPage: React.FC = () => {
  const { id } = useParams();
  const dapp = mockDApps.find(d => d.id === id);

  if (!dapp) {
    return <Navigate to="/" replace />;
  }

  const formatNumber = (num: number) => {
    if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
    return num.toString();
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src={dapp.logo}
            alt={dapp.name}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold">{dapp.name}</h1>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>{dapp.category}</span>
              <span>•</span>
              <span>{dapp.chain}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Wallet className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-gray-600">Total Value Locked</span>
            </div>
            <p className="text-xl font-semibold mt-2">${formatNumber(dapp.tvl)}</p>
          </div>

          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <DollarSign className="w-5 h-5 text-green-600" />
              <span className="text-sm text-gray-600">24h Volume</span>
            </div>
            <p className="text-xl font-semibold mt-2">${formatNumber(dapp.volume24h)}</p>
          </div>

          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Users className="w-5 h-5 text-purple-600" />
              <span className="text-sm text-gray-600">Active Users (24h)</span>
            </div>
            <p className="text-xl font-semibold mt-2">{formatNumber(dapp.users24h)}</p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">TVL History</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={mockChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="tvl" stroke="#2563eb" fill="#dbeafe" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Volume & Users</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Line yAxisId="left" type="monotone" dataKey="volume" stroke="#16a34a" />
                  <Line yAxisId="right" type="monotone" dataKey="users" stroke="#9333ea" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Security</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-green-600" />
                <span>Audited by Certik</span>
              </div>
              <div className="flex items-center space-x-3">
                <Activity className="w-5 h-5 text-green-600" />
                <span>No security incidents reported</span>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Resources</h2>
            <div className="space-y-4">
              <a 
                href="#" 
                className="flex items-center space-x-3 text-blue-600 hover:text-blue-700"
              >
                <Globe className="w-5 h-5" />
                <span>Website</span>
              </a>
              <a 
                href="#" 
                className="flex items-center space-x-3 text-blue-600 hover:text-blue-700"
              >
                <Shield className="w-5 h-5" />
                <span>Documentation</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};