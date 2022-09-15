import { Routes as ReactRoutes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import Products from '../pages/Products/Products';
import AddProducts from '../pages/AddProducts/AddProducts';
import Login from '../pages/Auth/Login';
import Register from './../pages/Auth/Register';
import { AnimatePresence, motion } from 'framer-motion';
import { ProtectedRoute } from './ProtectedRoute';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import { ModifyProfile } from '../pages/ModifyProfile/ModifyProfile';
import Checkout from '../pages/Checkout/Checkout';
import MyShopping from '../pages/MyShopping/MyShopping';
import UpdateProducts from '../pages/AddProducts/UpdateProducts';

const pageTransition = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const Routes = () => {
  return (
    <AnimatePresence>
      <ReactRoutes>
        <Route
          path='/'
          element={
            <motion.div className='page' initial='out' animate='in' exit='out' variants={pageTransition}>
              <Home />
            </motion.div>
          }
        />
        <Route
          path='/inicio'
          element={
            <motion.div className='page' initial='out' animate='in' exit='out' variants={pageTransition}>
              <Home />
            </motion.div>
          }
        />
        <Route
          path='/productos'
          element={
            <motion.div className='page' initial='out' animate='in' exit='out' variants={pageTransition}>
              <Products />
            </motion.div>
          }
        />
        <Route
          path='/favoritos'
          element={
            <motion.div className='page' initial='out' animate='in' exit='out' variants={pageTransition}>
              <ProtectedRoute to='/login'>
                <Products isFavorites />
              </ProtectedRoute>
            </motion.div>
          }
        />
        <Route
          path='/agregarproductos'
          element={
            <motion.div className='page' initial='out' animate='in' exit='out' variants={pageTransition}>
              <ProtectedRoute to='/login'>
                <AddProducts />
              </ProtectedRoute>
            </motion.div>
          }
        />
        <Route
          path='/updateproducts'
          element={
            <motion.div className='page' initial='out' animate='in' exit='out' variants={pageTransition}>
              <ProtectedRoute to='/login'>
                <UpdateProducts />
              </ProtectedRoute>
            </motion.div>
          }
        />
        <Route
          path='/miscompras'
          element={
            <motion.div className='page' initial='out' animate='in' exit='out' variants={pageTransition}>
              <ProtectedRoute to='/login'>
                <MyShopping />
              </ProtectedRoute>
            </motion.div>
          }
        />
        <Route
          path='/modifyprofile'
          element={
            <motion.div className='page' initial='out' animate='in' exit='out' variants={pageTransition}>
              <ProtectedRoute to='/login'>
                <ModifyProfile />
              </ProtectedRoute>
            </motion.div>
          }
        />
        <Route
          path='/checkout'
          element={
            <motion.div className='page' initial='out' animate='in' exit='out' variants={pageTransition}>
              <ProtectedRoute to='/login'>
                <Checkout />
              </ProtectedRoute>
            </motion.div>
          }
        />
        <Route
          path='/login'
          element={
            <motion.div className='page' initial='out' animate='in' exit='out' variants={pageTransition}>
              <Login />
            </motion.div>
          }
        />
        <Route
          path='/register'
          element={
            <motion.div className='page' initial='out' animate='in' exit='out' variants={pageTransition}>
              <Register />
            </motion.div>
          }
        />
        <Route
          path='/productDetails/:Id'
          element={
            <motion.div className='page' initial='out' animate='in' exit='out' variants={pageTransition}>
              <ProductDetails />
            </motion.div>
          }
        />
        <Route
          path='*'
          element={
            <motion.div className='page' initial='out' animate='in' exit='out' variants={pageTransition}>
              <PageNotFound />
            </motion.div>
          }
        />
      </ReactRoutes>
    </AnimatePresence>
  );
};

export default Routes;
