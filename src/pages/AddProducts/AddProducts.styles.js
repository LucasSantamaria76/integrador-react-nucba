import styled from 'styled-components';

export const WrapperForm = styled.div`
  min-width: 100%;
  height: 88vh;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 2px;
  flex-grow: 1;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
