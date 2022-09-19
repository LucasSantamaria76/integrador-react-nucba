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
  background-color: ${({ theme }) => theme.colors.background02};
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

export const UpContainer = styled(Container)`
  height: 100%;
`;

export const BoxFlex = styled.div`
  width: 100%;
  height: 200vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 900px) {
    width: 100%;
    height: 100%;
    height: calc(100vh - 180px);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;

export const UpWrapperForm = styled.div`
  width: 100%;
  height: 120vh;
  @media screen and (min-width: 900px) {
    width: 600px;
    height: 70vh;
  }
`;

export const UpContainerForm = styled(ContainerForm)`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background02};
  label {
    cursor: pointer;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    @media screen and (min-width: 900px) {
    }
  }
`;

export const UpImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 380px;
  margin: 0 auto;
  margin-bottom: 20px;
  @media screen and (min-width: 900px) {
    width: 300px;
    height: 300px;
  }
`;

export const UpImgContainer = styled(ImgContainer)`
  width: 100%;
  height: 300px;
  @media screen and (min-width: 900px) {
    width: 300px;
  }
`;

export const UpDblClickForImg = styled(DblClickForImg)`
  left: auto;
  right: auto;
`;

export const LisWrapper = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background02};
  box-shadow: ${({ theme }) => theme.boxShadow};
  label {
    margin: 10px;
  }
  select {
    width: 230px;
  }
  @media (min-width: 900px) {
    width: 35%;
    height: 70vh;
  }
`;

export const ComboBoxProduct = styled.div`
  width: 90%;
  height: 90%;
  margin-bottom: 10px;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  overflow-y: auto;
  & > div {
    color: ${({ theme }) => theme.colors.text2};
    font-size: 0.8rem;
    cursor: pointer;
  }
  .option {
    width: 98%;
    height: 70px;
    margin: 3px;
    border: 0.1rem solid ${({ theme }) => theme.colors.text};
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: 15px;
    img {
      width: 70px;
    }
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
    outline: 1px solid slategrey;
    border-radius: 2px;
  }
`;
