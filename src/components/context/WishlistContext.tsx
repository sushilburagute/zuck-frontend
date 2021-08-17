import { createContext, useContext, useReducer } from "react";
import { cartReducer, initalState } from "../reducer/WishlistReducer";
import { mockData } from "../../utils/mockData";

const WishlistContext = createContext(mockData);

export const WishlistProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initalState);
  return (
    <WishlistContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
