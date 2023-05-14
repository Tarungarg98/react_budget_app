import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const Budget = () => {
  const { budget, currency, expenses, dispatch } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
  const changeBudget = (val) => {
    if (val < totalExpenses) {
      alert("The budget cannot be lower than expenses $" + totalExpenses);
      return;
    }
    if (val > 20000) {
      alert("The value cannot exceed $ 20000");
      return;
    }
    dispatch({
      type: "SET_BUDGET",
      payload: val,
    });
  };
  return (
    <div className="alert alert-secondary">
      Budget: {currency}
      <input
        name="Budget"
        required="required"
        type="number"
        id="cost"
        step={10}
        value={budget}
        style={{ marginLeft: "0rem", size: 10 }}
        onChange={(event) => changeBudget(event.target.value)}
      ></input>
    </div>
  );
};
export default Budget;
