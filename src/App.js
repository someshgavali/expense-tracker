import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  // const months = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ];
  const dummyData = [
    {
      id: "exp1",
      date: new Date(2022, 2, 12),
      item: "New TV",
      price: 599.25,
    },
    {
      id: "exp2",
      date: new Date(2019, 5, 12),
      item: "New Car",
      price: 299.25,
    },
    {
      id: "exp3",
      date: new Date(2022, 4, 12),
      item: "New Bike",
      price: 345,
    },
    {
      id: "exp4",
      date: new Date(2020, 4, 12),
      item: "Mobile Phone",
      price: 265.25,
    },
    {
      id: "exp5",
      date: new Date(2020, 8, 12),
      item: "Laptop",
      price: 198.25,
    },
  ];
  // console.log(expenseData);
  // console.log(expenseData[0]);

  const [expenseData, setexpenseData] = useState(dummyData);

  const readExpense = (data) => {
    // console.log("App");
    // console.log(data);
    // expenseData.push(data);
    setexpenseData([data, ...expenseData]);
  };

  return (
    <div>
      <NewExpense readExpense={readExpense} />
      <Expenses expenseData={expenseData} />
    </div>
  );
}

export default App;
