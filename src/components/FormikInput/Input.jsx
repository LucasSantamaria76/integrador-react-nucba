import { ErrorMessage, Field } from 'formik';
import { useRef } from 'react';
import { ErrorMessageStyled, FieldContainer, IconDelString, InputContainer, InputStyled } from './styles';
import { handleEnter, widthWord } from './utils';

export const Input = ({ label, name, type = 'text', placeholder, size }) => {
  const inputRef = useRef(null);
  const labelWidth = !!label ? widthWord(label) + 20 : 0;
  const inputWidth = !!size ? widthWord('M'.repeat(size)) : 0;
  const width = Boolean(size) ? inputWidth + labelWidth + 'px' : '100%';
  return (
    <Field name={name}>
      {({ field, form: { errors, setFieldTouched, setFieldValue, submitCount, touched } }) => (
        <InputContainer width={width}>
          {label}
          <FieldContainer>
            <InputStyled
              {...field}
              autoComplete={type === 'password' ? 'off' : 'on'}
              width={inputWidth}
              placeholder={placeholder}
              ref={inputRef}
              type={type}
              onKeyDown={handleEnter}
              isError={errors[field.name] && touched[field.name] && !!submitCount}
            />
            {!!field.value && (
              <IconDelString
                labelWidth={labelWidth}
                width={width}
                onClick={() => {
                  setFieldValue(field.name, '');
                  setFieldTouched(field.name, false);
                  inputRef.current.focus();
                }}>
                x
              </IconDelString>
            )}
          </FieldContainer>
          {!!submitCount && (
            <ErrorMessage name={field.name}>
              {(message) => <ErrorMessageStyled>{message}</ErrorMessageStyled>}
            </ErrorMessage>
          )}
        </InputContainer>
      )}
    </Field>
  );
};
