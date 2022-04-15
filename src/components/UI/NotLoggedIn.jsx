import { Link } from 'react-router-dom';
import Button from './Button/Button';

function NotLoggedIn() {
  return (
    <>
      <h2>You are not logged in</h2>
      <p>Please login to see the content</p>
      <Link to='/login'>
          <Button> Login </Button>
      </Link>
    </>
  );
}

export default NotLoggedIn;