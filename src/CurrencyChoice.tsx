import React, { useCallback } from "react";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CurrencyChoice.scss"

export default function CurrencyChoice(props: any) {
  const handleChange = useCallback((event: any) => {
    
    const currCode = event.target.value;
    console.log(currCode)
    props.updatePrice(currCode);
    props.updateHistory(currCode)
    
  }, [])
  
    return (
      <Form.Control
        className="currenyPicker"
        size="sm"
        as="select"
        onChange={handleChange}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="JPY">JPY</option>
        <option value="CNY">CNY</option>
        <option value="PLN">PLN</option>
      </Form.Control>
    );
}

