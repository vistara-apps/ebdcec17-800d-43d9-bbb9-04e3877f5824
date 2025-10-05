'use client';

import { formatCurrency } from '@/lib/utils';
import { TrendingUp, DollarSign, ShoppingCart, Target } from 'lucide-react';

interface RevenueWidgetProps {
  totalRevenue: number;
  monthlyRevenue: number;
  totalSales: number;
  nextMilestone?: number;
  variant?: 'compact' | 'detailed';
}

export function RevenueWidget({
  totalRevenue,
  monthlyRevenue,
  totalSales,
  nextMilestone,
  variant = 'compact'
}: RevenueWidgetProps) {
  const progressToMilestone = nextMilestone ? (totalRevenue / nextMilestone) * 100 : 0;

  if (variant === 'compact') {
    return (
      <div className="glass-card p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-accent bg-opacity-20 rounded-lg">
              <DollarSign className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-sm text-text-muted">Total Revenue</p>
              <p className="text-xl font-bold text-fg">{formatCurrency(totalRevenue)}</p>
            </div>
          </div>
          <TrendingUp className="w-6 h-6 text-success" />
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card p-6">
      <h3 className="font-semibold text-lg text-fg mb-4">Revenue Dashboard</h3>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <DollarSign className="w-5 h-5 text-accent" />
            <span className="text-sm text-text-muted">Total</span>
          </div>
          <p className="text-2xl font-bold text-fg">{formatCurrency(totalRevenue)}</p>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-success" />
            <span className="text-sm text-text-muted">This Month</span>
          </div>
          <p className="text-2xl font-bold text-fg">{formatCurrency(monthlyRevenue)}</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mb-4">
        <ShoppingCart className="w-5 h-5 text-primary" />
        <span className="text-sm text-text-muted">{totalSales} total sales</span>
      </div>

      {nextMilestone && (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-muted">Next milestone</span>
            <span className="text-fg font-medium">{formatCurrency(nextMilestone)}</span>
          </div>
          <div className="w-full bg-surface rounded-full h-2">
            <div
              className="bg-accent h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(progressToMilestone, 100)}%` }}
            />
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-text-muted">
            <Target className="w-4 h-4" />
            <span>{Math.round(progressToMilestone)}% complete</span>
          </div>
        </div>
      )}
    </div>
  );
}

