import classes from "./ExpenseDate.module.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className={classes.ExpenseDate}>
      <div className={classes.ExpenseDateMonth}>{month}</div>
      <div className={classes.ExpenseDateYear}>{year}</div>
      <div className={classes.ExpenseDateDay}>{day}</div>
    </div>
  );
}

export default ExpenseDate;
