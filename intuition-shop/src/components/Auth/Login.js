import React, { useRef, useState } from "react";
import ISLogo from "../../assets/images/ISLogo.png"
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const email = useRef();
    const password = useRef();
    const existDialog = useRef();
    const navigate = useNavigate();
    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    const existingUserCheck = () => {
        return fetch(`http://localhost:8000/users?email=${email.current.value}`)
        .then(res => res.json())
        .then(user => user.length ? user[0] : false)
    }

    const setModalIsOpenToTrue = () => {
        setModalIsOpen(true);
    }
    
    const setModalIsOpenToFalse = () => {
        setModalIsOpen(false);
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
        .then(exists => {
            if (exists) {
                localStorage.setItem("user", exists.id)
                navigate('/');
            } else {
                setModalIsOpenToTrue();
            }
        })
    }

    return (
        <>
            {
            modalIsOpen ? 
                <div class="modal is-active" id="modal">
                    <div class="modal-background"></div>
                    <div class="modal-card">
                        <header class="modal-card-head">
                            <p class="modal-card-title">Uh Oh! We've encountered a problem.</p>
                            <button class="delete" aria-label="close" onClick={setModalIsOpenToFalse}></button>
                        </header>
                        <section class="modal-card-body">We don't recognize that email. Try again or register a new email.</section>
                        <section class="modal-card-body"><a onClick={() => navigate('/register')}>Click here to register a new user</a></section>
                        <footer class="modal-card-foot">
                            <button class="button is-danger mr-auto" aria-label="close" onClick={setModalIsOpenToFalse}>Close</button>
                        </footer>
                    </div>
                </div> : null
            }

            <div class="columns is-centered">
                <div class="column is-one-third mt-6 has-text-centered">
                    <div class="card p-6">
                        <div class="tabs is-centered is-boxed is-medium">
                            <li class="is-active"><a>Login</a></li>
                            <li><a onClick={() => navigate("/register")}>Register</a></li>
                        </div>
                        <div class="field">
                            <div class="card-image">
                                <figure class="image is-128x128 is-inline-block">
                                    <img alt="logo" src={ISLogo} style={{opacity:.5}}/>
                                </figure>
                            </div>
        
                            <p class="control has-icons-left has-icons-right">
                                <input class="input" type="email" placeholder="Email" ref={email} />
                                <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                                </span>
                                <span class="icon is-small is-right">
                                <i class="fas fa-check"></i>
                                </span>
                            </p>
                            </div>
                            <div class="field">
                            <p class="control has-icons-left">
                                <input class="input" type="password" placeholder="Password" ref={password} />
                                <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                                </span>
                            </p>
                            </div>
                            <div class="field">
                            <p class="control has-text-centered">
                                <button class="button is-link mt-5" onClick={handleLogin}>
                                Login
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}