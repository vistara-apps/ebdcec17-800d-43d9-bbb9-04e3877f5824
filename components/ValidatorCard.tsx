'use client';

import { Validator } from '@/lib/types';
import { formatCurrency, calculateTimeRemaining } from '@/lib/utils';
import { Clock, Target, Users, TrendingUp } from 'lucide-react';

interface ValidatorCardProps {
  validator: Validator;
  onPledge?: (validator: Validator) => void;
  showPledge?: boolean;
}

export function ValidatorCard({ validator, onPledge, showPledge = true }: ValidatorCardProps) {
  const timeRemaining = calculateTimeRemaining(validator.deadline);
  const progressPercentage = (validator.currentPledges / validator.goalPledges) * 100;

  const handlePledge = () => {
    if (onPledge) {
      onPledge(validator);
    }
  };

  const getStatusColor = () => {
    switch (validator.status) {
      case 'active': return 'text-primary';
      case 'validated': return 'text-success';
      case 'failed': return 'text-error';
      default: return 'text-text-muted';
    }
  };

  const getStatusText = () => {
    switch (validator.status) {
      case 'active': return 'Active';
      case 'validated': return 'Validated! 🎉';
      case 'failed': return 'Failed';
      default: return validator.status;
    }
  };

  return (
    <div className="glass-card p-6 hover:scale-105 transition-transform duration-200">
      {/* Status Badge */}
      <div className="flex items-center justify-between mb-4">
        <span className={`badge ${getStatusColor()}`}>
          {getStatusText()}
        </span>
        {timeRemaining.isExpired && validator.status === 'active' && (
          <span className="text-error text-sm font-medium">Expired</span>
        )}
      </div>

      {/* Idea Description */}
      <h3 className="font-semibold text-lg text-fg mb-3 line-clamp-3">
        {validator.ideaDescription}
      </h3>

      {/* Progress Stats */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-primary" />
            <span>{validator.currentPledges} / {validator.goalPledges} pledges</span>
          </div>
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-accent" />
            <span>{formatCurrency(validator.targetPrice)} each</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-surface rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${Math.min(progressPercentage, 100)}%` }}
          />
        </div>

        {/* Time Remaining */}
        {!timeRemaining.isExpired && validator.status === 'active' && (
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <Clock className="w-4 h-4" />
            <span>
              {timeRemaining.hours}h {timeRemaining.minutes}m remaining
            </span>
          </div>
        )}
      </div>

      {/* Pledge Button */}
      {showPledge && validator.status === 'active' && !timeRemaining.isExpired && (
        <button
          onClick={handlePledge}
          className="btn-primary w-full flex items-center justify-center gap-2"
        >
          <TrendingUp className="w-4 h-4" />
          Back This Idea
        </button>
      )}

      {/* Results for completed validators */}
      {validator.status !== 'active' && (
        <div className="text-center text-sm text-text-muted">
          {validator.status === 'validated' ? (
            <span className="text-success">Idea validated! Funds released to creator.</span>
          ) : (
            <span className="text-error">Idea didn't reach goal. Funds refunded.</span>
          )}
        </div>
      )}
    </div>
  );
}

