import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ readExpense }) => {
  const [showExpenseForm, setExpenseForm] = useState(false);
  const newExpenseData = (data) => {
    // console.log("hello in new Expense");
    // console.log(data);
    readExpense(data);
  };
  const formHandler = () => {
    setExpenseForm(true);
  };

  return (
    <div className="new-expense">
      {!showExpenseForm && <button onClick={formHandler}>Add Expense</button>}

      {showExpenseForm && (
        <ExpenseForm
          sendData={newExpenseData}
          setExpenseForm={setExpenseForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
