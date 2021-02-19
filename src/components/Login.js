import { Link } from "react-router-dom";
import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png'
        />
      </Link>

      <div className='login__container'>
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type='text' />
          <h5>Password</h5>
          <input type='password' />
          <button className='login__signInButton'>Sign in</button>
        </form>
        <p>
          By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale.
          Please see our Pirvacy Notice, our Cookies Notice and our
          Internet-Based Ads Notice
        </p>
        <button className='login__registerButton'>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}
