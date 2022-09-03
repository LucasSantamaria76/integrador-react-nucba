import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 30px;
  //margin: 10px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.boxShadow};
  h2,
  h4 {
    margin: 10px 0;
  }
  overflow: hidden;
  @media screen and (min-width: 600px) {
    width: 500px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  .google {
    display: flex;
    justify-content: center;
    h4 {
      display: inline-block;
      margin: 0;
    }
    svg {
      font-size: 1.5rem;
    }
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text2};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.hover};
    }
  }
`;
