const DataReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_DATA":
      return { ...state, ...payload };
    case "SET_STEPPER":
      return { ...state, stepPosition: payload };
    case "SET_ORDER":
      return { ...state, oderId: payload.oderId, status: payload.status };
    case "SET_SHIPMENT":
      return {
        ...state,
        shipmentCost: payload.shipmentCost,
        shipmentName: payload.shipmentName,
        shipmentDuration: payload.shipmentDuration,
      };
    case "SET_PAYMENT":
      return {
        ...state,
        paymentName: payload,
      };
    case "SET_DELIVERY":
      return {
        ...state,
        ...payload,
      };
    case "SET_ERROR_DELIVERY":
      return {
        ...state,
        errorFormDelivery: payload,
      };
    case "RESET_DATA":
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};


export default DataReducer;
