import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

 html,body {
  overflow-x :hidden !important;
 }

*{
  box-sizing: border-box;
}
  body {
    position: relative;
    max-width: 100vw;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.15s linear;
    margin: 0;
    padding: 0px;
    font-family: "Roboto";
    user-select: none;    
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
  h2, h3, h4, h5, h6 {
    margin: 0;
  }
  .page{
    width: 100%;    
    position: absolute;
    height: calc(100vh - 70px);
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    @media (min-width: 900px) {
      height: calc(100vh - 150px);
  }
  }  

 
`;
