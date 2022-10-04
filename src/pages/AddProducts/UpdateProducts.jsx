import { Form, Formik, useFormikContext } from 'formik';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import toast, { Toaster } from 'react-hot-toast';
import SelectSort from './components/SelectSort';
import {
  BoxFlex,
  ComboBoxProduct,
  Container,
  ContainerForm,
  DblClickForImg,
  ImgContainer,
  ImgWrapper,
  LisContainer,
  LisWrapper,
  WrapperForm,
} from './Styled-Components';
import { productInitialValues } from '../../formik/initialValues';
import { productSchema } from '../../formik/validationSchema';
import { hideMenus, removeFilters, updateProductStore } from '../../redux/slices';
import { Input } from '../../components';
import { Button } from './../../components/Button/index';
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
    <ImgWrapper update>
      {!urlPhoto && <DblClickForImg onDoubleClick={handleDblClick}>Doble click para Cargar imagen</DblClickForImg>}

      <ImgContainer src={urlPhoto} onDoubleClick={handleDblClick} update />
    </ImgWrapper>
  );
};

const UpdateProducts = () => {
  const [order, setOrder] = useState('name');
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const { products } = useSelector((state) => state.products);
  const { FilterSearch } = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(removeFilters());
  }, []);

  const filteredProducts = (prod) => {
    const compare = (a, b) => {
      if (['discount', 'price', 'stock'].includes(order)) {
        if (+a[order] < +b[order]) return order === 'stock' ? -1 : 1;
        if (+a[order] > +b[order]) return order === 'stock' ? 1 : -1;
      } else {
        if (a[order].toLowerCase() > b[order].toLowerCase()) return 1;
        if (a[order].toLowerCase() < b[order].toLowerCase()) return -1;
      }
      return 0;
    };

    let productsFiltered = [...prod];
    if (!!productsFiltered.length) {
      productsFiltered?.sort(compare);
      productsFiltered = productsFiltered?.filter((el) => el.name.toLowerCase().startsWith(FilterSearch));
    }

    return productsFiltered;
  };

  const listProducts = filteredProducts(products);

  return (
    <Container onClick={() => dispatch(hideMenus())}>
      <Formik
        initialValues={productInitialValues}
        validationSchema={productSchema}
        onSubmit={async (values) => {
          try {
            dispatch(updateProductStore(values));
            toast.success('Producto Actualizado correctamente', {
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
          } catch (error) {
            console.log(error);
          }
        }}>
        {({ values, setFieldValue }) => {
          return (
            <Form style={{ width: '100%', height: '100%' }}>
              <BoxFlex>
                <LisWrapper backgroundImage={backgroundImage}>
                  <LisContainer>
                    <label>
                      Ordenar por
                      <SelectSort setOrder={setOrder} />
                    </label>
                    <ComboBoxProduct>
                      {listProducts?.map((prod) => (
                        <div
                          key={prod.id}
                          onClick={() => {
                            const product = listProducts.find((p) => p.id === prod.id);
                            urlBase = product.urlPhoto;
                            Object.keys(product).map((key) => setFieldValue(key, product[key]));
                          }}>
                          <div className='option'>
                            <img src={prod.urlPhoto} alt={prod.id} />
                            <h3>{prod.name}</h3>
                          </div>
                        </div>
                      ))}
                    </ComboBoxProduct>
                  </LisContainer>
                </LisWrapper>
                <WrapperForm update backgroundImage={backgroundImage}>
                  <ContainerForm update>
                    <UploadImage />
                    <Input name='name' label='Nombre' />
                    <div className='input'>
                      <Input name='price' label='Precio' size={8} />
                      <Input name='discount' label='Descuento  en %' size={6} />
                      <Input name='stock' label='stock' size={6} />
                    </div>
                    <Button type='submit' r='8px' bg='info' outline shadow>
                      Actualizar
                    </Button>
                  </ContainerForm>
                </WrapperForm>
              </BoxFlex>
            </Form>
          );
        }}
      </Formik>
      <Toaster />
    </Container>
  );
};

export default UpdateProducts;
