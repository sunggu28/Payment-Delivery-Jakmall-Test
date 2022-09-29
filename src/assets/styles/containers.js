import styled from "styled-components";

export const Article = styled.article`
  padding: ${(props) => props.padding || "1rem"};
  background: white;
  min-height: 644px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columnTemplate || "100%"};
  gap: ${(props) => props.gap || "0px"};
  padding: ${(props) => props.padding || "1rem"};
  background: white;

  @media (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;