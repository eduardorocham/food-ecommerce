export const cartReducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            if (action.payload) {
                let newState = [...state];
                newState.push(action.payload);
                return newState;
            }
        break;
        case 'DEL':
            if (action.payload) {
                let newState = state.filter(item => item.id !== action.payload.id);
                return newState;
            }
        break;
    }

    return state;
}