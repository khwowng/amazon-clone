import React from "react";
import { Button, Card } from "react-bootstrap";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import "./Subtotal.css";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <Card className="subtotal">
      {/* format prefix, suffix and thousand separator of subtotal */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <Card.Text>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </Card.Subtitle>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"€"}
      />
      <Button variant="warning">Proceed to Checkout</Button>
    </Card>
  );
}

export default Subtotal;
