import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { ProductList } from "./components/products/ProductList";
import { ProductProvider } from "./providers/ProductProvider";

export const ApplicationViews = () => {
    return (
        <main>
            <Routes>
                <Route exact path="/" element={<HomePage />} /> 

            
                    <Route exact path="/products" element={<ProductList />} />
                

                <Route exact path="/login" element={<Login />} />

                <Route exact path="/register" element={<Register />} />
            </Routes>
        </main>
    );
}