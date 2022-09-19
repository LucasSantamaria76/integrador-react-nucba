import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

export const InfoWrapper = styled.div`
  width: 300px;
  margin: 160px auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    display: block;
    width: 100%;
    margin-bottom: 20px;

    font-size: 1.5rem;
    text-align: center;
  }
  @media screen and (min-width: 900px) {
    width: 800px;
    height: 30%;
    padding: 10px 25px;
    margin-bottom: 10px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.surface};
    box-shadow: ${({ theme }) => theme.boxShadow};
    h2 {
      font-size: 2rem;
    }
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-family: 'Mr Dafoe';
    font-size: 2rem;
    letter-spacing: 3px;
    text-align: center;
    color: ${({ theme }) => theme.colors.text2};
    text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2), 0px -5px 35px rgba(255, 255, 255, 0.3);
  }
  p {
    margin: 0;
    font-size: 1rem;
  }
  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-evenly;
    h2 {
      font-size: 3rem;
      letter-spacing: 4px;
    }
    p {
      font-size: 1.2rem;
    }
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input,
  label {
    margin-left: 10px;
  }
  button {
    margin: 0 auto;
  }
  @media screen and (min-width: 900px) {
    width: 800px;
    height: auto;
    margin: 0 auto;
    box-shadow: ${({ theme }) => theme.boxShadow};
    padding: 20px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.surface};
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
