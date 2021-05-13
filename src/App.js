import { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expense from "./components/Expenses/Expense";

import classes from "./App.module.css";

const INITIAL_EXPENSES = [
  {
    id: "a",
    title: "a",
    amount: 10,
    date: new Date(1918, 11, 24, 10, 33),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevState => {
      return [expense, ...prevState];
    });
  };

  return (
    <div className={classes.App}>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense expenses={expenses} />
    </div>
  );
};

export default App;
