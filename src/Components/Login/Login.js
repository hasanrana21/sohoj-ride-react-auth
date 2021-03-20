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

  const [user, setUser] = useState({
    isSignedIn : false,
    name : '',
    email: '',
    password: '',
    error: '',
    success: false
  });
    const { register, errors } = useForm();
    const onSubmit = data => console.log(data);

  var gitHubProvider = new firebase.auth.GithubAuthProvider();
  const handleGitHubSignIn = () =>{
    firebase
    .auth()
    .signInWithPopup(gitHubProvider)
    .then((result) => {
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

const handleBlur = (event) =>{
  let isFormValid = true;
  if(event.target.name === "email"){
    isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
  }
  if(event.target.name === "password"){
    const isPasswordValid = event.target.value.length > 5;
    const passwordHasNumber = /\d{1}/.test(event.target.value);
    isFormValid = isPasswordValid && passwordHasNumber;
  }
  if(isFormValid){
    const newUserInfo = {...user};
    newUserInfo[event.target.name] = event.target.value;
    setUser(newUserInfo);
  }
}

const handleSubmit = event =>{
  // event.preventDefault();
  console.log(user.email, user.password);
  if(user.email && user.password){
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(res => {
      console.log(res);
      const newUserInfo = {...user};
      newUserInfo.error = '';
      newUserInfo.success = true;
      setUser(newUserInfo);
    })
    .catch(error => {
      const newUserInfo = {...user};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      setUser(newUserInfo);
    });
  }
}


  return (
    <div class="form-area">
      <form onSubmit={handleSubmit(onSubmit)} class="m-auto">
        <input type="text" name="name" onBlur={handleBlur} placeholder="Your Name" />
        <br/>
        <input name="email" type="email" onBlur={handleBlur} placeholder="Your Email" ref={register({ required: true })} />
        <br/>
        {errors.email && <span>This Email is required</span>}
        <br/>
        <input name="password" type="password" onBlur={handleBlur} placeholder="Your Password" ref={register({ required: true })} />
        <br/>
        {errors.password && <span>This Password is required</span>}
        <br/>
        
        <input type="submit" />
      </form>
      <p style={{color: 'red'}}>{user.error}</p>
      {
        user.success && <p style={{color: 'green'}}>User Created Successfully</p>
      }
      <br/><br/>
      <button onClick={handleGitHubSignIn}>GitHub Sign In</button>
    </div>
  );
};

export default Login;