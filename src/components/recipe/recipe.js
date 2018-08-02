import React from 'react';

// styles
import './recipe.scss';

class Recipe extends React.Component {
  render() {    
    const {
      title,
      description,
      tags,
      ingredients,
      steps,
      notes,
      variations
    } = this.props.data;
    return (
        <section className="recipe-card">
          <h2>{title}</h2>
          <p>{description}</p>

          <h3>Tags</h3>
          {
            tags.map((value, index) => {
              return (
                <section key={index}>
                  <span>{value}, </span>
                </section>
              )
            })
          }

          <h3>Ingredients</h3>
          {
            ingredients.map((value, index) => {
              return (
              <section key={index}>
                <h4>{value.type} {value.amount} {value.measurement}</h4>
              </section>
              )
            })
          }

          <h3>Steps</h3>
          {
            steps.map((value, index) => {
              return (
              <section key={index}>
                <h4>{value.title}</h4>
                <h4>{value.description}</h4>
              </section>
              )
            })
          }

          <h3>Notes</h3>
          {
            notes.map((value, index) => {
              return (
              <section key={index}>
                <h4>{value.timestamp}</h4>
                <h4>{value.title}</h4>
                <h4>{value.description}</h4>
              </section>
              )
            })
          }

          <h3>Variations</h3>
          {
            variations.map((value, index) => {
              return (
              <section key={index}>
                <h4>TODO: Fix This</h4>
              </section>
              )
            })
          }
        </section>
    );
  }
}

export default Recipe;
