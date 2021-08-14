import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = ({ authChecked, loggedIn, currentUser }) => {
  return (
    <nav>
      <div>
        <NavLink to='/'>
          NormalRoute
        </NavLink>
        <NavLink to='/protected_route'>
          ProtectedRoute
        </NavLink>
      </div>
      <div>
        <NavLink to='/signup'>
          Sign Up
        </NavLink>
        <NavLink to='/login'>
          Log In
        </NavLink>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ auth: { authChecked, loggedIn, currentUser } }) => {
  return { authChecked, loggedIn, currentUser };
};

export default connect(mapStateToProps)(Navbar);
