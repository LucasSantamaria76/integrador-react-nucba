import styled from 'styled-components';

export const WrapperCard = styled.div`
  width: 300px;
  height: 500px;
  border-radius: 2px;
  box-shadow: ${({ theme }) => theme.shadow};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const CardBody = styled.div`
  position: relative;
  width: auto;
  height: 200px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 300;
  font-size: 1.5rem;
  text-align: center;
`;

export const Info = styled.h3`
  margin: 2px 0;
  color: ${({ theme }) => theme.colors.text2};
  font-weight: 500;
  font-size: 1.2rem;
  & span {
    margin-right: 5px;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Image = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 90%;
  background-color: #fff;
  cursor: pointer;
`;

export const CartContainer = styled.div`
  position: absolute;
  bottom: 35px;
  right: 10px;
  cursor: ${({ stock }) => (!!stock ? 'pointer' : 'not-allowed')};
`;

export const CardFooter = styled.div`
  position: absolute;
  bottom: 5px;
  h4 {
    color: #a9a9a9;
    margin: 0 10px;
    padding: 0;
  }
`;
