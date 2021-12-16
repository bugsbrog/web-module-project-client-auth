import React, { useState } from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";

class AddFriends extends React.Component {
    state = {
        name: '',
        age: '',
        email: ''
    };

    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
        // console.log(this.state)
    };

    add = (evt) => {
        evt.preventDefault();
        axiosWithAuth()
            .post('/friends', this.state)
            .then(res => {
                window.location.href="/friends"
            })
            .catch(err => {
                console.error(err);
            })
        };

    render() {
        return (
            <div>
                <form onSubmit={this.add}>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder="Enter a name"
                        />
                        <label>Age:</label>
                        <input
                            type="text"
                            name="age"
                            value={this.state.age}
                            onChange={this.handleChange}
                            placeholder="Enter an age"
                            />
                            <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder="Enter an email"
                        />
                    <button>Add Friend</button>
                </form>
            </div>
        )
    }

}

export default AddFriends;