import classes from "./ExpenseForm.module.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className={classes.NewExpenseControls}>
        <div className={classes.NewExpenseControl}>
          <label>Title</label>
          <input type='text' />
        </div>
        <div className={classes.NewExpenseControl}>
          <label>Amount</label>
          <input type='number' min='1' siep='1' />
        </div>
        <div className={classes.NewExpenseControl}>
          <label>Date</label>
          <input type='date' min='2020-01-01' max='2025-01-01' />
        </div>
      </div>
      <div>
        <button className={classes.NewExpenseActions} type='submit'>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
