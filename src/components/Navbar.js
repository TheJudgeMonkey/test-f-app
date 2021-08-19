import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Logout from "./auth/Logout";
import { checkAuth } from "../actions/auth";

class Navbar extends React.Component {
  componentDidMount() {
    this.props.dispatchCheckAuth();
  }

  renderAuthLinks() {
    const { authChecked, loggedIn, currentUser } = this.props;
    if (authChecked) {
      return loggedIn ? (
        <div>
          {currentUser.username}
          <Logout />
        </div>
      ) : (
        <div>
          <NavLink exact to='/signup'>
            Sign Up
          </NavLink>
          <NavLink exact to='/login'>
            Log In
          </NavLink>
        </div>
      );
    } else {
      return null
    }
  }

  render() {
    return (
      <nav>
        <div>
          <div>
            <NavLink exact to='/'>
              NormalRoute
            </NavLink>
            <NavLink exact to='/protected_route'>
              ProtectedRoute
            </NavLink>
            <NavLink exact to='/posts'>
              Posts
            </NavLink>
            <NavLink exact to='/users'>
              Users
            </NavLink>
          </div>
          <div>
            {this.renderAuthLinks()}
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth: { authChecked, loggedIn, currentUser } }) => {
  return { authChecked, loggedIn, currentUser };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchCheckAuth: () => dispatch(checkAuth())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
