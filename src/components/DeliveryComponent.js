import React, { useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import DataContext from "../context/DataContext";
import { Div, Item, Text, Input, TextArea } from "../Style";

const DeliveryComponent = () => {
  const {
    getData,
    email,
    phoneNumber,
    address,
    isDropshipper,
    dropshipName,
    dropshipPhoneNumber,
    setDelivery,
    setErrorFormDelivery,
  } = useContext(DataContext);

  const {
    register,
    watch,
    trigger,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  useEffect(() => {
    getData();
    setValue("email", email);
    setValue("phoneNumber", phoneNumber && parseInt(phoneNumber));
    setValue("address", address);
    setValue("dropshipName", dropshipName);
    setValue("dropshipPhoneNumber", dropshipPhoneNumber);
    setValue("isDropshipper", isDropshipper);
    trigger();
    setErrorFormDelivery(errors);
  }, [
    email,
    phoneNumber,
    address,
    dropshipName,
    dropshipPhoneNumber,
    isDropshipper,
    trigger,
    errors,
  ]);

  useEffect(() => {
    const subscription = watch((value) => {
      setDelivery(value);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <Div>
      <Item cursor="pointer" width="110px">
        <span style={{ fontSize: "17px" }} className="material-symbols-outlined">
          arrow_back
        </span>
        <Text>Back to cart</Text>
      </Item>
      <Item>
        <Text fontFamily="Montserrat" color="#FF8A00" fontSize="36px" fontWeight="700">
          Delivery details
        </Text>
        <Item alignItems="center">
          <Input width="20px" type="checkbox" name="isDropshipper" id="isDropshipper" {...register("isDropshipper")}
          />
          <Text htmlFor="isDropshipper">Send as dropshipper</Text>
        </Item>
      </Item>
      <Item responsive>
        <div>
          <Input status={errors.email ? "error" : "success"} type="text" placeholder="Email" {...register("email", { required: true, pattern: { value: /^\S+@\S+\.\S+$/ }, })}></Input>
          <Input
            status={errors.phoneNumber ? "error" : "success"}
            {...register("phoneNumber", {
              required: true,
              pattern: {
                value: /\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/g,
              },
            })}type="text" placeholder="Phone Number"
          > 
          </Input>
          <TextArea
            status={errors.address ? "error" : "success"}
            {...register("address", {
              required: true,
              maxLength: 120,
            })}
            rows="5"
            placeholder="Delivery address"
          ></TextArea>
          <Text>
            {watch("address")?.length <= 120
              ? `Sisa karakter : ${120 - watch("address")?.length}`
              : "Karakter harus kurang dari 120"}{" "}
          </Text>
        </div>
        <div>
          <Input
            disabled={!isDropshipper}
            type="text"
            status={
              isDropshipper
                ? errors.dropshipName
                  ? "error"
                  : "success"
                : "default"
            }
            {...register("dropshipName", {
              required: isDropshipper ? true : false,
            })}
            placeholder="Dropshipper name"
          ></Input>
          <Input
            disabled={!isDropshipper}
            type="text"
            status={
              isDropshipper
                ? errors.dropshipPhoneNumber
                  ? "error"
                  : "success"
                : "default"
            }
            {...register("dropshipPhoneNumber", {
              required: isDropshipper ? true : false,
              pattern: {
                value: /\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/g,
              },
            })}
            placeholder="Dropshipper phone Number"
          ></Input>
        </div>
      </Item>
    </Div>
  );
};

export default DeliveryComponent;
