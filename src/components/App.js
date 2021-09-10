import React, { useState, useEffect } from "react";
import AppRouter from "./Router";
import { auth } from "../fbase";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          birthday: new Date(),
          updateProfile: (args) => user.updateProfile(args)
        });
      }else{
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);
  const refreshUser = () => {
    const user = auth.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args)
    });
  }
  return (
    <>
      {init ? (
        <AppRouter
          userObj={userObj}
          refreshUser={refreshUser}
          isLoggedIn={Boolean(userObj)}/>
      ) : (
        "Initializing"
      )}
    </>
  );
}

export default App;
