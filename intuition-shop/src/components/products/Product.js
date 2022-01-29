import React, { useState, useContext, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../../providers/ProductProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css"


export const Product = ({ product }) => {
    
    const { getProductById } = useContext(ProductContext);
    const navigate = useNavigate();

    useEffect(() => {
        getProductById()
    }, []);

    return (
        <>
            <div class="column is-one-quarter product-card is-flex">
                <div class="card product-card">
                    <div class="card-image">
                        <figure class="image product-image-container is-128x128">
                            <img className="product-image is-clickable" src={product.image} />
                        </figure>
                    </div>
                    <div class="card-content mt-4">
                        <div class="media-content">
                            <p class="title is-5 has-text-grey has-text-weight-light">{product.title}</p>
                            <p class="subtitle pt-2 is-4 product-price">$ {product.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}