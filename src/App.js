import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

function App() {
    const isLoggedIn = localStorage.getItem("token")
  return (
      <Router>
        <div className="App">
            <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/logout">Logout</Link>
                </li>
                <li>
                    {isLoggedIn && <Link to="/friendslist">Friends List</Link>}
                </li>
                <div>
                    {isLoggedIn && <p>Nice to meet you {localStorage.getItem('username')} </p>}
                </div>
            </ul>
            <Switch>

            </Switch>
        </div>
      </Router>
  );
}

export default App;
