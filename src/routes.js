import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Foods from "./pages/Foods";
import CartPage from "./pages/CartPage";
import FoodsItemPage from "./pages/FoodsItemPage";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/foods" element={<Foods />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/foods/:id" element={<FoodsItemPage />} />
        </Routes>
    )
}

export default MainRoutes;