import ExpenseDate from "./ExpenseDate";
import ExpenseTitle from "./ExpenseTitle";
import ExpenseItemPrice from "./ExpenseItemPrice";

import "./ExpenseItem.css";
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div>
        <ExpenseTitle title={props.title} />
        <ExpenseItemPrice amount={props.amount} />
      </div>
    </div>
  );
}

export default ExpenseItem;
