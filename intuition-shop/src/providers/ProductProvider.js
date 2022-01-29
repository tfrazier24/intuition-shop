import React, { useState, createContext } from "react";

// The context is imported and used by individual components that need data. A context stores a certain kind of data to be used in your application. Therefore, when you create a dta provider component in React you need to create a context. Nothing is stored in the context when it's defined. At this point, it's just an empty warehouse waiting to be filled.
export const ProductContext = createContext();

// This component establishes what data can be used
export const ProductProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [ searchTerms, setSearchTerms ] = useState("");

    const getProducts = () => {
        return fetch("https://fakestoreapi.com/products/category/electronics")
        .then(res => res.json())
        .then(setProducts)
    }

    const addProduct = productObj => {
        return fetch("https://fakestoreapi.com/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productObj)
        })
        .then(response => response.json())
        .then(getProductsById)
    }

    const userId = localStorage.getItem("intutition_shop_user")

    const getProductsById = () => {
        return fetch(`https://fakestoreapi.com/products/?userId=${userId}`)
            .then(res => res.json())
            .then(setProducts)
    }

    const getProductById = (id) => {
        return fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
    }

    const releaseProduct = productId => {
        return fetch(`https://fakestoreapi.com/products/${productId}`, {
            method: "DELETE"
        })
            .then(getProductsById)
    }

    const completeProduct = productId => {
        return fetch(`https://fakestoreapi.com/products/${productId}`, {
            method: "PATCH",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                completed: true
            })        
        })
        .then(getProducts)
    }

    const uncompleteProduct = productId => {
        return fetch(`https://fakestoreapi.com/products/${productId}`, {
            method: "PATCH",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                completed: false
            })        
        })
        .then(getProducts)
    }

    const completedProductDate = productId => {
        return fetch(`https://fakestoreapi.com/products/${productId}`, {
            method: "PATCH",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                completedDate: new Date()
            })        
        })
        .then(getProducts)
    }

    const updateProduct = product => {
        return fetch(`https://fakestoreapi.com/products/${product.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(product)
        })
          .then(getProducts)
      }

        // You return a context provider which has the 'animals' state, 'getAnimals' function, anmd the 'addAnimal' function as keys. This allows any child elements to access them.
        return (
            <ProductContext.Provider value={{
                products, getProducts, addProduct, getProductsById, getProductById, releaseProduct, completeProduct, uncompleteProduct, completedProductDate, updateProduct, searchTerms, setSearchTerms
            }}>
                {props.children}
            </ProductContext.Provider>
        )
}