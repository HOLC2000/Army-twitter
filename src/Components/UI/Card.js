import React from 'react';
import classes from './Card.module.css';
import ProfileName from './Profile_Name';
import Button3 from './Button_3';
import API from '../API/api';
import TextApi from '../API/text_api';
const Card = (props) => {
  return (
    <card>
      <header className={classes.header}>
        <ProfileName
          text1={TextApi(props.position, 'people', 'photographer')}
          text2={`Check this ${TextApi(props.position, 'nature')}`}
          place={'card'}
          src={API(props.position, 'people')}
        />
      </header>

      <img
        src={API(props.position, 'nature')}
        className={classes.img}
        alt="post_picture"
      />
      <nav className={classes.actions}>
        <Button3
          value_1={'Like'}
          value_2={'Share'}
          value_3={'Comment'}
          position={props.position}
          function_1={props.function_1}
        />
      </nav>
    </card>
  );
};

export default Card;
