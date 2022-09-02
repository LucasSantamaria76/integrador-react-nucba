import { ErrorMessage, Field } from 'formik';
import { AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { IoClose } from 'react-icons/io5';
import { CloseIcon, ErrorMessageStyled, InputContainerStyled, InputStyled } from './Input.styles';

const Input = ({ currency, name, type = 'text', placeholder, width }) => {
  const inputRef = useRef(null);
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
      {({ field, form: { errors, setFieldTouched, setFieldValue, submitCount, touched } }) => (
        <InputContainerStyled width={width}>
          <InputStyled
            autoComplete='off'
            ref={inputRef}
            type={type}
            placeholder={placeholder}
            {...field}
            isError={errors[field.name] && touched[field.name] && !!submitCount}
            width={width}
            onKeyDown={handleEnter}
            currency={!!currency}
          />
          <AnimatePresence>
            {!!field.value && (
              <CloseIcon
                key='close-icon'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                width={width}
                onClick={() => {
                  setFieldValue(field.name, '');
                  setFieldTouched(field.name, false);
                  inputRef.current.focus();
                }}
                transition={{ duration: 0.1 }}>
                <IoClose />
              </CloseIcon>
            )}
          </AnimatePresence>
          {!!submitCount && <ErrorMessage name={field.name}>{(message) => <ErrorMessageStyled>{message}</ErrorMessageStyled>}</ErrorMessage>}
        </InputContainerStyled>
      )}
    </Field>
  );
};

export default Input;
