import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import PropTypes from 'prop-types';
import './Login.css';

export default function Login(setTokenThingy: any) {
  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <GoogleOAuthProvider clientId="87928211828-tgq8r75ntrl2d3qn6nujnldl9i99rsct.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={(credentialsResponse) => {
          setTokenThingy.setToken(credentialsResponse.credential);
        }}
        onError={() => {
          console.log("Login failed");
        }}
      />
      </GoogleOAuthProvider>
      </div>
  )
}
