'use client';

import { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { Product } from '@/lib/types';

type ProductType = 'all' | 'micro-skill' | 'digital-product';

export default function MarketplacePage() {
  const [filter, setFilter] = useState<ProductType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (response.ok) {
          const data = await response.json();
          setProducts(data.products || []);
        }
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product => {
    const matchesFilter = filter === 'all' || product.type === filter;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handlePurchase = (product: Product) => {
    // In a real implementation, this would integrate with Coinbase Commerce
    console.log('Purchasing product:', product);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Discover <span className="text-gradient">Products</span>
          </h1>
          <p className="text-xl text-text-muted">
            Browse micro-skills and digital products from builders on Base.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-muted" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field pl-12"
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                filter === 'all' ? 'bg-accent text-bg' : 'bg-surface text-fg hover:bg-surface-hover'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('micro-skill')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                filter === 'micro-skill' ? 'bg-accent text-bg' : 'bg-surface text-fg hover:bg-surface-hover'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => setFilter('digital-product')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                filter === 'digital-product' ? 'bg-accent text-bg' : 'bg-surface text-fg hover:bg-surface-hover'
              }`}
            >
              Products
            </button>
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onPurchase={handlePurchase}
              />
            ))}
          </div>
        )}

        {filteredProducts.length === 0 && (
          <div className="glass-card p-12 text-center">
            <Filter className="w-16 h-16 text-text-muted mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">No products found</h3>
            <p className="text-text-muted">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
