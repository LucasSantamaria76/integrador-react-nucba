import { Form, Formik } from 'formik';
import Input from '../../components/Input/Input';
import { FormWrapper, ImgContainer, InfoContent, InfoWrapper } from './ModifyProfile.styles';
import { useDispatch, useSelector } from 'react-redux';
import { updateDBUser } from '../../firebase/firebase-utils';
import { updateUser } from '../../redux/slices';
import { profileValidationSchema } from '../../formik/validationSchema';
import { Button, MainContainer } from '../../components/common';

export const ModifyProfile = () => {
  const dispatch = useDispatch();
  const {
    user: { address, createdAt, id, phone, name, email, photoURL },
  } = useSelector((state) => state.user);

  const profileInitialValues = {
    name,
    email,
    address,
    phone,
  };

  return (
    <MainContainer>
      <InfoWrapper>
        <h2>Modificar perfil</h2>
        <ImgContainer img={photoURL} />
        <InfoContent>
          <h2>{name}</h2>
          <p>Correo: {email}</p>
          <p>Fecha de alta: {createdAt}</p>
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
            } catch (error) {}
          }}>
          <Form>
            <div>
              <label>Nombre</label>
              <Input name={'name'} width={500} />
              <label>Correo electrónico</label>
              <Input type='email' name={'email'} width={450} />
              <label>Dirección</label>
              <Input name={'address'} width={600} />
              <label>Teléfono</label>
              <Input name={'phone'} width={300} />
            </div>
            <Button type='submit'>Enviar</Button>
          </Form>
        </Formik>
      </FormWrapper>
    </MainContainer>
  );
};
