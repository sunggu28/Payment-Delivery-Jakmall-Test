import React, { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";
import {
  SummarySection,
  ItemSummary,
  Text,
  Divider,
  CalculationSection,
  Button,
} from "../Style";

const SummaryComponent = () => {
  const {
    getData,
    stepPosition,
    setStepper,
    shipmentName,
    shipmentCost,
    shipmentDuration,
    paymentName,
    isDropshipper,
    productCost,
    errorFormDelivery,
  } = useContext(DataContext);

  useEffect(() => {
    getData();
  }, [errorFormDelivery]);

  return (
    <SummarySection>
      <ItemSummary>
        <Text
          fontFamily="Montserrat"
          color="#FF8A00"
          fontSize="24px"
          fontWeight="700"
        >
          Summary
        </Text>
        <Text>10 items purchased</Text>
      </ItemSummary>

      {stepPosition && stepPosition >= 2 && (
        <>
          {shipmentName && (
            <>
              <Divider />

              <ItemSummary>
                <Text fontWeight="400">Delivery estimation</Text>
                <Text fontWeight="500" fontSize="16px" color="#1BD97B">
                  {shipmentDuration} by {shipmentName}
                </Text>
              </ItemSummary>
            </>
          )}

          {paymentName && (
            <>
              <Divider />
              <ItemSummary>
                <Text fontWeight="400">Payment method</Text>
                <Text fontWeight="500" fontSize="16px" color="#1BD97B">
                  {paymentName}
                </Text>
              </ItemSummary>
            </>
          )}
        </>
      )}

      <CalculationSection>
        <ItemSummary direction="row">
          <Text>Cost of goods</Text>
          <Text fontWeight="700">{productCost}</Text>
        </ItemSummary>
        <ItemSummary direction="row">
          <Text>Dropshipping Fee</Text>
          <Text fontWeight="700">{isDropshipper ? 5900 : 0}</Text>
        </ItemSummary>
        {shipmentName && (
          <ItemSummary direction="row">
            <Text>{shipmentName} shipment</Text>
            <Text fontWeight="700">{shipmentCost}</Text>
          </ItemSummary>
        )}

        <ItemSummary direction="row">
          <Text
            fontFamily="Montserrat"
            color="#FF8A00"
            fontSize="24px"
            fontWeight="700"
          >
            Total
          </Text>
          <Text
            fontFamily="Montserrat"
            color="#FF8A00"
            fontSize="24px"
            fontWeight="700"
          >
            {shipmentCost + (isDropshipper ? 5900 : 0) + productCost}
          </Text>
        </ItemSummary>
        {stepPosition && stepPosition === 1 ? (
          <Button
            onClick={() =>
              errorFormDelivery &&
              Object.entries(errorFormDelivery).length === 0 &&
              setStepper(2)
            }
          >
            <Text color="#fff" fontSize="18px" fontWeight="500">
              {errorFormDelivery &&
              Object.entries(errorFormDelivery).length === 0
                ? "Continue to Payment"
                : "Complete Form First"}
            </Text>
          </Button>
        ) : stepPosition === 2 ? (
          <Button onClick={() => paymentName && shipmentName && setStepper(3)}>
            <Text color="#fff" fontSize="18px" fontWeight="500">
              {paymentName === "" || shipmentName === ""
                ? "Select Shipment / Payment First"
                : `Pay with ${paymentName}`}
            </Text>
          </Button>
        ) : (
          <></>
        )}
      </CalculationSection>
    </SummarySection>
  );
};

export default SummaryComponent;
