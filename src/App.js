import classes from "./App.module.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div className={classes.App}>
      <ExpenseItem />
    </div>
  );
}

export default App;
