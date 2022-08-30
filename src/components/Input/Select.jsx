import { ErrorMessage, Field } from 'formik';
import { ErrorMessageStyled, InputContainerStyled, SelectStyled } from './Input.styles';

const Select = ({ name, options, placeholder, width }) => {
  return (
    <Field name={name} as='select'>
      {({ field, form: { errors, touched } }) => (
        <InputContainerStyled>
          <SelectStyled {...field} isError={errors[field.name] && touched[field.name]} width={width}>
            <option value={''}>{placeholder}</option>
            {options?.map((op) => (
              <option value={op} key={op}>
                {op}
              </option>
            ))}
          </SelectStyled>
          <ErrorMessage name={field.name}>{(message) => <ErrorMessageStyled>{message}</ErrorMessageStyled>}</ErrorMessage>
        </InputContainerStyled>
      )}
    </Field>
  );
};

export default Select;
