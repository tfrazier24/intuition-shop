import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../providers/ProductProvider";
import { Navbar } from "../nav/Navbar";
import { Product } from "./Product";
import "./ProductList.css"


export const ProductList = () => {

    const { products, getProducts} = useContext(ProductContext);

    const [ filteredProducts, setFilteredProducts ] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <Navbar />
            <div class="columns is-mobile products-list ">
                    {
                        products.map(product => {
                            return (
                                    <Product key={product.id} product={product} />
                            )
                        })
                    }
            </div>
        </>
    )
}