import { createContext, useReducer } from "react";
import { initialProductState } from "../Database/products";
import { cartReducerFunc } from "../Reducer/cartReducer";


const CartContext = createContext();

export const CartProvider = ({children}) => {


    const [{cart}, cartDispatch] = useReducer(cartReducerFunc, initialProductState);

    return(
        <CartContext.Provider
            value={{cart, cartDispatch}}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;