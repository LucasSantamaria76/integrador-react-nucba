import { InputContainerStyled, SelectStyled } from '../../components/Input/Input.styles';

const SelectDate = ({ name, options, placeholder, width, setDate }) => {
  return (
    <InputContainerStyled width={width}>
      <SelectStyled width={width} onChange={(e) => setDate(e.target.value)}>
        <option value={''}>{`< ${placeholder} >`}</option>
        {options?.map((op) => (
          <option value={op} key={op}>
            {op}
          </option>
        ))}
      </SelectStyled>
    </InputContainerStyled>
  );
};

export default SelectDate;
