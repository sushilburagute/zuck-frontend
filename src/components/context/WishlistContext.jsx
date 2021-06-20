import { createContext, useContext, useReducer } from "react";
import { cartReducer, initalState } from "../reducer/WishlistReducer";

const WishlistContext = createContext({});

export const WishlistProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initalState);
    return (
        <WishlistContext.Provider value={{ state, dispatch }}>{children}</WishlistContext.Provider>
    );
};

export const useWishlist = () => useContext(WishlistContext);
