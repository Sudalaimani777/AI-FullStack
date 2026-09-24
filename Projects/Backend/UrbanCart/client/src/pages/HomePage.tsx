import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { ShoppingCart, PackageOpen, Loader2 } from 'lucide-react';
import api from '../api/axios';
import type { Product } from '../types';
import { useCartStore } from '../store/useCartStore';

export const HomePage: React.FC = () => {
  const addToCart = useCartStore((state) => state.addToCart);

  const { data: products, isLoading, error } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await api.get('/products');
      return response.data?.products || response.data || [];
    },
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 rounded-3xl p-8 sm:p-12 text-white mb-12 shadow-xl shadow-indigo-900/10">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 bg-indigo-500/30 text-indigo-300 text-xs font-semibold rounded-full uppercase tracking-wider mb-4 border border-indigo-400/20">
            Urban Essentials 2026
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Curated Quality for Modern Lifestyles
          </h1>
          <p className="text-indigo-100 text-base sm:text-lg mb-6 leading-relaxed">
            Discover handpicked apparel, tech gadgets, and urban accessories engineered for the city.
          </p>
        </div>
      </section>

      {/* Catalog Section */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Featured Products</h2>
            <p className="text-sm text-slate-500">Explore our latest arrivals</p>
          </div>
        </div>

        {isLoading ? (
          <div className="py-20 flex flex-col items-center justify-center text-slate-500">
            <Loader2 className="w-8 h-8 animate-spin text-indigo-600 mb-2" />
            <p className="text-sm">Fetching catalog from API...</p>
          </div>
        ) : error ? (
          <div className="bg-rose-50 border border-rose-200 text-rose-700 p-6 rounded-2xl text-center">
            <p className="font-semibold mb-1">Could not connect to backend server</p>
            <p className="text-sm text-rose-600">
              Ensure your Express API is running on <code className="bg-rose-100 px-2 py-0.5 rounded">http://localhost:5000</code>.
            </p>
          </div>
        ) : !products || products.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
            <PackageOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-slate-700">No products available yet</h3>
            <p className="text-sm text-slate-500 mt-1">
              Add your first product via the API or admin dashboard.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group"
              >
                <div className="aspect-square bg-slate-100 overflow-hidden relative">
                  <img
                    src={product.product_image}
                    alt={product.product_name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback image
                      (e.currentTarget as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80';
                    }}
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-semibold px-2 py-1 rounded-md shadow-sm">
                    {product.product_category}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
                      {product.product_name}
                    </h3>
                    <p className="text-slate-500 text-xs mt-1 line-clamp-2">
                      {product.product_description}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 block">Price</span>
                      <span className="text-lg font-bold text-slate-900">
                        ${Number(product.product_price).toFixed(2)}
                      </span>
                    </div>

                    <button
                      onClick={() => addToCart(product, 1)}
                      className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium px-3.5 py-2 rounded-xl shadow-sm transition-colors cursor-pointer"
                    >
                      <ShoppingCart className="w-3.5 h-3.5" />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
