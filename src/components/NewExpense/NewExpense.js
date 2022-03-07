import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";


function NewExpense( props ) {
    const [isEditing, setIsEditing] = useState(false);

    function onSaveExpenseDataHandler(enteredExpensedata) {

        const expenseData = {
            ...enteredExpensedata,  // extracting data from object and appending random id
            id : Math.random().toString()
        };
        props.onAddExpense(expenseData);  // data passed in App.js component
        console.log(expenseData);
        setIsEditing(false);
    };


    function openClickHandler() {
        setIsEditing(true);
    }

    function cancelClickHandler() {
        setIsEditing(false);
    }

    return (
        <div className = "new-expense">

            {isEditing && (
                <ExpenseForm 
                    onSaveExpenseData = { onSaveExpenseDataHandler } 
                    onCancel = {cancelClickHandler} /> 
                ) 
            }
            
            {!isEditing && (
                <button onClick = { openClickHandler }>
                    Add New Expense
                </button> ) }
            
        </div>
    )
} 

export default NewExpense;  