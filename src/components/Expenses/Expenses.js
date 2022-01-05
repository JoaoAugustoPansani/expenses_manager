import React, { useState } from "react";
import Card from "../UI/Cards"
import "./Expenses.css"
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";



function Expenses(props) {
  const [filteredYear, setSelectedYear] = useState('')

  const filterSelectedYear = selectedYear => {
    setSelectedYear(selectedYear);
  }

  const filteredExpense = props.items.filter((expenses => {
    return expenses.date.getFullYear().toString() === filteredYear
  }));

  return (
    <li>
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear}
        onChangeFilter={filterSelectedYear} />
      <ExpensesChart expenses={filteredExpense}/>
      <ExpensesList items={filteredExpense}/>
    </Card>
    </li>
  )
}

export default Expenses