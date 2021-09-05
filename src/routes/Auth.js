import React, { useState } from "react";
import { firebase, auth } from "../fbase";
import AuthForm from "../components/AuthForm";

const Auth = () => {
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
      <AuthForm />
      <div>
        <button onClick={onSocialClick} name="google">Continue with Google</button>
        <button onClick={onSocialClick} name="github">Continue with Github</button>
      </div>
    </div>
  );
};
export default Auth;
