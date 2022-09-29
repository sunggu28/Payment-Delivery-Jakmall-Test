import React from "react";
import styled from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setCurrentStep } from "../../redux/actions";

import {
  TxTitle,
  TxBold,
  TxRegular,
  BtnTxRegular,
} from "../../assets/styles/typography";

const Container = styled.div`
  margin: auto;
`;

const makeid = (length) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  characters.replace("1", "");
  characters.replace("l", "");
  characters.replace("0", "");
  characters.replace("O", "");
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

function CheckoutFinish() {
  const dispatch = useDispatch();

  const changeStep = (step) => {
    dispatch(setCurrentStep(step));
  };

  return (
    <Container>
      <TxTitle>Thank you</TxTitle>
      <TxBold style={{ color: "#585858" }}>
        Order ID: <strong>{makeid(5)}</strong>
      </TxBold>
      <TxRegular>Your order will be delivered today with </TxRegular>

      <div style={{ marginTop: "5rem" }}>
        <BtnTxRegular onClick={() => changeStep(1)}>
          <AiOutlineArrowLeft style={{ verticalAlign: "middle" }} />
          &nbsp;&nbsp; Go to homepage
        </BtnTxRegular>
      </div>
    </Container>
  );
}

export default CheckoutFinish;
