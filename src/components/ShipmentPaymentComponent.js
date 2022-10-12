import React, { useEffect, useContext } from "react";
import DataContext from "../context/DataContext";
import {
  Div,
  Item,
  Text,
  Grid,
  Card,
  RadioButton,
  RadioButtonLabel,
} from "../Style";

const ShipmentPaymentComponent = () => {
  const {
    getData,
    setStepper,
    setShipment,
    shipmentName,
    setPayment,
    paymentName,
  } = useContext(DataContext);

  useEffect(() => {
    getData();
  }, []);

  const courier = [
    { name: "GO-SEND", price: 50000, duration: "Today" },
    { name: "JNE", price: 9000, duration: "2 days" },
    { name: "Personal Courier", price: 29000, duration: "1 day" },
  ];
  const payment = [
    { name: "e-Wallet", value: 1500000 },
    { name: "Bank Transfer", value: null },
    { name: "Virtual Account", value: null },
  ];
  const handleSelectChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    if (name === "radioCourier") {
      const courierData = courier.filter((el) => el.name === value)[0];
      setShipment({
        shipmentName: value,
        shipmentCost: courierData["price"],
        shipmentDuration: courierData["duration"],
      });
    } else {
      setPayment(value);
    }
  };
  return (
    <Div>
      <Item cursor="pointer" onClick={() => setStepper(1)} width="140px">
        <span
          style={{ fontSize: "17px" }}
          className="material-symbols-outlined"
        >
          arrow_back
        </span>
        <Text>Back to delivery</Text>
      </Item>
      <Text
        fontFamily="Montserrat"
        color="#FF8A00"
        fontSize="36px"
        fontWeight="700"
      >
        Shipment
      </Text>
      <Grid>
        {courier.map((courier, index) => (
          
          <Card key={index}>
            <Item gap="0" direction="column">
              <Text color="#000">{courier.name}</Text>
                <Text color="#000" fontSize="16px" fontWeight="700">
                  {courier.price}
                </Text>
            </Item>
            <RadioButton
              type="radio"
              name="radioCourier"
              value={courier.name}
              checked={shipmentName === courier.name}
              onChange={(event) => handleSelectChange(event)}
            />
            <RadioButtonLabel />
          </Card>
        ))}
      </Grid>

      <Text
        color="#FF8A00"
        fontSize="36px"
        fontFamily="Montserrat"
        fontWeight="700"
      >
        Payment
      </Text>
      <Grid>
        {payment.map((payment, index) => (
          <Card key={index}>
            <Item gap="0" direction="column">
              <Text color="#000">{payment.name}</Text>
                <Text color="#000" fontSize="16px" fontWeight="700">
                  {payment.value}
                </Text>
            </Item>
            <RadioButton
              type="radio"
              name="radioPayment"
              value={payment.name}
              checked={paymentName === payment.name}
              onChange={(event) => handleSelectChange(event)}
            />
            <RadioButtonLabel />
          </Card>
        ))}
      </Grid>
    </Div>
  );
};

export default ShipmentPaymentComponent;
