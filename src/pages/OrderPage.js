import React, { useEffect, useContext } from "react";
import DeliveryComponent from "../components/DeliveryComponent";
import FinalComponent from "../components/FinalComponent";
import ShipmentPaymentComponent from "../components/ShipmentPaymentComponent";
import StepperComponent from "../components/StepperComponent";
import SummaryComponent from "../components/SummaryComponent";
import { GlobalStyle, OrderPageBody } from "../Style";
import DataContext from "../context/DataContext";
const OrderPage = () => {
  const { getData, stepPosition } = useContext(DataContext);

  useEffect(() => {
    getData();
  }, []);

  
  return (
    <>
      <GlobalStyle />
      <OrderPageBody>
        <StepperComponent />
        {stepPosition && stepPosition === 1 ? (
          <DeliveryComponent />
        ) : stepPosition === 2 ? (
          <ShipmentPaymentComponent />
        ) : (
          <FinalComponent />
        )}
        <SummaryComponent />
      </OrderPageBody>
    </>
  );
};

export default OrderPage;
