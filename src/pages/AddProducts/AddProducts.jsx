import { Form, Formik, useFormikContext } from 'formik';
import { useEffect } from 'react';
<<<<<<< HEAD
import { Button } from '../../components';
import { Input } from '../../components';
=======
import { Button } from '../../components/common';
import Input from '../../components/Input/Input';
>>>>>>> refs/remotes/origin/master
import { Container, ContainerForm, DblClickForImg, ImgContainer, ImgWrapper, WrapperForm } from './Styled-Components';
import { useSelector, useDispatch } from 'react-redux';
import { Select } from './../../components';
import Swal from 'sweetalert2';
import toast, { Toaster } from 'react-hot-toast';
import { addProductStore, hideMenus } from '../../redux/slices';
import { addDbProduct } from '../../firebase/firebase-utils';
import { productInitialValues } from './../../formik/initialValues';
import { productSchema } from '../../formik/validationSchema';
import backgroundImage from '../../assets/backgroundImage.jpg';

let urlBase = '';

const UploadImage = () => {
  const { theme } = useSelector((state) => state.theme);

  const {
    values: { id, urlPhoto },
    setFieldValue,
  } = useFormikContext();

  const handleDblClick = async () => {
    const { value: url } = await Swal.fire({
      input: 'url',
      inputLabel: 'Ingresa URL de la imagen',
      cancelButtonText: 'Cancelar',
      showCancelButton: true,
      validationMessage: 'URL inválida',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: theme === 'light' ? '#5e8278' : '#215b6d',
      background: theme === 'light' ? '#add1c7' : '#00313F',
      color: theme === 'light' ? '#000' : '#fff',
    });

    if (url) {
      urlBase = url;
      setFieldValue('urlPhoto', urlBase);
    }
  };

  useEffect(() => {
    id.length === 13 &&
      !urlBase &&
      setFieldValue('urlPhoto', `https://imagenes.preciosclaros.gob.ar/productos/${id}.jpg`);
  }, [id, urlPhoto]);
  return (
    <ImgWrapper>
      {!urlPhoto && (
        <DblClickForImg>Doble click para Cargar imagen o ingresar código en el campo código barras</DblClickForImg>
      )}

      <ImgContainer src={urlPhoto} onDoubleClick={handleDblClick} />
    </ImgWrapper>
  );
};

const AddProducts = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const { products } = useSelector((state) => state.products);
  const { values: categories } = useSelector((state) => state.categories);
  const category = !!categories && Object.keys(categories);
  const { units } = useSelector((state) => state.units);
  const unitsList = !!units && Object.keys(units);

  return (
    <Container direction='column'>
      <WrapperForm backgroundImage={backgroundImage}>
        <Formik
          initialValues={productInitialValues}
          validationSchema={productSchema}
          onSubmit={async (values, { resetForm }) => {
            try {
              const productsExists = products.filter((product) => product.id === values.id);
              if (!productsExists.length) {
                dispatch(addProductStore(values));
                addDbProduct(values);
                resetForm();
                toast.success('Producto cargado correctamente', {
                  position: 'top-center',
                  duration: 2000,
                  style: {
                    padding: '10px',
                    marginTop: '115px',
                    borderRadius: '4px',
                    background: theme === 'light' ? '#add1c7ca' : '#00313fca',
                    color: theme === 'light' ? '#000' : '#fff',
                    fontSize: '1.5rem',
                  },
                });
              } else
                Swal.fire({
                  icon: 'error',
                  title: 'El producto ya se encuentra cargado',
                  confirmButtonText: 'Aceptar',
                  confirmButtonColor: theme === 'light' ? '#5e8278' : '#215b6d',
                  background: theme === 'light' ? '#add1c7' : '#00313F',
                  color: theme === 'light' ? '#000' : '#fff',
                });
            } catch (error) {
              console.log(error);
            }
          }}>
          {({ values }) => {
            return (
              <Form>
                <ContainerForm>
<<<<<<< HEAD
                  <div className='input'>
                    <Input name='name' label='Nombre' />
                    <Input name='id' label='Código de barras' size={13} />
                    <Input name='stock' label='stock' size={6} />
                  </div>
                  <div className='input'>
                    <Input name='price' label='Precio' size={8} />
                    <Input name='discount' label='Descuento' size={6} />
                  </div>
                  <div className='input'>
                    <Input name='volume' label='Volumen' size={5} />
                    <Select name={'unit'} label='Unidad' placeholder='Unidad' options={unitsList} size={6} />
=======
                  <Input name={'name'} type='text' placeholder='Nombre' />
                  <div>
                    <Input name={'id'} placeholder='Código de barras' width='170px' />
                    <Input name={'price'} placeholder='Precio' width='170px' currency />
                    <Input name={'discount'} placeholder='Descuento' width='170px' />
                    <Input name={'stock'} placeholder='Stock' width='170px' />
                    <Input name={'volume'} placeholder='Volumen' width='170px' />
                    <Select name={'unit'} placeholder='Unidad' options={unitsList} width='170px' />
>>>>>>> refs/remotes/origin/master
                  </div>
                  <UploadImage />
                  {!!category && (
                    <div className='selects'>
                      <Select
                        name={'category'}
                        options={category}
                        label='Categoria'
                        placeholder='Ingrese categoria'
                        size={10}
                      />
                      <Select
                        label='SubCategoria'
                        name={'subCategory'}
                        options={categories[values.category]}
                        placeholder='Ingrese subcategoria'
                        size={10}
                      />
                    </div>
                  )}
                  <Button type='submit' r='8px' bg='info' outline shadow>
                    Agregar
                  </Button>
                </ContainerForm>
              </Form>
            );
          }}
        </Formik>
      </WrapperForm>
      <Toaster />
    </Container>
  );
};

export default AddProducts;
