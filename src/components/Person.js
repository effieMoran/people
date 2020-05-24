import React, {Component} from 'react';

class Person extends Component {
    constructor() {
        super();
        this.state = {
            pictures: []
        }
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=18')
            .then( results => {
                return results.json();
            }).then( data => {
                let pictures = data.results.map((pic) => {
                    return (
                        <div key={pic.results}>
                            <img alt="Person picture" src={pic.picture.thumbnail}/>
                            <a> {pic.name.first} {pic.name.last}</a>
                        </div>
                    )
                })
            this.setState({pictures: pictures});
        })
    }

    render() {

        return(
            <div>
                <div>
                    {this.state.pictures}
                </div>
            </div>
        );
    }
}

export default Person;
