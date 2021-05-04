import classes from "./ExpenseItem.module.css";

function ExpenseItem() {
  return (
    <div className={classes.ExpenseItem}>
      <div>Date</div>
      <div className={classes.ExpenseItemDescription}>
        <h2>Title</h2>
        <div className={classes.ExpenseItemPrice}>Amount</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
