import styled from "styled-components";
import { colorAccent, colorPrimary, colorSuccess } from "./app-theme";

export const InputContainer = styled.div`
  width: 90%;
`;

export const TextInput = styled.input`
  width: 100%;
  color: black;
  height: ${(props) => props.height || "auto"};
  font-size: 1em;
  border: 2px solid
    ${(props) =>
      props.disabled
        ? colorAccent
        : props.hasError
        ? colorPrimary
        : props.valid
        ? colorSuccess
        : colorAccent};
  border-radius: 3px;
  background: transparent;

  /* here we use the dynamically computed prop */
  margin: ${(props) => props.margin || "0.5em 0"};
  padding: ${(props) => props.padding || "1.3em"};
`;

export const Icon = styled.span`
  width: 32px;
  height: 32px;
  display: inline;
  float: right;
  margin-top: -9%;
  margin-right: 2%;
  z-index: 1;
  cursor: pointer;
  color: ${(props) =>
    props.disabled
      ? "transparent"
      : props.hasError
      ? colorPrimary
      : props.valid
      ? colorSuccess
      : "transparent"};
`;
