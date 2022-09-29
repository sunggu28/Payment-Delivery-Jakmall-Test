import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toggleSendAsDropshipper } from "../../redux/actions";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";
import { BsCheckLg, BsXLg } from "react-icons/bs";
import isEmail from "validator/es/lib/isEmail";
import isMobilePhone from "validator/es/lib/isMobilePhone";
import {TxTitle, BtnTxRegular, TxSuccess,} from "../../assets/styles/typography";
import { GridContainer } from "../../assets/styles/containers";
import { InputAreaBlock } from "../../assets/styles/input";
import { InputContainer, TextInput, Icon } from "../../assets/styles/forms";

const Delivery = styled.div`
  background: white;
`;

const DeliveryTitle = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  @media (max-width: 700px) {
    grid-template-columns: 100%;
  }
`;

const BtnDropshipper = styled.div`
  padding: 0 3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 6px;
`;

function DeliveryForm() {
  const {
    reset,
    register,
    getValues,
    formState: { errors, touchedFields },
  } = useForm({
    mode: "onBlur", // or "onChange"
  });

  const dispatch = useDispatch();
  const isDropshipper = useSelector(
    (state) => state.summaryReducer.isDropshipper
  );

  const toggleDropshipper = () => {
    console.log(errors, touchedFields);
    if (isDropshipper) {
      console.log("reset");
      reset(
        { ...getValues(), dropshipper_name: "", dropshipper_phone: "" },
        { keepErrors: true, keepTouched: true }
      );
    }

    dispatch(toggleSendAsDropshipper(!isDropshipper));
  };

  console.log(errors, touchedFields);

  const InputBlock = ({ type, val, placeholder, formOpts = {}, disabled }) => {
    return (
      <InputContainer>
        <TextInput type={type} valid={touchedFields[val]} hasError={errors && errors[val]} title={errors && errors[val] && errors[val].message} placeholder={placeholder} disabled={disabled} {...register(val, formOpts)} />
        <Icon valid={touchedFields[val]} hasError={errors && errors[val]} title={errors && errors[val] && errors[val].message} >
              {disabled ? "" : errors && errors[val] ? <BsXLg /> : <BsCheckLg />}
        </Icon>
      </InputContainer>
    );
  };

  return (
    <Delivery>
      <DeliveryTitle>
        <TxTitle>Delivery Details</TxTitle>

        <BtnDropshipper onClick={() => toggleDropshipper()}>
          <TxSuccess>
            {isDropshipper ? <GrCheckboxSelected /> : <GrCheckbox />}
          </TxSuccess>
          <BtnTxRegular>Send as dropshipper</BtnTxRegular>
        </BtnDropshipper>
      </DeliveryTitle>

      <GridContainer columnTemplate="55% 45%" gap="8px" padding="2rem 0">
        <div>
          <InputBlock type="email" val="email" placeholder="Email" formOpts={{ required: "is required",
                       validate: { isEmail: (value) => isEmail(value) || "doesn't look like email", }, }} />
          <InputBlock type="number" val="phone_number" placeholder="Phone Number" 
                      formOpts={{ required: "is required", validate: {isMobilePhone: (value) => isMobilePhone(value) || "doesn't look like a phone number", }, }} />
          <InputAreaBlock placeholder="Delivery Address" height="200px" {...register("address")} />
        </div>
        <div>
          <InputBlock type="text" val="dropshipper_name" placeholder="Dropshipper Name" disabled={!isDropshipper} formOpts={isDropshipper ? { required: "is required" } : {}}/>
          <InputBlock type="number" val="dropshipper_phone" placeholder="Dropshipper Phone number" disabled={!isDropshipper} formOpts={isDropshipper ? { required: "is required" } : {}}/>
        </div>
      </GridContainer>
    </Delivery>
  );
}

export default DeliveryForm;
