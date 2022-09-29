import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentStep } from "../../redux/actions";

import { TxRegular, TxBold, TxSuccess } from "../../assets/styles/typography";
import {
  Line,
  Button,
  TxFee,
  TxTotal,
  Summary,
  SummaryTop,
  SummaryBottom,
} from "./checkout-summary-styles";



const Methods = ({ title, value }) => {
  return (
    <div>
      <Line />
      <TxRegular>{title}</TxRegular>
      <TxSuccess style={{ textAlign: "left", fontSize: "20px" }}>
        {value}
      </TxSuccess>
    </div>
  );
};



function CheckoutSummary() {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.stepReducer.currentStep);
  const summaryReducer = useSelector((state) => state.summaryReducer);
  const {
    payment,
    shipment,
    isDropshipper: dropship,
    totalPayment,
  } = summaryReducer;



  const changeStep = (step) => {
    dispatch(setCurrentStep(step));
  };



  const ShipmentDetail = () => {
    if (!shipment.name) return "";

    return (
      <Methods
        title="Delivery estimation"
        value={`${shipment.estimate} by ${shipment.name}`}
      />
    );
  };



  const PaymentDetail = () => {
    if (!payment.name) return "";
    return <Methods title="Payment method" value={payment.name} />;
  };

  const DropshipFee = () => {
    if (!dropship) return "";

    return (
      <TxFee>
        Dropshipping fee
        <strong style={{ float: "right" }}>5,900</strong>
      </TxFee>
    );
  };


  
  const ShipmentFee = () => {
    if (!shipment.name) return "";

    const { name, fee } = shipment;
    return (
      <TxFee>
        <strong>{name}</strong> shipment
        <strong style={{ float: "right" }}>{fee}</strong>
      </TxFee>
    );
  };

  return (
    <Summary>
      <SummaryTop>
        <TxBold>Summary</TxBold>
        <TxRegular>10 items purchased</TxRegular>

        <ShipmentDetail />
        <PaymentDetail />
      </SummaryTop>

      <SummaryBottom>
        <TxFee>
          Cost of Goods
          <strong style={{ float: "right" }}>500,000</strong>
        </TxFee>
        <DropshipFee />
        <ShipmentFee />
        <TxTotal>
          Total
          <strong style={{ float: "right" }}>
            {totalPayment.toLocaleString()}
          </strong>
        </TxTotal>

        {currentStep !== 3 && (
          <Button
            disabled={currentStep === 2 && !payment.name}
            onClick={() => changeStep(currentStep+1)}
          >
            {currentStep === 1
              ? "Continue to Payment"
              : payment.name
              ? `Pay with ${payment.name}`
              : "Please select payment method"}
          </Button>
        )}
      </SummaryBottom>
    </Summary>
  );
}

export default CheckoutSummary;
