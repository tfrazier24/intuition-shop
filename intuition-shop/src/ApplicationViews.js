import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";

export const ApplicationViews = () => {
    return (
        <main>
            <Routes>
                <Route exact path="/" element={<HomePage />} /> 
                
                <Route exact path="/login" element={<Login />} />

                <Route exact path="/register" element={<Register />} />
            </Routes>
        </main>
    );
}