import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class UserDetails extends Component {

    render() {
        const {selectedUser} = this.props;
        return <span>
            <img alt='User' src={selectedUser.picture.large}/>
            <h6> {selectedUser.name.first} {selectedUser.name.last}</h6>
            <label>email</label>
            <h6>{selectedUser.email}</h6>
            <label>Address</label>
            <h6>{selectedUser.location.street.name} {selectedUser.location.street.number}</h6>
            <label>Phone</label>
            <h6>{selectedUser.phone}</h6>
        </span>;
    }
}

UserDetails.propTypes = {
    selectedUser: PropTypes.object
};
