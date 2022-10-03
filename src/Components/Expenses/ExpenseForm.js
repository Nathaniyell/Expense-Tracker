import React, { useState } from 'react'
import './newExpense.css'

const ExpenseForm = (props) => { 
    const [newTitle, setNewTitle] = useState('')
    const [newAmount, setNewAmount] = useState('')
    const [newDate, setNewDate] = useState('')

   
    const titleChangeHandler = (event) => {
        setNewTitle(event.target.value)
    }

    const amountHandler = (event) => {
        setNewAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setNewDate(event.target.value)
    }


    const formSubmitHandler = (event) => {
        event.preventDefault() 

            const inputData = {
            title: newTitle,
            amount: +newAmount,
            date: new Date(newDate)

        }
        props.NewchildProps(inputData)
        /*The ChildProps which is the propsName on the component, holds a function from the parent component as a value,
        The newly generated input details is passed in as a parameter
        */

        //Clear the input fields
        setNewTitle('');
        setNewAmount('');
        setNewDate('');
    }

    return (
        <div>
            <form onSubmit={formSubmitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label htmlFor="title">Title</label>
                        <input type="text" onChange={titleChangeHandler} id='title' name='title' value={newTitle} required />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="amount">Amount</label>
                        <input type="number" onChange={amountHandler} min='0.01' step='0.01' id='amount' name='amount' value={newAmount} required />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="date">Date</label>
                        <input type="date" onChange={dateChangeHandler} min='2018-01-01' max='2022-12-31' id='date' name='date' value={newDate} required />
                    </div>

                </div>
                <div className="new-expense__actions">
                    <button type='' onClick={props.onCancel}>Cancel</button>
                    <button type="submit">Add Title</button>
                </div>
            </form>

        </div>
    )
}

export default ExpenseForm

//- In ExpenseForm(props), the props makes it possible for us specify a value which is the new function from the parent component
 //- New data is collected from the imput fields by event.target.value
 //- Event.preventDefault() prevents the page from reloading once the form is submitted
 //- Const InputData stores the new data collected from the input fields