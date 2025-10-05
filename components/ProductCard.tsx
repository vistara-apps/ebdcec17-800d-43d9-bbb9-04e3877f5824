'use client';

import { Product } from '@/lib/types';
import { formatCurrency } from '@/lib/utils';
import { ShoppingCart, User, Star } from 'lucide-react';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
  onPurchase?: (product: Product) => void;
  showPurchase?: boolean;
}

export function ProductCard({ product, onPurchase, showPurchase = true }: ProductCardProps) {
  const handlePurchase = () => {
    if (onPurchase) {
      onPurchase(product);
    }
  };

  return (
    <div className="glass-card p-6 hover:scale-105 transition-transform duration-200">
      {/* Product Image */}
      {product.previewImageUrl && (
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
          <Image
            src={product.previewImageUrl}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Product Info */}
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-lg text-fg line-clamp-2">
            {product.title}
          </h3>
          <span className="text-accent font-bold text-xl ml-2">
            {formatCurrency(product.price)}
          </span>
        </div>

        <p className="text-text-muted text-sm line-clamp-3">
          {product.description}
        </p>

        {/* Product Type Badge */}
        <div className="flex items-center gap-2">
          <span className={`badge ${
            product.type === 'micro-skill' ? 'badge-primary' : 'badge-success'
          }`}>
            {product.type === 'micro-skill' ? 'Micro Skill' : 'Digital Product'}
          </span>
          {product.deliveryTime && (
            <span className="text-xs text-text-muted">
              {product.deliveryTime}
            </span>
          )}
        </div>

        {/* Seller Info & Sales */}
        <div className="flex items-center justify-between text-sm text-text-muted">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>Seller</span>
          </div>
          <div className="flex items-center gap-1">
            <ShoppingCart className="w-4 h-4" />
            <span>{product.salesCount} sold</span>
          </div>
        </div>

        {/* Purchase Button */}
        {showPurchase && (
          <button
            onClick={handlePurchase}
            className="btn-primary w-full flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Buy Now
          </button>
        )}
      </div>
    </div>
  );
}

