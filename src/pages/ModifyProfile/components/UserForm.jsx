import { FormWrapper, ProfileWrapper } from '../Styled-Components';
import { profileValidationSchema } from './../../../formik';
import { useDispatch, useSelector } from 'react-redux';
import { updateDBUser } from './../../../firebase/firebase-utils';
import { updateUser } from './../../../redux/slices';
import { toast, Toaster } from 'react-hot-toast';
import { Button, Input } from './../../../components';
import { Form, Formik } from 'formik';
import backgroundImage from '../../../assets/backgroundImage.jpg';

export const UserForm = ({ id, name, address, email, phone }) => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);

  const profileInitialValues = {
    name,
    email,
    address,
    phone,
  };

  return (
    <FormWrapper backgroundImage={backgroundImage}>
      <ProfileWrapper>
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
              {/*  the value of size is in length of characters  */}
              <Input name='name' label='Nombre' />
              <Input type='email' name='email' label='Correo electrónico' />
              <Input name='address' label='Dirección' />
              <Input name='phone' label='Teléfono' size={15} />
            </div>
            <Button type='submit' r='8px' bg='info' shadow outline>
              Enviar
            </Button>
          </Form>
        </Formik>
        <Toaster />
      </ProfileWrapper>
    </FormWrapper>
  );
};
