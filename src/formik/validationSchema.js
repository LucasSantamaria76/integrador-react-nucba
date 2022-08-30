import * as Yup from 'yup';

export const checkoutValidationSchema = Yup.object({
  name: Yup.string().required('Campo requerido'),
  cellphone: Yup.string().required('Campo requerido'),
  locality: Yup.string().required('Campo requerido'),
  address: Yup.string().required('Campo requerido'),
});

export const registerValidationSchema = Yup.object({
  name: Yup.string().required('Campo requerido'),
  email: Yup.string().email('Correo electrónico inválido').required('Campo requerido'),
  password: Yup.string().min(6, 'Minimo 6 caracteres').required('Campo requerido'),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string().email('Mail no valido').required('Campo Requerido'),
  password: Yup.string().min(6, 'Mínimo de caracteres: 6').required('Campo Requerido'),
});

const NUMBER = 'Solo puede contener un número positivo';
const REQUIRED = 'Campo Requerido';
const ID_SIZE = 'El código de ser de 13 números';

export const productSchema = Yup.object({
  id: Yup.string()
    .trim()
    .matches(/^[0-9]+$/, NUMBER)
    .min(13, ID_SIZE)
    .max(13, ID_SIZE)
    .required(REQUIRED),
  name: Yup.string().trim().required(REQUIRED),
  description: Yup.string().trim(),
  price: Yup.number().typeError(NUMBER).positive(NUMBER).required(REQUIRED),
  discount: Yup.number().typeError(NUMBER).positive(NUMBER),
  stock: Yup.number().typeError(NUMBER).positive(NUMBER).required(REQUIRED),
  unit: Yup.string().required(REQUIRED),
  volume: Yup.number().typeError(NUMBER).positive(NUMBER).required(REQUIRED),
  category: Yup.string().trim().required(REQUIRED),
  subCategory: Yup.string().trim().required(REQUIRED),
});
