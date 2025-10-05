'use client';

import { Community } from '@/lib/types';
import { ExternalLink, Users, Clock, MessageCircle } from 'lucide-react';

interface CommunityChipProps {
  community: Community;
  onBookmark?: (community: Community) => void;
  isBookmarked?: boolean;
}

export function CommunityChip({ community, onBookmark, isBookmarked }: CommunityChipProps) {
  const getPlatformIcon = () => {
    switch (community.platform) {
      case 'farcaster':
        return '🟣';
      case 'telegram':
        return '📱';
      case 'discord':
        return '💬';
      case 'reddit':
        return '🟠';
      default:
        return '🌐';
    }
  };

  const getPlatformColor = () => {
    switch (community.platform) {
      case 'farcaster':
        return 'text-purple-400';
      case 'telegram':
        return 'text-blue-400';
      case 'discord':
        return 'text-indigo-400';
      case 'reddit':
        return 'text-orange-400';
      default:
        return 'text-gray-400';
    }
  };

  const handleBookmark = () => {
    if (onBookmark) {
      onBookmark(community);
    }
  };

  return (
    <div className="glass-card p-4 hover:scale-105 transition-transform duration-200">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">{getPlatformIcon()}</span>
          <h4 className="font-medium text-fg">{community.name}</h4>
        </div>
        {onBookmark && (
          <button
            onClick={handleBookmark}
            className={`text-xl ${isBookmarked ? 'text-accent' : 'text-text-muted hover:text-accent'} transition-colors`}
          >
            {isBookmarked ? '★' : '☆'}
          </button>
        )}
      </div>

      <div className="space-y-2 text-sm text-text-muted">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4" />
          <span>{community.memberCount.toLocaleString()} members</span>
        </div>

        {community.relevanceScore > 0 && (
          <div className="flex items-center gap-2">
            <span className="text-accent">★</span>
            <span>{community.relevanceScore}/5 relevance</span>
          </div>
        )}

        {community.bestPostingTimes.length > 0 && (
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Best: {community.bestPostingTimes.join(', ')}</span>
          </div>
        )}
      </div>

      {community.conversationStarters.length > 0 && (
        <div className="mt-3 p-3 bg-surface rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium text-text-muted uppercase tracking-wide">
              Conversation Starter
            </span>
          </div>
          <p className="text-sm text-fg">
            "{community.conversationStarters[0]}"
          </p>
        </div>
      )}

      <a
        href={community.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 btn-secondary w-full flex items-center justify-center gap-2 text-sm"
      >
        <ExternalLink className="w-4 h-4" />
        Join Community
      </a>
    </div>
  );
}

