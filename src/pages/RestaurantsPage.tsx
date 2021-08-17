import React from "react";
import { mockData } from "../utils/mockData";
import { useWishlist } from "../components/context/WishlistContext";

function RestaurantsPage(props) {
    const { cartState, cartDispatch } = useWishlist();
    return (
        <>
            <div>Food</div>
            <div>
                {mockData.map(({ id, name, price }) => (
                    <div d={id} className="p-10 border-4">
                        <h1>{name}</h1>
                        <p>{price}</p>
                        <button className="p-1 mr-4 bg-gray-200">Add to wishlist</button>
                        <button
                            className="p-1 mr-4 bg-gray-200"
                            onClick={() => cartDispatch({ type: "ADD_TO_CART" })}
                        >
                            Add to cart
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default RestaurantsPage;
