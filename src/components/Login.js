import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        credentials: {
            username: 'Bloom',
            password: 'Tech'
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/login', this.state.credentials)
            .then(res => {
                const { token, role, username } = res.data;
                localStorage.setItem("token", token);
                localStorage.setItem("role", role);
                localStorage.setItem("username", username);
                window.location.href="/friends"
            })
            .catch(err => {
                console.error(err);
            })
        };

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Log in</button>
                </form>
            </div>
        );
    }
}

export default Login;