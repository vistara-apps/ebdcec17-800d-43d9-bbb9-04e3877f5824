import { Redis } from '@upstash/redis';

// Initialize Redis client
export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// Database key prefixes
export const DB_KEYS = {
  USER: 'user:',
  PRODUCT: 'product:',
  VALIDATOR: 'validator:',
  PLEDGE: 'pledge:',
  PURCHASE: 'purchase:',
  COMMUNITY: 'community:',
  REVIEW: 'review:',
  USER_PRODUCTS: 'user:products:',
  USER_VALIDATORS: 'user:validators:',
  USER_PURCHASES: 'user:purchases:',
  PRODUCT_PURCHASES: 'product:purchases:',
  PRODUCT_REVIEWS: 'product:reviews:',
  VALIDATOR_PLEDGES: 'validator:pledges:',
  USER_COMMUNITIES: 'user:communities:',
} as const;

// Generic database operations
export class Database {
  static async get<T>(key: string): Promise<T | null> {
    try {
      const data = await redis.get(key);
      return data as T;
    } catch (error) {
      console.error('Database get error:', error);
      return null;
    }
  }

  static async set(key: string, value: any, ttl?: number): Promise<void> {
    try {
      if (ttl) {
        await redis.setex(key, ttl, JSON.stringify(value));
      } else {
        await redis.set(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error('Database set error:', error);
      throw error;
    }
  }

  static async del(key: string): Promise<void> {
    try {
      await redis.del(key);
    } catch (error) {
      console.error('Database del error:', error);
      throw error;
    }
  }

  static async exists(key: string): Promise<boolean> {
    try {
      const result = await redis.exists(key);
      return result === 1;
    } catch (error) {
      console.error('Database exists error:', error);
      return false;
    }
  }

  static async sadd(key: string, ...members: string[]): Promise<void> {
    try {
      await redis.sadd(key, ...members);
    } catch (error) {
      console.error('Database sadd error:', error);
      throw error;
    }
  }

  static async srem(key: string, ...members: string[]): Promise<void> {
    try {
      await redis.srem(key, ...members);
    } catch (error) {
      console.error('Database srem error:', error);
      throw error;
    }
  }

  static async smembers(key: string): Promise<string[]> {
    try {
      return await redis.smembers(key);
    } catch (error) {
      console.error('Database smembers error:', error);
      return [];
    }
  }

  static async incr(key: string): Promise<number> {
    try {
      return await redis.incr(key);
    } catch (error) {
      console.error('Database incr error:', error);
      return 0;
    }
  }

  static async zadd(key: string, score: number, member: string): Promise<void> {
    try {
      await redis.zadd(key, { score, member });
    } catch (error) {
      console.error('Database zadd error:', error);
      throw error;
    }
  }

  static async zrange(key: string, start: number, end: number): Promise<string[]> {
    try {
      return await redis.zrange(key, start, end);
    } catch (error) {
      console.error('Database zrange error:', error);
      return [];
    }
  }

  static async zrevrange(key: string, start: number, end: number): Promise<string[]> {
    try {
      return await redis.zrevrange(key, start, end);
    } catch (error) {
      console.error('Database zrevrange error:', error);
      return [];
    }
  }

  static async expire(key: string, seconds: number): Promise<void> {
    try {
      await redis.expire(key, seconds);
    } catch (error) {
      console.error('Database expire error:', error);
      throw error;
    }
  }
}

