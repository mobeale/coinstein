export const DARK_MODE = 'ui/DARK_MODE';


const initialState = {
    darkMode: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case DARK_MODE:
            return {
                ...state,
                darkMode: !state.darkMode
            };

        default:
            return state
    }
}

export const darkModeFunction = () => {
    return dispatch => {
        dispatch({
            type: DARK_MODE
        })
    }
};


