import * as Yup from 'yup';

const NUMBER = 'Solo puede contener un número positivo';
const REQUIRED = '* Campo Requerido';
const ID_SIZE = 'El código debe ser de 13 números';
const EMAIL = 'Correo electrónico inválido';

export const registerValidationSchema = Yup.object({
  name: Yup.string().required(REQUIRED),
  email: Yup.string().email(EMAIL).required(REQUIRED),
  password: Yup.string().min(6, 'Minimo 6 caracteres').required(REQUIRED),
  RepeatPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Su contraseña no coincide'),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string().email(EMAIL).required(REQUIRED),
  password: Yup.string().min(6, 'Mínimo de caracteres: 6').required(REQUIRED),
});

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
  discount: Yup.number().typeError(NUMBER),
  stock: Yup.number().typeError(NUMBER).positive(NUMBER).required(REQUIRED),
  unit: Yup.string().required(REQUIRED),
  volume: Yup.number().typeError(NUMBER).positive(NUMBER).required(REQUIRED),
  category: Yup.string().trim().required(REQUIRED),
  subCategory: Yup.string().trim().required(REQUIRED),
});

export const profileValidationSchema = Yup.object({
  name: Yup.string().required(REQUIRED),
  email: Yup.string().email(EMAIL).required(REQUIRED),
  address: Yup.string(),
  phone: Yup.string()
    .trim()
    .matches(
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/g,
      'Número de teléfono inválido'
    ),
});
export const checkoutValidationSchema = Yup.object({
  name: Yup.string().required(REQUIRED),
  email: Yup.string().email(EMAIL).required(REQUIRED),
  address: Yup.string().required(REQUIRED),
  phone: Yup.string()
    .trim()
    .matches(
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/g,
      'Número de teléfono inválido'
    )
    .required(REQUIRED),
});
