import React, { Component } from "react";
import { Dropdown } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

class CurrencyChoice extends Component {
  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Currency of choice
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="https://api.coindesk.com/v1/bpi/historical/close.json?currency=EUR">
            Euro
          </Dropdown.Item>
          <Dropdown.Item href="https://api.coindesk.com/v1/bpi/historical/close.json?currency=USD">
            US Dollar
          </Dropdown.Item>
          <Dropdown.Item href="https://api.coindesk.com/v1/bpi/historical/close.json?currency=JPY">
            Japanese Yen
          </Dropdown.Item>
          <Dropdown.Item href="https://api.coindesk.com/v1/bpi/historical/close.json?currency=CNY">
            Chinese Yuan
          </Dropdown.Item>
          <Dropdown.Item href="https://api.coindesk.com/v1/bpi/historical/close.json?currency=PLN">
            Polish zloty
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default CurrencyChoice;
