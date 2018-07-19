import React from 'react';

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
        <section>
          <h2>{title}</h2>
          <p>{description}</p>

          <h3>Tags</h3>
          {
            tags.map((value, index) => {
              return (
                <section key={index}>
                  <span>{value}</span>
                </section>
              )
            })
          }

          <h3>Ingredients</h3>
          {
            ingredients.map((value, index) => {
              return (
              <section key={index}>
                <span>{value.type}</span>
                <span>{value.amount}</span>
                <span>{value.measurement}</span>
              </section>
              )
            })
          }

          <h3>Steps</h3>
          {
            steps.map((value, index) => {
              return (
              <section key={index}>
                <span>{value.title}</span>
                <span>{value.description}</span>
              </section>
              )
            })
          }

          <h3>Notes</h3>
          {
            notes.map((value, index) => {
              return (
              <section key={index}>
                <span>{value.timestamp}</span>
                <span>{value.title}</span>
                <span>{value.description}</span>
              </section>
              )
            })
          }

          <h3>Variations</h3>
          {
            variations.map((value, index) => {
              return (
              <section key={index}>
                <span>TODO: Fix This</span>
              </section>
              )
            })
          }
        </section>
    );
  }
}

export default Recipe;
