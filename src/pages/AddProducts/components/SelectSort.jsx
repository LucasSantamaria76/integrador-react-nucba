import styled from 'styled-components';
import { common } from './../../../components/FormikInput/styles';

const SelectStyled = styled.select`
  ${common}
  font-size: 1.3rem;
  padding: 0 10px;
  margin-left: 10px;
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
