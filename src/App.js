import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
      <Route path={'/'} exact>
<h1>HOME</h1>    
  </Route>
      <Route path={'/login'}>
      <LoginPage />
      </Route>
      <Route path={'*'} >
<h2>Page not found</h2>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
