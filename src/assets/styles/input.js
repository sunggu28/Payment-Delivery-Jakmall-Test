import styled from "styled-components";
import { colorAccent, colorSuccess } from "./app-theme";

export const Input = styled.input.attrs((props) => ({
  // we can define static props
  type: "text",

  // or we can define dynamic ones
  size: props.size || "1em",
}))`
  color: black;
  height: ${(props) => props.height || "auto"};
  font-size: 1em;
  border: 2px solid ${colorAccent};
  border-radius: 3px;

  /* here we use the dynamically computed prop */
  margin: ${(props) => props.margin || "0.5em 0"};
  padding: ${(props) => props.padding || "1.3em"};
`;

export const InputBlock = styled(Input)`
  width: 90%;
`;

export const InputAreaBlock = styled.textarea.attrs((props) => ({
  // we can define static props
  type: "text",

  // or we can define dynamic ones
  size: props.size || "1em",
}))`
  color: black;
  width: 90%;
  height: ${(props) => props.height || "auto"};
  font-size: 1em;
  border: 2px solid ${colorAccent};
  border-radius: 3px;

  /* here we use the dynamically computed prop */
  margin: ${(props) => props.margin || "0.5em 0"};
  padding: ${(props) => props.padding || "1.3em"};
`;

export const SelectButton = styled.button`
  background: ${(props) => props.checked ? "#b8ffdc" : "white"};
  color: ${colorAccent};
  width: 300px;
  font-size: 1em;
  text-align: left;
  margin: ${(props) => props.margin || "0.5em"};
  padding: ${(props) => props.padding || "1.3em"};
  border: 2px solid ${(props) => props.checked ? colorSuccess : colorAccent};
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.checked ? "#b8ffdc" : "#eeeeee"};
  }
`;
