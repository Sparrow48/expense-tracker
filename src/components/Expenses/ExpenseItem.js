import classes from "./ExpenseItem.module.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = props => {
  return (
    <Card className={classes.ExpenseItem}>
      <ExpenseDate date={props.date} />
      <div className={classes.ExpenseItemDescription}>
        <h2 className={classes.ExpenseItemH2}>{props.title}</h2>
        <div className={classes.ExpenseItemPrice}>{props.amount} TK</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
