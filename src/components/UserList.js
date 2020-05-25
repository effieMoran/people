import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './User';

export default class UserList extends Component {
    renderList() {
        return this.props.users.map(userObj => <User onClick={this.props.onClick} user={userObj}/>);
    }

    render() {
        const usersElements = this.renderList();
        return (
            <div>
                <div>
                    {usersElements}
                </div>
            </div>
        );
    }
}

UserList.propTypes = {
    users: PropTypes.array
};

UserList.defaultTypes =  {
    users: []
};
