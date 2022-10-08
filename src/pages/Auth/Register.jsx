import { FormContainer, FormWrapper } from './auth.styles';
import { Form, Formik } from 'formik';
//import { Swal } from 'sweetalert2';
import { Link } from 'react-router-dom';
import { registerInitialValues, registerValidationSchema } from '../../formik';
import { register, signInGoogle } from '../../firebase/firebase-utils';
import { FcGoogle } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { useRedirect } from '../../hooks/useRedirect';
import { Button, Container, Input, Loader } from '../../components';
import backgroundImage from '../../assets/login-background-images-for-website-10.jpg';

const ERROR_CODES = {
  'auth/email-already-in-use': 'El correo ya se encuentra registrado',
};

const Register = () => {
  useRedirect('/');
  const dispatch = useDispatch();
  return (
    <Container direction='column' justify='evenly'>
      <FormWrapper backgroundImage={backgroundImage}>
        <Formik
          initialValues={registerInitialValues}
          validationSchema={registerValidationSchema}
          onSubmit={async (values) => {
            await register(values);
            try {
            } catch (error) {
              Swal.fire({
                icon: 'error',
                title: `${ERROR_CODES[error.code]}`,
                confirmButtonText: 'Aceptar',
                confirmButtonColor: theme === 'light' ? '#5e8278' : '#215b6d',
                background: theme === 'light' ? '#add1c7' : '#00313F',
                color: theme === 'light' ? '#000' : '#fff',
              });
            }
          }}>
          {({ isSubmitting }) => {
            return (
              <Form>
                <FormContainer>
                  <h2 style={{ textAlign: 'center' }}>Formulario de registro</h2>
                  {/*  the value of size is in length of characters  */}
                  <Input name={'name'} label='Ingrese su nombre' size={20} />
                  <Input
                    type='email'
                    name='email'
                    label='Ingrese su e-mail'
                    placeholder='example@example.com'
                    size={25}
                  />
                  <Input type='password' name='password' label='Ingrese su contraseña' size={20} />
                  <Input type='password' name='RepeatPassword' label='Repita su contraseña' size={20} />
                  <Button type='submit' r='8px' bg='info' shadow outline>
                    Enviar
                  </Button>
                  {isSubmitting && <Loader />}
                  <h4 style={{ textAlign: 'center' }}>
                    Si ya tenes cuenta <Link to='/login'> inicia sesión aqui...</Link>
                  </h4>
                  <div>
                    <h4 style={{ textAlign: 'center' }}>o puedes ingresar con</h4>
                    <Button type='button' handleClick={signInGoogle} r='8px' bg='info' shadow outline>
                      <div className='google'>
                        <FcGoogle />
                        <h4>oogle</h4>
                      </div>
                    </Button>
                  </div>
                </FormContainer>
              </Form>
            );
          }}
        </Formik>
      </FormWrapper>
    </Container>
  );
};

export default Register;
