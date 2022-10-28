import React from "react";
import Home from "../views/home";
import Aboutme from "../views/aboutme";
// import Portfolio from "../views/portfolio/portfolio";
import Signup from "../views/users/register";
import Signin from "../views/users/login";
import "../style/navbar.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Posts from "../views/posts/posts";
import Nav from "./nav";
import UserIsNotLogged from "./userIsNotLogged";
import Error from "../views/helpers/error404";

/* Rutas estaticas IMPORTS*/
import Estado from "../views/helpers/writingPosts/allTopics/react/estado";
import HooksGuide from "../views/helpers/writingPosts/allTopics/react/hooks";
import Props from "../views/helpers/writingPosts/allTopics/react/props";
import Versus from "../views/helpers/writingPosts/allTopics/tutorials/backorfront";
import JsonGuide from "../views/helpers/writingPosts/allTopics/javascript/json";
import ForIn from "../views/helpers/writingPosts/allTopics/javascript/forin";
import Arreglos from "../views/helpers/writingPosts/allTopics/javascript/arreglos";
import Objetos from "../views/helpers/writingPosts/allTopics/javascript/objetos";
import Funciones from "../views/helpers/writingPosts/allTopics/javascript/funciones";

const Application = (props) => {
  const userIsLogged = localStorage.getItem("token");

  return (
    <Router>
      {userIsLogged ? <Nav /> : <UserIsNotLogged />}

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/blog">
          <Posts />
        </Route>
{/*         <Route exact path="/portfolio">
          <Portfolio />
        </Route> */}
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
        <Route exact path="/logout">
          <Home />
        </Route>
        {/* RUTAS ESTATICAS */}
        <Route path="/blg/estado-avanzado-react">
          <Estado />
        </Route>
        <Route path="/blg/react-hooks">
          <HooksGuide />
        </Route>
        <Route path="/blg/react-props">
          <Props />
        </Route>
        <Route path="/blg/backend-or-frontend">
          <Versus />
        </Route>
        <Route path="/blg/json+tutorial">
          <JsonGuide />
        </Route>
        <Route path="/blg/for+in+en+js">
          <ForIn />
        </Route>
        <Route path="/blg/funciones+en+js">
          <Funciones />
        </Route>
        <Route path="/blg/objectos+en+js">
          <Objetos />
        </Route>
        <Route path="/blg/arreglos+en+js">
          <Arreglos />
        </Route>
        

        
        {/* end static routes!  */}
        <Route path="*">
          <Error />
        </Route>
        {/* La ruta principal debe ser definida de ultima, para que no obstaculice las demas! */}
      </Switch>
    </Router>
  );
};

export default Application;
