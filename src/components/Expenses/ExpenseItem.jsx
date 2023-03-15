import React from "react";
import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <div className="expense-item ">
      <div>
        <ExpenseDate expenseData={props.expenseData} />
      </div>
      <div className="expense-item_description">
        <h2>{props.expenseData.item}</h2>
      </div>
      <div className="expense-item_price">${props.expenseData.price}</div>
    </div>
  );
};

export default ExpenseItem;
