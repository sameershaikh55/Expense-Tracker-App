import React, { useContext } from 'react'

//impport global context
import { GlobalContext } from '../context/GlobalState'

function Transaction({ transaction }) {

    const { delTransaction } = useContext(GlobalContext);

    const sign = transaction.transactionAmount > 0 ? '+' : '-';
    const transactionType = transaction.transactionAmount > 0 ? 'plus' : 'minus'; 
     
    return (
            <li className={transactionType}>
                    {transaction.description}
                    <span>{sign}${transaction.transactionAmount}</span>
                    <button className="delete-btn" 
                            onClick={() => delTransaction(transaction.id)} >
                        X
                    </button>
            </li>              
    )
}

export default Transaction
