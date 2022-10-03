import styled from 'styled-components';

export const ProductContainer = styled.div`
  height: 97%;
  width: 80%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 5px;
  overflow: hidden;
  @media (min-width: 600px) {
    width: 60%;
  }
  @media screen and (min-width: 900px) {
    margin-top: 0;
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
  height: 45%;
  margin: 0;
  background-color: #fff;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  cursor: pointer;
  overflow: hidden;
  @media screen and (min-width: 800px) {
    background-size: 70%;
  }
  @media (min-width: 900px) {
    height: 100%;
  }
  @media screen and (min-width: 1200px) {
    background-size: 400px;
  }
`;

export const DetailsContainer = styled.div`
  width: 100%;
  height: 52%;
  margin: 0;
  padding: 5px 0 0;
  border-top: 1px solid ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  overflow: hidden;
  h2,
  h3,
  h5,
  p {
    margin: 0;
  }
  h2 {
    font-size: 1.2rem;
  }
  h3 {
    font-size: 1rem;
  }
  p {
    font-size: 0.8rem;
  }
  svg {
    width: 250px;
    border-radius: 5px;
    background-color: #fff;
    border: 1px solid #000;
    box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.2), 1px 2px 6px rgba(0, 0, 0, 0.3);
  }
  @media screen and (min-width: 900px) {
    height: 100%;
    border-top: none;
    border-left: 1px solid ${({ theme }) => theme.colors.text};
    h2 {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 1.2rem;
    }
    p {
      font-size: 1rem;
    }
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
    background-color: ${({ theme }) => theme.colors.secondaryText};
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
    background-color: ${({ theme }) => theme.colors.secondaryText};
    &:active {
      fill: ${({ disabled, theme }) => (!disabled ? '#f00' : '#999')};
      box-shadow: ${({ disabled }) => !disabled && 'none'};
    }
  }
`;
