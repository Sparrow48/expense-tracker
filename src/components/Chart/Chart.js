import ChartBar from "./ChartBar";

import classes from "./Chart.module.css";

const Chart = props => {
  let dataPointsValue = props.dataPoints.map(dataPoint => dataPoint.value);
  //const totalMaxValue = Math.max(...dataPointsValue);
  const totalValue = dataPointsValue.reduce((total, num) => {
    return total + num;
  }, 0);

  return (
    <div className={classes.Chart}>
      {props.dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          totalValue={totalValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
