import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";
import AddPage from "./pages/AddPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import RegisterPage from "./pages/RegisterPage";
import AuthContext from "./store/authContext";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  function login() {
    console.log('App.js login');
    setIsUserLoggedIn(true);
  }
  function logout() {
    console.log('App.js logout');
    setIsUserLoggedIn(false);
  }

  const ctxValue = {
    isUserLoggedIn,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={ctxValue}>
    <div className="App">
      <Header />
      <Switch>
        <ProtectedRoute path='/home' exact >
          <HomePage />
        </ProtectedRoute>
        <Route path={"/login"}>
          <LoginPage />
        </Route>
        <Route path={"/register"}>
          <RegisterPage />
        </Route>
        <Route path={"/add"}>
          <AddPage />
        </Route>
        <Route path={"*"}>
          <NotFound />
        </Route>
      </Switch>
    </div>
    </AuthContext.Provider>
  );
}

export default App;
