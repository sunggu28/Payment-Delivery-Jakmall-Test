import {
  CHANGE_CURRENT_STEP,
  CHANGE_SEND_AS_DROPSHIPPER,
  SELECT_SHIPMENT_METHOD,
  SELECT_PAYMENT_METHOD,
} from "./constants";

export const setCurrentStep = (step) => ({
  type: CHANGE_CURRENT_STEP,
  payload: step,
});

export const toggleSendAsDropshipper = (payload) => ({
  type: CHANGE_SEND_AS_DROPSHIPPER,
  payload,
});

export const setShipmentMethod = (payload) => ({
  type: SELECT_SHIPMENT_METHOD,
  payload,
});

export const setPaymentMethod = (payload) => ({
  type: SELECT_PAYMENT_METHOD,
  payload,
});
