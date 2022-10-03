import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 3px;
  box-shadow: ${({ theme }) => theme.shadow};
  display: flex;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  form {
    width: 100%;
  }
  h2,
  h4 {
    margin: 10px 0;
  }
  overflow: hidden;
  @media screen and (min-width: 768px) {
    width: 700px;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.secondaryText};
  background-color: ${({ theme }) => theme.colors.backgroundHeader};
  padding: 10px 30px;
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
    color: ${({ theme }) => theme.colors.info};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.hover};
    }
  }
`;
