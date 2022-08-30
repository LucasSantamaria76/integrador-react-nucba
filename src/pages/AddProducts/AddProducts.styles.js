import styled from 'styled-components';

export const WrapperForm = styled.div`
  max-width: 100%;
  height: auto;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 2px;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const ContainerForm = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  overflow: hidden;

  & div {
    display: flex;
    flex-direction: column-reverse;

    & div {
      display: flex;
      flex-direction: column;
    }
    @media screen and (min-width: 600px) {
      flex-direction: row;

      justify-content: space-between;
    }
  }
  & div:nth-child(2),
  div:nth-child(3) {
    flex-direction: column;
    width: 80%;
  }
  .unit {
    flex-direction: row;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  margin: 0 auto;
  margin-bottom: 20px;
  @media screen and (min-width: 600px) {
    width: 270px;
    height: 270px;
  }
`;

export const ImgContainer = styled.img`
  background-color: ${({ theme }) => theme.colors.surface};
  width: 100%;
  height: 300px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  margin: 0 auto;
  margin-bottom: 20px;
  @media screen and (min-width: 600px) {
    width: 270px;
    height: 270px;
  }
`;

export const DblClickForImg = styled.h4`
  position: absolute;
  width: 100%;
  text-align: center;
  padding: 10px;
  color: #000;
  z-index: 999;
`;

/* 
7790150350171
*/
