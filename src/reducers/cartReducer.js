export const cartReducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            if (action.payload) {
                let newState = [...state];
                let qt = 0;
                let checkItem = newState.findIndex(i => i.product.id === action.payload.product.id);
                if (checkItem === -1) {
                    newState.push({
                        product: action.payload.product,
                        qt: qt = 1,
                        price: action.payload.product.price * qt,
                    });
                } else {
                    alert('Item já adicionado ao carrinho!');
                }
                return newState;
            }
        break;
        case 'DEL':
            if (action.payload) {
                let newState = state.filter(i => i.product.id !== action.payload.product.id);
                return newState;
            }
        break;
        case 'ADD_SAME':
            if (action.payload) {
                let newState = [...state];
                let index = parseInt(action.payload.index);
                newState[index].qt = newState[index].qt + 1;
                newState[index].price = newState[index].product.price * newState[index].qt;
                return newState;
            }
        break;
        case 'DEL_SAME':
            if (action.payload) {
                let newState = [...state];
                let index = parseInt(action.payload.index);

                if (newState[index].qt > 1) {
                    newState[index].qt = newState[index].qt - 1;
                    newState[index].price = newState[index].product.price * newState[index].qt;
                    return newState;
                }  
            }
        break;
    }

    return state;
}