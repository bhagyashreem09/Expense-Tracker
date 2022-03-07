import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {

    // if (props.item.lenght === 0) {
    //   return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    // }

    return (
        <div className="expenses-list">
            { props.item.map( (expense) => (
                <ExpenseItem 
                    key={expense.id}       // always add key when mapping lists/arrays
                    title={expense.title} 
                    amount = {expense.amount} 
                    date = {expense.date} 
                /> 
            ))}
        </div>
    )

};

export default ExpensesList;