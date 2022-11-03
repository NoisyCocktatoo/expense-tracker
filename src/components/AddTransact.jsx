import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


const AddTransact = () => {

  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
    setIsSubmit(true);
    setText('');
    setAmount('');
  }

  return (
    <>
        <h3>Add New Transactions</h3>
        <form onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor="text">Label</label>
                <input type="text"
                className='inputs'
                value={text}
                onChange={(e) => setText(e.target.value)} 
                placeholder='Enter text...'></input>
            </div>
            <div className='form-control'>
                <label htmlFor="amount">Amount <br />
                (Include '-' for expense and '+' for income)</label>
                <input type='number'
                className='inputs'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder='Enter Amount...' />
            </div>
            <button className='btn'>Add Transaction</button>
        </form>
    </>
  )
}

export default AddTransact