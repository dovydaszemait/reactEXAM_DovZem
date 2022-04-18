import { Link } from 'react-router-dom';
import Button from './Button/Button';
import Container from './Container';
import css from './NotLoggedIn.module.css';
import logo from "./logo5.png";


function NotLoggedIn() {
  return (
   
    <Container className={css.cont}>
      <div className={css.mainLogo}>
          <img className={css.logo} src={logo} alt="" />
          </div>
      <h2 className={css.head2}>You are not logged in</h2>
      <p className={css.head}>Please login to see the content</p>
      <Link className={css.btn} to='/login'>
          <Button> Login </Button>
      </Link>
      </Container>
      
  );
}

export default NotLoggedIn;