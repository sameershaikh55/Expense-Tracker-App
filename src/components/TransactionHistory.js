import React from 'react'


function TransactionHistory() {
    return (
        <div>
             <h3>History</h3>   
            <ul className="list">
                <li className="plus">
                    Cash 
                    <span>$200</span>
                </li>
                <li className="minus">
                    Expense 
                    <span>-$100</span>
                </li>
                <li className="plus">
                    Deposit
                    <span>$200</span>
                </li>
            </ul>
        </div>
    )
}


export default TransactionHistory;