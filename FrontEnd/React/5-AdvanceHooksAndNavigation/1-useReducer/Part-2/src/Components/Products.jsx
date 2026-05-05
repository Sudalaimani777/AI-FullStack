import { useReducer } from "react"
import { moreProducts, initialProductState } from "../Database/products"
import { filterReducer } from "../Reducers/filterReducer";

const Products = () => {

    const [{ newPrice, discount, rating }, dispatchFilters] = useReducer(filterReducer, initialProductState); //The newPrice, discount and rating are the states that we are going to use in our component and "dispatchFilters" is the function that we are going to use to dispatch the actions to the reducer.


    const handlePriceChange = e => {
        dispatchFilters({
            type: "PRICE",
            payload: e.target.value
        })
    }

    const handleDiscountChange = e => {
        dispatchFilters({
            type: "DISCOUNT",
            payload: e.target.value
        })
    }

    const handleRatingChange = e => {
        dispatchFilters({
            type: "RATING",
            payload: e.target.value
        })
    }

    const filterByPrice = newPrice > 0 ? moreProducts.filter(product => product.newPrice <= newPrice) : moreProducts;
    const filterByDiscount = discount > 0 ? filterByPrice.filter(product => product.discount >= discount) : filterByPrice;
    const filterByRating = rating > 0 ? filterByDiscount.filter(product => product.rating >= rating) : filterByDiscount;


    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <div className="mx-auto max-w-6xl px-4 py-10 lg:py-14">
                <header className="mb-10 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.6)] sm:p-8">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                                Curated Collection
                            </p>
                            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                                Find products that match your vibe
                            </h1>
                            <p className="mt-2 max-w-2xl text-sm text-slate-300 sm:text-base">
                                Dial in your ideal range and browse a refined selection with premium visuals, clear specs, and crisp comparisons.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3 text-xs text-slate-300">
                            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Premium quality</span>
                            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Latest drops</span>
                            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Trusted brands</span>
                        </div>
                    </div>
                </header>

                <section className="mb-10 grid gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur sm:grid-cols-3 sm:gap-6 sm:p-6">
                    <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Max price</label>
                        <input
                            type="number"
                            min="0"
                            onChange={handlePriceChange}
                            placeholder="e.g. 2500"
                            className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 shadow-[0_10px_40px_rgba(15,23,42,0.35)] outline-none ring-emerald-400/40 transition focus:border-emerald-400/60 focus:ring-2"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Min discount</label>
                        <input
                            type="number"
                            min="0"
                            onChange={handleDiscountChange}
                            placeholder="e.g. 20"
                            className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 shadow-[0_10px_40px_rgba(15,23,42,0.35)] outline-none ring-emerald-400/40 transition focus:border-emerald-400/60 focus:ring-2"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Min rating</label>
                        <input
                            type="number"
                            min="0"
                            step="0.1"
                            onChange={handleRatingChange}
                            placeholder="e.g. 4.5"
                            className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 shadow-[0_10px_40px_rgba(15,23,42,0.35)] outline-none ring-emerald-400/40 transition focus:border-emerald-400/60 focus:ring-2"
                        />
                    </div>
                </section>

                <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        filterByRating?.map(product => (
                            <article
                                key={product._id}
                                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-[0_20px_80px_rgba(15,23,42,0.35)] transition hover:-translate-y-1 hover:border-emerald-400/40"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                                <div className="relative flex h-full flex-col">
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <img
                                            src={product.img}
                                            alt={product.alt}
                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white">
                                            {product.discount}% OFF
                                        </div>
                                    </div>
                                    <div className="flex flex-1 flex-col gap-4 p-6">
                                        <div>
                                            <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                                            <p className="text-sm text-slate-400">{product.brand}</p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Price</p>
                                                <p className="text-xl font-semibold text-emerald-200">₹{product.newPrice}</p>
                                            </div>
                                            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                                                {product.rating} ★
                                            </div>
                                        </div>
                                        <div className="grid gap-3 text-sm text-slate-300">
                                            <div className="flex items-center justify-between border-t border-white/5 pt-3">
                                                <span className="text-slate-400">Size</span>
                                                <span>{product.size}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-slate-400">Ideal for</span>
                                                <span>{product.idealFor}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))
                    }
                </section>
            </div>
        </div>
    )
}

export default Products