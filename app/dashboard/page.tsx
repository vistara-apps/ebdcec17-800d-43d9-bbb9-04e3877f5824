'use client';

import { useState, useEffect } from 'react';
import { Store, FileText, Timer, TrendingUp, Plus, Rocket } from 'lucide-react';
import Link from 'next/link';
import { RevenueWidget } from '@/components/RevenueWidget';
import { ProductCard } from '@/components/ProductCard';
import { ValidatorCard } from '@/components/ValidatorCard';

type PathType = 'micro-skill' | 'digital-product' | 'validator' | null;

export default function DashboardPage() {
  const [selectedPath, setSelectedPath] = useState<PathType>(null);

  const paths = [
    {
      id: 'micro-skill' as PathType,
      icon: Store,
      title: 'Micro-Skill Service',
      description: '15-min services, code reviews, consultations',
      color: 'text-accent',
      bgColor: 'bg-accent',
    },
    {
      id: 'digital-product' as PathType,
      icon: FileText,
      title: 'Digital Product',
      description: 'Templates, guides, design files, code snippets',
      color: 'text-primary',
      bgColor: 'bg-primary',
    },
    {
      id: 'validator' as PathType,
      icon: Timer,
      title: '48-Hour Validator',
      description: 'Test your idea with real pre-orders',
      color: 'text-warning',
      bgColor: 'bg-warning',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Your <span className="text-gradient">Dashboard</span>
          </h1>
          <p className="text-xl text-text-muted">
            Choose how you want to start monetizing your skills today.
          </p>
        </div>

        {/* Revenue Dashboard */}
        <div className="mb-12">
          <RevenueWidget
            totalRevenue={0}
            monthlyRevenue={0}
            totalSales={0}
            nextMilestone={100}
            variant="detailed"
          />
        </div>

        {/* Path Selection */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Choose Your Launch Path</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paths.map((path) => (
              <button
                key={path.id}
                onClick={() => setSelectedPath(path.id)}
                className={`glass-card p-6 text-left transition-all duration-200 ${
                  selectedPath === path.id ? 'ring-2 ring-accent' : ''
                }`}
              >
                <div className={`w-12 h-12 ${path.bgColor} bg-opacity-20 rounded-lg flex items-center justify-center mb-4`}>
                  <path.icon className={`w-6 h-6 ${path.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{path.title}</h3>
                <p className="text-text-muted text-sm">{path.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Create Button */}
        {selectedPath && (
          <div className="text-center">
            <Link
              href={`/create/${selectedPath}`}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <Plus className="w-5 h-5" />
              <span>Create {paths.find(p => p.id === selectedPath)?.title}</span>
            </Link>
          </div>
        )}

        {/* Empty State */}
        {!selectedPath && (
          <div className="glass-card p-12 text-center">
            <div className="w-20 h-20 bg-surface rounded-full flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-10 h-10 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Ready to Launch?</h3>
            <p className="text-text-muted max-w-md mx-auto">
              Select a path above to create your first product. You'll be earning in minutes!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
