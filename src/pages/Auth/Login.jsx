import { Form, Formik, useFormikContext } from 'formik';
import { Button, MainContainer } from '../../components/common';
import InputLogin from '../../components/Input/Input';
import { loginInitialValues, loginValidationSchema } from '../../formik';
import { FormContainer, FormWrapper } from './auth.styles';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { getOrCreateUserProfile, signIn, signInGoogle } from '../../firebase/firebase-utils';
import { useRedirect } from '../../hooks/useRedirect';
import { Toaster, toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const ERROR_CODES = {
  'auth/wrong-password': 'Contraseña incorrecta',
  'auth/user-not-found': 'Usuario no encontrado',
};

const Login = () => {
  const { theme } = useSelector((state) => state.theme);
  useRedirect('/');

  return (
    <MainContainer>
      <FormWrapper>
        <h2 style={{ textAlign: 'center' }}>Iniciar Sesión</h2>
        <Formik
          initialValues={loginInitialValues}
          validationSchema={loginValidationSchema}
          onSubmit={async (values) => {
            const { email, password } = values;
            try {
              const { user } = await signIn(email, password);
              await getOrCreateUserProfile(user);
            } catch (error) {
              toast.error(ERROR_CODES[error.code], {
                position: 'top-center',
                duration: 1000,
                style: {
                  padding: '10px',
                  marginTop: '200px',
                  borderRadius: '4px',
                  background: theme === 'light' ? '#add1c7ca' : '#00313fca',
                  color: theme === 'light' ? '#000' : '#fff',
                  fontSize: '1.5rem',
                },
              });
            }
          }}>
          {({ values }) => {
            return (
              <Form>
                <FormContainer>
                  <InputLogin type='email' name={'email'} placeholder='Ingrese su e-mail' />
                  <InputLogin type='password' name={'password'} placeholder='Ingrese su contraseña' />
                  <Button type='submit'>Enviar</Button>
                  <div>
                    <h4 style={{ textAlign: 'center' }}>o puedes iniciar sesión con</h4>
                    <Button type='button' handleClick={signInGoogle}>
                      <div className='google'>
                        <FcGoogle />
                        <h4>oogle</h4>
                      </div>
                    </Button>
                  </div>
                  <h4 style={{ textAlign: 'center' }}>
                    Si no tenes cuenta <Link to='/register'> registrate aqui...</Link>
                  </h4>
                </FormContainer>
              </Form>
            );
          }}
        </Formik>
      </FormWrapper>
      <Toaster />
    </MainContainer>
  );
};

export default Login;
