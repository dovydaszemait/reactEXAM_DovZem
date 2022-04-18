import React, { useState } from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Button from "../components/UI/Button/Button";
import Container from "../components/UI/Container";
import AuthContext from "../store/authContext";
import css from './LoginPage.module.css';

const loginUrl = 'https://autumn-delicate-wilderness.glitch.me/v1/auth/login';



function LoginPage() {
  const authCtx = useContext(AuthContext);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const history = useHistory();

  async function sendPostFetch() {
    const newPostObj = {
      email: email,
      password: password,
    };

    const resp = await fetch(loginUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPostObj),
    });
    const atsInJs = await resp.json();

    if (atsInJs.token) {
      localStorage.setItem('token', atsInJs.token);
      authCtx.login();
      history.push('/home');
    }
    if (atsInJs.err) {
      setIsError(true);
    }
  }
  
  
  function formHandler(e) {
    e.preventDefault();
    console.log("Logging in");
    sendPostFetch();
    authCtx.login();
  }




    return (
        <Container>
          <form onSubmit={formHandler} className={css.mainLogin}>
            <h2 className={css.login1}>Login to your account</h2>
            {isError && (
              <h3 className={css.err}>
                Error! Check your email or/and password 
              </h3>
            )}
            <label htmlFor="email"> Email </label>
            <input className={css.login} type='email' onChange={(e) => setEmail(e.target.value)} id='email' placeholder='Enter your email here' value={email}/>
            <label htmlFor="password"> Password </label>
            <input className={css.login} type='password' onChange={(e) => setPassword(e.target.value)} id='password' placeholder='Enter your password here' value={password} />
            <Button> Login </Button>
          </form>
        </Container>
      );
    };

export default LoginPage;
