export const cartReducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            if (action.payload) {
                let newState = [...state];
                let qt = 0;
                let checkItem = newState.findIndex(i => i.item.id === action.payload.item.id);
                if (checkItem === -1) {
                    newState.push({
                        item: action.payload.item,
                        qt: qt = 1,
                        price: action.payload.item.price * qt,
                    });
                }
                console.log(newState);
                return newState;
            }
        break;
        case 'DEL':
            if (action.payload) {
                console.log(state);
                let newState = state.filter(i => i.item.id !== action.payload.id);
                return newState;
            }
        break;
        case 'ADD_SAME':
            let checkItem = state.findIndex(i => i.item.id === action.payload.item.id);
            console.log(checkItem);
        break;
    }

    return state;
}