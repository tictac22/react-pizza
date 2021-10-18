import React from "react"
import { Provider } from "react-redux";
import { store } from "./redux/store";

import { Home } from "./pages";
import { BrowserRouter as Router ,Switch ,Route} from "react-router-dom";
import { Cart } from "./pages/cart";
  
export const App = () => {
    return(
        <Provider store={store}>
        <Router>
            <Switch>
            <Route exact component={Home} path="/"/>
            <Route exact component={Cart} path="/cart"/>
            </Switch>
        </Router>
        </Provider>
    );
}