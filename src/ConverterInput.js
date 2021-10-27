import PropTypes from "prop-types";
import "./ConverterInput.css";
import React from "react";
ConverterInput.propTypes = {
  amt: PropTypes.number.isRequired,
  currencySelect: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  changeAmt: PropTypes.func,
  currencyChange: PropTypes.func,
};
function ConverterInput(props) {
  let isCurrency = "Currency is " + props.currencySelect;
  return (
    <>
      <div className="convcontainer">
        <input
          className="inpcurrency"
          type="number"
          placeholder={isCurrency}
          value={props.amt}
          onChange={(ev) => props.changeAmt(ev.target.value)}
        />
        <select
          value={props.currencySelect}
          onChange={(ev) => props.currencyChange(ev.target.value)}
        >
          {props.currencies.map((currencySelect) => (
            <option key={currencySelect} value={currencySelect}>
              {currencySelect}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default ConverterInput;
