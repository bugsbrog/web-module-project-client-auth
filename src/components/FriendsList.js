import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
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

        render() {
        console.log(this.state.friends)
            return (
                <div>
                    {
                        this.state.friends.map(friend => (
                                <div key={friend.id}>
                                    {friend.name}
                                </div>
                            )
                        )
                    }
                </div>
            )
        }
    }

    export default FriendsList;