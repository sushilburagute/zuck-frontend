import React from "react";
import { useWishlist } from "../components/context/WishlistContext";

function WishlistPage(props) {
    const { cartState, cartDispatch } = useWishlist();
    return (
        <>
            <div>
                <h1>Wishlist</h1>
                <div>
                    {cartState.cart.map(({ id, name, price }) => (
                        <div d={id} className="p-10 border-4">
                            <h1>{name}</h1>
                            <p>{price}</p>
                            <button className="p-1 mr-4 bg-gray-200">Add to wishlist</button>
                            <button className="p-1 mr-4 bg-gray-200">Add to cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default WishlistPage;
