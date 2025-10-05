'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { MiniKit } from '@worldcoin/minikit-js';
import { User } from '@/lib/types';

interface AuthGuardProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function AuthGuard({ children, fallback }: AuthGuardProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Check if MiniKit is available and user is authenticated
        if (typeof window !== 'undefined' && MiniKit.isInstalled()) {
          // In a real implementation, you'd get the user from MiniKit
          // For now, we'll simulate authentication
          const mockUser: User = {
            fid: '123',
            username: 'testuser',
            walletAddress: '0x123...',
            createdAt: new Date(),
            proTier: false,
            totalRevenue: 0,
          };
          setUser(mockUser);
        } else {
          // Redirect to auth or show fallback
          setUser(null);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
      </div>
    );
  }

  if (!user) {
    return fallback || (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-fg">Welcome to Jara Launch</h2>
          <p className="text-text-muted">Please connect your wallet to continue</p>
          <button
            onClick={() => {
              // In a real implementation, this would trigger MiniKit auth
              console.log('Authenticating...');
            }}
            className="btn-primary"
          >
            Connect Wallet
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

