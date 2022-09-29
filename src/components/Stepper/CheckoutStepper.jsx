import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentStep } from "../../redux/actions";
import { BsChevronRight } from "react-icons/bs";
import {
  Container,
  Point,
  Bullet,
  Bullet2,
  TxBold,
} from "./checkout-stepper-styles";

function CheckoutStepper() {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.stepReducer.currentStep);

  const changeStep = (step) => {
    dispatch(setCurrentStep(step));
  };

  return (
    <Container>
      <Point onClick={() => changeStep(1)}>//step 1
        <Bullet checked={currentStep >= 1}>1</Bullet>
        <TxBold>Delivery</TxBold>
      </Point>

      <TxBold>
        <BsChevronRight style={{ verticalAlign: "middle" }} />
      </TxBold>

      <Point onClick={() => changeStep(2)}>//step 2
        <Bullet2 checked={currentStep >= 2}>2</Bullet2>
        <TxBold>Payment</TxBold>
      </Point>

      <TxBold>
        <BsChevronRight style={{ verticalAlign: "middle" }} />
      </TxBold>

      <Point onClick={() => changeStep(3)}>//step 3
        <Bullet checked={currentStep >= 3}>3</Bullet>
        <TxBold>Finish</TxBold>
      </Point>
    </Container>
  );
}

export default CheckoutStepper;
