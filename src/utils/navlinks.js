import {
    CartPage,
    CheckoutPage,
    HomePage,
    LoginPage,
    OffersPage,
    RestaurantsPage,
    WishlistPage,
} from "../pages/index";

export const navLinks = [
    {
        pageComponent: <CartPage />,
        path: "/cart",
    },
    {
        pageComponent: <CheckoutPage />,
        path: "/checkout",
    },
    {
        pageComponent: <LoginPage />,
        path: "/login",
    },
    {
        pageComponent: <OffersPage />,
        path: "/offers",
    },
    {
        pageComponent: <RestaurantsPage />,
        path: "/restaurants",
    },
    {
        pageComponent: <WishlistPage />,
        path: "/wishlist",
    },
    {
        pageComponent: <HomePage />,
        path: "/",
    },
];
