import React, { useState } from "react";
// eslint-disable-next-line
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import user_icon from "../assets/person.png";

const LoginSignup = () => {
  const [head, setHead] = useState("Sign Up");
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPassword, setFormPassword] = useState("");

  function handleChange(event) {
    if (event.target.name === "name") {
      setFormName(event.target.value);
    } else if (event.target.name === "email") {
      setFormEmail(event.target.value);
    } else if (event.target.name === "password") {
      setFormPassword(event.target.value);
    }

    console.log(formName, formEmail, formPassword);
  }

  function handleSubmit(event) {}

  return (
    <div className="container">
      <div className="header">
        <h1>{head}</h1>
      </div>

      <div className="inputs">
        <div>
          {head === "Login" ? (
            <div></div>
          ) : (
            <div className="input">
              <img src={user_icon} alt="user img" />
              <input
                type="text"
                placeholder="Enter your name"
                onChange={handleChange}
                name="name"
              />
            </div>
          )}
        </div>

        <br />
        <div className="input">
          <img src={email_icon} alt="img" />
          <input
            type="text"
            placeholder="Enter email"
            onChange={handleChange}
            name="email"
          />
        </div>
        <br />
        <div className="input">
          <img src={password_icon} alt="img" />
          <input
            type="password"
            placeholder="Enter password"
            onChange={handleChange}
            name="password"
          />
        </div>
        <br />
      </div>
      <div className="submit-container">
        <button className="btn btn-primary submit-container">Submit</button>
      </div>
      <div className="loginsignup-container">
        {head === "Login" ? (
          <div></div>
        ) : (
          <div>
            <p>Already have an account? Login 👇</p>
            <button
              className="submit btn btn-primary"
              onClick={() => {
                setHead("Login");
              }}
            >
              Login
            </button>
          </div>
        )}
        {head === "Sign Up" ? (
          <div></div>
        ) : (
          <div>
            <p>New here? Register.👇</p>
            <button
              className="submit btn btn-primary"
              onClick={() => {
                setHead("Sign Up");
              }}
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
