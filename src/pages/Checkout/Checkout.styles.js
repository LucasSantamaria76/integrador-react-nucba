import styled from 'styled-components';
import { MainContainer } from '../../components/common';
import { Column } from './../../components/common/Column';

export const CheckoutWrapper = styled(MainContainer)`
  width: 100vw;
  height: 100%;
  margin: 0;
  padding: 0 10px;
  display: flex;
  flex-direction: Column;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
