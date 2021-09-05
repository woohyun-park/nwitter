import React, { useState, useEffect } from "react";
import { auth, db } from "../fbase"
import { useHistory } from "react-router-dom";

export default ({userObj}) => {
    const history = useHistory();
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
    const onLogOutClick = () => {
        auth.signOut();
        history.push("/");
    }
    const getMyNweets = async() => {
        const nweets = await db.collection("nweets")
            .where("creatorId", "==", userObj.uid)
            .orderBy("createdAt")
            .get();
        console.log(nweets.docs.map((doc) => doc.data()));
    }
    useEffect(() => {
        getMyNweets();
    })
    const onChange = (event) => {
        const value = event.target.value;
        setNewDisplayName(value);
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        if(userObj.displayName !== newDisplayName){
            await userObj.updateProfile({
                displayName: newDisplayName
            });
        }
    }
    return (
        <>
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Display name"
                onChange={onChange}
                value={newDisplayName}
            />
            <input
                type="submit"
                value="Update Profile"    
            />
        </form>
            <button onClick={onLogOutClick}>Log Out</button>
        </>
    );
}
