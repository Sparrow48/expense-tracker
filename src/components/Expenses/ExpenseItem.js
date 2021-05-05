import { useState } from "react";
import classes from "./ExpenseItem.module.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = props => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!!");
  };
  return (
    <Card className={classes.ExpenseItem}>
      <ExpenseDate date={props.date} />
      <div className={classes.ExpenseItemDescription}>
        <h2>{title}</h2>
        <div className={classes.ExpenseItemPrice}>{props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
