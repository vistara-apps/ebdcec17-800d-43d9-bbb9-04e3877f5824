'use client';

import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Name, Avatar } from '@coinbase/onchainkit/identity';
import { Rocket } from 'lucide-react';
import Link from 'next/link';

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg bg-opacity-95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
              <Rocket className="w-6 h-6 text-bg" />
            </div>
            <span className="text-xl font-bold text-gradient">Jara Launch</span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link href="/dashboard" className="text-fg hover:text-accent transition-colors duration-200">
              Dashboard
            </Link>
            <Link href="/marketplace" className="text-fg hover:text-accent transition-colors duration-200">
              Marketplace
            </Link>
            <Wallet>
              <ConnectWallet>
                <div className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8" />
                  <Name className="text-sm font-medium" />
                </div>
              </ConnectWallet>
            </Wallet>
          </div>
        </div>
      </div>
    </nav>
  );
}
