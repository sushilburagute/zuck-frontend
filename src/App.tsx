import Header from "./components/common/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NotFoundPage } from "./pages/index";
import { navLinks } from "./utils/navlinks";
import { WishlistProvider } from "./components/context/WishlistContext";

function App() {
    return (
        <Router>
            <WishlistProvider>
                <div className="App">
                    <Header />
                </div>
                <Switch>
                    {navLinks.map(({ pageComponent, path }) => (
                        <Route path={path} exact key={path}>
                            {pageComponent}
                        </Route>
                    ))}
                    <Route>
                        <NotFoundPage />
                    </Route>
                </Switch>
            </WishlistProvider>
        </Router>
    );
}

export default App;
