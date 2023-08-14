import classes from './Header.module.css';
import Button3 from './UI/Button_3';
import ProfileName from './UI/Profile_Name';
import logo from '../Assets/logo_page.png';
import API from './API/api';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img src={logo} className={classes.img} alt="post_picture" />
      <ProfileName text1={'Hey,'} text2={'Or Nave'} src={API(13, 'people')} />
      <nav className={classes.right}>
        <Button3
          value_1={'Likes'}
          value_2={'Feed'}
          value_3={'Friends'}
          function_1={props.function_1}
          function_2={props.function_2}
          function_3={props.function_3}
        />
      </nav>
    </header>
  );
};

export default Header;
