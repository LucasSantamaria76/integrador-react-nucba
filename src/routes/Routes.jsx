import { Routes as ReactRoutes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import Products from '../pages/Products/Products';
import AddProducts from '../pages/AddProducts/AddProducts';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path='/' element={<Home />} />
      <Route path='/productos' element={<Products />} />
      <Route path='/agregarProductos' element={<AddProducts />} />

      <Route path='*' element={<PageNotFound />} />
    </ReactRoutes>
  );
};

export default Routes;
