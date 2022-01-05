import React, {useState} from "react";
import "./ExpenseForm.css";


const ExpenseForm = (props) => {
    const [titleHandler, setTitleHandler] = useState('');
    const [amountHandler, setAmountHandler] = useState('');
    const [dateHandler, setDateHandler] = useState('');

    const titleChangeHandler = (event) => {
        setTitleHandler(event.target.value)
    };

    const amountChangeHandler = (event) => {
        setAmountHandler(event.target.value)
    };

    const dateChangeHandler = (event) => {
        setDateHandler(event.target.value)
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expensesObject = {
            title: titleHandler,
            amount: +amountHandler,
            date: new Date(dateHandler),
        }

        props.onSaveExpenseData(expensesObject);
        //Resetar Inputs Automaticamente
        setTitleHandler('');
        setAmountHandler('');
        setDateHandler('');
    }

    return (
        <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text'
                    //Resetar Inputs Automaticamente
                    value={titleHandler}
                    onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01'
                    //Resetar Inputs Automaticamente
                    value={amountHandler}
                    onChange={amountChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2021-09-15' max='2023-12-31'
                    //Resetar Inputs Automaticamente
                    value={dateHandler}
                    onChange={dateChangeHandler} />
            </div>
            <button className='new-expense__actions' type='button' onClick={props.onCancel}>Cancel</button>
            <button className='new-expense__actions' type='submit'>New Expense</button>
        </div>
    </form>
        )
}

export default ExpenseForm