import styled from 'styled-components'

export const SwitchContainer = styled.label`
  height: 50px;
  display: flex;
  & p {
    margin: 0;
    line-height: 50px;
    font-size: 1.5rem;
    cursor: pointer;
  }
  @media (min-width: 900px) {
    grid-column: 1/2;
    grid-row: 1/2;
    place-self: center end;
  }
`

export const Switch = styled.label`
  align-self: center;
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
  background-color: ${({ toggle, color }) => (toggle ? color : 'white')};
  border-radius: 15px;
  transition: 0.4s;
`

export const Slider = styled.span`
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
`

export const Input = styled.input`
  display: none;
  &:checked + ${Slider}:before {
    transform: translateX(23.4px);
  }
`
