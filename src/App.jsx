import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

import "./App.css";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/cart' element={<Cart />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
