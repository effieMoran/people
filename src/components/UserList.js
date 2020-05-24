import React, {Component} from 'react';

class UserList extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=18')
            .then(results => {
                return results.json();
            }).then(data => {
            let users = data.results.map((user) => {
                return (
                    <div key={user.results}>
                        <img alt="User" src={user.picture.thumbnail}/>
                        <a> {user.name.first} {user.name.last}</a>
                    </div>
                )
            })
            this.setState({users: users});
        })
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.users}
                </div>
            </div>
        );
    }
}

export default UserList;
