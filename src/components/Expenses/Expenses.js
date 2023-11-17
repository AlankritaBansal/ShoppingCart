import React, {useState} from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';

const Expenses =(props) => {

  const [filteredYear, setFilteredYear]=useState('2020');

  const filterChangeHandler= (SelectedYear)=>{
    setFilteredYear (SelectedYear);
  }
  const filteredExpenses= props.items.filter( expense=>{
      return (expense.date.getFullYear().toString() === filteredYear)  
     }) 
  

  
  console.log(props.items);

  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter 
        selected={filteredYear} 
        onChangeFilter={filterChangeHandler}
      />
                                           {/* filteredExpenses.length ===0 && <p> No data found. </p> */}  
      < ExpensesList items={filteredExpenses} />

    </Card>
    </div>
  );
}

export default Expenses;