import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import classes from "./Expense.module.css";

const Expense = props => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className={classes.Expenses}>
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        {props.expenses.map(expense => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expense;
