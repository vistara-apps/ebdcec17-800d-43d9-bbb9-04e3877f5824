// Platform Configuration
export const PLATFORM_FEE_PERCENTAGE = 2;
export const PRO_TIER_MONTHLY_PRICE = 9;

// Validator Configuration
export const VALIDATOR_DURATION_HOURS = 48;
export const VALIDATOR_MIN_PLEDGES = 10;
export const VALIDATOR_MIN_PRICE = 5;
export const VALIDATOR_MAX_PRICE = 50;

// Product Configuration
export const MICRO_SKILL_MIN_PRICE = 5;
export const MICRO_SKILL_MAX_PRICE = 100;
export const DIGITAL_PRODUCT_MIN_PRICE = 10;
export const DIGITAL_PRODUCT_MAX_PRICE = 500;

// Revenue Milestones
export const REVENUE_MILESTONES = [100, 500, 1000, 5000, 10000];

// Community Radar
export const MAX_COMMUNITIES_PER_SEARCH = 10;
export const COMMUNITY_RELEVANCE_THRESHOLD = 0.7;

// Notification Settings
export const NOTIFICATION_TYPES = {
  SALE: 'sale',
  MILESTONE: 'milestone',
  VALIDATOR_UPDATE: 'validator_update',
  COMMUNITY_REMINDER: 'community_reminder',
  REVIEW: 'review',
} as const;

// API Endpoints
export const API_ENDPOINTS = {
  COINBASE_COMMERCE: 'https://api.commerce.coinbase.com',
  FARCASTER_HUB: 'https://hub.farcaster.xyz',
  PINATA_IPFS: 'https://api.pinata.cloud',
  NEYNAR: 'https://api.neynar.com/v2',
} as const;

// Social Platforms
export const SOCIAL_PLATFORMS = {
  FARCASTER: 'farcaster',
  TELEGRAM: 'telegram',
  DISCORD: 'discord',
  REDDIT: 'reddit',
} as const;
