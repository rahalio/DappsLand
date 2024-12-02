import { DApp } from '../types/dapp';

export const mockDApps: DApp[] = [
  {
    id: '1',
    name: 'Uniswap',
    category: 'DEX',
    chain: 'Ethereum',
    logo: 'https://images.unsplash.com/photo-1622790698141-94e30457ef12?w=64&h=64&fit=crop',
    tvl: 3200000000,
    volume24h: 1200000,
    users24h: 45000
  },
  {
    id: '2',
    name: 'Aave',
    category: 'Lending',
    chain: 'Ethereum',
    logo: 'https://images.unsplash.com/photo-1622790698141-94e30457ef12?w=64&h=64&fit=crop',
    tvl: 2800000000,
    volume24h: 890000,
    users24h: 32000
  },
  {
    id: '3',
    name: 'PancakeSwap',
    category: 'DEX',
    chain: 'BSC',
    logo: 'https://images.unsplash.com/photo-1622790698141-94e30457ef12?w=64&h=64&fit=crop',
    tvl: 2100000000,
    volume24h: 950000,
    users24h: 38000
  }
];