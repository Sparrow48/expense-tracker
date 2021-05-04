import classes from "./ExpenseItem.module.css";

function ExpenseItem(props) {
  return (
    <div className={classes.ExpenseItem}>
      <div>{props.date.toISOString()}</div>
      <div className={classes.ExpenseItemDescription}>
        <h2>{props.title}</h2>
        <div className={classes.ExpenseItemPrice}>{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
