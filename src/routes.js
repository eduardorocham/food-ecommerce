import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/header';
import Footer from "./components/footer";
import Home from "./pages/Home";
import Cart from './components/cart'

const MainRoutes = () => {
    const [show, setShow] = useState(false);

    return (
        <Router>
            <Header setShow={setShow} show={show}/>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
            <Cart show={show} setShow={setShow}/>
        </Router>
    )
}

export default MainRoutes;