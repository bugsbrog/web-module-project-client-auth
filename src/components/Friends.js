import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

class Friends extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        const token = localStorage.getItem("token");

        axiosWithAuth()
            .get('/friends')
            .then(res => {
                this.setState({
                    friends: res.data
                });
            })
            .catch(err => {
                console.error(err);
            })
        }
    }