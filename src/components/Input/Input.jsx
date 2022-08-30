import { ErrorMessage, Field } from 'formik';
import { AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { IoClose } from 'react-icons/io5';
import { CloseIcon, ErrorMessageStyled, InputContainerStyled, InputStyled } from './Input.styles';

const Input = ({ name, type = 'text', placeholder, size }) => {
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
      {({ field, form: { errors, setFieldTouched, setFieldValue, touched } }) => (
        <InputContainerStyled size={size}>
          <InputStyled
            ref={inputRef}
            type={type}
            placeholder={placeholder}
            {...field}
            isError={errors[field.name] && touched[field.name]}
            size={size}
            autoComplete='off'
            onKeyDown={handleEnter}
          />
          <AnimatePresence>
            {!!field.value && (
              <CloseIcon
                pos={size}
                key='close-icon'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
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
          <ErrorMessage name={field.name}>{(message) => <ErrorMessageStyled>{message}</ErrorMessageStyled>}</ErrorMessage>
        </InputContainerStyled>
      )}
    </Field>
  );
};

export default Input;
