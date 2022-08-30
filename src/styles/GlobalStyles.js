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
    overflow-y: auto;
    padding-left: 4px;
  }
  body::-webkit-scrollbar {
    height: 4px;
    width: 4px;
    background: transparent;
  }

  body::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 8px;
  }

  page {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
  }
`;
