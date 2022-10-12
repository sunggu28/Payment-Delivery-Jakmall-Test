import styled, { css, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: #FFFAE6;
    margin: 0px !important;
  }
`;

export const OrderPageBody = styled.div`
  background-color: #fff;
  width: 1000px;
  min-height: 550px;
  margin: 0 auto;
  position: absolute;
  box-shadow: 2px 10px 20px rgba(255, 138, 0, 0.1);
  border-radius: 4px;
  display: flex;
  gap: 12px;
  padding: 50px 20px;
  @media (min-width: 851px) {
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  @media (max-width: 1100px) {
    width: 90%;
  }
  @media (max-width: 850px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Text = styled.span`
  font-weight: ${(props) => props.fontWeight || 300};
  font-family: ${(props) => props.fonfamily || "Montserrat"}, Montserrat;
  font-style: normal;
  font-size: ${(props) => props.fontSize || "14px"};
  color: ${(props) => props.color || "#000"};
  ${(props) => props.margin && `margin: ${props.margin}`}
`;

export const StepperText = styled.span`
  font-weight: ${(props) => props.fontWeight || 500};
  font-family: ${(props) => props.fonfamily || "Montserrat"}, Montserrat;
  font-style: normal;
  font-size: ${(props) => props.fontSize || "16px"};
  color: ${(props) => props.color || "#fff"};
  @media (max-width: 850px) {
    font-size: 12px;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    flex-basis: 700px;
  }
`;
export const Niv = styled.div`
  display: flex;
  padding: 150px;
  flex-direction: column;
  @media (min-width: 600px) {
    flex-basis: 700px;
  }
`;

export const Item = styled.div`
  cursor: ${(props) => props.cursor || "normal"};
  display: flex;
  gap: 12px;
  padding-left:7px;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: space-between;
  ${(props) => props.width && `width: ${props.width}`}
  ${(props) => props.alignItems && `align-items: ${props.alignItems}`}
  ${(props) =>
    props.responsive &&
    css`
      @media (max-width: 850px) {
        flex-direction: column;
      }
    `}
`;

export const ItemSummary = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 12px;
  ${(props) => {
    switch (props.direction) {
      case "row":
        return css`
          flex-direction: row;
          justify-content: space-between;
        `;
      default:
        return css`
          flex-direction: column;
        `;
    }
  }}
`;

export const ItemStepper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  border: 3px solid
    ${(props) =>
      props.status === "success"
        ? "#1BD97B"
        : props.status === "error"
        ? "#FF8A00"
        : "#ccc"};
  padding: 20px;
  box-sizing: border-box;
  width: ${(props) => props.width || "100%"};
  margin-bottom: 10px;
`;

export const TextArea = styled.textarea`
  font-family: "Poppins";
  text-decoration : None
  resize: none;
  border: 3px solid
    ${(props) =>
      props.status === "success"
        ? "#1BD97B"
        : props.status === "error"
        ? "#FF8A00"
        : "#ccc"};
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 10px;
  overflow: hidden;
 
`;

export const Grid = styled.div`
  margin: 30px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  @media (max-width: 650px) {
    overflow-x: scroll;
  }
`;

export const Card = styled.div`
  border: 1px solid white;
  display: flex;
  align-items: center;
  min-width: 190px;
  height: 60px;
  padding: 10px;
  position: relative;
`;

export const RadioButtonLabel = styled.label`
  position: absolute;
  border: 1px solid #cccccc;
  align-items: center;
  min-width: 180px;
  height: 60px;
  padding: 10px;
  margin-right:8px;
  background: transparent;
`;

export const RadioButton = styled.input`
  opacity: 0;
  position: absolute;
  z-index: 1;
  cursor: pointer;
  align-items: center;
  min-width: 190px;
  height: 60px;
  padding: 10px;
  &:checked + ${Card} {
    background: #1bd97b;
    border: 2px solid #1bd97b;
  }
  &:checked + ${RadioButtonLabel} {
    border: 3px solid #1bd97b;
    &::after {
      font-family: "Monsterrat";
      font-weight: bold;
      content: "✓";
      padding-left: 160px;
      display: left;
      color: #1bd97b;
      width: 25px;
      height: px;
      margin: 4px;
    }
  }
`;

export const Stepper = styled.div`
  max-width: 500px;
  height: 70px;
  background-color: #fffae6;
  border-radius: 35px;
  margin: 0 auto;
  padding: 0 20px;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 851px) {
    top: -35px;
    position: absolute;
  }
  @media (max-width: 850px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    overflow-x: scroll;
    border-radius: 0px;
  }
`;

export const Dot = styled.div`
  background: ${(props) => props.color || "#fff"};
  border-radius: 50%;
  height: 30px;
  width: 30px;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-right: 10px;
`;

export const SummarySection = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  @media (min-width: 851px) {
    border-left: 1px solid #ff8a0020;
    padding: 20px;
    box-sizing: border-box;
  }
`;

export const CalculationSection = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 850px) {
    margin-top: 20px;
  }
`;
export const Divider = styled.div`
  background: #d8d8d8;
  width: 80px;
  height: 1px;
  margin: 21px 0;
`;

export const Button = styled.button`
  background-color: #ff8a00;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 3px 5px 10px rgba(255, 138, 0, 0.2);
  border-radius: 2px;
  padding: 20px;
  cursor: pointer;

  &:hover {
    background-color: #ff8a0080;
  }
`;
