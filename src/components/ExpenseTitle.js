import "./ExpenseTitle.css";
function ExpenseTitle(props) {
  return <h2 className="expense-item__description">{props.title}</h2>;
}
export default ExpenseTitle;
