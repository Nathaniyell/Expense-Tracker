import React, { useState } from "react";
import './newExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [formShow, setFormShow] = useState(false)

    const formShowHandler = () => {
        setFormShow((prevState) => {
            return !prevState
        })
    }
    const cancelHandler = ()=>{
        setFormShow((prevState) => {
            return !prevState
        })
    }

    const parentCallBack = (NewinputData) => {
        const expenseDataNew = {
            ...NewinputData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseDataNew)
        setFormShow(false)
    }

    return (
        <div className="new-expense">
            {!formShow && <button onClick={formShowHandler}>Add New Expense</button>}
            {formShow && <ExpenseForm NewchildProps={parentCallBack} onCancel={cancelHandler} />}
        </div>
    )

}
export default NewExpense



/*
                                Comments
1.  ParentCallback is the parent function which will be passed into the child component as props

2.  NewInputData is the parameter passed to the parent function to make it clear that this function expects a parameter from the child component

3.  NewInputData represents all the newInput generated on the expense form.

4.  props.onAddExpense is the props which holds the function from the parentComponent(App) as a value
    expenseData which holds the newly generated input details is passed as a parameter to this function
    so as to pass the data back to the app component.
            
5.  NewchildProps is the new props on the child component which receives the parentCallback function as a value

6. NewExpense() is the parentComponent to <ExpenseForm />.

7. <ExpenseForm /> is the ChildComponent to NewExpense()

8. NewExpense is the childComponent to App()

9. App() is the parentComponent to <NewExpense />

10. The propNames are not constricted, any Name can be chosen Whatsoever
*/