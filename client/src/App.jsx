import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="hotels">
                        <Route index element={<List />} />
                        <Route path=":id" element={<Hotel />} />
                    </Route>
                </Route>
                <Route path="*" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default App