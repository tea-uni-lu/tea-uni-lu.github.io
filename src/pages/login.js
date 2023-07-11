import "../App.css"
import React, { useRef, useState } from 'react'
import db from '../participants'
import Data from "./data"

function Login() {
    // this is the list of participants
    const [participants, setParticipants] = useState(db);
    
    // error messages
    const errors = {
        ID: "ID not found in the DB",
        password: "Invalid password"
    }

    // error and success messages
    const [errorMessage, setErrorMessage] = useState({});
    const [submitted, setSubmitted] = useState(false);

    // Error message renderer
    const renderError = (name) =>
        name === errorMessage.name && (
            <div className="error">{errorMessage.message}</div>
        )

    // Login form
    const loginForm = (
        <div className="form">
            <form onSubmit={submitted}>
                <div className="input-container">
                    <label>Access ID : </label>
                    <input type="text" name="ID" required></input>
                    {renderError("ID")}
                </div>
                <div className="input-container">
                    <label>Password : </label>
                    <input type="password" name="password" required></input>
                    {renderError("password")}
                </div>
                <div className="button-container">
                    <input type="submit"></input>
                </div>
            </form>
        </div>
    );

    const submission = (e) => {
        // prevent rendering
        e.preventDefault();
        
        var { ID, password } = document.forms[0];
        const loginInfo = participants.find((user) => user.ID === ID.value());
        if (loginInfo) {
            if (loginInfo.password !== password.value){
                setErrorMessage({ name: "password", message: errors.pass });
            } else {
                setSubmitted(true);
            }
            setSubmitted(false);
        } else{
            setErrorMessage({ name: "ID", message: errors.ID })
            setSubmitted(false)
        }

        e.reset();

        return submitted
    }

    // TODO!: need to change this so that the redirection will work
    return (
        <div className="app">
          <div className="login-form">
            <h2>Login to access the database</h2>
            {submitted ? <div>Login successful</div> : loginForm}
          </div>
        </div>
      );
}
export default Login;
