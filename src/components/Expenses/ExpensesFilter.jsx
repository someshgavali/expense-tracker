import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter_control">
        <label>Filter By Year</label>
        <select
          onChange={(e) => {
            props.updateFilterYear(e.target.value);
          }}
          value={props.filterYear}
        >
          {/* <option value="2019">Select Your Year</option> */}
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
