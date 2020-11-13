import React, { useState, useContext } from 'react'

//import global context
import { GlobalContext } from '../context/GlobalState';
 
function AddTransaction() {

    const [description, setDescription] = useState(" ");
    const [transactionAmount, setTransactionAmount] = useState(" ");

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000000),
            description,
            transactionAmount: +transactionAmount
        }

        addTransaction(newTransaction);

        setDescription(" ");
        setTransactionAmount(0);
    }

    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="Description">Description</label>
                    <br />
                    <input type="text" 
                        required
                        name="Description" 
                        placeholder="Enter the Description" 
                        value={description}
                        onChange={(e) => {setDescription(e.target.value)}}
                    />

                    <br />
                    <label htmlFor="Amount">Amount <br /> (negative - expense, positive - income)</label>
                    <br />
                    <input type="number" 
                        required
                        name="Amount" 
                        placeholder="0"
                        value={transactionAmount}
                        onChange={(e) => {setTransactionAmount(e.target.value)}}
                    />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
            
        </div>
    )
}

export default AddTransaction
