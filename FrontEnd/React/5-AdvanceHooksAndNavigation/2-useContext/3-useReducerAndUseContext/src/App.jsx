import { useContext } from "react"
import Navbar from "./Components/Navbar/Navbar"
import Product from "./Components/Products/Product"
import { allProducts } from "./Database/products"
import CartContext from "./Context/CartContext"


function App() {


const {cart} = useContext(CartContext);


  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-10 sm:pt-16">
        <section className="relative overflow-hidden rounded-[32px] border border-black/10 bg-white/70 px-6 py-12 shadow-[var(--shadow)] backdrop-blur sm:px-10 md:px-14 md:py-16">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[radial-gradient(closest-side,rgba(185,136,85,0.5),transparent)] blur-2xl float-slow" />
          <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[radial-gradient(closest-side,rgba(45,30,24,0.25),transparent)] blur-2xl" />

          <div className="relative z-10 max-w-2xl reveal-up">
            <p className="text-xs uppercase tracking-[0.35em] text-[#6f625a]">
              New Season Edit
            </p>
            <h1 className="mt-4 font-['Bodoni Moda'] text-4xl leading-tight text-[#1f1511] sm:text-5xl md:text-6xl">
              The Capsule Collection
            </h1>
            <p className="mt-4 text-base text-[#6f625a] sm:text-lg">
              A refined wardrobe of tailored shirts designed for quiet confidence, everyday ease, and a modern silhouette.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                className="rounded-full bg-[#1f1511] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#f7f1e8] transition hover:-translate-y-0.5 hover:bg-[#3a2a24]"
              >
                Explore Collection
              </button>
              <div className="flex items-center gap-3 rounded-full border border-black/10 bg-white/80 px-5 py-3 text-sm text-[#6f625a]">
                <span className="text-xs uppercase tracking-[0.3em]">Cart</span>
                <span className="font-semibold text-[#1f1511]">{cart.length} items</span>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="reveal-up reveal-delay-1 rounded-2xl border border-black/10 bg-white/80 px-4 py-4 text-sm text-[#6f625a]">
              Precision tailoring with breathable linen blends for warm-weather polish.
            </div>
            <div className="reveal-up reveal-delay-2 rounded-2xl border border-black/10 bg-white/80 px-4 py-4 text-sm text-[#6f625a]">
              Elevated details, soft-touch finishes, and a clean, structured drape.
            </div>
            <div className="reveal-up reveal-delay-3 rounded-2xl border border-black/10 bg-white/80 px-4 py-4 text-sm text-[#6f625a]">
              Complimentary shipping and easy returns for a seamless experience.
            </div>
          </div>
        </section>

        <section className="mt-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#6f625a]">Shop</p>
              <h2 className="mt-2 font-['Bodoni Moda'] text-3xl text-[#1f1511] sm:text-4xl">
                The Collection
              </h2>
              <p className="mt-3 max-w-xl text-sm text-[#6f625a] sm:text-base">
                Curated essentials that pair effortlessly across seasons and settings, crafted with meticulous attention to fit.
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#6f625a]">
              <span>Items</span>
              <span className="font-semibold text-[#1f1511]">{allProducts.length}</span>
            </div>
          </div>
          <div className="mt-8">
            <Product products={allProducts}/>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
