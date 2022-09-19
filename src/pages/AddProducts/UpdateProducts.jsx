import { Form, Formik, useFormikContext } from 'formik';
import { useEffect, useState } from 'react';
import { Button } from '../../components/common';
import Input from '../../components/Input/Input';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import toast, { Toaster } from 'react-hot-toast';
import { productInitialValues } from '../../formik/initialValues';
import { productSchema } from '../../formik/validationSchema';
import {
  LisWrapper,
  ComboBoxProduct,
  UpContainer,
  UpContainerForm,
  UpDblClickForImg,
  UpImgContainer,
  UpImgWrapper,
  UpWrapperForm,
  BoxFlex,
} from './Styled-Components';
import { hideMenus, updateProductStore } from '../../redux/slices';
import SelectSort from './components/SelectSort';

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
    <UpImgWrapper>
      {!urlPhoto && <UpDblClickForImg onDoubleClick={handleDblClick}>Doble click para Cargar imagen</UpDblClickForImg>}

      <UpImgContainer src={urlPhoto} onDoubleClick={handleDblClick} />
    </UpImgWrapper>
  );
};

const UpdateProducts = () => {
  const [order, setOrder] = useState('name');
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const { products } = useSelector((state) => state.products);
  const { FilterSearch } = useSelector((state) => state.filter);

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
    <UpContainer onClick={() => dispatch(hideMenus())}>
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
                <LisWrapper>
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
                </LisWrapper>
                <UpWrapperForm>
                  <UpContainerForm>
                    <UploadImage />
                    <label>
                      Nombre
                      <Input name={'name'} type='text' />
                    </label>
                    <div>
                      <label>
                        Precio
                        <Input name={'price'} width={140} currency />
                      </label>
                      <label>
                        Descuento en %
                        <Input name={'discount'} width={140} />
                      </label>
                      <label>
                        Stock
                        <Input name={'stock'} width={140} />
                      </label>
                    </div>
                    <Button type='submit'>Actualizar</Button>
                  </UpContainerForm>
                </UpWrapperForm>
              </BoxFlex>
            </Form>
          );
        }}
      </Formik>
      <Toaster />
    </UpContainer>
  );
};

export default UpdateProducts;
