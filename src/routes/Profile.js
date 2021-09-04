import React, { useEffect } from "react";
import { auth, db } from "../fbase"
import { useHistory } from "react-router-dom";

export default ({userObj}) => {
    const history = useHistory();
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
    return (
        <>
            <button onClick={onLogOutClick}>Log Out</button>
        </>
    );
}
