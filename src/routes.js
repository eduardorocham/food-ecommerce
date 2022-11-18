import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/header';
import Footer from "./components/footer";
import Home from "./pages/Home";
import Cart from './components/cart'

const MainRoutes = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
            <Cart />
        </Router>
    )
}

export default MainRoutes;