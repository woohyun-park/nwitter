import React, {useEffect, useState} from "react";
import { db, storage } from "../fbase";
import Nweet from "../components/Nweets";
import NweetFactory from "../components/NweetFactory";

const Home = ({userObj}) => {
    const [nweets, setNweets] = useState([]);
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
    return (
        <div>
            <NweetFactory userObj={userObj}/>
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
