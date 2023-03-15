import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const updateTitle = (e) => {
    // console.log(e.target.value)
    setTitle(e.target.value);
  };
  const updateAmount = (e) => {
    // console.log(e.target.value)
    setAmount(e.target.value);
  };
  const updateDate = (e) => {
    // console.log(e.target.value)
    setDate(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    // console.log(title, amount, date);
    alert("form Submitted Sucessfully!");

    // data in object
    const data = {
      id: Math.random().toString(),
      item: title,
      price: amount,
      date: new Date(date),
    };
    // console.log(data);
    props.sendData(data); //function call

    setTitle("");
    setAmount("");
    setDate("");

    props.setExpenseForm(false);
  };

  return (
    <form onSubmit={submitForm}>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter Your Expense Title"
            onChange={updateTitle}
            value={title}
            required
          />
        </div>
        <div className="new-expense_control">
          <label>Amount</label>
          <input
            type="number"
            placeholder="Enter Your Expense Amount"
            onChange={updateAmount}
            value={amount}
            required
          />
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input type="date" onChange={updateDate} value={date} required />
        </div>
      </div>
      <div className="new-expense_actions">
        <button onClick={() => props.setExpenseForm(false)}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
