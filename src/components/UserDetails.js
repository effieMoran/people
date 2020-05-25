import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class UserDetails extends Component {

    render() {
        const { user } = this.props;
        return <span>{user.email}</span>;
    }
}

UserDetails.propTypes = {
    user: PropTypes.object
};
