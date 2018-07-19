// initial state
const initialState = {
    recipes: []
};

// action types

export const Home = {
    ADD_RECIPE: 'ADD_RECIPE'
};

// action creators

export const addRecipe = recipe => ({ 
    type: Home.ADD_RECIPE, 
    id: recipe 
});

// reducer

const home = ( state = initialState, action ) => {
    switch( action.type ) {
        case Home.ADD_RECIPE:
            return { 
                ...state, 
                recipes: [
                    ...state.recipes,
                    action.id 
                ]
            };
        default:
            return state;
    }
};

export default home;