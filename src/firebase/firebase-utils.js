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
} from 'firebase/auth';

import { collection, getDocs, getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const app = initializeApp(firebaseConfig);

// FireStore => almacenamiento
export const db = getFirestore(app);

export const getOrCreateUserProfile = async (userAuthenticated) => {
  const userReference = doc(db, `users/${userAuthenticated.uid}`);

  const snapshot = await getDoc(userReference);

  if (!snapshot.exists()) {
    const { email, photoURL, displayName } = userAuthenticated;
    try {
      await setDoc(userReference, {
        name: displayName,
        email,
        photoURL,
        createdAt: new Date(),
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
export const register = async (email, password) => {
  const credentials = await createUserWithEmailAndPassword(auth, email, password);

  await sendEmailVerification(credentials.user, {
    url: 'http://localhost:3000',
  });

  alert(`Se envió un correo de verificación a ${email}`);
  localStorage.setItem('username', credentials.user);

  return credentials;
};

// Iniciar sesion con correo contraseña
export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

// Reiniciar una pass
export const resetPassword = async (email) => {
  await sendPasswordResetEmail(auth, email, {
    url: 'http://localhost:3000/login',
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
