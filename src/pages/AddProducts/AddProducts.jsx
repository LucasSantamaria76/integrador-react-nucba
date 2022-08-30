import { Form, Formik, useFormikContext } from 'formik';
import { useEffect } from 'react';
import { Button, MainContainer } from '../../components/common';
import Input from '../../components/Input/Input';
import { productInitialValues, productSchema } from '../../formik';
import { ContainerForm, DblClickForImg, ImgContainer, ImgWrapper, WrapperForm } from './AddProducts.styles';
import { useSelector, useDispatch } from 'react-redux';
import Select from './../../components/Input/Select';
import { addDbProduct } from '../../firebase/firebase-utils';
import { addProductStore } from '../../redux/slices';
import Swal from 'sweetalert2';

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
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      showCancelButton: true,
      confirmButtonColor: theme === 'light' ? '#5e8278' : '#215b6d',
      background: theme === 'light' ? '#add1c7' : '#00313F',
      color: theme === 'light' ? '#000' : '#fff',
      validationMessage: 'URL inválida',

      //confirmButtonColor: `${theme === 'ligth' ? '#add1c7' : '#00313F'}`,
    });

    if (url) {
      urlBase = url;
      setFieldValue('urlPhoto', urlBase);
    }
  };

  useEffect(() => {
    id.length === 13 && !urlBase && setFieldValue('urlPhoto', `https://imagenes.preciosclaros.gob.ar/productos/${id}.jpg`);
  }, [id, urlPhoto]);
  return (
    <ImgWrapper>
      {!urlPhoto && <DblClickForImg>Doble click para Cargar imagen o ingresar código barras</DblClickForImg>}

      <ImgContainer src={urlPhoto} onDoubleClick={handleDblClick} />
    </ImgWrapper>
  );
};

const AddProducts = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const { products } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);
  const category = !!categories && Object.keys(categories);
  const { units } = useSelector((state) => state.units);
  const unitsList = !!units && Object.keys(units);

  return (
    <MainContainer>
      <WrapperForm>
        <Formik
          initialValues={productInitialValues}
          validationSchema={productSchema}
          onSubmit={async (values, { resetForm }) => {
            try {
              const productsExists = products.filter((product) => product.id === values.id);
              if (!productsExists) {
                dispatch(addProductStore({ ...values, urlPhoto: urlBase }));
                addDbProduct({ ...values });
              } else
                Swal.fire({
                  icon: 'error',
                  title: 'El producto ya se encuentra cargado',
                  confirmButtonText: 'Aceptar',
                  confirmButtonColor: theme === 'light' ? '#5e8278' : '#215b6d',
                  background: theme === 'light' ? '#add1c7' : '#00313F',
                });
              resetForm();
            } catch (error) {
              console.log(error);
            }
          }}>
          {({ values }) => {
            return (
              <Form>
                <ContainerForm>
                  <div>
                    <div>
                      <Input name={'id'} placeholder='Código de barras' size={12} />
                      <Input name={'price'} placeholder='Precio' size={10} />
                      <Input name={'discount'} placeholder='Descuento' size={10} />
                      <Input name={'stock'} placeholder='Stock' size={10} />
                      <div className='unit'>
                        <Input name={'volume'} placeholder='Volumen' size={6} />
                        <Select name={'unit'} placeholder='Unidad' options={unitsList} width={8} />
                      </div>
                    </div>
                    <UploadImage />
                  </div>
                  <div>
                    <Input name={'name'} type='text' placeholder='Nombre' size={30} />
                    <Input name={'description'} type='text' placeholder='Descripción' size={30} />
                  </div>
                  {!!category && (
                    <div>
                      <Select name={'category'} options={category} placeholder='Ingrese categoria' />
                      <Select name={'subCategory'} options={categories[values.category]} placeholder='Ingrese subcategoria' />
                    </div>
                  )}
                  <Button type='submit'>Agregar</Button>
                </ContainerForm>
              </Form>
            );
          }}
        </Formik>
      </WrapperForm>
    </MainContainer>
  );
};

export default AddProducts;
