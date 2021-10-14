import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import HistoricPrice from "./HistoricPrice";
import CurrentPrice from "./CurrentPrice";
import CurrencyChoice from "./CurrencyChoice";

class App extends Component {
  render() {
    return(
      <div className = "App">
        <CurrentPrice />
        <CurrencyChoice />
        <HistoricPrice />
      </div>   
    )
  }
}

export default App