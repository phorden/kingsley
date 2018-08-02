/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from "react-router-dom";

import Home from "./home/HomePage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    const activeStyle = { color: 'blue' };
    return (
      <div>
        <div>
          <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
          {' | '}
          <NavLink to="/recipe-list" activeStyle={activeStyle}>Recipe List</NavLink>
          {' | '}
          <NavLink to="/add-recipe" activeStyle={activeStyle}>Add Recipe</NavLink>
          {' | '}
          <NavLink to="/search" activeStyle={activeStyle}>Search</NavLink>
          {' | '}
          <NavLink to="/meal-plan" activeStyle={activeStyle}>Meal Plan</NavLink>
          {' | '}
          <NavLink to="/account" activeStyle={activeStyle}>User Details</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
