import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

//PrivateRoute
import PrivateRoute from './components/PrivateRoute';

//Components
import Login from './components/Login';
import Logout from './components/Logout';
import FriendsList from './components/FriendsList';
import AddFriends from './components/AddFriends';
import HomePage from './components/HomePage';

function App() {
    const isLoggedIn = localStorage.getItem("token")
    return (
      <Router>
        <div className="App">
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    {!isLoggedIn && <Link to={"/login"}>Login</Link>}
                </li>
                <li>
                    {isLoggedIn && <Link to={"/logout"}>Logout</Link>}
                </li>
                <li>
                    {isLoggedIn && <Link to={"/friends"}>Friends List</Link>}
                </li>
                <li>
                    {isLoggedIn && <Link to={"/friends/add"}>Add a Friend</Link>}
                </li>
                <div>
                    {isLoggedIn && <p>Nice to meet you {localStorage.getItem('username')} </p>}
                </div>
            </ul>
            <Switch>
                <PrivateRoute exact path={"/friends"} component={FriendsList} />
                <PrivateRoute path={"/logout"} component={Logout} />
                <Route path={"/login"} component={Login} />
                <PrivateRoute exact path={"/friends/add"} component={AddFriends} />
                <Route exact path={"/"} component={HomePage} />
            </Switch>
        </div>
      </Router>
  );
}

export default App;
