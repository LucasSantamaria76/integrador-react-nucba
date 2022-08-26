import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  box-sizing: border-box;
}
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.15s linear;
    margin: 0;
    font-family: "Roboto";
    user-select: none;
  }

  page {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
  }
`;
