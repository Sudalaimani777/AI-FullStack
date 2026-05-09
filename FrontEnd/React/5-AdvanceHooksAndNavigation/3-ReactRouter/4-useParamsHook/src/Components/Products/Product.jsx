import { useContext } from "react"
import CartContext from "../../Context/CartContext"
import { useNavigate } from "react-router-dom";

const ProductCard = ({ products }) => {

    const { cartDispatch } = useContext(CartContext);
    const navigate = useNavigate();

    const handleAddToCart = (product) => {
        cartDispatch({
            type: "ADD_TO_CART",
            payload: product
        })
    }

    const handleRemoveFromCart = (product) => {
        cartDispatch({
            type: "REMOVE_FROM_CART",
            payload: product
        })
    }

    const handleTitleClick = (id) => {
        navigate(`/productDetails/${id}`)
    }

    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {
                products?.map((product, index) => (
                    <article
                        key={product._id}
                        className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/80 p-6 shadow-[0_20px_60px_-40px_rgba(31,20,10,0.7)] backdrop-blur transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_-40px_rgba(31,20,10,0.8)] reveal-up"
                        style={{ animationDelay: `${index * 70}ms` }}
                    >
                        <div className="relative">
                            <img
                                src={product.img}
                                alt={product.alt}
                                className="h-48 w-full rounded-2xl object-cover"
                                loading="lazy"
                            />
                            <span className="absolute left-4 top-4 rounded-full border border-black/10 bg-white/85 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-[#6f625a]">
                                {product.brand}
                            </span>
                        </div>

                        <div className="mt-5" onClick={() => handleTitleClick(product._id)}>
                            <h3 className="font-['Bodoni Moda'] text-2xl text-[#1f1511]">
                                {product.name}
                            </h3>
                            <div className="mt-3 flex items-baseline gap-2 text-sm text-[#6f625a]">
                                <span className="text-lg font-semibold text-[#1f1511]">Rs. {product.price}</span>
                                <span className="text-xs uppercase tracking-[0.2em] text-[#9c8d82]">Rs. {product.oldPrice}</span>
                                <span className="ml-auto rounded-full bg-[#1f1511] px-2 py-1 text-[10px] uppercase tracking-[0.25em] text-[#f7f1e8]">
                                    -{product.discount}%
                                </span>
                            </div>
                            <div className="mt-3 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[#6f625a]">
                                <span>Rating {product.rating}/5</span>
                                <span>Size {product.size}</span>
                            </div>
                        </div>

                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                            <button
                                type="button"
                                onClick={() => handleAddToCart(product)}
                                className="flex-1 rounded-full bg-[#1f1511] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#f7f1e8] transition hover:-translate-y-0.5 hover:bg-[#3a2a24]"
                            >
                                Add to Cart
                            </button>
                            <button
                                type="button"
                                onClick={() => handleRemoveFromCart(product)}
                                className="flex-1 rounded-full border border-black/15 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#1f1511] transition hover:border-[#1f1511] hover:bg-white"
                            >
                                Remove
                            </button>
                        </div>
                    </article>
                ))
            }
        </div>
    )
}

export default ProductCard