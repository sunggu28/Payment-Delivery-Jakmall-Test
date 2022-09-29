import {
  CHANGE_CURRENT_STEP,
  CHANGE_SEND_AS_DROPSHIPPER,
  SELECT_PAYMENT_METHOD,
  SELECT_SHIPMENT_METHOD,
} from "./constants";

const initialStateStep = {
  currentStep: 1,
};

export const stepReducer = (state = initialStateStep, action = {}) => {
  switch (action.type) {
    case CHANGE_CURRENT_STEP:
      return Object.assign({}, state, { currentStep: action.payload });
    default:
      return state;
  }
};

const cleanFee = (fee) => (fee ? parseInt(fee.replace(",", "")) : 0);

const initialStateSummary = {
  payment: {},
  shipment: {},
  isDropshipper: false,
  totalPayment: 500000,
};

export const summaryReducer = (state = initialStateSummary, action = {}) => {
  const newState = {};
  switch (action.type) {
    case SELECT_PAYMENT_METHOD:
      if (action.payload.name === state.payment.name)
        return Object.assign({}, state, { payment: {} });
      return Object.assign({}, state, { payment: action.payload });
    case SELECT_SHIPMENT_METHOD:
      const { name: currName, fee: currFee } = action.payload;
      const { name: prevName, fee: prevFee } = state.shipment;

      if (currName === prevName) {
        newState.shipment = {};
        newState.totalPayment = state.totalPayment - cleanFee(prevFee);
      } else {
        newState.shipment = action.payload;
        const modFee = cleanFee(currFee) - cleanFee(prevFee);
        newState.totalPayment = state.totalPayment + modFee;
      }
      return Object.assign({}, state, newState);
    case CHANGE_SEND_AS_DROPSHIPPER:
      const isDropshipper = action.payload;
      newState.isDropshipper = isDropshipper;

      if (isDropshipper) newState.totalPayment = state.totalPayment + 5900;
      else newState.totalPayment = state.totalPayment - 5900;

      return Object.assign({}, state, newState);
    default:
      return state;
  }
};
