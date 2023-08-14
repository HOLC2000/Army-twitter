import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import Header from './Components/Header';
import React from 'react';
import Friends from './Components/Friends_Comps/Friends';
import Friend from './Components/Friends_Comps/Friend';
import DisplayElements from './Components/DisplayElements';

function App() {
  const [likedPost, setLikedPost] = useState([]);
  const [showFeed, setShowFeed] = useState(true);
  const [showLikes, setShowLikes] = useState(false);
  const [showFriends, setShowFriends] = useState(false);
  const reRendCheck = useRef(false);
  const [friends, setFriend] = useState([]);
  const [friendList, setFriendList] = useState([]);

  const likePostHandler = (position) => {
    if (likedPost.includes(position.target.classList[1])) {
      setLikedPost(
        likedPost.filter((like) => like !== position.target.classList[1])
      );
    } else {
      setLikedPost((prevState) => [...prevState, position.target.classList[1]]);
    }
  };

  const likeToShowHandler = () => {
    if (showFeed === true) {
      setShowFeed(false);
      setShowLikes(true);
      console.log(likedPost);
    }
  };
  const feedToShowHandler = () => {
    if (showLikes === true) {
      setShowFeed(true);
      setShowLikes(false);
      console.log(likedPost);
    }
  };

  const friendsToShowHandler = () => {
    console.log(friends, 'this is friendsState');
    if (reRendCheck.current === false) {
      console.log('Reached');
      reRendCheck.current = true;
    } else if ((reRendCheck.current = true)) {
      setFriendList(
        friends.map((friends) => (
          <Friend
            key={friends.id}
            id={friends.id}
            name={friends.name}
            username={friends.username}
            position={friends.id - 1}
          />
        ))
      );
    }

    console.log(friendList);
    setShowFriends(!showFriends);
  };

  const setupValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  return (
    <div className="global">
      <Header
        function_1={likeToShowHandler}
        function_2={feedToShowHandler}
        function_3={friendsToShowHandler}
      />
      <div className="container">
        {showFeed && !showLikes && (
          <DisplayElements
            elements={setupValues}
            function_1={likePostHandler}
          />
        )}
        {!showFeed && showLikes && (
          <DisplayElements elements={likedPost} function_1={likePostHandler} />
        )}
      </div>
      <Friends
        friends={friends}
        setNewFriend={setFriend}
        showFriends={showFriends}
        friendList={friendList}
      />
    </div>
  );
}

export default App;
