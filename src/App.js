import React, {Component} from 'react';
import Navigation from './components/Navigation';
import UserList from './components/UserList';
import './App.css';
import UserDetails from "./components/UserDetails";
import UserService from "./services/UserService";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userList: [],
            selectedUser: null,
            query: '',
            filteredUsers: []
        };

        this.setSelectedUser = this.setSelectedUser.bind(this);
    }

    componentDidMount() {
        UserService.getUsersData()
            .then(data => this.setState({
                userList: data.results,
                filteredUsers: data.results
            }))
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
        this.filterArray();
    }

    filterArray = () => {
        let searchString = this.state.query;
        let filteredUsers = this.state.userList;
        if (searchString.length > 0) {
            filteredUsers = filteredUsers.filter(user => {
                return user.name.first.toLowerCase().match(searchString)
                    || user.name.last.toLowerCase().match(searchString);
            })
        } else {
            filteredUsers =  this.state.userList;
        }
        this.setState({filteredUsers: filteredUsers});
    }

    setSelectedUser(user) {
        this.setState({selectedUser: user});
    }

    render() {
        let theBox;

        if (this.state.selectedUser) {
            theBox = <UserDetails selectedUser={this.state.selectedUser}/>;
        }

        return (
            <div>
                <Navigation/>
                <form>
                    <input type="text" id="filter" placeholder="Search for..." ref={input => this.search = input}
                           onChange={this.handleInputChange}/>
                </form>
                <UserList users={this.state.filteredUsers} onClick={this.setSelectedUser}/>
                {theBox}
            </div>
        );
    }
}
