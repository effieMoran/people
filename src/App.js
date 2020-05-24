import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from "./components/Navigation";
import  Person from "./components/Person";

class App extends Component {
    render() {
        return (

            <div>
                <Navigation/>
                <Person/>
                <img src={logo} className="App-logo" alt="logo"/>
            </div>
        );
    }
}

export default App;
