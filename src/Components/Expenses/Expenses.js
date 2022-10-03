import React, { useState } from 'react'
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpenseFilter';
import Card from './Card'

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2021')
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear)
  }
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear
  })

 

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filterYear} newFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  )
}



export default Expenses