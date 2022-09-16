import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/slices';

export const CheckBoxTheme = ({ color = '#000' }) => {
  const dispatch = useDispatch();
  const { theme } = useSelector((store) => store.theme);
  const [toggle, setToggle] = useState(theme === 'dark');

  useEffect(() => {
    dispatch(toggleTheme(toggle));
  }, [toggle]);

  return (
    <Switch>
      <Input {...{ color }} type='checkbox' defaultChecked={toggle} />
      <Slider {...{ toggle, color }} onClick={() => setToggle(!toggle)} />
    </Switch>
  );
};

const Switch = styled.label`
  margin-top: 8px;
  margin-left: 25px;
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
  background-color: ${({ toggle, color }) => (toggle ? color : 'white')};
  border-radius: 15px;
  transition: 0.4s;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ toggle, color }) => (toggle ? color : 'white')};
  border-radius: 15px;
  transition: 0.4s;

  &:before {
    content: '';

    position: absolute;
    left: 2px;
    bottom: 2px;

    width: 20px;
    height: 20px;
    border-radius: 100%;

    background-color: ${({ toggle, color }) => (toggle ? 'white' : color)};

    transition: 0.4s;
  }
`;

const Input = styled.input`
  &:checked + ${Slider}:before {
    transform: translateX(23.4px);
  }
`;
