'use client';

import { useState } from 'react';
import { Search, Filter, TrendingUp, Clock, DollarSign } from 'lucide-react';

type ProductType = 'all' | 'micro-skill' | 'digital-product';

const mockProducts = [
  {
    id: 1,
    title: '15-Min Design Review',
    type: 'micro-skill',
    price: 15,
    seller: 'designpro.eth',
    sales: 47,
    rating: 4.9,
    image: '🎨',
  },
  {
    id: 2,
    title: 'Notion Template Pack',
    type: 'digital-product',
    price: 29,
    seller: 'productivity.eth',
    sales: 123,
    rating: 5.0,
    image: '📝',
  },
  {
    id: 3,
    title: 'Code Review Session',
    type: 'micro-skill',
    price: 25,
    seller: 'codemaster.eth',
    sales: 89,
    rating: 4.8,
    image: '💻',
  },
  {
    id: 4,
    title: 'Social Media Templates',
    type: 'digital-product',
    price: 19,
    seller: 'socialguru.eth',
    sales: 156,
    rating: 4.9,
    image: '📱',
  },
];

export default function MarketplacePage() {
  const [filter, setFilter] = useState<ProductType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = mockProducts.filter(product => {
    const matchesFilter = filter === 'all' || product.type === filter;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="glass-card overflow-hidden group cursor-pointer">
              <div className="aspect-video bg-surface flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-200">
                {product.image}
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{product.title}</h3>
                    <p className="text-sm text-text-muted">{product.seller}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-accent">${product.price}</div>
                    <div className="text-xs text-text-muted">
                      {product.type === 'micro-skill' ? 'per session' : 'one-time'}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <div className="flex items-center space-x-1">
                    <span className="text-warning">⭐</span>
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-text-muted">
                    <TrendingUp className="w-4 h-4" />
                    <span>{product.sales} sales</span>
                  </div>
                </div>

                <button className="w-full mt-4 btn-primary">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>

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
