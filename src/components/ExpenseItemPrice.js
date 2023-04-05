import "./ExpenseItemPrice.css";
function ExpenseItemPrice(props) {
  return <div className="expense-item__price">${props.amount}</div>;
}
export default ExpenseItemPrice;
