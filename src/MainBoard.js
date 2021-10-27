import "./MainBoard.css";
import Navbar from "./Navbar";
import ConverterInput from "./ConverterInput";
import rupee from "./img/rupee.png";
import React, { useEffect, useState } from "react";
import axios from "axios";


function MainBoard() {
  // const [currencyValue, setCurrencyValue] = useState([]);
  const [firstCurrency, setFirstCurrency] = useState("INR");
  const [secondCurrency, setSecondCurrency] = useState("USD");
  const [rates, setRates] = useState([]);
  const [amt1, setAmt1] = useState(1);
  const [amt2, setAmt2] = useState(1);

  useEffect(() => {
    axios
      .get(
        "http://data.fixer.io/api/latest?access_key=2f5d7a60c537f3b085671a1eee8aaa7a"
      )
      .then((response) => {
        setRates(response.data.rates);
      });
  }, []);

  useEffect(() => {
    if (!!rates) {
      function init() {
        handleAmount1Change(1);
      }
      init();
    } // eslint-disable-next-line
  }, [rates]);

  function format(number) {
    return number.toFixed(4);
  }
  function handleAmount1Change(amt1) {
    setAmt2(format((amt1 * rates[secondCurrency]) / rates[firstCurrency]));
    setAmt1(amt1);
  }

  function handlefirstCurrencyChange(firstCurrency) {
    setAmt2(format((amt1 * rates[secondCurrency]) / rates[firstCurrency]));
    setFirstCurrency(firstCurrency);
  }

  function handleAmount2Change(amt2) {
    setAmt1(format((amt2 * rates[firstCurrency]) / rates[secondCurrency]));
    setAmt2(amt2);
  }

  function handlesecondCurrencyChange(secondCurrency) {
    setAmt1(format((amt2 * rates[firstCurrency]) / rates[secondCurrency]));
    setSecondCurrency(secondCurrency);
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="maincontainer">
        <ConverterInput
          changeAmt={handleAmount1Change}
          currencyChange={handlefirstCurrencyChange}
          currencies={Object.keys(rates)}
          amt={amt1}
          currencySelect={firstCurrency}
        />
        <div className="currimg">
          <img src={rupee} alt="rupee" />
        </div>
        <ConverterInput
          changeAmt={handleAmount2Change}
          currencyChange={handlesecondCurrencyChange}
          currencies={Object.keys(rates)}
          amt={amt2}
          currencySelect={secondCurrency}
        />
      </div>
    </>
  );
}

export default MainBoard;
