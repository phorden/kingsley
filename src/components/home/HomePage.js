import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { addRecipe } from './home-actions-reducers';
import { getRecipes } from '../recipe/recipe-actions-reducers';

// custom components
import Recipe from '../recipe/recipe';

class HomePage extends React.Component {

  componentDidMount(){
    this.props.getRecipes();
  }

  render(){
    return (
      <div>
        <h1>Kingsley</h1>

        <h2>Get Started</h2>
        <Link to="/recipes">Recipe List</Link>

        <ul>
          {
            this.props.recipes 
            &&
            this.props.recipes.map((recipe, index) => {
              return (<li key={index}><Recipe data={recipe} /></li>);
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      recipes: state.recipe.recipes
  };
}

const mapDispatchToProps = dispatch => {
  return {
      addrecipe: id => {
          dispatch(addRecipe(id))
      },
      getRecipes: () => { dispatch(getRecipes()) }
  }
}

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
) ( HomePage );

export default Home;
