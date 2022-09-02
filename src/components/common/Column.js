import styled from 'styled-components';

export const Column = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  padding: 15px;
  @media screen and (min-width: 600px) {
    position: absolute;
    top: 0;
  }
`;
