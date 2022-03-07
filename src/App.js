import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummy_expenses = [
  { id: "e1", title : "Car Insurance", amount : 200, date : new Date(2021, 1, 10) }, // the month is 0-indexed
  { id: "e2", title : "New TV", amount : 400, date : new Date(2022, 2, 29) },
  { id: "e3", title : "Health Insurance", amount : 1000, date : new Date(2020, 11, 28) },
  { id: "e4", title : "College Fees", amount : 900, date : new Date(2020, 11, 27) },
  { id: "e5", title : "Vacation", amount : 5000, date : new Date(2021, 10, 9) }
];


function App() {

  const [expenses , setExpenses] = useState(dummy_expenses);

  function addExpenseHandler(expense) {    // "expense" data coming from NewExpense.js component 
    // setExpenses([expense, ...expenses])  //this just appends the new expense, and makes no use of the previous state
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];    // updating depending on the previous snapshot of state. Passing a function as an argument to the state updating function, and the function automatically receives the latest state snapshot

    });
  
  };


  return (
    <div>

      <NewExpense onAddExpense = { addExpenseHandler } />     {/* data from NewExpense.js */}
      <Expenses item = {expenses} />
        
    </div>
  );
}

export default App;
