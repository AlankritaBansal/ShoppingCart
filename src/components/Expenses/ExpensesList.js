import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList=(props)=>{
    let expensesContent= <p> No data found. </p>;

    if (props.items.length >0) { 
      
    }

return (
    <ul className="expenses-list">
        {props.items.map( expense=> (
        <ExpenseItem 
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>


)
}

export default ExpensesList;