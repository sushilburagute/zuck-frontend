import Header from "./components/common/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NotFoundPage } from "./pages/index";
import { navLinks } from "./utils/navlinks";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
            </div>
            <Switch>
                {navLinks.map(({ pageComponent, path }) => (
                    <Route path={path} exact>
                        {pageComponent}
                    </Route>
                ))}
                <Route>
                    <NotFoundPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
