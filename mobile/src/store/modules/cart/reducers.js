const INITIAL_STATE = [];

export default function cart(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@cart/ADD_CART': {
            const productIndex = state.findIndex(product => product.id === action.product.id);

            if (productIndex >= 0) {
                state[productIndex].amount = state[productIndex].amount + 1;
                return [...state];
            }

            return [...state, { ...action.product, amount: 1 }];
        }
        case '@cart/REMOVE_CART': {
            return state.filter(product => product.id !== action.id);
        }
        default:
            return state;
    }
}