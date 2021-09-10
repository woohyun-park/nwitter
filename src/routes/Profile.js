import React, { useState, useEffect } from "react";
import { auth, db } from "../fbase"
import { useHistory } from "react-router-dom";

export default ({userObj, refreshUser}) => {
    const history = useHistory();
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
    const [newBirthday, setNewBirthday] = useState(new Date());
    const onLogOutClick = () => {
        auth.signOut();
        history.push("/");
    }
    const getMyNweets = async() => {
        const nweets = await db.collection("nweets")
            .where("creatorId", "==", userObj.uid)
            .orderBy("createdAt")
            .get();
    }
    useEffect(() => {
        getMyNweets();
    })
    const onChange = (event) => {
        const value = event.target.value;
        setNewDisplayName(value);
    }
    const onBirthdayChange = (event) => {
        const value = event.target.value;
        setNewBirthday(value);
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        if(userObj.displayName !== newDisplayName){
            await userObj.updateProfile({
                displayName: newDisplayName
            });
            refreshUser();
        }
        if(userObj.birthday !== newBirthday){
            userObj.birthday = newBirthday;
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
                type="date"
                onChange={onBirthdayChange}
                value={newBirthday}
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
