// User Types
export interface User {
  fid: string;
  username: string;
  walletAddress: string;
  createdAt: Date;
  proTier: boolean;
  totalRevenue: number;
  profileImageUrl?: string;
}

// Product Types
export type ProductType = 'micro-skill' | 'digital-product';
export type ProductStatus = 'draft' | 'active' | 'paused' | 'sold-out';

export interface Product {
  id: string;
  type: ProductType;
  title: string;
  description: string;
  price: number;
  deliveryTime?: string;
  fileUrl?: string;
  previewImageUrl?: string;
  status: ProductStatus;
  salesCount: number;
  createdAt: Date;
  userId: string;
}

// Validator Types
export type ValidatorStatus = 'active' | 'validated' | 'failed' | 'refunded';

export interface Validator {
  id: string;
  ideaDescription: string;
  targetPrice: number;
  deadline: Date;
  currentPledges: number;
  goalPledges: number;
  status: ValidatorStatus;
  createdAt: Date;
  feedbackSummary?: string;
  userId: string;
}

// Pledge Types
export interface Pledge {
  id: string;
  amount: number;
  paymentHash: string;
  refunded: boolean;
  createdAt: Date;
  validatorId: string;
  userId: string;
}

// Purchase Types
export interface Purchase {
  id: string;
  amount: number;
  paymentHash: string;
  nftMinted: boolean;
  createdAt: Date;
  productId: string;
  userId: string;
}

// Community Types
export type CommunityPlatform = 'farcaster' | 'telegram' | 'discord' | 'reddit';

export interface Community {
  id: string;
  platform: CommunityPlatform;
  name: string;
  url: string;
  memberCount: number;
  relevanceScore: number;
  bestPostingTimes: string[];
  conversationStarters: string[];
}

// Review Types
export interface Review {
  id: string;
  rating: number;
  comment: string;
  createdAt: Date;
  productId: string;
  userId: string;
}

// Frame Types
export interface FrameMetadata {
  title: string;
  image: string;
  buttons: FrameButton[];
  postUrl?: string;
}

export interface FrameButton {
  label: string;
  action: 'post' | 'link' | 'mint';
  target?: string;
}
