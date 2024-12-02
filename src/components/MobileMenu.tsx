import React from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={onClose} />

      {/* Menu panel */}
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl flex flex-col">
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
          <span className="text-xl font-semibold text-gray-900">Menu</span>
          <button
            onClick={onClose}
            className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <a href="#" className="block px-4 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md">
            Dashboard
          </a>
          <a href="#" className="block px-4 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md">
            NFTs
          </a>
          <a href="#" className="block px-4 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md">
            DeFi
          </a>
          <a href="#" className="block px-4 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md">
            Games
          </a>
          <a href="#" className="block px-4 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md">
            Rankings
          </a>
        </nav>

        <div className="border-t border-gray-200 px-4 py-6">
          <a href="#" className="block px-4 py-2 text-base font-medium text-blue-600 hover:bg-gray-50 rounded-md">
            Connect Wallet
          </a>
        </div>
      </div>
    </div>
  );
};