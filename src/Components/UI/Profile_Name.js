import React from 'react';
import classes from './profile_name.module.css';

const ProfileName = (props) => {
  return (
    <div className={classes.left}>
      <img className={classes.profile_img} src={props.src} alt="profile" />
      <p
        className={`${classes.profile_text} ${
          props.place === 'card' ? classes.card__text : classes.profile_text
        }`}>
        {props.text1}
        <br />
        {props.text2}
      </p>
    </div>
  );
};

export default ProfileName;
