import { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import ExpenseTitle from "./ExpenseTitle";
import ExpenseItemPrice from "./ExpenseItemPrice";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log("Expense Item Working");
  const clickHandler = () => {
    setTitle("Update");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div>
        <ExpenseTitle title={title} />
        <ExpenseItemPrice amount={props.amount} />
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
