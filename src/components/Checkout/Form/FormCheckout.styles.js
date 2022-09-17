import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 100%;
  height: 90%;
  margin-top: 150px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    margin-bottom: 20px;
  }
  div {
    padding-left: 40px;
  }
  button {
    margin: 0 auto;
  }
  @media screen and (min-width: 900px) {
    width: 60%;
    height: calc(100vh - 185px);
  }
`;
