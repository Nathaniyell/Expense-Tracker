import React from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {

const setFilterHandler = (event)=>{
    props.newFilter(event.target.value)
}
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={setFilterHandler}> 
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
          <option value='2018'>2018</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;