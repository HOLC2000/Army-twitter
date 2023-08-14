import { useEffect, useState, useRef } from 'react';
import classes from './Friends.module.css';
import Friend from './Friend';

const Friends = (props) => {
  const [people, setPeople] = useState([]);
  const friendsId = useRef(0);

  const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error('Something went wrong');
    }

    const responseData = await response.json();
    setPeople(responseData);
  };

  const getFriends = async (friendsId) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${friendsId}`
    );

    console.log(`https://jsonplaceholder.typicode.com/users/${friendsId}`);

    if (!response.ok) {
      throw new Error('Something went wrong');
    }

    const responseData = await response.json();
    console.log(responseData);
    props.setNewFriend((oldFriends) => {
      oldFriends.map((friends) => {
        if (friends.id === responseData.id) {
        } else {
          return [...oldFriends];
        }
      });
      return [...oldFriends, responseData];
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const addFriendHandler = (event) => {
    if (event.target.id === '') {
      const id = event.target.parentElement.id;
      friendsId.current = id;
      getFriends(friendsId.current);
      console.log(props.friends);
    } else {
      const id = event.target.id;
      friendsId.current = id;
      getFriends(friendsId.current);
      console.log(props.friends);
    }
  };

  const recommendedList = people.map((people) => (
    <Friend
      key={people.id}
      id={people.id}
      name={people.name}
      username={people.username}
      position={people.id - 1}
      addFriendHandler={addFriendHandler}
    />
  ));

  const displayFriends = (
    <section className={classes.section}>
      <header className={classes.header}>
        {!props.showFriends && <p>Recommended Friends</p>}
        {props.showFriends && (
          <p>
            Current<br></br> Friends
          </p>
        )}
      </header>
      {!props.showFriends && <ul className={classes.ul}>{recommendedList}</ul>}
      {props.showFriends && <ul className={classes.ul}>{props.friendList}</ul>}
    </section>
  );

  return <div>{displayFriends}</div>;
};

export default Friends;
