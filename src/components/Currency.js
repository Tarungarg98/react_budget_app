import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { currency, currencyLabel, dispatch } = useContext(AppContext);

  const change_currency = (props) => {
    if (props.name === "Default") {
      return;
    }
    dispatch({
      type: "CHG_CURRENCY",
      currency: props.value,
      currencyLabel: props.name,
    });
  };

  return (
    <div className={"alert"}>
      <select
        className="custopm-select"
        id="inputGroupSelect02"
        onChange={(event) => change_currency(event.target)}
      >
        <option defaultValue="$" name="Default">
          Currency ({currency} {currencyLabel})
        </option>
        <option value="$" name="Dollar">
          $ Dollar
        </option>
        <option value="£" name="Pound">
          £ Pound
        </option>
        <option value="€" name="Euro">
          € Euro
        </option>
        <option value="₹" name="Rupee">
          ₹ Rupee
        </option>
      </select>
    </div>
  );
};

export default Currency;
