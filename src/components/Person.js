import React, {Component} from 'react';

class Person extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Name',
            thumbnail: 'Thumbnail'
        }
    }

    render() {
        return(
            <div>
                <img>{this.state.name}</img>
                <a>{this.state.name}</a>
            </div>
        );
    }
}
