import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/header';

const MainRoutes = () => {
    return (
        <Router>
            <Header />
        </Router>
    )
}

export default MainRoutes;