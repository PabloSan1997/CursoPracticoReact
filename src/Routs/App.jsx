import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../coontainers/layout.jsx";
import { Login } from "../coontainers/login.js";
import { RecoveryPassword } from "../coontainers/recoverypasword.jsx";
import { Home } from "../pages/Home.jsx";
import { NotFound } from "../pages/NotFound.jsx";
import "../styles/global.css"

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/recovery" element={<RecoveryPassword />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}
export { App }