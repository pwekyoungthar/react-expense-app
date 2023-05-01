import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseItem from "./ExpenseItem";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import { useState } from "react";
const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("slectYear");

  const filterChangeHandler = (event) => {
    setFilterYear(event);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      {filterYear === "slectYear" ? (
        <ul className="expenses-list">
          {props.items.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
        </ul>
      ) : (
        <ExpensesList items={filteredExpenses} />
      )}
      {/*  */}
    </div>
  );
};
export default Expenses;
