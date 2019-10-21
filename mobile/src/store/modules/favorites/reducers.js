const INITIAL_STATE = [];

export default function favorites(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@favorite/ADD_REMOVE': {
            const productExists = state.find(id => id === action.id);

            if (productExists) {
                return state.filter(id => id !== action.id);
            }

            return [...state, action.id];
        }
        default:
            return state;
    }
}