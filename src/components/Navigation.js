import React, {Component} from "react";

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <h1 className="text-white">Users</h1>
                <div className="text-white">If you want to get in contact information to specific user,
                    just select group and then select him form the list below
                </div>
            </nav>
        );
    }
}
