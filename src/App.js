import React, {Component} from 'react';
import './App.css';

import Navigation from "./components/Navigation";
import  UserList from "./components/UserList";

class App extends Component {
    render() {
        return (

            <div>
                <Navigation/>
                <UserList/>
            </div>
        );
    }
}

export default App;
