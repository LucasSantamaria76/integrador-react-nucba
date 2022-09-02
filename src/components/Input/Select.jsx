import { ErrorMessage, Field } from 'formik';
import { ErrorMessageStyled, InputContainerStyled, SelectStyled } from './Input.styles';

const Select = ({ name, options, placeholder, width }) => {
  const handleEnter = (e) => {
    if (e.key.toLowerCase() === 'enter') {
      const form = e.target.form;
      const index = [...form].indexOf(e.target);
      form.elements[index + 1].focus();
      e.preventDefault();
    }
  };
  return (
    <Field name={name}>
      {({ field, form: { errors, touched } }) => (
        <InputContainerStyled width={width}>
          <SelectStyled {...field} isError={errors[field.name] && touched[field.name]} width={width} onKeyDown={handleEnter}>
            <option value={''}>{`< ${placeholder} >`}</option>
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
