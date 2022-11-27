import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Foods from "./pages/Foods";
import CartPage from "./pages/CartPage";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/foods" element={<Foods />} />
            <Route path="/cart" element={<CartPage />} />
        </Routes>
    )
}

export default MainRoutes;