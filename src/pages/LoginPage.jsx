import React from "react";
import { useContext } from "react";
import Container from "../components/UI/Container";
import AuthContext from "../store/authContext";

function LoginPage() {
  const authCtx = useContext(AuthContext);
  function formHandler(e) {
    e.preventDefault();
    console.log("Logging in");
    authCtx.login();
  }
  return (
    <Container>
      <h1>LOGIN</h1>
      <form onSubmit={formHandler}>
        <input type="text" placeholder="Email" />
        <br />
        <input type="text" placeholder="Password" />
        <br />
        <button type="submit"> Login </button>
      </form>
    </Container>
  );
}

export default LoginPage;
