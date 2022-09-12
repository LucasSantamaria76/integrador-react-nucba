import { Form, Formik, useFormikContext } from 'formik';
import { useEffect } from 'react';
import { Button } from '../../components/common';
import Input from '../../components/Input/Input';
import { Container, ContainerForm, DblClickForImg, ImgContainer, ImgWrapper, WrapperForm } from './AddProducts.styles';
import { useSelector, useDispatch } from 'react-redux';
import Select from './../../components/Input/Select';
import Swal from 'sweetalert2';
import toast, { Toaster } from 'react-hot-toast';
import { addProductStore } from '../../redux/slices';
import { addDbProduct } from '../../firebase/firebase-utils';
import { productInitialValues } from './../../formik/initialValues';
import { productSchema } from '../../formik/validationSchema';

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
    <Container>
      <WrapperForm>
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
                  <Input name={'name'} type='text' placeholder='Nombre' />
                  <div>
                    <Input name={'id'} placeholder='Código de barras' width={170} />
                    <Input name={'price'} placeholder='Precio' width={170} currency />
                    <Input name={'discount'} placeholder='Descuento' width={170} />
                    <Input name={'stock'} placeholder='Stock' width={170} />
                    <Input name={'volume'} placeholder='Volumen' width={170} />
                    <Select name={'unit'} placeholder='Unidad' options={unitsList} width={170} />
                  </div>
                  <UploadImage />
                  {!!category && (
                    <>
                      <Select name={'category'} options={category} placeholder='Ingrese categoria' />
                      <Select
                        name={'subCategory'}
                        options={categories[values.category]}
                        placeholder='Ingrese subcategoria'
                      />
                    </>
                  )}
                  <Button type='submit'>Agregar</Button>
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
