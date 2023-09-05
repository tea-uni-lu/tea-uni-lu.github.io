import "../App.css";
import React, { useRef, useState } from 'react';
import { BrowserRouter as Routes, Route, useNavigate } from 'react-router-dom';
import db from '../participants';
import DropboxGUI from "./dropbox_gui";

function Login({ setLoggedIn, setID }) {
    const [participants, setParticipants] = useState(db);
    const [errorMessage, setErrorMessage] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const errors = {
        ID: "ID not found in the DB",
        password: "Invalid password"
    };

    const renderError = (name) =>
        name === errorMessage.name && (
            <div className="error">{errorMessage.message}</div>
        );

    const navigate = useNavigate();

    const submission = (e) => {
        e.preventDefault();
        
        const { ID, password } = e.target.elements;
        const loginInfo = participants.find((user) => user.ID === ID.value);
    
        if (loginInfo) {
            if (loginInfo.password !== password.value) {
                setErrorMessage({ name: "password", message: errors.password });
                setSubmitted(false);
                return; // Exit the function if the password is incorrect
            } else {
                setID(loginInfo.ID);
                setLoggedIn(true); // Set login status to true on successful login
                setSubmitted(true);
                navigate("/data_page");
            }
        } else {
            setErrorMessage({ name: "ID", message: errors.ID });
            setSubmitted(false);
        }
    
        e.target.reset();
    };
    

    const loginForm = (
        <div className="form">
            <form onSubmit={submission}>
                <div className="input-container">
                    <label>Access ID : </label>
                    <input type="text" name="ID" required />
                    {renderError("ID")}
                </div>
                <div className="input-container">
                    <label>Password : </label>
                    <input type="password" name="password" required />
                    {renderError("password")}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

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
