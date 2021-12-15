import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";


export const ApplicationViews = () => {
    return (
        <main>
        <Routes>
            <Route path="/"> <HomePage /></Route>
        </Routes>
        </main>
    );
}