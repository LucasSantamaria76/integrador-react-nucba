import { Form, Formik } from 'formik';
import { loginInitialValues, loginValidationSchema } from '../../formik';
import { FormContainer, FormWrapper } from './auth.styles';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { useRedirect } from '../../hooks/useRedirect';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Input } from '../../components';
import { getOrCreateUserProfile, signIn, signInGoogle } from './../../firebase/firebase-utils';
import backgroundImage from '../../assets/login-background-images-for-website-10.jpg';

const ERROR_CODES = {
  'auth/wrong-password': 'Contraseña incorrecta',
  'auth/user-not-found': 'Usuario no encontrado',
};

const Login = () => {
  const { theme } = useSelector((state) => state.theme);
  useRedirect('/');
  const dispatch = useDispatch();

  return (
    <Container justify='center'>
      <FormWrapper backgroundImage={backgroundImage}>
        <Formik
          initialValues={loginInitialValues}
          validationSchema={loginValidationSchema}
          onSubmit={async (values) => {
            const { email, password } = values;
            try {
              const { user } = await signIn(email, password);
              console.log(user);
              await getOrCreateUserProfile(user);
            } catch (error) {
              console.log(error);
            }
          }}>
          {({ values }) => {
            return (
              <Form>
                <FormContainer>
                  <h2 style={{ textAlign: 'center' }}>Iniciar Sesión</h2>
                  {/*  the value of size is in length of characters  */}
                  <Input
                    type='email'
                    name='email'
                    label='Ingrese su e-mail'
                    placeholder='example@example.com'
                    size={25}
                  />
                  <Input type='password' name='password' label='Ingrese su contraseña' size={20} />
                  <Button type='submit' r='8px' bg='info' shadow outline>
                    Enviar
                  </Button>
                  <div>
                    <h4 style={{ textAlign: 'center' }}>o puedes iniciar sesión con</h4>
                    <Button type='button' handleClick={signInGoogle} r='8px' bg='info' shadow outline>
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
    </Container>
  );
};

export default Login;
