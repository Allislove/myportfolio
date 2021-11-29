import React from "react";
import Home from "../../components/views/home";
import Aboutme from "../views/aboutme";
import Portfolio from "../views/portfolio/portfolio";
import Signup from '../views/users/register';
import Signin from '../views/users/login';
import '../style/navbar.css'
import Newpost from "../views/posts/newPost";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Posts from "../views/posts/posts";
import Post from "../views/posts/post";
import Nav from './nav';
import UserIsNotLogged from './userIsNotLogged';
import Error from "../views/helpers/error404";

const Navbar = (props) => {
  const userIsLogged = localStorage.getItem('token') 

  return (
    <Router>
      {userIsLogged ? <Nav /> : <UserIsNotLogged />  }

      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/blog/:id">
          <Post />
        </Route>
        <Route exact path="/blog">
          <Posts />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/aboutme">
          <Aboutme />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Redirect to="/signin" />
        </Route>

        <Route exact path="/signin">
          <Signin />
        </Route>
        <Route exact path="/newpost">
            <Newpost />
        </Route>
        <Route exact path="/logout">
          <Home />
        </Route>
        <Route path="*">
          <Error />
        </Route>
        {/* La ruta principal debe ser definida de ultima, para que no obstaculice las demas! */}

      </Switch>
    </Router>
  );
};

export default Navbar;
