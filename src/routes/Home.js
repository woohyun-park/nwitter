import React, {useEffect, useState} from "react";
import { db } from "../fbase";

const Home = ({userObj}) => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
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
        await db.collection("nweets").add({
            text: nweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
        });
        setNweet("");
    }
    const onChange = (event) => {
        const value = event.target.value;
        setNweet(value);
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    value={nweet}
                    onChange={onChange}
                    type="text" placeholder="What's on your mind?" maxLength={120}/>
                <input type="submit" value="Nweet" />
            </form>
            <div>
                {nweets.map((nweet) => (
                    <div key={nweet.id}>
                        <h4>{nweet.text}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Home;
