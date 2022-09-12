import styled from 'styled-components';

export const Container = styled.main`
  position: relative;
  margin-top: 150px;
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WrapperForm = styled.div`
  max-width: 100%;
  height: calc(100vh - 120px);
  @media screen and (min-width: 600px) {
    width: 600px;
    height: auto;
  }
`;

export const ContainerForm = styled.div`
  position: relative;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  overflow-y: hidden;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 2px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media screen and (min-width: 600px) {
      flex-direction: column;
    }
  }
`;

export const ImgWrapper = styled.div`
  order: -1;
  position: relative;
  width: 80%;
  height: 300px;
  margin: 0 auto;
  margin-bottom: 20px;
  @media screen and (min-width: 600px) {
    position: absolute;
    top: 70px;
    right: 30px;
    height: 310px;
    width: 330px;
  }
`;

export const ImgContainer = styled.img`
  background-color: ${({ theme }) => theme.colors.surface};
  width: 100%;
  height: 100%;
  box-shadow: ${({ theme }) => theme.boxShadow};
  @media screen and (min-width: 600px) {
    width: 350px;
    height: 310px;
  }
`;

export const DblClickForImg = styled.h4`
  position: absolute;
  width: 100%;
  text-align: center;
  padding: 10px;
  color: ${({ theme }) => theme.colors.text2};
  z-index: 99;
`;

/* 
7790150350171
*/
