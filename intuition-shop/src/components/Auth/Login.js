import React from "react";
import ISLogo from "../../assets/images/ISLogo.png"

export const Login = () => {
    return (
        <>
            <div class="columns is-centered">
                <div class="column is-one-third mt-6 has-text-centered">
                    <div class="card p-6">
                        <div class="tabs is-centered is-boxed is-medium">
                            <li class="is-active"><a>Login</a></li>
                            <li><a>Register</a></li>
                        </div>
                        <div class="field">
                            <div class="card-image">
                                <figure class="image is-128x128 is-inline-block">
                                    <img alt="logo" src={ISLogo} style={{opacity:.5}}/>
                                </figure>
                            </div>
        
                            <p class="control has-icons-left has-icons-right">
                                <input class="input" type="email" placeholder="Email" />
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
                                <input class="input" type="password" placeholder="Password" />
                                <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                                </span>
                            </p>
                            </div>
                            <div class="field">
                            <p class="control has-text-centered">
                                <button class="button is-link mt-5">
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