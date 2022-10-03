import { useState } from 'react';
import { hideMenus } from '../../redux/slices';
import { useDispatch, useSelector } from 'react-redux';
import { PurchaseCards } from './components/PurchaseCards';
import { MyShoppingWrapper } from './Styled-Components';
import { SelectDate } from '../../components/FormikInput';

const compareString = (a, b) => (a < b ? 1 : a > b ? -1 : 0);
const compareDate = (a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0);

const MyShopping = () => {
  const [date, setDate] = useState('');
  const { orders } = useSelector((state) => state);

  const dispatch = useDispatch();
  let purchase = Object.values(orders).reduce((acc, val) => [...acc, ...val], []);
  purchase = !!date ? purchase.filter((el) => el.date === date) : purchase.sort(compareDate);

  return (
    <MyShoppingWrapper direction='column' onClick={() => dispatch(hideMenus())}>
      {!!orders && (
        <>
          <h2>MIS COMPRAS</h2>
          <h3>Filtrar por fecha de compra</h3>
          <SelectDate
            name={'orders'}
            options={Object.keys(orders).sort(compareString)}
            placeholder='Todas'
            width={250}
            setDate={setDate}
          />
        </>
      )}
      <PurchaseCards purchase={purchase} />
    </MyShoppingWrapper>
  );
};

export default MyShopping;
