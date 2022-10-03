import { ErrorMessage, Field } from 'formik';
import { ErrorMessageStyled, FieldContainer, InputContainer, SelectStyled } from './styles';
import { handleEnter, widthWord } from './utils';

export const Select = ({ name, options, placeholder, label, size }) => {
  const labelWidth = !!label ? widthWord(label) + 20 : 0;
  const inputWidth = !!size ? widthWord('M'.repeat(size)) : 0;
  const width = Boolean(size) ? inputWidth + labelWidth + 'px' : '100%';

  return (
    <Field name={name}>
      {({ field, form: { errors, touched } }) => (
        <InputContainer width={width}>
          {label}
          <FieldContainer>
            <SelectStyled
              {...field}
              isError={errors[field.name] && touched[field.name]}
              onKeyDown={handleEnter}
              width={inputWidth}>
              <option value={''}>{`< ${placeholder} >`}</option>
              {options?.map((op) => (
                <option value={op} key={op}>
                  {op}
                </option>
              ))}
            </SelectStyled>
          </FieldContainer>
          <ErrorMessage name={field.name}>
            {(message) => <ErrorMessageStyled>{message}</ErrorMessageStyled>}
          </ErrorMessage>
        </InputContainer>
      )}
    </Field>
  );
};
