import styled from 'styled-components';

export const BackgroundHeader = styled.div`
  width: 100%;
  height: 70px;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  @media (min-width: 900px) {
    height: 150px;
  }
`;

export const Wrapper = styled.header`
  width: 100%;
  height: 70px;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.colors.backgroundHeader};
  box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.75);
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr;
  grid-template-rows: 1fr;
  svg {
    grid-column: 4/5;
    grid-row: 1/2;
    justify-self: end;
    font-size: 2rem;
    height: 70px;
    cursor: pointer;
    :active {
      fill: ${({ theme }) => theme.colors.danger};
    }
  }
  @media (min-width: 900px) {
    height: 150px;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 75px 75px;
  }
`;
