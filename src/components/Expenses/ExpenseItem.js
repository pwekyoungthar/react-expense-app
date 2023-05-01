import { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import ExpenseTitle from "./ExpenseTitle";
import ExpenseItemPrice from "./ExpenseItemPrice";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div>
          <ExpenseTitle title={props.title} />
          <ExpenseItemPrice amount={props.amount} />
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
