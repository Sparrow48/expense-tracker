import classes from "./NewExpense.module.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
  return (
    <div className={classes.NewExpense}>
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
