import styled from 'styled-components';

export const Logo = styled.div`
  position: relative;
  width: 110px;
  height: 70px;
  margin-top: 10px;
  grid-column: 1/2;
  grid-row: 1/2;
  @media screen and (min-width: 900px) {
    width: 150px;
    height: 90px;
    grid-row: 1/3;
  }
`;

export const ImgLogo = styled.img`
  width: 90px;
  height: 35px;
  cursor: pointer;
  @media screen and (min-width: 900px) {
    width: 150px;
    height: 90px;
  }
`;

export const TextLogo = styled.h2`
  position: absolute;
  top: 20px;
  left: 0;
  width: 90px;
  height: 35px;
  font-size: 1.2rem;
  font-family: 'Mr Dafoe';
  color: white;
  cursor: pointer;
  text-shadow: 0 0 0.05em #ff0000, 0 0 0.2em #ff0000, 0 0 0.3em #ff0000;
  transform: rotate(-20deg);
  @media screen and (min-width: 900px) {
    top: 55px;
    width: 200px;
    height: 50px;
    font-size: 2.5rem;
  }
`;
