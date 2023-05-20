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
    <div className="alert alert-secondary">
      <label
        style={{
          marginLeft: "1rem",
          backgroundColor: "#33FF49",
          // color: "white",
        }}
      >
        Currency
        <select
          name="hover_color"
          id="currency"
          onChange={(event) => change_currency(event.target)}
          style={{
            marginLeft: "1rem",
            backgroundColor: "#33FF49",
            // color: "white",
          }}
        >
          <option
            style={{ color: "black" }}
            defaultValue="$"
            value="$"
            name="Dollar"
          >
            $ Dollar
          </option>
          {/* <option value="$" name="Dollar">
            $ Dollar
          </option> */}
          <option style={{ color: "black" }} value="£" name="Pound">
            £ Pound
          </option>
          <option style={{ color: "black" }} value="€" name="Euro">
            € Euro
          </option>
          <option style={{ color: "black" }} value="₹" name="Rupee">
            ₹ Rupee
          </option>
        </select>
      </label>
    </div>
  );
};

export default Currency;
