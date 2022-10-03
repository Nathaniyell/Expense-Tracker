import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    
    if (props.items.length === 0) {
      return <h2 className="expense-list__fallback">No Expenses Found</h2>
    }

    return (
        <ul className="expenses-list">
            {props.items.map((expense) => {
            return (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    date={expense.date}
                    amount={expense.amount}
                />
            )
        })}
        </ul>

    )

}

export default ExpensesList