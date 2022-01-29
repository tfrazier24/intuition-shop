import React from "react";
import ISLogoBigger from "../../assets/images/ISLogo-96x96-BlueBackground.png"
import ISLogo from "../../assets/images/ISLogo-96x96-WhiteBackground.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Navbar.css"

export const Navbar = () => {
    return (
        <>
        <nav class="navbar is-light pt-1 pb-1" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://localhost:3000/home">
                <img src={ISLogo} class="image" />
                </a>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
        
                </div>

                <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                    <div class="button is-link navbar-item has-dropdown is-hoverable categories-hover">
                    <a class="navbar-link has-text-white">
                    <strong>Categories</strong>
                    </a>

                    <div class="navbar-dropdown">
                    <a class="navbar-item">
                        Men
                    </a>
                    <a class="navbar-item">
                        Women
                    </a>

                    </div>
                </div>
                    <a class="button is-info" href="http://localhost:3000/cart">
                        <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-shopping-cart"></i>
                                <FontAwesomeIcon icon={faShoppingCart} size="sm" />
                            </span>
                            <strong>Cart</strong>
                        </span>
                    </a>
                    <a class="button is-light" href="http://localhost:3000/register">
                        Sign up
                    </a>
                    <a class="button is-light" href="http://localhost:3000/login">
                        Log in
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </nav>
        </>
    )
}