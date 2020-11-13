import React, { useContext } from 'react'

//import the global state
import { GlobalContext } from '../context/GlobalState'

function Balance() {

    const { transactions } = useContext(GlobalContext);

    const transactionAmounts = transactions.map(transaction => transaction.transactionAmount);
    const balance = transactionAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div>
            <h4>YOUR BALANCE</h4>
            <h1 id="balance">${balance}</h1>
        </div>
    )
}

export default Balance
