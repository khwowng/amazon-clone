import React from "react";
import { Button, Card } from "react-bootstrap";
import CurrencyFormat from "react-currency-format";

import "./Subtotal.css";

function Subtotal() {
  return (
    <Card className="subtotal">
      {/* format prefix, suffix and thousand separator of subtotal */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <Card.Text>
              Subtotal (0 items): <strong>0</strong>
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </Card.Subtitle>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"€"}
      />
      <Button variant="warning">Proceed to Checkout</Button>
    </Card>
  );
}

export default Subtotal;
