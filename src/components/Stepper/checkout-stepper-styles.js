import styled from "styled-components";
import {
  colorBG,
  colorBGVariant,
  colorPrimary,
} from "../../assets/styles/app-theme";

export const Container = styled.nav`
  background: ${colorBG};
  display: flex;
  gap: 2rem;
  width: max-content;
  position: fixed;
  left: 50%;
  top: 3rem;
  padding: 1rem 2rem;
  z-index: 2;
  transform: translateX(-50%);
  border-radius: 2rem;

  @media (max-width: 768px) {
    top: 50%;
    right: -3%;
    padding: 1.5rem;
    flex-direction: column;
    transform: translateX(377%);
  }
`;

export const Point = styled.span`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
`;

export const Bullet = styled.a`
  background: ${(props) => (props.checked ? colorPrimary : colorBGVariant)};
  width: 35px;
  height: 35px;
  padding-top: 2%;
  padding-left: 12%;
  border-radius: 50%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: inline;
  font-size: 1.3rem;

  @media (max-width: 768px) {
    padding-top: 6%;
    padding-left: 39%;
  }
`;

export const Bullet2 = styled(Bullet)`
  padding-left: 9%;
  @media (max-width: 768px) {
    padding-top: 6%;
    padding-left: 35%;
  }
`;

export const TxBold = styled.h2`
  font-weight: 600;
  color: ${colorPrimary};
  @media (max-width: 768px) {
    display: none;
  }
`;