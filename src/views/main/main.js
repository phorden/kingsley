import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/home';
import Recipes from '../recipes/recipes';

export default class Main extends React.Component {

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={ Home } />
                    <Route exact path='/recipes' component={ Recipes } />
                    {/* <Route path='/recipes/:number' component={ Recipe } />
                    <Route path='about' component={ About } /> */}
                </Switch>
            </main>
        )
    }
}