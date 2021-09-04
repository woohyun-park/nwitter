import React, {useEffect, useState} from "react";
import { db, storage } from "../fbase";
import Nweet from "../components/Nweets";
import { v4 as uuidv4 } from "uuid";

const Home = ({userObj}) => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    const [attachment, setAttachment] = useState("");
    // const getNweets = async() => {
    //     const dbNweets = await db.collection("nweets").get();
    //     dbNweets.forEach(doc => {
    //         const nweetObject = {
    //             ...doc.data(),
    //             id: doc.id,
    //         }
    //         //리액트 훅에서 set을 사용하면 이전 상탯값이 지워지므로,
    //         //인자를 통해 이전 상탯값을 받아올 수 있도록한다
    //         setNweets((prev) => [nweetObject, ...prev]);
    //     });
    // }
    useEffect(() => {
        // getNweets();
        // collection에 add될때 순서대로 쌓이지 않는다.
        // 따라서 출력하기 전에 orderBy를 사용해서 정렬해주자!
        db.collection("nweets").orderBy("createdAt", "desc").onSnapshot((snapshot) => {
            const nweetArray = snapshot.docs.map((doc) => {
                return ({
                    id: doc.id,
                    ...doc.data(),
                });
            });
            setNweets(nweetArray);
        });
    }, []);
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
        // await db.collection("nweets").add({
        //     text: nweet,
        //     createdAt: Date.now(),
        //     creatorId: userObj.uid,
        // });
        // setNweet("");
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
        <div>
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
            <div>
                {nweets.map((nweet) => (
                    <Nweet
                        key={nweet.id}
                        nweetObj={nweet}
                        isOwner={nweet.creatorId === userObj.uid}
                    />
                ))}
            </div>
        </div>
    );
}
export default Home;
