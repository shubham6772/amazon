import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {

    auth.signInWithEmailAndPassword(email, password).then((auth)=>
    {
        navigate("/")
    }).catch(error => alert(error.message))
    e.preventDefault();
  };

  const register = (e) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));

    e.preventDefault();
  };

  return (
    <div className="login">
      <Link to="/" style={{ textdecoration: "none" }}>
        <img
          className="login__logo"
          src="https://logo-logos.com/2016/12/Amazon_logo.png"
          alt="logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="on"
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="on"
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the Amazon Fake Clone Conditions of Use &
          Sale, Please see our <a href="#">Privacy Policy</a> and{" "}
          <a href="#">Terms and Condition</a>
        </p>

        <button className="login__registerButton" onClick={register}>
          Create Your Account
        </button>
      </div>
    </div>
  );
}

export default Login;
