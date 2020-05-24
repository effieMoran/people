import React, {Component} from 'react';
import './App.css';

import Navigation from "./components/Navigation";
import  Person from "./components/Person";

class App extends Component {
    render() {
        return (

            <div>
                <Navigation/>
                <Person/>
            </div>
        );
    }
}

export default App;
