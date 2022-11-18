import { createContext, useReducer } from "react";
import { cartReducer } from '../hooks/cartReducer';

const initialState = [
    
];

export const Context = createContext({
    state: initialState,
    dispatch: () => null
});

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}