import ProfileName from '../UI/Profile_Name';
import classes from './Friend.module.css';
import API from '../API/api';
import { FaPlus } from 'react-icons/fa';

const Friend = (props) => {
  // ------------------------------------------------------------------------------

  return (
    <li className={classes.list}>
      <ProfileName
        text1={props.name}
        text2={`@${props.username}`}
        src={API(props.position, 'people')}
      />
      <div
        onClick={props.addFriendHandler}
        id={props.id}
        className={classes.icon}>
        <FaPlus id={props.id} />
      </div>
    </li>
  );
};

export default Friend;
