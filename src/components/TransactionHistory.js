import React, { useContext } from 'react'

//import transaction.js
import Transaction from './Transaction';

//import the global state
import { GlobalContext } from '../context/GlobalState';  
 
function TransactionHistory() {

    const { transactions } = useContext(GlobalContext);
    console.log(transactions);

    return (
        <div>
             <h3>History</h3>   
            <ul className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
            </ul>
        </div>
    )
}


export default TransactionHistory;