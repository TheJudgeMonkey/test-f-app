import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Logout from "./auth/Logout";

const Navbar = ({ authChecked, loggedIn, currentUser }) => {
  return (
    <nav>
      <div>
        <div>
          <NavLink to='/'>
            NormalRoute
          </NavLink>
          <NavLink to='/protected_route'>
            ProtectedRoute
          </NavLink>
        </div>
        <div>
          {loggedIn ? (
            <>
              {currentUser.email}
              <Logout />
            </>
          ) : (
            <>
              <NavLink to='/signup'>
                Sign Up
              </NavLink>
              <NavLink to='/login'>
                Log In
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ auth: { authChecked, loggedIn, currentUser } }) => {
  return { authChecked, loggedIn, currentUser };
};

export default connect(mapStateToProps)(Navbar);
