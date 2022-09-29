import React from "react";
import styled from "styled-components";
import { GoCheck } from "react-icons/go";

import { useDispatch, useSelector } from "react-redux";
import { setShipmentMethod, setPaymentMethod } from "../../redux/actions";

import { TxTitle, TxSuccess } from "../../assets/styles/typography";
import { SelectButton } from "../../assets/styles/input";

const TxTag = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #858585;
`;

const TxFee = styled.h5`
  font-size: 26px;
  font-weight: 600;
  color: #585858;
  margin-top: 6px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  gap: 2px;
`;

const shipmentTypes = [
  { name: "GO-SEND", fee: "15,000", estimate: "today" },
  { name: "JNE", fee: "9,000", estimate: "2 days" },
  { name: "Personal Courier", fee: "29,000", estimate: "1 day" },
];

const paymentTypes = [
  { name: "e-Wallet", fee: "1,500,000 left" },
  { name: "Bank Transfer", fee: "" },
  { name: "Virtual Account", fee: "" },
];

function PaymentForm() {
  const dispatch = useDispatch();
  const summaryReducer = useSelector((state) => state.summaryReducer);
  const { payment: selectedPayment, shipment: selectedShipment } =
    summaryReducer;

  const setSelectedShipment = (shipment) => {
    dispatch(setShipmentMethod(shipment));
  };

  const setSelectedPayment = (payment) => {
    dispatch(setPaymentMethod(payment));
  };

  return (
    <div>
      <div>
        <TxTitle>Shipment</TxTitle>

        <div>
          {shipmentTypes.map((shipment) => (
            <SelectButton
              key={shipment.name}
              checked={shipment.name === selectedShipment.name}
              onClick={() => setSelectedShipment(shipment)}
            >
              <Grid>
                <div>
                  <TxTag>{shipment.name}</TxTag>
                  <TxFee>{shipment.fee}</TxFee>
                </div>
                <TxSuccess>
                  {shipment.name === selectedShipment.name ? <GoCheck /> : ""}
                </TxSuccess>
              </Grid>
            </SelectButton>
          ))}
        </div>
      </div>
      <div style={{ marginTop: "3rem" }}>
        <TxTitle>Payment</TxTitle>

        <div>
          {paymentTypes.map((payment) => (
            <SelectButton
              key={payment.name}
              checked={payment.name === selectedPayment.name}
              onClick={() => setSelectedPayment(payment)}
        >
              <Grid>
                <div>
                  {payment.fee ? (
                    <TxTag>{payment.name}</TxTag>
                  ) : (
                    <TxTag style={{ color: "transparent" }}>
                      {payment.name}
                    </TxTag>
                  )}

                  <TxFee>{payment.fee || payment.name}</TxFee>

                </div>
                <TxSuccess>
                  {payment.name === selectedPayment.name ? <GoCheck /> : ""}
                </TxSuccess>
              </Grid>
            </SelectButton>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PaymentForm;
