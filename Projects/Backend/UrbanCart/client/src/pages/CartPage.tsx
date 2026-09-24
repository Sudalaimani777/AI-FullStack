import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';

export const CartPage: React.FC = () => {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Your Cart is Empty</h2>
        <p className="text-slate-500 mb-6">Looks like you haven't added any products to your cart yet.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-xl transition-colors shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900">Shopping Cart</h1>
        <button
          onClick={clearCart}
          className="text-sm font-medium text-rose-600 hover:text-rose-700 transition-colors"
        >
          Clear Cart
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Item List */}
        <div className="lg:col-span-2 space-y-4">
          {items.map(({ product, quantity }) => (
            <div
              key={product._id}
              className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 flex items-center gap-4 shadow-sm"
            >
              <img
                src={product.product_image}
                alt={product.product_name}
                className="w-20 h-20 object-cover rounded-xl bg-slate-100 flex-shrink-0"
              />

              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-slate-900 truncate">{product.product_name}</h3>
                <p className="text-xs text-slate-500">{product.product_category}</p>
                <div className="text-sm font-bold text-slate-900 mt-2">
                  ${Number(product.product_price).toFixed(2)}
                </div>
              </div>

              {/* Quantity controls */}
              <div className="flex items-center gap-2 border border-slate-200 rounded-lg p-1">
                <button
                  onClick={() => updateQuantity(product._id, quantity - 1)}
                  className="p-1 text-slate-500 hover:text-slate-800 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-8 text-center text-sm font-semibold">{quantity}</span>
                <button
                  onClick={() => updateQuantity(product._id, quantity + 1)}
                  className="p-1 text-slate-500 hover:text-slate-800 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Remove button */}
              <button
                onClick={() => removeFromCart(product._id)}
                className="p-2 text-slate-400 hover:text-rose-600 transition-colors"
                aria-label="Remove item"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-fit space-y-5">
          <h2 className="text-lg font-bold text-slate-900">Order Summary</h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-slate-600">
              <span>Subtotal</span>
              <span className="font-semibold text-slate-900">${getTotalPrice().toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Shipping</span>
              <span className="text-emerald-600 font-medium">Free</span>
            </div>
            <div className="border-t border-slate-100 pt-3 flex justify-between text-base font-bold text-slate-900">
              <span>Total</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
          </div>

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-xl shadow-md shadow-indigo-200 transition-all cursor-pointer">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
