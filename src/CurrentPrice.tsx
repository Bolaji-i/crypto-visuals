import React from "react";
import { Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CurrentPrice(props: any): any {
  
  return (
    <Alert variant="success">
      <Alert.Heading>Current Bitcoin Price</Alert.Heading>
      <p className="coinPrice">{props.rate}</p>
    </Alert>
  );
}
