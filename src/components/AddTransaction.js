import React from 'react'

function AddTransaction() {
    return (
        <div>
            <h3>Add new transaction</h3>
            <form className="form-control">
                <label htmlFor="Description">Description</label>
                <br />
                <input type="text" name="Description" id="Description" placeholder="Enter the Description" />
                <br />
                <label htmlFor="Amount">Amount <br /> (negative - expense, positive - income)</label>
                <br />
                <input type="number" name="Amount" id="Amount" placeholder="Enter the Amount" />
            </form>
            <button className="btn">Add Transaction</button>
        </div>
    )
}

export default AddTransaction
