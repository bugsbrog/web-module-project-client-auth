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
                    {isLoggedIn && <Link to="/friends">Friends List</Link>}
                </li>
            </ul>
        </div>
      </Router>
  );
}

export default App;
