import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRecipe } from './home-actions-reducers';

class Home extends React.Component {

    render() {
        return (
            <div>
                <h1>Home</h1>
            </div>
        )
    }
}

const Recipe = ({ recipes }) => {
    <ul>
        {
            recipes.map(el => {
                <li key={el.id}>{ el.title }</li>
            })
        }
    </ul>
}

const mapStateToProps = state => {
    return {
        recipes: state.recipes
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addrecipe: id => {
            dispatch(addRecipe(id))
        }
    }
}

const Recipe = connect(
    mapStateToProps,
    mapDispatchToProps
) ( Recipe );

export default Recipe;