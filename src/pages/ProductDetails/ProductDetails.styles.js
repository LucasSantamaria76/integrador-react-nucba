import styled from 'styled-components';

export const ProductContainer = styled.div`
  height: 125vh;
  width: 100%;
  margin-top: 160px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 5px;
  overflow-y: auto;
  @media screen and (min-width: 900px) {
    width: 80%;
    overflow: hidden;
    height: 500px;
    display: grid;
    grid-template-columns: 45% 55%;
  }
`;

export const Image = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  margin: 0;
  background-color: #fff;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  cursor: pointer;
  overflow: hidden;
  @media screen and (min-width: 500px) {
    background-size: 30%;
  }
  @media screen and (min-width: 768px) {
    background-size: 25%;
  }
  @media screen and (min-width: 900px) {
    background-size: 100%;
  }
  @media screen and (min-width: 1200px) {
    background-size: 400px;
  }
`;

export const DetailsContainer = styled.div`
  width: 100%;
  height: 75vh;
  margin: 0;
  padding: 10px 15px;
  border-top: 1px solid ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  overflow: hidden;
  & > p {
    margin: 0;
  }
  svg {
    width: 250px;
    border-radius: 5px;
    background-color: #fff;
    border: 1px solid #000;
    box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.2), 1px 2px 6px rgba(0, 0, 0, 0.3);
  }
  @media screen and (min-width: 900px) {
    border-top: none;
    border-left: 1px solid ${({ theme }) => theme.colors.text};
  }
`;

export const BoxPrice = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  h3 {
    text-decoration: ${({ discount }) => (discount ? 'line-through' : 'none')};
  }
`;

export const BoxInfo = styled.div`
  position: absolute;
  top: 75px;
  left: -150px;
  display: ${({ show }) => (show ? 'inline-block' : 'none')};
  width: 500px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 1.5rem;
  background-color: ${({ stock }) => (stock ? '#00ff08bf' : '#ff0000aa')};
  transform: rotate(-45deg);
`;

export const BoxCart = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    margin-left: 50px;
    align-self: flex-start;
  }
  span {
    width: 40px;
    height: 40px;
    margin: 0 5px;
    text-align: center;
    line-height: 40px;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.text2};
    border-radius: 5px;
  }
`;

export const BtnCart = styled.div`
  width: 40px;
  height: 40px;
  svg {
    width: 40px;
    height: 40px;
    padding: 6px;
    fill: ${({ disabled, theme }) => (disabled ? '#999' : theme.colors.text)};
    box-shadow: ${({ disabled }) => disabled && 'none'};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    background-color: ${({ theme }) => theme.colors.text2};
    &:active {
      fill: ${({ disabled, theme }) => (!disabled ? '#f00' : '#999')};
      box-shadow: ${({ disabled }) => !disabled && 'none'};
    }
  }
`;
