import React, { createContext, useReducer } from 'react';

//import app reducer
import AppReducer from './AppReducer';

//Create Initial state
const initialState = {
    transactions: []
}

// Creating GlobalContext 
export const GlobalContext = createContext(initialState);

// Create a provider for global state
export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    //delete for transactions
    function delTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        }); 
    }
    
    // add new transaction
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        }); 
    };


    return (
        <GlobalContext.Provider value={
             {
                 transactions: state.transactions,
                 delTransaction,
                 addTransaction
             }
        }>
            { children }
        </GlobalContext.Provider>
    );
}