import { useState } from "react";
import classes from "./ExpenseForm.module.css";

const ExpenseForm = props => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    //.... Better approach .....//

    // setUserInput(prevState => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = event => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });

    //.... Better approach ....//

    // setUserInput(prevState => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = event => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });

    //.... Better approach ....//

    // setUserInput(prevState => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  const submitHandler = event => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.NewExpenseControls}>
        <div className={classes.NewExpenseControl}>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className={classes.NewExpenseControl}>
          <label>Amount</label>
          <input
            type='number'
            value={enteredAmount}
            onChange={amountChangeHandler}
            min='1'
            siep='1'
          />
        </div>
        <div className={classes.NewExpenseControl}>
          <label>Date</label>
          <input
            type='date'
            value={enteredDate}
            onChange={dateChangeHandler}
            min='2020-01-01'
            max='2025-01-01'
          />
        </div>
      </div>
      <div>
        <button className={classes.NewExpenseActions} type='submit'>
          Add Expense
        </button>
        <button className={classes.NewExpenseActions} onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
