import classes from "./ExpenseItem.module.css";

function ExpenseItem() {
  const expenseDate = new Date(2021, 4, 4);
  const expenseTitle = "Car Insurance";
  const expenseAmount = "1100";
  return (
    <div className={classes.ExpenseItem}>
      <div>{expenseDate.toISOString()}</div>
      <div className={classes.ExpenseItemDescription}>
        <h2>{expenseTitle}</h2>
        <div className={classes.ExpenseItemPrice}>{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
