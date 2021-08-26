import React from 'react'
import './Login.css';
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react';
import {auth} from './firebase';


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = (e) => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/');
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    const signIn = (e) => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/');
            })
            .catch((error) => {
                alert(error.message);
            })
    }

    return (
        <div className="login">
            <Link to="/">
               <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="amazon-logo"/>
            </Link>

            <div className="login_container">
                <h1>Sign-In</h1>

                <form onSubmit={signIn}>
                    <h5>E-mail or mobile phone number</h5>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

                    <button type="submit" className="login_signInButton" >Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE<a href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940"> Conditions of Use & Sale
                    </a>. Please see our <a href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=200534380">Privacy Notice</a>  our Cookies Notice and our Interest-Based Ads Notice.
                </p>
            </div>

            <div className="login_register">
                <div className="login_register_question">
                    <div className="login_line"></div>
                    <p>New To Amazon?</p>
                    <div className="login_line"></div>
                </div>

                <button className="login_registerButton" onClick={register}>Create your Amazon account</button>
            </div>
     
        </div>
    )
}

export default Login
