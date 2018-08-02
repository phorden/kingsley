import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getRecipes } from '../recipe/recipe-actions-reducers';

// custom components
import Recipe from '../recipe/recipe';

class RecipeListComponent extends React.Component {

  componentDidMount(){
    this.props.getRecipes();
  }

  render(){
    return (
      <div>
        <h2>Recipe List</h2>
        <div>
          {
            this.props.recipes 
            &&
            this.props.recipes.map((recipe, index) => {
              return (<div key={index}><Recipe data={recipe} /></div>);
            })
          }
        </div>
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
      getRecipes: () => { dispatch(getRecipes()) }
  }
}

const RecipeList = connect(
  mapStateToProps,
  mapDispatchToProps
) ( RecipeListComponent );

RecipeList.PropTypes = {
  recipes: PropTypes.array,
  getRecipes: PropTypes.func
};

export default RecipeList;
