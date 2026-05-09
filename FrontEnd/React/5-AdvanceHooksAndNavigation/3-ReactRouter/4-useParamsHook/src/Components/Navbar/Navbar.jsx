import { useContext } from "react"
import CartContext from "../../Context/CartContext"

const Navbar = () => {

    const {cart} = useContext(CartContext);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f1e8]/80 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
            <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-white/80 text-sm font-semibold text-[#1f1511]">
                    SA
                </div>
                <div>
                    <h2 className="font-['Bodoni Moda'] text-2xl text-[#1f1511]">
                        Shopee Atelier
                    </h2>
                    <p className="text-xs uppercase tracking-[0.35em] text-[#6f625a]">
                        Menswear
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <span className="hidden text-xs uppercase tracking-[0.35em] text-[#6f625a] sm:inline">
                    Cart
                </span>
                <div className="rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm text-[#6f625a]">
                    <span className="font-semibold text-[#1f1511]">{cart.length}</span> items
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar