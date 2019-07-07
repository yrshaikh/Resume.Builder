import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class HomePage extends React.Component {
    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hello. This is the home page</h1>
                {/*<h1>Hi {user.firstName}!</h1>*/}
                <p>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
