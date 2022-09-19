import styled from 'styled-components';

const SelectStyled = styled.select`
  width: 100%;
  height: 40px;
  margin-left: 10px;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.text};
  padding: 0 10px;
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 3px;
  outline: none;
  border: ${({ isError }) => (!isError ? 'none' : '1px solid #ff0000')};

  option {
    font-size: 1.2rem;
  }
`;

const SelectSort = ({ setOrder }) => {
  return (
    <SelectStyled onChange={(e) => setOrder(e.target.value)}>
      <option value={'name'}>Nombre</option>
      <option value={'stock'}>Stock (Asc.)</option>
      <option value={'id'}>Código de barras</option>
      <option value={'price'}>Precio (Desc.)</option>
      <option value={'discount'}>Descuento (Desc.)</option>
    </SelectStyled>
  );
};

export default SelectSort;
