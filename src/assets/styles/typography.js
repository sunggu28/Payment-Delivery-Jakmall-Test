import styled from 'styled-components';
import { colorPrimary, colorSuccess } from './app-theme'

export const TxTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: ${colorPrimary};
`;

export const TxBold = styled.h2`
  font-weight: 600;
  color: ${colorPrimary};
`;

export const TxRegular = styled.span`
  font-weight: 400;
  color: #858585;
`;

export const TxSuccess = styled.h5`
  font-size: 26px;
  font-weight: 600;
  color: ${colorSuccess};
  margin-top: 6px;
  text-align: center;
  vertical-align: middle;
`;

export const BtnTxRegular = styled.span`
  font-weight: 400;
  color: #858585;
  cursor: pointer;
`;