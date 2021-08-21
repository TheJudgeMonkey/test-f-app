import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import NormalRoute from "./components/NormalRoute";
import Posts from "./components/Posts";
import PostId from "./components/PostId";
import Users from "./components/Users";
import User from "./components/User";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import withAuth from "./components/auth/withAuth";
import Body from "./components/Body";


function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={NormalRoute} />
          <Route exact path='/users' component={Users} />
          <Route exact path='/user/:userID' component={User} />
          <Route exact path='/posts' component={Posts} />
          <Route exact path='/postId/:postID' component={PostId} />
          <Route exact path='/body' component={Body} />
          <Route
            exact
            path='/protected_route'
            component={withAuth(ProtectedRoute)}
          />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
