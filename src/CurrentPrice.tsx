import React, { useCallback } from "react";
import { Alert, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CurrentPrice.scss";

export default function CurrentPrice(props: any): any {

  const handleChange = useCallback((event: any) => {
    const currCode = event.target.value;
    console.log(currCode);
    props.updatePrice(currCode);
    props.updateHistory(currCode);
  }, []);
  
  return (
    <Alert variant="success">
      <Alert.Heading>Current Bitcoin Price</Alert.Heading>
      <div className="priceDisplay">
        <p className="coinPrice">{props.rate}</p>
        <Form.Select
          size="lg"
          as="select"
          onChange={handleChange}
          id='formSelect'
        >
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="JPY">JPY</option>
          <option value="CNY">CNY</option>
          <option value="PLN">PLN</option>
        </Form.Select>
      </div>
    </Alert>
  );
}
