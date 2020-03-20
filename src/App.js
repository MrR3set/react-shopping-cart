import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
//(asdasd)
import {ProductContext} from "./contexts/ProductContext"
import {CartContext} from "./contexts/CartContext"

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);
	console.log("artt", cart);
	const addItem = item => {
		// add the given item to the cart
		setCart([...cart,item]);
	};

	return (
		<ProductContext.Provider value={{products, addItem}}>
			<div className="App">
				<CartContext.Provider value={cart}>
					<Navigation/>
				</CartContext.Provider>

				<Route exact path="/">
					<Products/>
				</Route>

				<Route path="/cart">
					<CartContext.Provider value={cart}>
						<ShoppingCart/>
					</CartContext.Provider>
				</Route>
			</div>
		</ProductContext.Provider>
	);
}

export default App;
