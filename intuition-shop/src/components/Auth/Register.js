import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import ISLogo from "../../assets/images/ISLogo.png";

export const Register = () => {

    const firstName = useRef();
    const lastName = useRef();
    const email = useRef();
    const password = useRef();
    const conflictDialog = useRef();
    const navigate = useNavigate();

    const existingUserCheck = () => {
        return fetch(`http://localhost:8000/users?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

    // const passwordValidation = (password, passwordConfirmation) => {
    //     if(password && passwordConfirmation && password === passwordConfirmation){
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    const handleRegister = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    fetch("http://localhost:8000/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: email.current.value,
                            fistName: firstName.current.value,
                            lastName: lastName.current.value,
                            password: password.current.value
                        })
                    })
                        .then(res => res.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                localStorage.setItem("user", createdUser.id)
                                navigate("/")
                            }
                        })
                }
                else {
                    conflictDialog.current.showModal()
                }
            })
        
    }

    return (
        <>
            <div class="columns is-centered">
                <div class="column is-one-third mt-6 has-text-centered">
                    <div class="card p-6">
                        <div class="tabs is-centered is-boxed is-medium">
                            <li><a onClick={() => navigate("/login")}>Login</a></li>
                            <li class="is-active"><a>Register</a></li>
                        </div>
                        <div class="card-image">
                                <figure class="image is-128x128 is-inline-block">
                                    <img alt="logo" src={ISLogo} style={{opacity:.5}}/>
                                </figure>
                        </div>
                        <form className="form_register">
                            <div class="field">
                                <p class="control has-icons-left has-icons-right">
                                    <input class="input" type="name" ref={firstName} placeholder="First Name" required />
                                    <span class="icon is-small is-left">
                                    <i class="fas fa-envelope"></i>
                                    </span>
                                    <span class="icon is-small is-right">
                                    <i class="fas fa-check"></i>
                                    </span>
                                </p>
                            </div>
                            <div class="field">
                                <p class="control has-icons-left has-icons-right">
                                    <input class="input" type="last-name" ref={lastName} placeholder="Last Name" required />
                                    <span class="icon is-small is-left">
                                    <i class="fas fa-envelope"></i>
                                    </span>
                                    <span class="icon is-small is-right">
                                    <i class="fas fa-check"></i>
                                    </span>
                                </p>
                            </div>
                            <div class="field">
                                <p class="control has-icons-left has-icons-right">
                                    <input class="input" type="email" ref={email} placeholder="Email" required />
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
                                    <input class="input" type="password" id="password" ref={password} placeholder="Password" required />
                                    <span class="icon is-small is-left">
                                    <i class="fas fa-lock"></i>
                                    </span>
                                </p>
                            </div>
                            {/* <div class="field">
                                <p class="control has-icons-left">
                                    <input class="input" type="password" id="confirm_password" ref={passwordConfirmation} placeholder="Confirm Password" />
                                    <span class="icon is-small is-left">
                                    <i class="fas fa-lock"></i>
                                    </span>
                                </p>
                            </div> */}
                            <div class="field">
                                <p class="control has-text-centered">
                                    <button class="button is-link mt-5" onClick={handleRegister}>
                                    Register
                                    </button>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}