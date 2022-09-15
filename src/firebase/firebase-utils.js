import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebaseConfig';

import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendEmailVerification,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  updateProfile,
  updateEmail,
} from 'firebase/auth';

import {
  collection,
  getDocs,
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  query,
  collectionGroup,
} from 'firebase/firestore';
import { format } from 'date-fns';
import { formatDate } from '../utils/formatDate';

const app = initializeApp(firebaseConfig);

// FireStore => almacenamiento
export const db = getFirestore(app);

export const getOrCreateUserProfile = async (userAuthenticated) => {
  const userReference = doc(db, `users/${userAuthenticated.uid}`);

  const snapshot = await getDoc(userReference);

  if (!snapshot.exists()) {
    const { email, photoURL, displayName, uid } = userAuthenticated;
    try {
      await setDoc(userReference, {
        id: uid,
        name: displayName,
        email,
        photoURL,
        createdAt: formatDate(new Date()),
        address: '',
        phone: '',
      });
    } catch (error) {
      console.log({ error });
    }
  }

  return snapshot;
};

// Auth => autenticación (login, registro, etc)
export const auth = getAuth(app);

// Crear un usuario
export const register = async ({ email, name, password }) => {
  try {
    const credentials = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    });

    /*  await sendEmailVerification(credentials.user, {
      url: 'http://localhost:5173',
    });
  
    alert(`Se envió un correo de verificación a ${email}`); */

    return credentials;
  } catch (error) {
    console.log(error);
  }
};

// Iniciar sesion con correo contraseña
export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

// Reiniciar una pass
export const resetPassword = async (email) => {
  await sendPasswordResetEmail(auth, email, {
    url: 'http://localhost:5173/login',
  });
  alert(`Se envió un correo de recuperación de contraseña a ${email}`);
};

// Iniciar con google
const providerGoogle = new GoogleAuthProvider();
export const signInGoogle = () => signInWithPopup(auth, providerGoogle);

// Products collection

export const getDBProducts = async () => {
  const query = await getDocs(collection(db, 'products'));
  return query?.docs.map((doc) => doc.data());
};

export const addDbProduct = async (product) => {
  await setDoc(doc(db, 'products', product.id), product);
};

export const updateDbStockProduct = async (id, stock) => {
  const productDoc = doc(db, 'products', id);
  await updateDoc(productDoc, { stock: stock });
};

export const updateDbProduct = async (id, values) => {
  const productDoc = doc(db, 'products', id);
  await updateDoc(productDoc, values);
};

export const getDBCategories = async () => {
  const query = await getDocs(collection(db, 'categories'));
  return query?.docs;
};
export const getDBFavoritos = async (id) => {
  const docRef = doc(db, 'favorites', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data().favorites;
  } else return [];
};

export const getUser = async (id) => {
  const docRef = doc(db, 'users', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else return null;
};

export const updateDBUser = async (id, data) => {
  const docRef = doc(db, 'users', id);
  try {
    await updateDoc(docRef, data);
    if (auth.currentUser.email !== data.email && !!data.email) await updateEmail(auth.currentUser, data.email);
  } catch (error) {
    console.log(error);
  }
};

export const getDBCart = async (id) => {
  const docRef = doc(db, 'cart', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data().cart;
  } else
    return {
      items: [],
      totalCost: 0,
      totalDiscount: 0,
      visible: false,
    };
};

export const updateDBFav = async (user, fav) => {
  const userDoc = doc(db, `favorites/${user}`);
  await setDoc(userDoc, {
    favorites: fav,
  });
};

export const updateDBCart = async (user, cart) => {
  const userDoc = doc(db, `cart/${user}`);
  await setDoc(userDoc, {
    cart: cart,
  });
};

export const updateBDOrders = async (orders) => {
  const ordersDoc = doc(db, 'orders', auth.currentUser.uid);
  await setDoc(ordersDoc, orders);
};

export const getDBOrders = async () => {
  const ordersDoc = doc(db, 'orders', auth.currentUser.uid);
  const docSnap = await getDoc(ordersDoc);

  if (docSnap.exists()) {
    return docSnap.data();
  } else return {};
};
