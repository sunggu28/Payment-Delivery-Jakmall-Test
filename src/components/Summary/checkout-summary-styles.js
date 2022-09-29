import styled from "styled-components";
import {
  colorPrimary,
  colorAccent,
  colorBGVariant,
} from "../../assets/styles/app-theme";

export const Summary = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  border-left: 1px solid ${colorPrimary};
  min-height: 538px;
`;

export const SummaryTop = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
`;

export const SummaryBottom = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-end;
  flex-wrap: nowrap;
  justify-content: flex-end;
`;

export const TxFee = styled.span`
  width: 100%;
  margin: 4px 0;
  font-weight: 400;
  color: #858585;
`;

export const TxTotal = styled.span`
  width: 100%;
  margin: 6px 0;
  font-size: 24px;
  font-weight: 700;
  color: ${colorPrimary};
`;

export const Button = styled.button`
  width: 100%;
  padding: 1.5rem;
  font-size: 1.5em;
  color: white;
  margin-top: 1em;
  background: ${(props) => (props.disabled ? colorBGVariant : colorPrimary)};
  border-radius: 3px;
  display: block;
  cursor: ${(props) => (props.disabled ? "unset" : "pointer")}; ;
`;

export const Line = styled.hr`
  width: 50%;
  border-top: 1px solid ${colorAccent};
  margin: 1rem 0px;
`;