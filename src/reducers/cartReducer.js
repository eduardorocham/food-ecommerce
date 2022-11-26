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
            if (action.payload) {
                let newState = [...state];
                let index = parseInt(action.payload.index);
                newState[index].qt = newState[index].qt + 1;
                newState[index].price = newState[index].price * newState[index].qt;
                console.log(newState[index]);
                return newState;
            }
        break;
        case 'DEL_SAME':
            if (action.payload) {
                let newState = [...state];
                let index = parseInt(action.payload.index);
                newState[index].qt = newState[index].qt - 1;
                newState[index].price = action.payload.item;
                console.log(newState[index]);
                return newState;
            }
        break;
    }

    return state;
}