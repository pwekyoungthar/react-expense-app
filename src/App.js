import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import Card from "./components/UI/Card";
import { useState } from "react";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  console.log(expenses);
  const expenseHandler = (expense) => {
    setExpenses((expenses) => {
      return [expense, ...expenses];
    });
    // console.log(expense);
    // console.log(expenses);
  };

  return (
    <Card className="expenses">
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={expenseHandler} />
      <Expenses items={expenses} />
    </Card>
  );
};

export default App;
