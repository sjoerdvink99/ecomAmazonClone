import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Login.css";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

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
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className='login__signInButton'
            onClick={signIn}
            type='submit'
          >
            Sign in
          </button>
        </form>
        <p>
          By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale.
          Please see our Pirvacy Notice, our Cookies Notice and our
          Internet-Based Ads Notice
        </p>
        <button className='login__registerButton' onClick={register}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}
