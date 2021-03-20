import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import firebaseConfig from './firebase.config';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const [user, setUser] = useState({});
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

  var gitHubProvider = new firebase.auth.GithubAuthProvider();
  const handleGitHubSignIn = () =>{
    firebase
    .auth()
    .signInWithPopup(gitHubProvider)
    .then((result) => {
      var credential = result.credential;
      var token = credential.accessToken;
      var user = result.user;
      console.log(user);
      setLoggedInUser(user);
      history.replace(from);
      // ...
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      console.log(errorCode, errorMessage, email, credential);
      // ...
    });
  }


  return (
    <div class="form-area">
      <form onSubmit={handleSubmit(onSubmit)} class="m-auto">
        <input name="email" placeholder="Your Email" ref={register({ required: true })} />
        <br/>
        {errors.email && <span>This Email is required</span>}
        <br/>
        <input name="password" type="password" placeholder="Your Password" ref={register({ required: true })} />
        <br/>
        {errors.password && <span>This Email is required</span>}
        <br/>
        
        <input type="submit" />
      </form>
      <br/><br/>
      <button onClick={handleGitHubSignIn}>GitHub Sign In</button>
    </div>
  );
};

export default Login;