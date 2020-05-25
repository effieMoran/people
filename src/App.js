import React, {Component} from 'react';
import Navigation from './components/Navigation';
import UserList from './components/UserList';
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userList: [],
            selectedUser: null
        };

        this.setSelectedUser =this.setSelectedUser.bind(this);
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=18')
            .then(response => response.json())
            .then(data => this.setState({userList: data.results}));
    }

    setSelectedUser(user) {
        this.setState({selectedUser: user});
    }

    render() {
        let theBox;

        if(this.state.selectedUser) {
            theBox = <Box selectedUser={this.state.selectedUser} />;
        }

        return (
            <div>
                <Navigation/>
                <UserList users={this.state.userList} onClick={this.setSelectedUser}/>
                {theBox}
            </div>
        );
    }
}

function Box(props) {
    return <span>{JSON.stringify(props)}</span>;
}
