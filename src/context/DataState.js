import React, { useReducer } from "react";

// Bring the context
import DataContext from "./DataContext";

// Bring the reducer
import DataReducer from "./DataReducer";

const DataState = ({ children }) => {
  // Define our state, from localstorage
  const initialState = {
    stepPosition: 1,
    email: "",
    phoneNumber: "",
    address: "",
    isDropshipper: false,
    dropshipName: "",
    dropshipPhoneNumber: "",
    shipmentCost: 0,
    shipmentName: "",
    shipmentDuration: "",
    paymentName: "",
    productCost: 500000,
    errorFormDelivery: {},
  };

  
  const [state, dispatch] = useReducer(DataReducer, initialState);

  const setErrorFormDelivery = (payload) => {
    dispatch({ type: "SET_ERROR_DELIVERY", payload });
  };

  const setDelivery = (payload) => {
    if (!payload.isDropshipper) {
      payload.dropshipName = "";
      payload.dropshipPhoneNumber = "";
    }
    //set to localstorage 
    localStorage.setItem("deliveryData", JSON.stringify(payload));
    
    dispatch({ type: "SET_DELIVERY", payload });
  };

  const setStepper = (payload) => {
    //get from localstorage 
    const data = JSON.parse(localStorage.getItem("deliveryData"));
    data["stepPosition"] = payload;
    //set to localstorage 
    localStorage.setItem("deliveryData", JSON.stringify(data));
    if (payload === 3) {
      order();
    } else if (payload === "reset") {
      localStorage.removeItem("deliveryData");
      dispatch({ type: "RESET_DATA", payload: initialState });
      payload = 1;
    }
    dispatch({ type: "SET_STEPPER", payload });
  };

  const order = () => {
    //random id
    const char = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjklmnpqrstuvwxyz23456789";
    let result = "";
    const charLength = char.length;
    for (let i = 0; i < 5; i++) {
      result += char.charAt(Math.floor(Math.random() * charLength));
    }

    //get from localstorage 
    const data = JSON.parse(localStorage.getItem("deliveryData"));
    data["oderId"] = result;
    data["status"] = "success";

    const payload = { oderId: result, status: "success" };
    dispatch({ type: "SET_ORDER", payload });
  };

  const setShipment = ({ ...payload }) => {
    //get from localstorage
    const data = JSON.parse(localStorage.getItem("deliveryData"));
    data["shipmentName"] = payload.shipmentName;
    data["shipmentCost"] = payload.shipmentCost;
    data["shipmentDuration"] = payload.shipmentDuration;
    //set to localstorage
    localStorage.setItem("deliveryData", JSON.stringify(data));
    dispatch({ type: "SET_SHIPMENT", payload });
  };

  const setPayment = (payload) => {
    //get from localstorage
    const data = JSON.parse(localStorage.getItem("deliveryData"));
    data["paymentName"] = payload;
    //set to localstorag 
    localStorage.setItem("deliveryData", JSON.stringify(data));
    dispatch({ type: "SET_PAYMENT", payload });
  };

  const getData = () => {
    //get from localstorage
    const payload = JSON.parse(localStorage.getItem("deliveryData"));
    dispatch({ type: "GET_DATA", payload });
  };

  return (
    <DataContext.Provider
      value={{
        ...state,
        setDelivery,
        setErrorFormDelivery,
        setStepper,
        setShipment,
        setPayment,
        getData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataState;
