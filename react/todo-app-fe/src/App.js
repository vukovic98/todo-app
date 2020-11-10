import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route path='/' exact>
             <Signup />
          </Route>
          <Route path='/login' exact>
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
