import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
<<<<<<< HEAD
import { FormWrapper } from '../Styled-Components';
import { checkoutValidationSchema } from './../../../formik';
import { createOrder, emptyCart } from '../../../redux/slices';
import { SHIPPING_COST } from '../../../utils';
import { Button, Input } from './../../../components';
=======
import { useResize } from './../../../hooks/useResize';
import { FormWrapper } from '../Styled-Components';
import { checkoutValidationSchema } from './../../../formik';
import { createOrder, emptyCart } from '../../../redux/slices';
import Input from './../../../components/Input/Input';
import { Button, Loader } from '../../../components/common';
import { SHIPPING_COST } from '../../../utils';
>>>>>>> refs/remotes/origin/master

const FormCheckout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    user: { address, createdAt, id, phone, name, email, photoURL },
    cart: { items, totalCost, totalDiscount },
  } = useSelector((state) => state.user);
  const { orders } = useSelector((state) => state);
  const { theme } = useSelector((state) => state.theme);

  const profileInitialValues = {
    name,
    email,
    address,
    phone,
  };

<<<<<<< HEAD
=======
  const inputWidth = isPhone ? '280px' : '450px';
  const buttonWidth = isPhone ? '280px' : '100%';

>>>>>>> refs/remotes/origin/master
  return (
    <FormWrapper>
      <h2>Ingresá tus datos</h2>
      <Formik
        initialValues={profileInitialValues}
        validationSchema={checkoutValidationSchema}
        onSubmit={async (values) => {
          try {
            const order = {
              items,
              totalCost,
              totalDiscount,
              shippingCost: SHIPPING_COST,
              shippingInformation: values,
              shoppingTime: new Date().toLocaleTimeString(),
              date: format(new Date(), 'dd-MM-yyyy'),
            };

            await dispatch(createOrder(order));
            await dispatch(emptyCart());
            Swal.fire({
              icon: 'success',
              title: 'El pedido se envío con éxito',
              confirmButtonText: 'Aceptar',
              confirmButtonColor: theme === 'light' ? '#5e8278' : '#215b6d',
              background: theme === 'light' ? '#f1f1f1' : '#23292d',
              color: theme === 'light' ? '#000' : '#fff',
            }).then(() => navigate('/productos'));
          } catch (error) {
            console.log(error);
            Swal.fire({
              icon: 'error',
              title: 'Hubo un error al enviar el pedido',
              confirmButtonText: 'Aceptar',
              confirmButtonColor: theme === 'light' ? '#5e8278' : '#215b6d',
              background: theme === 'light' ? '#f1f1f1' : '#23292d',
              color: theme === 'light' ? '#000' : '#fff',
            });
          }
        }}>
        {({ isSubmitting }) => (
          <Form>
            <div>
<<<<<<< HEAD
              <Input name='name' label='Nombre' size={25} />
              <Input type='email' name='email' label='Correo electrónico' size={25} />
              <Input name='address' label='Dirección de envío' size={25} />
              <Input name='phone' label='Teléfono de contacto' size={15} />
=======
              <label>Nombre</label>
              <Input name={'name'} width={inputWidth} />
              <label>Correo electrónico</label>
              <Input type='email' name={'email'} width={inputWidth} />
              <label>Dirección de envío</label>
              <Input name={'address'} width={inputWidth} />
              <label>Teléfono de contacto</label>
              <Input name={'phone'} width='280px' />
>>>>>>> refs/remotes/origin/master
            </div>
            <Button type='submit' r='8px' bg='info' shadow outline disabled={!items.length}>
              {isSubmitting ? 'Enviando...' : 'Enviar Pedido'}
            </Button>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};

export default FormCheckout;
