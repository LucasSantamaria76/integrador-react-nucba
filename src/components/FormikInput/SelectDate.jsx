import { InputContainer, SelectStyled } from './styles';

export const SelectDate = ({ Label, options, placeholder, width, setDate }) => {
  return (
    <InputContainer width={width}>
      <SelectStyled width={width} onChange={(e) => setDate(e.target.value)}>
        <option value={''}>{`< ${placeholder} >`}</option>
        {options?.map((op) => (
          <option value={op} key={op}>
            {op}
          </option>
        ))}
      </SelectStyled>
    </InputContainer>
  );
};
