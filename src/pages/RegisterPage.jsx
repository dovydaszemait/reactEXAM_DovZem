import css from './LoginPage.module.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Container from '../components/UI/Container';
import Button from '../components/UI/Button/Button';
import logo from "../components/UI/logo5.png";


const regUrl = 'https://autumn-delicate-wilderness.glitch.me/v1/auth/register';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const history = useHistory();

  async function sendPostFetch() {
    const newPostObj = {
      email: email,
      password: password,
    };

    const resp = await fetch(regUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPostObj),
    });
    const atsInJs = await resp.json();

    if (atsInJs.changes === 1) {
      history.push('/login');
    }
    if (atsInJs.err) {
      setIsError(true);
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    sendPostFetch();
  }

  return (
    <Container>
      <form onSubmit={submitHandler} className={css.mainLogin}>
      <div className={css.mainLogo}>
          <img className={css.logo} src={logo} alt="" />
          <p className={css.logoName}>DAILY DIARY</p>
          </div>
        <h2 className={css.login1}>Create an account</h2>
        {isError && (
          <h3 className={css.err}>
            Error! Please check your email or/and password
          </h3>
        )}
        <label htmlFor="email">Email</label>
        <input className={css.login} type='email' onChange={(e) => setEmail(e.target.value)} id='email' placeholder='Enter your email here' value={email}/>
        <label htmlFor="password">Password</label>
        <input className={css.login} type='password' onChange={(e) => setPassword(e.target.value)} id='password' placeholder='Enter your password here' value={password}/>
        <Button>Register</Button>
      </form>
    </Container>
  );
};

export default RegisterPage;