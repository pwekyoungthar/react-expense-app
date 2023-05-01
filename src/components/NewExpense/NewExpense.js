import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (newExpenseData) => {
    const newExpensObj = {
      ...newExpenseData,
      id: Math.random().toString(),
    };
    console.log(newExpensObj);
    props.onAddExpense(newExpensObj);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
