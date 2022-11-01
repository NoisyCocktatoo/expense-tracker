import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transact from './Transact';

const Transactions = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
        <h3>History</h3>
        <ul className='list'>
          {transactions.map(transaction => (<Transact key={transactions.id} transactions={transaction}/>))}
        </ul>
    </>
  )
}

export default Transactions