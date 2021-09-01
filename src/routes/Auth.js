import React, { useState } from "react";
import { firebase, auth } from "../fbase";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    console.log(name, value);
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(email, password);
    try {
      let data;
      if (newAccount) {
        console.log("create user");
        data = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        console.log("log in");
        data = await auth.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };
  const toggleAccount = () => setNewAccount((prev) => !prev);
  const onSocialClick = async (event) => {
    const name = event.target.name;
    let provider;
    if(name === "google"){
      provider = new firebase.auth.GoogleAuthProvider();
    }else if(name === "github"){
      provider = new firebase.auth.GithubAuthProvider();
    }
    const data = await auth.signInWithPopup(provider);
    console.log(data);
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />
        <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
      </form>
      {error}
      <div onClick={toggleAccount}> 
        {newAccount ? "Sign In" : "Create Account"}
      </div>
      <div>
        <button onClick={onSocialClick} name="google">Continue with Google</button>
        <button onClick={onSocialClick} name="github">Continue with Github</button>
      </div>
    </div>
  );
};
export default Auth;
