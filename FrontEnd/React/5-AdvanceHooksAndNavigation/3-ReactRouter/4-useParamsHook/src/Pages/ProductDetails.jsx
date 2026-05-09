import { useParams } from "react-router-dom"
import { allProducts } from "../Database/products";

//useParams is a hook provided by react-router-dom that allows you to access the parameters of the current route. In this case, it can be used in the ProductDetails component to retrieve the id parameter from the URL, which can then be used to fetch and display the details of the specific product.

const ProductDetails = () => {


  // const productParams = useParams(); or
  const { id } = useParams();
  console.log(id);

  const selectedProduct = allProducts.find(({ _id }) => _id === id);
  console.log(selectedProduct);

  return (
    <div className="mx-auto w-full max-w-6xl px-6 pb-20 pt-10 sm:pt-16">
      {!selectedProduct ? (
        <section className="reveal-up rounded-[32px] border border-black/10 bg-white/80 px-6 py-16 text-center shadow-[var(--shadow)] backdrop-blur sm:px-12">
          <p className="text-xs uppercase tracking-[0.35em] text-[#6f625a]">Product</p>
          <h1 className="mt-4 font-['Bodoni Moda'] text-3xl text-[#1f1511] sm:text-4xl">
            Item not found
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-[#6f625a] sm:text-base">
            We could not find the product you are looking for. Please go back and try a different item.
          </p>
        </section>
      ) : (
        <section className="relative overflow-hidden rounded-[32px] border border-black/10 bg-white/70 p-6 shadow-[var(--shadow)] backdrop-blur sm:p-10">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[radial-gradient(closest-side,rgba(185,136,85,0.5),transparent)] blur-2xl float-slow" />
          <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[radial-gradient(closest-side,rgba(45,30,24,0.25),transparent)] blur-2xl" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="reveal-up overflow-hidden rounded-3xl border border-black/10 bg-white/90 p-4 shadow-[0_20px_60px_-40px_rgba(31,20,10,0.6)] sm:p-6">
              <div className="relative">
                <img
                  src={selectedProduct.img}
                  alt={selectedProduct.alt}
                  className="h-[360px] w-full rounded-2xl object-cover sm:h-[520px]"
                />
                <span className="absolute left-6 top-6 rounded-full border border-black/10 bg-white/85 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-[#6f625a]">
                  {selectedProduct.brand}
                </span>
              </div>
            </div>

            <div className="reveal-up reveal-delay-1 rounded-3xl border border-black/10 bg-white/85 p-6 shadow-[0_20px_60px_-40px_rgba(31,20,10,0.55)] backdrop-blur sm:p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-[#6f625a]">Details</p>
              <h1 className="mt-3 font-['Bodoni Moda'] text-3xl text-[#1f1511] sm:text-4xl">
                {selectedProduct.name}
              </h1>
              <p className="mt-4 text-sm text-[#6f625a] sm:text-base">
                Crafted for effortless polish with a clean silhouette and a soft-touch finish.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[#6f625a]">
                <span className="text-2xl font-semibold text-[#1f1511]">Rs. {selectedProduct.price}</span>
                {selectedProduct.oldPrice ? (
                  <span className="text-xs uppercase tracking-[0.2em] text-[#9c8d82]">
                    Rs. {selectedProduct.oldPrice}
                  </span>
                ) : null}
                <span className="rounded-full bg-[#1f1511] px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-[#f7f1e8]">
                  -{selectedProduct.discount}%
                </span>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-black/10 bg-white/80 px-4 py-3 text-sm text-[#6f625a]">
                  <p className="text-[10px] uppercase tracking-[0.25em]">Size</p>
                  <p className="mt-2 font-semibold text-[#1f1511]">{selectedProduct.size}</p>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white/80 px-4 py-3 text-sm text-[#6f625a]">
                  <p className="text-[10px] uppercase tracking-[0.25em]">Ideal For</p>
                  <p className="mt-2 font-semibold text-[#1f1511]">{selectedProduct.idealFor}</p>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white/80 px-4 py-3 text-sm text-[#6f625a]">
                  <p className="text-[10px] uppercase tracking-[0.25em]">Rating</p>
                  <p className="mt-2 font-semibold text-[#1f1511]">{selectedProduct.rating}/5</p>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white/80 px-4 py-3 text-sm text-[#6f625a]">
                  <p className="text-[10px] uppercase tracking-[0.25em]">Brand</p>
                  <p className="mt-2 font-semibold text-[#1f1511]">{selectedProduct.brand}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default ProductDetails