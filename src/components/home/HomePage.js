import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// actions
import { addRecipe } from './home-actions-reducers';
import { getRecipes } from '../recipe/recipe-actions-reducers';

// custom components
import RecipeList from '../recipeList/recipeList';

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

        <RecipeList />
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

Home.PropTypes = {
  recipes: PropTypes.array,
  getRecipes: PropTypes.func
};

export default Home;
