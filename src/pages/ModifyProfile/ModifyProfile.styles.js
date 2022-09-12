import styled from 'styled-components';

export const InfoWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 25px;
  margin-bottom: 10px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.surface};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  h2 {
    margin-bottom: 20px;
    width: 100%;
    font-size: 2rem;
    text-align: center;
  }
  @media screen and (min-width: 900px) {
    width: 800px;
    height: 40%;
    box-shadow: ${({ theme }) => theme.boxShadow};
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ImgContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const InfoContent = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-family: 'Mr Dafoe';
    font-size: 3rem;
    letter-spacing: 5px;
    text-align: center;
    color: ${({ theme }) => theme.colors.text2};
    text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2), 0px -5px 35px rgba(255, 255, 255, 0.3);
  }
  p {
    margin: 0;
    font-size: 1.2rem;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 25px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.surface};
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 900px) {
    width: 800px;
    height: auto;
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
`;
