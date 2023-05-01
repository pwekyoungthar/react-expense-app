import Chart from "../Chart/Chart";
const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Set", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  for (let expense of props.expenses) {
    const exneseMonth = expense.date.getMonth();
    chartDataPoints[exneseMonth].value += expense.amount;
  }
  // props.expenses.forEach((expense) => {});
  return <Chart dataPoints={chartDataPoints} />;
};
export default ExpensesChart;
