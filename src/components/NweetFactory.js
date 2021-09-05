import React, { useState } from "react";
import { db, storage } from "../fbase";
import { v4 as uuidv4 } from "uuid";

const NweetFactory = ({ userObj }) => {
    const [nweet, setNweet] = useState("");
    const [attachment, setAttachment] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        let attachmentUrl = "";
        if(attachment !== ""){
            const fileRef = storage.ref().child(`${userObj.uid}/${uuidv4()}`);
            const response = await fileRef.putString(attachment, "data_url");
            attachmentUrl = await response.ref.getDownloadURL();
        }
        const nweetObj = {
            text: nweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
            attachmentUrl
        };
        await db.collection("nweets").add(nweetObj);
        setNweet("");
        setAttachment("");
    }
    const onChange = (event) => {
        const value = event.target.value;
        setNweet(value);
    }
    const onFileChange = (event) => {
        const files = event.target.files;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            setAttachment(finishedEvent.currentTarget.result);
        }
        reader.readAsDataURL(theFile);
    }
    const onClearAttachment = () => setAttachment(null);
    return (
        <form onSubmit={onSubmit}>
            <input 
                value={nweet}
                onChange={onChange}
                type="text" placeholder="What's on your mind?" maxLength={120}
            />
            <input type="file" accept="image/*" onChange={onFileChange}/>
            <input type="submit" value="Nweet" />
            {attachment && (
                <div>
                    <img src={attachment} width="50px" height="50px" />
                    <button onClick={onClearAttachment}>Clear</button>
                </div>
            )}
        </form>
    );
}

export default NweetFactory;