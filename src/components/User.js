import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserDetails from './UserDetails';

export default class User extends Component {
    constructor(props)  {
        super(props);

        this.state = {
            isOpen: false
        };

        this.toggleDetails = this.toggleDetails.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    toggleDetails() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    onClick() {
        this.props.onClick(this.props.user);
    }

    render() {
        const { user } = this.props;
        let userDetails;

        if(this.state.isOpen) {
            userDetails = <UserDetails user={user} />;
        }

        return (
            <div className='Person' key={user.results} onClick={this.onClick}>
                <img alt='User' src={user.picture.thumbnail}/>
                <a> {user.name.first} {user.name.last}</a>
                {userDetails}
            </div>
        );
    }
}

User.propTypes = {
    user: PropTypes.object
};
