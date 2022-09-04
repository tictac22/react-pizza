import React from "react"
import { Provider } from "react-redux"
import { store } from "./redux/store"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Layout from "./components/layout"
import { Home } from "./pages"
import { Cart } from "./pages/cart"

export const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Layout>
						<Route exact component={Home} path="/" />
						<Route exact component={Cart} path="/cart" />
					</Layout>
				</Switch>
			</Router>
		</Provider>
	)
}
