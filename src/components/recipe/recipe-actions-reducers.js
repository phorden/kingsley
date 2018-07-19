// initial state
const initialState = {
    recipes: null
};

// action types

export const Recipe = {
    FETCH_RECIPES_REQUEST: 'FETCH_RECIPES_REQUEST',
    FETCH_RECIPES_FAILURE: 'FETCH_RECIPES_FAILURE',
    FETCH_RECIPES_SUCCESS: 'FETCH_RECIPES_SUCCESS'
};

// action creators

export function getRecipes() {
    return ( dispatch ) => {

        dispatch({ type: Recipe.FETCH_RECIPES_REQUEST });

        fetch('./mock/recipes.json')
            .then(( response ) => {
                if (!response.ok) {
                    dispatch({ type: Recipe.FETCH_RECIPES_FAILURE });
                }

                return response;
            })
            .then((response) => response.json())
            .then((data) => dispatch({
                type: Recipe.FETCH_RECIPES_SUCCESS,
                recipes: data.data.recipes
            }))
            .catch(err => console.log(err));
        }
}

// reducer

const recipe = ( state = initialState, action ) => {
    switch( action.type ) {
        case Recipe.FETCH_RECIPES_SUCCESS:
            return {
                ...state,
                recipes: action.recipes
            };
        default:
            return state;
    }
};

export default recipe;