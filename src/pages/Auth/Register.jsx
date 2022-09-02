import { Button, MainContainer } from '../../components/common';
import { FormContainer, FormWrapper } from './auth.styles';
import { Form, Formik } from 'formik';
import { Swal } from 'sweetalert2';
import Input from '../../components/Input/Input';
import { Link } from 'react-router-dom';
import { registerInitialValues, registerValidationSchema } from '../../formik';
import { register, signInGoogle } from '../../firebase/firebase-utils';
import { FcGoogle } from 'react-icons/fc';

const ERROR_CODES = {
  'auth/email-already-in-use': 'El correo ya se encuentra registrado',
};

const Register = () => {
  return (
    <MainContainer>
      <FormWrapper>
        <h2 style={{ textAlign: 'center' }}>Formulario de registro</h2>
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
          <Form>
            <FormContainer>
              <Input name={'name'} placeholder='Ingrese su nombre' />
              <Input type='email' name={'email'} placeholder='Ingrese su e-mail' />
              <Input type='password' name={'password'} placeholder='Ingrese su contraseña' />
              <Input type='password' name={'RepeatPassword'} placeholder='Repita su contraseña' />
              <Button type='submit'>Enviar</Button>
              <h4 style={{ textAlign: 'center' }}>
                Si ya tenes cuenta <Link to='/login'> inicia sesión aqui...</Link>
              </h4>
              <div>
                <h4 style={{ textAlign: 'center' }}>o puedes ingresar con</h4>
                <Button type='button' handleClick={signInGoogle}>
                  <div className='google'>
                    <FcGoogle />
                    <h4>oogle</h4>
                  </div>
                </Button>
              </div>
            </FormContainer>
          </Form>
        </Formik>
      </FormWrapper>
    </MainContainer>
  );
};

export default Register;
