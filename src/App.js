import React, { useState } from 'react';

import Expenses from './Components/Expenses/Expenses'
import NewExpense from './Components/Expenses/NewExpense';

const DummyExpenses =[
  {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 300,
      date: new Date(2020, 7, 14),
    },

    { id: 'e2', 
      title: 'New TV',
      amount: 70000,
      date: new Date(2021, 2, 12) 
  },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 62000,
      date: new Date(2021, 8, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 2450,
      date: new Date(2021, 5, 12),
    }, 
    {
      id: 'e5',
      title: 'Pen',
      amount: 50,
      date: new Date(2018, 1, 24),
    }, 
    {
      id: 'e6',
      title: 'Wooden Spoon',
      amount: 1500,
      date: new Date(2019, 6, 2),
    }
]
function App() {
  const [expenses, setExpenses] = useState(DummyExpenses)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return (
        [expense, ...prevExpense]
        

      )
    })
  }

  

  return (
    <div className='expenses'>
      <NewExpense onAddExpense={addExpenseHandler} />
      
      <Expenses items={expenses}/>
      
    </div>
  );
}

export default App;


/*addExpenseHandler is a parent function created in the parentComponent(App component)to be passed as a value to the child component.
The Child component(NewExpense) will receive the function as a value for the props(onAddExpense) */