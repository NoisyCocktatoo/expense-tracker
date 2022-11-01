import './App.css';
import AddTransact from './components/AddTransact';
import Balance from './components/Balance';
import Income from './components/Income';
import Title from './components/Title'
import Transactions from './components/Transactions';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Title />
      <div className='container'>
        <Balance />
        <Income />
        <Transactions />
        <AddTransact />
      </div>
    </GlobalProvider>
  );
}

export default App;
