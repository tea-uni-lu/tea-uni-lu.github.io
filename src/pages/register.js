import "../App.css";
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router";


function Register(){
	// ID, name, password, password confirmation, e-mail, affiliation
	const [id, setId] = React.useState("");
	const [lastName, setLastName] = React.useState("");
	const [firstName, setFirstName] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [passwordConfirm, setPasswordConfirm] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [affiliation, setAffiliation] = React.useState("");

	// Error Messages
	const [idMessage, setIdMessage] = React.useState("");
	const [passwordMessage, setPasswordMessage] = React.useState("");
	const [passwordConfirmMessage, setPasswordConfirmMessage] =
	  React.useState("");
	const [emailMessage, setEmailMessage] = React.useState("");

	// Validity checks
	const [isId, setIsId] = React.useState(false);
	const [isPassword, setIsPassword] = React.useState(false);
	const [isPasswordConfirm, setIsPasswordConfirm] = React.useState(false);
	const [isEmail, setIsEmail] = React.useState(false);

	// 
	const navigate = useNavigate();
	// send the e-mail to the developer regarding the permission to register
	const form = useRef()
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm(
			process.env.REACT_APP_SERVICE_ID,
			process.env.REACT_APP_TEMPLATE_ID,
			form.current,
			process.env.REACT_APP_USER_ID
		).then(
			(result) => {
			  console.log(result.text);
			  form.current.reset(); // Use form.current.reset() to reset the form
			  navigate("/thankyou");
			},
			(error) => {
			  console.log(error.text);
			}
		);
	}

	const onChangeFirstName = (e) =>{
		const currentFirstName = e.target.value;
		setFirstName(currentFirstName);
	}

	const onChangeLastName = (e) =>{
		const currentLastName = e.target.value;
		setLastName(currentLastName);
	}

	const onChangeAffiliation = (e) => {
		const currentAffiliation = e.target.value;
		setAffiliation(currentAffiliation);
	}

	const onChangeId = (e) => {
		const currentId = e.target.value;
		setId(currentId);
		const idRegExp = /^[a-zA-z0-9]{4,12}$/;
	
		if (!idRegExp.test(currentId)) {
		  setIdMessage("Only the numeric or Latin characters are allowed");
		  setIsId(false);
		} else {
		  setIdMessage("It's a valid form of ID");
		  setIsId(true);
		}
	};
	
	const onChangePassword = (e) => {
		const currentPassword = e.target.value;
		setPassword(currentPassword);
		const passwordRegExp =
		  /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
		if (!passwordRegExp.test(currentPassword)) {
		  setPasswordMessage(
			"Password: length 8 composed of alphanumeric or special characters"
		  );
		  setIsPassword(false);
		} else {
		  setPasswordMessage("Valid password");
		  setIsPassword(true);
		}
	};

	const onChangePasswordConfirm = (e) => {
		const currentPasswordConfirm = e.target.value;
		setPasswordConfirm(currentPasswordConfirm);
		if (password !== currentPasswordConfirm) {
		  setPasswordConfirmMessage("The passwords are not identical.");
		  setIsPasswordConfirm(false);
		} else {
		  setPasswordConfirmMessage("The passwords are identical.");
		  setIsPasswordConfirm(true);
		}
	  };

	  const onChangeEmail = (e) => {
		const currentEmail = e.target.value;
		setEmail(currentEmail);
		const emailRegExp =
		  /^[A-Za-z0-9_.]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
	 
		if (!emailRegExp.test(currentEmail)) {
		  setEmailMessage("Incorrect e-mail format.");
		  setIsEmail(false);
		} else {
		  setEmailMessage("Valid e-mail format.");
		  setIsEmail(true);
		}
	  };

	  const emailSender = onChangeEmail


	return (
		<div>

		<h2>Register</h2>
		<form ref={form}>
		<div className="form">
			<div className="form-el">
				<label htmlFor="id">ID</label> <br/>
				<input id="id" 
					   name="id"
					   value={id}
					   placeholder="ID"
					   onChange={onChangeId} />
				<p className="Message">{idMessage}</p>
			</div>
		</div>
		<div className="form">
			<div className="form-el">
				<label htmlFor="firstName">First Name</label> <br/>
				<input id="firstName"
					   name="firstName"
					   value={firstName}
					   placeholder="First Name"
					   onChange={onChangeFirstName} />
			</div>
			<div className="form-el">
				<label htmlFor="lastName">Last Name</label> <br/>
				<input id="lastName"
					   name="lastName"
					   value={lastName}
					   placeholder="Last Name"
					   onChange={onChangeLastName} />
			</div>
			<div className="form-el">
				<label htmlFor="affiliation">Affiliation</label> <br/>
				<input id="affiliation"
					   name="affiliation"
					   value={affiliation}
					   placeholder="Affiliation"
					   onChange={onChangeAffiliation} />
			</div>
			<div className="form-el">
				<label htmlFor="password">Password</label> <br/>
				<input id="password" 
					   name="password" 
					   value={password}
					   placeholder="Password" 
					   onChange={onChangePassword} />
				<p className="Message">{passwordMessage}</p>
			</div>
		</div> 
		<div className="form-el">
         <label htmlFor="passwordConfirm">Password confirmation</label> <br />
         <input
           id="passwordConfirm"
           name="passwordConfirm"
           value={passwordConfirm}
		   placeholder="Re-type the password here"
           onChange={onChangePasswordConfirm}
         />
         <p className="message">{passwordConfirmMessage}</p>
       </div>
	   <div className="form-el">
         <label htmlFor="email">Email</label> <br />
         <input
           id="email"
           name="email"
           value={email}
           onChange={onChangeEmail}
         />
         <p className="message">{emailMessage}</p>
       </div>
	   <button type="submit"
	   		   onClick={(e)=>sendEmail(e)}>
			Submit
		</button>
		</form>
	</div>
	)
}

export default Register;