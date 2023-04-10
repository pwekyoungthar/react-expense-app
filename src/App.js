import Expenses from "./components/Expenses/Expenses";
import Card from "./components/UI/Card";

const App = () => {
  return (
    <Card className="expenses">
      <h2>Let's get started!</h2>
      <Expenses />
    </Card>
  );
};

export default App;
