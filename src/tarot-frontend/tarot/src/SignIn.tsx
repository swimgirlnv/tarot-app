import React, {createContext, useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";

function SignIn() {

const [errorMessages, setErrorMessages] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false);

// Generate JSX code for error message
const renderErrorMessage = (name: any) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

// JSX code for login form
const renderForm = (
   <div className="form">
     <form>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="uname" required />
         {renderErrorMessage("uname")}
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="pass" required />
         {renderErrorMessage("pass")}
       </div>
       <div className="button-container">
         <input type="submit" />
       </div>
     </form>
   </div>
);

const handleSubmit = (event) => {
  // Prevent page reload
  event.preventDefault();
};

return(
<div className="SignIn">

<form onSubmit={handleSubmit} />

</div>

)
}

export default SignIn;
