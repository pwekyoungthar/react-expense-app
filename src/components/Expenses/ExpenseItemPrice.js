import "./ExpenseItemPrice.css";
const ExpenseItemPrice = (props) => {
  return <div className="expense-item__price">${props.amount}</div>;
};
export default ExpenseItemPrice;
