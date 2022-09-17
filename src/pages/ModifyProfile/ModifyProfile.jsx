import { Form, Formik } from 'formik';
import Input from '../../components/Input/Input';
import { Container, FormWrapper, ImgContainer, InfoContent, InfoWrapper } from './ModifyProfile.styles';
import { useDispatch, useSelector } from 'react-redux';
import { updateDBUser } from '../../firebase/firebase-utils';
import { hideMenus, updateUser } from '../../redux/slices';
import { profileValidationSchema } from '../../formik/validationSchema';
import { Button } from '../../components/common';
import toast, { Toaster } from 'react-hot-toast';
import { useResize } from './../../hooks/useResize';

export const ModifyProfile = () => {
  const { isPhone } = useResize();
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const {
    user: { address, createdAt, id, phone, name, email, photoURL },
  } = useSelector((state) => state.user);

  const profileInitialValues = {
    name,
    email,
    address,
    phone,
  };

  const inputWidth = isPhone ? 280 : 450;
  const buttonWidth = isPhone ? '280px' : '100%';

  return (
    <Container onClick={() => dispatch(hideMenus())}>
      <InfoWrapper>
        <h2>Modificar perfil</h2>
        <InfoContent>
          <ImgContainer img={photoURL} />
          <div>
            <h2>{name}</h2>
            <p>Correo: {email}</p>
            <p>Fecha de alta: {createdAt}</p>
          </div>
        </InfoContent>
      </InfoWrapper>
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
              <Input name={'phone'} width={280} />
            </div>
            <Button type='submit' width={buttonWidth}>
              Enviar
            </Button>
          </Form>
        </Formik>
        <Toaster />
      </FormWrapper>
      <Toaster />
    </Container>
  );
};
