import React, { useState } from "react";

import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2022');

    function filterChangeHandler(selectedYear) {
      setFilteredYear(selectedYear);
    }

    
    // dropdown filtering year
    const filteredExpenses = props.item.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear; // compares true or false if the date from array matches the "filteredYear"
    });

    
    return (

        <div>

          <Card className = "expenses">

          <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

          <ExpensesChart expenses = { filteredExpenses } />

          <ExpensesList item = {filteredExpenses} />

          </Card>

        </div>
    );
};

export default Expenses;