import { FormWrapper } from '../Styled-Components';
import { useResize } from './../../../hooks/useResize';
import { profileValidationSchema } from './../../../formik';
import { useDispatch, useSelector } from 'react-redux';
import { updateDBUser } from './../../../firebase/firebase-utils';
import { updateUser } from './../../../redux/slices';
import { toast, Toaster } from 'react-hot-toast';
import Input from './../../../components/Input/Input';
import { Button } from './../../../components/common';
import { Form, Formik } from 'formik';

export const UserForm = ({ id, name, address, email, phone }) => {
  const { isPhone } = useResize();
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);

  const profileInitialValues = {
    name,
    email,
    address,
    phone,
  };

  const inputWidth = isPhone ? '280px' : '450px';
  const buttonWidth = isPhone ? '280px' : '100%';

  return (
    <FormWrapper>
      <Formik
        initialValues={profileInitialValues}
        validationSchema={profileValidationSchema}
        onSubmit={async (values) => {
          try {
            updateDBUser(id, values);
            dispatch(updateUser(values));
            toast.success('Usuario actualizado', {
              position: 'top-center',
              duration: 2000,
              style: {
                padding: '10px',
                marginTop: '450px',
                borderRadius: '4px',
                background: theme === 'light' ? '#add1c7ca' : '#00313fca',
                color: theme === 'light' ? '#000' : '#fff',
                fontSize: '1.5rem',
              },
            });
          } catch (error) {}
        }}>
        <Form>
          <div>
            <label>Nombre</label>
            <Input name={'name'} width={inputWidth} />
            <label>Correo electrónico</label>
            <Input type='email' name={'email'} width={inputWidth} />
            <label>Dirección</label>
            <Input name={'address'} width={inputWidth} />
            <label>Teléfono</label>
            <Input name={'phone'} width='280px' />
          </div>
          <Button type='submit' width={buttonWidth}>
            Enviar
          </Button>
        </Form>
      </Formik>
      <Toaster />
    </FormWrapper>
  );
};
