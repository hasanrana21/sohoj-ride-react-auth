import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import firebaseConfig from './firebase.config';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/destinate" } };

  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn : false,
    name : '',
    email: '',
    password: ''
  });

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
  event.preventDefault();
  console.log(user.email, user.password);
  if(newUser && user.email && user.password){
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(res =>{
      const newUserInfo = {...user};
      newUserInfo.error = '';
      newUserInfo.success= true;
      setUser(newUserInfo);
      updateUserName(user.name);
      console.log(user.name);
    })
    .catch(error => {
      const newUserInfo = {...user};
      newUserInfo.error = error.message;
      setUser(newUserInfo);
    });
  }

  if(!newUser && user.email && user.password){
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then(res =>{
      const newUserInfo = {...user};
      newUserInfo.error = '';
      newUserInfo.success= true;
      setUser(newUserInfo);
      console.log('sign in user info', res.user);
      setLoggedInUser(user);
      history.replace(from);
    })
    .catch(error => {
      const newUserInfo = {...user};
      newUserInfo.error = error.message;
      setUser(newUserInfo);
    });
  }
}

const updateUserName = name =>{
  var user = firebase.auth().currentUser;

  user.updateProfile({
    displayName: name
  }).then(function() {
    console.log("User Name Successfully Updated");
  }).catch(function(error) {
    console.log(error);
  });
}


  return (
    <div class="form-area">
      <h1>Log in/Registration</h1>
      <form onSubmit={handleSubmit}>
        {newUser && <input type="text" name="name" onBlur={handleBlur} placeholder="Your name" />}
        <br/>
        <input type="email" placeholder="Your email" name="email" onBlur={handleBlur} required/>
        <br/>
        <input type="password" name="password" placeholder="Your password" onBlur={handleBlur} id="" required/>
        <br/>
        <input type="submit" value={newUser ? 'Sign Up' : 'Sign In'}/>
        <p>Already have an Account?<a href="#"> <span onClick={()=> setNewUser(!newUser)}>{newUser ? 'Log In' : 'Create New Account'}</span> </a></p>
      </form>
      <p style={{color: 'red'}}>{user.error}</p>
      {
        user.success && <p style={{color: 'green'}}>User {newUser ? 'Created' : 'Logged In'} Successfully</p>
      }
      <br/><br/>
      <button class="social-button" onClick={handleGitHubSignIn}><span class="social-icon"><FontAwesomeIcon icon={faGithub} /></span><span class="social-txt">GitHub Sign In</span></button>
    </div>
  );
};

export default Login;