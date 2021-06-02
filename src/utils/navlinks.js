import {
    CartPage,
    CheckoutPage,
    HomePage,
    LoginPage,
    OffersPage,
    RestaurantsPage,
    SearchPage,
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
        pageComponent: <SearchPage />,
        path: "/search",
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
