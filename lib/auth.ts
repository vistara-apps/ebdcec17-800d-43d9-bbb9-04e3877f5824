import { MiniKit } from '@worldcoin/minikit-js';
import { UserModel } from './models/user';
import { User } from './types';

export interface AuthResult {
  success: boolean;
  user?: User;
  error?: string;
}

export class AuthService {
  static async authenticate(fid: string, username?: string, walletAddress?: string): Promise<AuthResult> {
    try {
      // Verify the Farcaster ID (in production, you'd verify with Farcaster Hub)
      if (!fid) {
        return { success: false, error: 'Invalid Farcaster ID' };
      }

      // Check if user exists
      let user = await UserModel.findByFid(fid);

      if (!user) {
        // Create new user
        const userData = {
          fid,
          username: username || `user_${fid}`,
          walletAddress: walletAddress || '',
          proTier: false,
          totalRevenue: 0,
        };

        user = await UserModel.create(userData);
        await UserModel.addToAllUsers(fid);
      }

      return { success: true, user };
    } catch (error) {
      console.error('Authentication error:', error);
      return { success: false, error: 'Authentication failed' };
    }
  }

  static async getCurrentUser(fid: string): Promise<User | null> {
    return await UserModel.findByFid(fid);
  }

  static async updateUserProfile(fid: string, updates: Partial<User>): Promise<User | null> {
    return await UserModel.update(fid, updates);
  }

  static async verifyMiniKitToken(token: string): Promise<boolean> {
    try {
      // In production, you'd verify the MiniKit token
      // For now, we'll do basic validation
      return token && token.length > 0;
    } catch (error) {
      console.error('Token verification error:', error);
      return false;
    }
  }
}

// Middleware for API routes
export async function requireAuth(request: Request): Promise<{ user: User } | { error: string }> {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return { error: 'Missing or invalid authorization header' };
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix

    // Extract FID from token (in production, decode JWT)
    const fid = token; // Simplified for demo

    if (!fid) {
      return { error: 'Invalid token' };
    }

    const user = await UserModel.findByFid(fid);
    if (!user) {
      return { error: 'User not found' };
    }

    return { user };
  } catch (error) {
    console.error('Auth middleware error:', error);
    return { error: 'Authentication failed' };
  }
}

