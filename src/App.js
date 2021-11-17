import React from 'react';
import { Header } from './assets/Header';
import { Balance } from './assets/Balance';
import { IncomeExpenses } from './assets/IncomeExpenses';
import { TransactionList } from './assets/TransactionList';
import { AddTransaction } from './assets/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;