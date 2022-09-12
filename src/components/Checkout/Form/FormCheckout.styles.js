import styled from 'styled-components';

export const FormWrapper = styled.div`
  h2 {
    margin-bottom: 40px;
  }
  @media screen and (min-width: 900px) {
    width: 40%;
    height: calc(100vh - 185px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
