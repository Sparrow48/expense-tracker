import classes from "./ChartBar.module.css";

const ChartBar = props => {
  let barFillHeight = "0%";

  if (props.totalValue > 0) {
    barFillHeight = Math.round((props.value / props.totalValue) * 100) + "%";
  }

  return (
    <div className={classes.ChartBar}>
      <div className={classes.ChartBarInner}>
        <div
          className={classes.ChartBarFill}
          style={{ height: barFillHeight }}></div>
      </div>
      <div className={classes.ChartBarLabel}>{props.label}</div>
    </div>
  );
};

export default ChartBar;
