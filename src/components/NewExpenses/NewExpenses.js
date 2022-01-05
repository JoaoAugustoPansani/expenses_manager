import React, {useState} from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) => {
    const [initialValue, setinitialValue]= useState(false);
    
    const saveExpenseDataHandler = (enteredExpensesObject) => {
        const expensesObject = {
            ...enteredExpensesObject,
            id: Math.random().toString()
        };
        props.onAddExpense(expensesObject);
    }

    const generateForm = () => {
        setinitialValue(true);
    }

    const generateAddButton = () => {
        setinitialValue(false);
    }

    return (
    <div className='new-expense'>
        {!initialValue && <button className='new-expense__actions' type='submit'
        onClick={generateForm}>Add New Expense</button>}
        {initialValue && <ExpenseForm 
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={generateAddButton}/>}
    </div>
    )
}

export default NewExpenses;